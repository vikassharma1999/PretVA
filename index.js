require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profileRoute = require('./routes/profile');
const path = require('path');
//DB Connection...
mongoose
  .connect(
    'mongodb+srv://test123:test123@test-cabli.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(console.log('DB Connected...'));

//PORT
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());

//My routes
app.use('/api', profileRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//SERVER LISTENING...
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
