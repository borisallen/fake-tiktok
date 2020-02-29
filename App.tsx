/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from './Video';

export interface IAppProps {}

export interface IAppState {
  pages: number[]
  videos: string[]
  playing: number
}

class App extends React.Component<IAppProps, IAppState> {
  state = {
    pages: [0, 1, 2],
    videos: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
    playing: 0
  }
  player: any

  handleBuffer = () => {}

  handleError = () => {}

  handleSwipe = (e: number) => {
    this.setState({ playing: e })
  }

  render() {
    const { pages, playing, videos } = this.state
    return (
      <Swiper style={styles.wrapper} onIndexChanged={this.handleSwipe}>
        {pages.map((page: number) =>
          <Video key={page} url={videos[page]} playing={playing == page} />
        )}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default App;
