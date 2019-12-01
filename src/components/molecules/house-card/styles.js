import {StyleSheet, Dimensions} from 'react-native';

// const widht = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
export const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  image: {resizeMode: 'cover'},
});
