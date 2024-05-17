
document.addEventListener('DOMContentLoaded', async () => {
    const reviewsContainer = document.getElementById('reviews-container');
    try {
        const response = await axios.get(`${proxyUrl}https://www.zomato.com/webroutes/reviews/loadMore?sort=dd&filter=reviews-dd&res_id=19746180&page=1`);
        const data = response.data;
        // Rest of your code...

        // Clear existing reviews
        reviewsContainer.innerHTML = '';

        // Iterate through reviews and append them to the container
        data.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');

            const userElement = document.createElement('div');
            userElement.classList.add('user');
            userElement.textContent = `User: ${review.user.name}`;

            const ratingElement = document.createElement('div');
            ratingElement.classList.add('rating');
            ratingElement.textContent = `Rating: ${review.rating}`;

            const reviewTextElement = document.createElement('div');
            reviewTextElement.textContent = `Review: ${review.review_text}`;

            reviewElement.appendChild(userElement);
            reviewElement.appendChild(ratingElement);
            reviewElement.appendChild(reviewTextElement);

            reviewsContainer.appendChild(reviewElement);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        reviewsContainer.innerHTML = 'Error fetching reviews. Please try again later.';
    }
});
//     try {
//         const response = await fetch('/reviews'); // Make request to your server
//         const data = await response.json();
        
//         // Clear existing reviews
//         reviewsContainer.innerHTML = '';

//         // Iterate through reviews and append them to the container
//         data.reviews.forEach(review => {
//             const reviewElement = document.createElement('div');
//             reviewElement.classList.add('review');

//             const userElement = document.createElement('div');
//             userElement.classList.add('user');
//             userElement.textContent = `User: ${review.user.name}`;

//             const ratingElement = document.createElement('div');
//             ratingElement.classList.add('rating');
//             ratingElement.textContent = `Rating: ${review.rating}`;

//             const reviewTextElement = document.createElement('div');
//             reviewTextElement.textContent = `Review: ${review.review_text}`;

//             reviewElement.appendChild(userElement);
//             reviewElement.appendChild(ratingElement);
//             reviewElement.appendChild(reviewTextElement);

//             reviewsContainer.appendChild(reviewElement);
//         });
//     } catch (error) {
//         console.error('Error fetching reviews:', error);
//         reviewsContainer.innerHTML = 'Error fetching reviews. Please try again later.';
//     }
// });
