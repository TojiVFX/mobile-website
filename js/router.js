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

    // Dynamic rendering
    detailsContainer.innerHTML = `
        <a href="index.html" class="back-btn">← Back to Home</a>
        <div class="details-header">
            <img src="${anime.thumbnail}" alt="${anime.title}">
            <div class="details-title">
                <h1>${anime.title}</h1>
                <div class="details-meta">
                    <span>${anime.year}</span>
                    <span>${anime.duration}</span>
                    <span>${anime.episodes}</span>
                    <span>${anime.language}</span>
                    <span>${anime.category}</span>
                </div>
                <div class="details-description">
                    <p>${anime.description}</p>
                </div>
                <div class="download-section">
                    <h2>Download Links</h2>
                    <div class="download-links">
                        ${anime.downloads.map(link => `
                            <a href="${link.url}" class="download-btn">Download ${link.label}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
});
