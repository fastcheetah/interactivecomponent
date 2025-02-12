document.querySelectorAll('.number').forEach(span => {
    span.addEventListener('click', function() {
        document.querySelectorAll('.number').forEach(s => s.style.backgroundColor = '');
        document.querySelectorAll('.number').forEach(s => s.style.color = '');
        span.style.backgroundColor = 'white';
        span.style.color = 'black';
    });
});
