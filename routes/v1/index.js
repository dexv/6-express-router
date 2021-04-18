const categoriaRouter = require('./categoria_router');
const productoRouter = require('./producto_router');
const usuarioRouter = require('./usuario_router');
const loginRouter = require('./login_router');
const carroRouter = require('./carro_router');
const ordenRouter = require('./orden_route');

module.exports = (app) => {
    app.use('/api/v1', categoriaRouter);
    app.use('/api/v1', productoRouter);
    app.use('/api/v1', usuarioRouter);
    app.use('/api/v1', loginRouter);
    app.use('/api/v1', carroRouter);
    app.use('/api/v1', ordenRouter);
}