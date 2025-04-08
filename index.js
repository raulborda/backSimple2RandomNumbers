const express = require('express');
const morgan = require('morgan');
const randomRoutes = require('./routes/randomRoutes');
const sumRoutes = require('./routes/sumRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

//Con Morgan pueden registrar solicitudes y mostrar en consola lo 
// que se ejecutó en POSTMAN :)
app.use(morgan('dev'));
app.use(randomRoutes);
app.use(sumRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});