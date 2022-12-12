let admins = require('../../data/admins');

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

module.exports = { getAdminsHandler, getAdminHandler, registerAdminHandler, deleteAdminHandler, updateAdminHandler };