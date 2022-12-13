let admins = require('../../data/admins');
const jwt = require('jsonwebtoken');

const getAdminsHandler = (request, reply) => {
  reply.send(admins);
}

const getAdminHandler = (req, reply) => {
  const { id } = req.params;

  const admin = admins.filter((admin) => {
    return admin.id === id;
  })[0];

  if (!admin) {
    return reply.status(404).send(new Error('Admin not found'));
  }

  return reply.send(admin);
};

const registerAdminHandler = (req, reply) => {
  const { username, email, password } = req.body;

  const id = admins.length + 1;
  admins.push({ id, username, email, password });

  reply.send('Admin registered');
};

const updateAdminHandler = (req, reply) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  
  const targetIndex = admins.findIndex(f => f.id === id); 
  
  admins[targetIndex] = { id, username, email, password };

  return reply.send(admins);
};

const deleteAdminHandler = (req, reply) => {
  const { id } = req.params;
  
  const foundadmin = admins.find(admin => admin.id === id);

  if(!foundadmin){
    return reply.status(404).send(new Error('Admin doesnt exist'));
  }
  
  admins = admins.filter(admin => admin.id !== id) //LOOK HERE
  reply.send(admins);
};

const loginAdminHandler = async (req, reply) => {
  const { username, password } = req.body;

  try {
    const admin = await admins.find(admin => admin.username === username); // assumming we used mongodb

    if (!admin) {
      return reply.send("This admin doesn't exist");
    }

    // check if password is correct
    if (password !== admin.password) {
      return reply.send('Invalid credentials');
    }

      // sign a token that will expire in three days with a
		 // payload of just the admin's id, you can add username 
		// and scope if you want
    jwt.sign(
      { id: admin.id },
      'my_jwt_secret',
      { expiresIn: 3 * 86400 },
      (err, token) => {
        if (err) throw err;

        reply.send({ token });
      }
    );

    await reply;
  } catch (err) {
    console.log(err);
    reply.status(500).send('Server error');
  }
};

module.exports = { getAdminsHandler, getAdminHandler, registerAdminHandler, deleteAdminHandler, updateAdminHandler, loginAdminHandler };