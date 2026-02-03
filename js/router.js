// Navigation logic
window.navigateToDetails = (id) => {
    window.location.href = `anime.html?id=${id}`;
};

// Details page rendering logic
document.addEventListener('DOMContentLoaded', () => {
    const detailsContainer = document.getElementById('animeDetails');
    if (!detailsContainer) return; // Not on anime.html

    const urlParams = new URLSearchParams(window.location.search);
    const animeId = urlParams.get('id');

    if (!animeId) {
        detailsContainer.innerHTML = '<p>Anime not found.</p><a href="index.html" class="back-btn">← Back to Home</a>';
        return;
    }

    const anime = animeData.find(a => a.id === animeId);

    if (!anime) {
        detailsContainer.innerHTML = '<p>Anime not found.</p><a href="index.html" class="back-btn">← Back to Home</a>';
        return;
    }

    // Dynamic rendering as per new requirements:
    // Full thumbnail on top, then bold anime name, release year, duration, episode, language, description.
    detailsContainer.innerHTML = `
        <a href="index.html" class="back-btn">← Back to Home</a>
        <div class="details-layout">
            <div class="full-thumbnail">
                <img src="${anime.thumbnail}" alt="${anime.title}">
            </div>
            <div class="info-section">
                <h1 class="anime-name-bold">${anime.title}</h1>
                <div class="meta-row">
                    <span class="meta-item">${anime.year}</span>
                    <span class="meta-item">${anime.duration}</span>
                    <span class="meta-item">${anime.episodes}</span>
                    <span class="meta-item">${anime.language}</span>
                </div>
                <div class="genre-row">
                    ${anime.genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                </div>
                <div class="description-section">
                    <p>${anime.description}</p>
                </div>

                <div class="download-section">
                    <h2>Downloads</h2>
                    <div class="episode-list">
                        ${anime.downloads.map(ep => `
                            <a href="${ep.url}" class="ep-download-btn">${ep.label}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
});
