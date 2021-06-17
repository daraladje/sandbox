const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const app = express();
const members = require('./Members');

// Init Middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware - for adding member, this parses the body json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home Handlebar
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Member App',
    members,
  });
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Serving running...');
});
