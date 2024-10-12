document.getElementById('inspection-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const foodItem = document.getElementById('food-item').value.trim();
    const inspectionDate = document.getElementById('inspection-date').value.trim();
    const inspectionStatus = document.getElementById('inspection-status').value;

    // Create a new list item
    const inspectionItem = document.createElement('li');

    // Create text content for the inspection item
    inspectionItem.innerHTML = `
        <span><strong>Food:</strong> ${foodItem} | <strong>Date:</strong> ${inspectionDate} | <strong>Status:</strong> ${inspectionStatus}</span>
        <button class="remove-btn">Remove</button>
    `;

    // Append the list item to the inspection list
    document.getElementById('inspection-list').appendChild(inspectionItem);

    // Clear the input fields
    document.getElementById('food-item').value = '';
    document.getElementById('inspection-date').value = '';
    document.getElementById('inspection-status').selectedIndex = 0;

   // Add event listener to remove button
   inspectionItem.querySelector('.remove-btn').addEventListener('click', function() {
       inspectionItem.remove();
   });
})