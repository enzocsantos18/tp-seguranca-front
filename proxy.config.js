const proxy = [
  {
    context: '/users',
    target: 'http://localhost:8080',
    pathRewrite: {'^/users' : ''}
  }
];
module.exports = proxy;
