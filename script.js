// Define the URL and parameters
const url = 'https://www.zomato.com/webroutes/reviews/loadMore';
const params = new URLSearchParams({
  sort: 'dd',
  filter: 'reviews-dd',
  res_id: '19746180',
  page: '2'
});

// Define headers if needed
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
};

// Make the request



  // Define route to fetch reviews
app.get('/reviews', async (req, res) => {
    try {
      // Fetch data from Zomato API
      const response = await fetch(`${url}?${params}`, { headers });
  
      // Check if response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      // Parse response data
      const data = await response.json();
  
      // Handle the data from the response
      console.log(data);
  
      // Respond with the data
      res.json(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
