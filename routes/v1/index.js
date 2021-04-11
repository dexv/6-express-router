const categoriaRouter = require('./categoria_router');
const productoRouter = require('./producto_router');
const usuarioRouter = require('./usuario_router');

module.exports = (app) => {
    app.use('/api/v1', categoriaRouter);
    app.use('/api/v1', productoRouter);
    app.use('/api/v1', usuarioRouter);
}