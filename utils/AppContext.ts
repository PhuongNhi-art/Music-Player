import React from "react";
import Song from "../models/SongModel";

const context = {
  songId: "",
  setSongId: (id: string) => {},

  songName: "",
  setSongName: (name: string)=>{},

  songArtist: "",
  setSongArtist: (artist: string)=>{},

  songUri: "",
  setSongUri: (uri:  string)=> {},
  
  songImage: "",
  setSongImage: (image: string)=>{}
}

export const AppContext = React.createContext(context);