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
