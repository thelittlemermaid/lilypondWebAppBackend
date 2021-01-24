const express = require('express')
const app = express();
const router = express.Router();
const port = 8000;

// Enable express to parse json requests
app.use(express.json())

// Define routes
router.get('/test', (req, res) => {
  res.json({'message': 'hooray! an api' });
});

router.post('/send', (req, res) => {
  console.log(req.body);
  res.json({'message': 'received'});
});

// Register routes to root URL
app.use('/api', router);

// Start server on assigned port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});