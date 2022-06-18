export interface SongGroup {
    name: string,
    songs: Song[]
}

export interface Song {
    name: string,
    singer: string,
    album: string,
    views: string,
    mp3Url: string,
    thumb: string
}