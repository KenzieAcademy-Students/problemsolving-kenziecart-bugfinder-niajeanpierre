module.exports = {
  app: {
    name: 'Mern Social Media',
    apiEndpoint: process.env.API_URL ? `${process.env.API_URL}` : 'api',
  },
  database: {
    url: process.env.MONGODB_URI || 'mongodb+srv://niajeanpierre:Karmalarm0622@cluster0.qxwufmv.mongodb.net/?retryWrites=true&w=majority',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'jwt-secret',
    tokenLife: '7d',
  },
}
