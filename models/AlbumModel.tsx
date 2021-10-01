import Song from "./SongModel";

type Album = {
  _id: string;
  name: string;
  imageUri: string;
  description: string;
  numberOfLikes: number;
  artistsHeadline: string;
  songs: Song[];
}
export default Album;