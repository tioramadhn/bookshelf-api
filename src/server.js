const { server: _server } = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = _server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
