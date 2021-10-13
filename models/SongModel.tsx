import Artist from "./ArtistModel";

type Song = {
    _id: string,
    name: string,
    imageUri : string,
    description: string,
    uri: string,
    numberOfLikes : number,
    
    
    idArtist: Artist,

}
export default Song;