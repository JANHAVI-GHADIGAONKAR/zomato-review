const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;


// Use the cors middleware to enable CORS for all routes
app.use(cors());

app.get('/reviews', async (req, res) => {
  try {
    const response = await axios.get('https://www.zomato.com/webroutes/reviews/loadMore', {
      params: {
        sort: 'dd',
        filter: 'reviews-dd',
        res_id: '19746180', // Update this to your required restaurant ID
        page: 1
      }
    });
    console.log(response.data); // Log response data to verify
    res.json(response.data);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
