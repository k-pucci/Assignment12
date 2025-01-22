class Jukebox {
    constructor() {
        this.albums = [];
    }
    
    addAlbum(album) {
        this.albums.push(album);
    }
    
    favoriteAlbum() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    
    play() {
        this.played += 1;
    }
    
    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

// Album data
const albumData = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' }
];

// Initialize the jukebox
const jbox = new Jukebox();

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const albumSelect = document.getElementById('albumSelect');
    const playButton = document.getElementById('playButton');
    const showFavoriteButton = document.getElementById('showFavoriteButton');
    const favoriteAlbumDisplay = document.getElementById('favoriteAlbum');
    
    // Create album instances and populate dropdown
    albumData.forEach(({artist, title}) => {
        // Create and add album to jukebox
        const album = new Album(artist, title);
        jbox.addAlbum(album);
        
        // Add to dropdown
        const option = document.createElement('option');
        option.value = jbox.albums.length - 1; // Use index as value
        option.textContent = `${artist} - ${title}`;
        albumSelect.appendChild(option);
    });
    
    // Play button click handler
    playButton.addEventListener('click', () => {
        const selectedIndex = albumSelect.value;
        if (selectedIndex !== '') {
            const album = jbox.albums[selectedIndex];
            album.play();
            alert(`Now playing: ${album.artist} - ${album.title}`);
        }
    });
    
    // Show favorite button click handler
    showFavoriteButton.addEventListener('click', () => {
        favoriteAlbumDisplay.textContent = jbox.favoriteAlbum();
    });
});
