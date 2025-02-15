document.querySelectorAll('.number').forEach(span => {
    span.addEventListener('click', function() {
        document.querySelectorAll('.number').forEach(s => s.style.backgroundColor = '');
        document.querySelectorAll('.number').forEach(s => s.style.color = '');
        span.style.backgroundColor = 'white';
        span.style.color = 'black';
    });
});


document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('cnt2').style.display = 'block';  // Show cnt2
    document.getElementById('mainContainer').style.display = 'none';  // Hide main container
});
// Get all the rating spans
const ratingSpans = document.querySelectorAll('.number');

// Get the span where the selected value will be displayed
const selectSpan = document.getElementById('select');

// Add event listener to each span
ratingSpans.forEach(span => {
  span.addEventListener('click', function() {
    // Get the value from the clicked span (data-value attribute)
    const selectedValue = span.getAttribute('data-value');
    
    // Update the span text to reflect the selected value
    selectSpan.textContent = selectedValue;
    
    // Optionally, you can hide the spans after selection or change other UI elements
    // Example: hide the spans after selection
    document.querySelector('.container1').style.display = 'none';
  });
});
