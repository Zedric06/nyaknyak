document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const foodName = document.getElementById('food-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();
    const rating = document.getElementById('rating').value;

    // Create a new list item for the review
    const reviewItem = document.createElement('li');

   // Create the HTML structure for the review item
   reviewItem.innerHTML = `
        <strong>${foodName} - Rating: ${'⭐'.repeat(rating)}</strong>
        <p>${reviewText}</p>
        <button class="remove-btn">Remove</button>
   `;

   // Append the new review item to the reviews list
   document.getElementById('reviews-list').appendChild(reviewItem);

   // Clear the input fields
   document.getElementById('food-name').value = '';
   document.getElementById('review-text').value = '';
   document.getElementById('rating').selectedIndex = 0;

   // Add event listener to remove button
   reviewItem.querySelector('.remove-btn').addEventListener('click', function() {
       reviewItem.remove();
   });
});
