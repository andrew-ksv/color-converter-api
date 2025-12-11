const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const convertRoutes = require('./routes/convertRoutes');
const errorHandler = require('./middlewares/errorHandler'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/convert', convertRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});