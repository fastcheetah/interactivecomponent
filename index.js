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


let selectedRating = null; 


document.querySelectorAll('.number').forEach(span => {
    span.addEventListener('click', function() {
   
        

        
        selectedRating = this.textContent.trim();
    });
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    if (selectedRating) {
       
        document.getElementById('select').textContent = selectedRating + ' ';

        
        document.getElementById('cnt2').style.display = 'block';

        document.getElementById('mainContainer').style.display = 'none';
    } else {
        alert("Please select a rating before submitting!");
        // document.getElementById('select').textContent =  'nothing out ';
    }});
