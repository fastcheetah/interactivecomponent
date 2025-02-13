document.querySelectorAll('.number').forEach(span => {
    span.addEventListener('click', function() {
        document.querySelectorAll('.number').forEach(s => s.style.backgroundColor = '');
        document.querySelectorAll('.number').forEach(s => s.style.color = '');
        span.style.backgroundColor = 'white';
        span.style.color = 'black';
    });
});

document.querySelectorAll('.submit-p').forEach(div => {
    div.addEventListener('click', function() {
        document.querySelectorAll('.submit-p').forEach(s => s.style.backgroundColor = '');
        div.style.backgroundColor = 'white';
    });
});