const animeData = [
  {
    id: "your-name",
    title: "Your Name",
    year: 2016,
    duration: "1h 46m",
    episodes: "Movie",
    genres: ["Romance", "Drama"],
    category: "Romance",
    language: "Japanese",
    description: "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.",
    thumbnail: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=600&auto=format&fit=crop",
    downloads: [
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    year: 2019,
    duration: "24m",
    episodes: "26 Episodes",
    genres: ["Action", "Adventure"],
    category: "Action",
    language: "Japanese",
    description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    thumbnail: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=600&auto=format&fit=crop",
    downloads: [
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "one-piece",
    title: "One Piece",
    year: 1999,
    duration: "24m",
    episodes: "1000+ Episodes",
    genres: ["Action", "Adventure"],
    category: "Adventure",
    language: "Japanese",
    description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.",
    thumbnail: "https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=600&auto=format&fit=crop",
    downloads: [
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    year: 2013,
    duration: "24m",
    episodes: "75+ Episodes",
    genres: ["Action", "Drama"],
    category: "Action",
    language: "Japanese",
    description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    thumbnail: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600&auto=format&fit=crop",
    downloads: [
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  },
  {
    id: "weathering-with-you",
    title: "Weathering With You",
    year: 2019,
    duration: "1h 52m",
    episodes: "Movie",
    genres: ["Romance", "Fantasy"],
    category: "Romance",
    language: "Japanese",
    description: "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    thumbnail: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=600&auto=format&fit=crop",
    downloads: [
      { label: "720p", url: "#" },
      { label: "1080p", url: "#" }
    ]
  }
];

// For use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = animeData;
}
