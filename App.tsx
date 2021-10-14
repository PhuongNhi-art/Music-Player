import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import AppNavigator from './navigation';
import { useState, useMemo} from 'react';
import { useEffect } from 'react'
import TrackPlayer from 'react-native-track-player';
import trackPlayerServices from './services/trackPlayerServices';
import PlayerWidget from './components/PlayerWidget';
import { Provider } from 'react-redux';
// import {Provider} from 'react-redux';
// import store from './store';
// const AppRedux = () => {
//   <Provider {..{store}}>

//   </Provider>
// }
const track = [
  {
    "url": "https://drive.google.com/uc?export=download&id=1AjPwylDJgR8DOnmJWeRgZzjsohi-7ekj",
    "title": "Longing",
    "artist": "David Chavez",
    "artwork": "https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6",
    "duration": 143
  },
  {
    "url": "https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E",
    "title": "Soul Searching (Demo)",
    "artist": "David Chavez",
    "artwork": "https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6",
    "duration": 77
  },
  {
    "url": "https://drive.google.com/uc?export=download&id=1bmvPOy2IVbkUROgm0dqiZry_miiL4OqI",
    "title": "Lullaby (Demo)",
    "artist": "David Chavez",
    "artwork": "https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6",
    "duration": 71
  },
  {
    "url": "https://drive.google.com/uc?export=download&id=1V-c_WmanMA9i5BwfkmTs-605BQDsfyzC",
    "title": "Rhythm City (Demo)",
    "artist": "David Chavez",
    "artwork": "https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6",
    "duration": 106
  }
]
export default function App()  {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [userToken, setUserToken] = useState(null);
  
  // useEffect(()=>{
  //   (async ()=>{
  //     await TrackPlayer.setupPlayer();
  //     TrackPlayer.registerPlaybackService(()=> trackPlayerServices);
  //     await TrackPlayer.add(track)
  //   })();
  
  // }, []);

  return (


   <AppNavigator/>

  );
}


