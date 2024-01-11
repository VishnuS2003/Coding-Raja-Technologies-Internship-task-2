const App = () => {
    const playlist = [
        { id: 1, title: 'Song 1', artist: 'Artist 1', src: 'audio/song1.mp3' },
        { id: 2, title: 'Song 2', artist: 'Artist 2', src: 'audio/song2.mp3' },
        // Add more songs as needed
    ];

    return (
        <div className="music-app">
            <header>
                <h1>My Music App</h1>
            </header>

            <main>
                <section className="playlist">
                    <h2>Playlist</h2>
                    <ul>
                        {playlist.map(song => (
                            <li key={song.id}>
                                {song.title} - {song.artist}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="player">
                    <h2>Now Playing</h2>
                    <div className="album-cover"></div>
                    <div className="song-info">
                        <h3>Song Title</h3>
                        <p>Artist Name</p>
                    </div>
                    <audio controls>
                        <source src={playlist[0].src} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </section>
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
