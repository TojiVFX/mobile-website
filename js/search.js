document.addEventListener('DOMContentLoaded', () => {
    const animeListing = document.getElementById('animeListing');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.cat-btn');

    let currentCategory = 'All';
    let searchQuery = '';

    // Function to render anime cards
    function renderAnime(data) {
        if (!animeListing) return; // Prevent errors on anime.html

        animeListing.innerHTML = '';

        if (data.length === 0) {
            animeListing.innerHTML = '<div class="no-results">Anime not available</div>';
            return;
        }

        data.forEach(anime => {
            const card = document.createElement('div');
            card.className = 'anime-card';
            card.setAttribute('data-id', anime.id);
            card.innerHTML = `
                <img src="${anime.thumbnail}" alt="${anime.title}">
                <div class="card-info">
                    <h3>${anime.title}</h3>
                    <p>${anime.year} • ${anime.episodes}</p>
                </div>
            `;

            // Handled by router.js or direct listener
            card.addEventListener('click', () => {
                if (window.navigateToDetails) {
                    window.navigateToDetails(anime.id);
                } else {
                    window.location.href = `anime.html?id=${anime.id}`;
                }
            });

            animeListing.appendChild(card);
        });
    }

    // Function to filter anime
    function filterAnime() {
        const filtered = animeData.filter(anime => {
            const matchesCategory = currentCategory === 'All' || anime.category === currentCategory;
            const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 anime.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
        renderAnime(filtered);
    }

    // Search input listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAnime();
        });
    }

    // Category button listener
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterAnime();
        });
    });

    // Initial render
    if (typeof animeData !== 'undefined') {
        renderAnime(animeData);
    }
});
