// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import loaderGif from './loader.gif';

function App() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  // fetch data from server 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetchData()
  }, [title, body]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      const json = await response.json();
      setPosts(json);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handlePost = async (endpoint, method) => {
    setLoading(true)
    await fetch(`http://localhost:5000/api/posts/${endpoint}`,{
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title,body})
    })
    .then((res) => res.json())
    .then(posts => setPosts(posts))
    .catch(error => {
      console.log('Error fetching data :>> ', error);
    }).finally(() => {
      setLoading(false);
      setError(true);
    });
    fetchData();
  }

  const addPost = async (e) => {
    e.preventDefault();
    handlePost('new', 'POST')
  }

  return (
    <div className="App">
      <div className='inputs'>
      <h1>Blog Posts 2022</h1>
      <form onSubmit={addPost} autoComplete="true">
        <fieldset >
          <legend>Blog post input:</legend>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} required/>

          <label htmlFor="body">Body</label>
          <input type="text" id="body" name="body" onChange={(e) => setBody(e.target.value)} required/>
          <button type="submit" name='submit'>submit</button>
        </fieldset>
      </form>
      </div>
      <div>
        {!loading ? posts?.map(
          (item, index) => {
            return (
              <div className='post' key={index}>
                <div className='post_content'>
                  <h2 className='post_title'>{item.title}</h2>
                  <div className='btns'>
                    <div className='edit-btn' onClick={()=> handlePost(item.id,'PUT')}>&#128221;</div>
                    <div className='delete-btn' onClick={()=> handlePost(item.id,'DELETE')}>&#x274C;</div>
                  </div>
                </div>
                <p className='post_description'>{item.body}</p>
              </div>
            )
          }) : <img src={loaderGif} />
        }
      </div>
    </div>
  )
}

export default App;
