// Smooth scroll
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Click interaction
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert("Book your appointment today 💈");
    });
});