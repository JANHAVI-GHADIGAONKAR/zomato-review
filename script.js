const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/reviews', (req, res) => {
  const url = 'https://www.zomato.com/webroutes/reviews/loadMore?sort=dd&filter=reviews-dd&res_id=19692833&page=2';
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(body);
    }
  });
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});


$(document).ready(function(){
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://www.zomato.com/webroutes/reviews/loadMore?sort=dd&filter=reviews-dd&res_id=19692833&page=2',
        method: 'GET',
        success: function(data) {
            console.log('Reviews:', data);
            // Process and display the reviews as needed
        },
        error: function(error) {
            console.error('Error fetching reviews:', error);
        }
    });
});






// document.addEventListener("DOMContentLoaded", function() {
//     const reviewSection = document.querySelector('.review-section');

//     fetch('https://www.zomato.com/webroutes/reviews/loadMore?sort=dd&filter=reviews-dd&res_id=19692833&page=2')
//         .then(response => response.json())
//         .then(data => {
//             if (data.reviews) {
//                 const reviews = data.reviews.map(review => {
//                     const user = review.user;
//                     const rating = review.rating;
//                     const reviewText = review.review_text;
//                     const time = review.review_time_friendly;
//                     return `
//                         <div class="review">
//                             <div class="user-info">
//                                 <img src="${user.profile_image}" alt="${user.name}">
//                                 <div class="user-details">
//                                     <span class="user-name">${user.name}</span>
//                                     <span class="user-meta">${user.review_count} reviews • ${user.followers_count} Followers</span>
//                                 </div>
//                             </div>
//                             <div class="review-content">
//                                 <div class="rating">
//                                     <span class="rating-value">${rating}★</span>
//                                     <span>${time}</span>
//                                 </div>
//                                 <div class="review-text">
//                                     ${reviewText}
//                                 </div>
//                                 <div class="review-actions">
//                                     <span>👍 Helpful</span>
//                                     <span>💬 Comment</span>
//                                     <span>🔗 Share</span>
//                                 </div>
//                             </div>
//                             <button class="follow-button">Follow</button>
//                         </div>
//                     `;
//                 }).join('');

//                 reviewSection.innerHTML = reviews;
//             }
//         })
//         .catch(error => console.error('Error fetching reviews:', error));
// });
