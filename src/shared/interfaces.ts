export interface SongGroup {
    name: string,
    songs: Song[],
}

export interface Song {
    id: number,
    name: string,
    playlist: string,
    singer: string,
    album: string,
    views: string,
    mp3Url: string,
    thumb: string,
    liked: boolean,
}

export interface AppState {
    products: SongGroup[],
}