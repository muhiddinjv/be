// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import loaderGif from './loader.gif';

function App() {
  // fetch data from server
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState();

  // fetch data from server 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [inputValue]);

  const deletePost = async (id) => {
    // setLoading(true);
    console.log('id :>> ', id);
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE'
      })
      console.log('response :>> ', response);
      const json = await response.json();
      console.log('json :>> ', json);

      if (json.statusCode === 200) {
        setData(json);
      }
      // setLoading(false);
    } catch (error) {
      setError(true);
    }
  }
  

  const submitInputValue = async (data) => {
    alert(inputValue);
    try {
      const response = await fetch('http://localhost:5000/api/posts/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }

  

  return (
    <div className="App">
      <div className='inputs'>
      <h1>Blog Posts 2022</h1>
      <fieldset>
        <legend>Blog post input:</legend>
        <label htmlFor="fname">Title</label>
        <input type="text" id="fname" name="fname" onChange={(e) => setInputValue(e.target.value)}/>
        <label htmlFor="lname">Body</label>
        <input type="text" id="lname" name="lname" />
        <button type="button" onClick={submitInputValue}>submit</button>
      </fieldset>
      </div>
      <div>
        {!loading ? data?.map(function
          (item, index) {
            return (
              <div className='posts' key={index}>
                <div><h2 className='posts_title'>{item.id}, {item.title}</h2>
                <p className='posts_description'>{item.body}</p></div>
                <div onClick={()=> deletePost(item.id)}>&#x274C;</div>
              </div>
            )
          }) : <img src={loaderGif} />
        }
  </div>
    </div>
  )
}

export default App;
