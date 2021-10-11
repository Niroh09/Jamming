import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
    //CONSTRUCTOR
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [
                { name: "Name1", artist: "Artist1", album: "Album1", id: 1 },
                { name: "Name2", artist: "Artist2", album: "Album2", id: 2 },
                { name: "Name3", artist: "Artist3", album: "Album3", id: 3 },
            ],
            playlistName: "Jamming Playlist",
            playlistTracks: [
                {
                    name: "playlistName1",
                    artist: "playlistArtist1",
                    album: "playlistAlbum1",
                    id: 4,
                },
                {
                    name: "playlistName2",
                    artist: "playlistArtist2",
                    album: "playlistAlbum2",
                    id: 5,
                },
                {
                    name: "playlistName3",
                    artist: "playlistArtist3",
                    album: "playlistAlbum3",
                    id: 6,
                },
            ],
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    //METHODS
    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if(tracks.find(savedTrack => savedTrack.id === track.id)){
            return
        }

        tracks.push(track);
        this.setState({playlistTracks: tracks});
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

        this.setState({playlistTracks: tracks})
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name});
    }

    savePlaylist() {
        const trackUris = this.state.playlistTracks.map(track => track.uri);
    }

    search(term) {
        console.log(term);
    }

    //RENDER
    render() {
        return (
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar onSearch={this.search}/>
                    <div className="App-playlist">
                        <SearchResults
                            searchResults={this.state.searchResults}
                            onAdd={this.addTrack}
                        />
                        <Playlist 
                            playlistName={this.state.playlistName}
                            playlistTracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave={this.savePlaylist}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
