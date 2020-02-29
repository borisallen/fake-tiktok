/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import VideoPlayer from 'react-native-video';

export interface IVideoProps {
    url: string
    playing: boolean
}

export interface IVideoState {
  messages: string[]
  value: string
}

class Video extends React.Component<IVideoProps, IVideoState> {
  state = { messages: [], value: '' }
  player: any

  handleBuffer = () => {}

  handleError = () => {}

  handleComment = (e: string) => {
    this.setState({ value: e })
  }

  handlePost = () => {
    const { messages, value } = this.state
    messages.push(value)
    this.setState({ messages, value: '' })
  }

  render() {
    const { messages, value } = this.state
    const { playing, url } = this.props
    return (
      <View style={styles.slide}>
        {playing &&
          <VideoPlayer source={{ uri: url }}
            ref={(ref: any) => {
              this.player = ref
            }}
            onBuffer={this.handleBuffer}
            onError={this.handleError}
            style={styles.backgroundVideo}
          />
        }
        <FlatList
          data={messages}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={item => item}
          keyboardShouldPersistTaps={true}
        />
        <View style={styles.row}>
          <TextInput value={value} style={styles.textinput} onChangeText={this.handleComment} />
          <TouchableOpacity style={styles.button} onPress={this.handlePost}>
            <Text>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 50,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
  },
  textinput: {
    flex: 1,
    height: 40,
    borderColor: 'green',
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
  }
})

export default Video;
