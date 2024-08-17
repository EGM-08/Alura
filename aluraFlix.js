const searchInput = document.getElementById('search');
const videoCards = document.querySelectorAll('.video-card');

searchInput.addEventListener('keyup', function() {
    const searchValue = searchInput.value.toLowerCase();
    videoCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
