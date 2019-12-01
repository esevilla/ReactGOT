import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles, {width} from './styles';
import _ from 'lodash';

class HouseCard extends React.Component {
  constructor(props) {
    super(props);
    // SET INITIAL STATE
    this.state = {imageWidth: 0, imageHeight: 0};

    // GET IMAGE SIZE
    const imageDir = _.get(props, 'house.image_dir');
    Image.getSize(imageDir, (realImageWidth, realImageHeight) => {
      // CALCULATE ASPECT RATIO
      const imageWidth = width / 2;
      const imageHeight = (realImageHeight * imageWidth) / realImageWidth;
      this.setState({imageWidth: imageWidth, imageHeight: imageHeight});
    });
  }

  render() {
    const {house, onPress} = this.props;
    const {imageWidth, imageHeight} = this.state;
    const imageStyle = {width: imageWidth, height: imageHeight};
    const imageDir = _.get(house, 'image_dir');

    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(house)}>
        <Image
          style={{...styles.image, ...imageStyle}}
          source={{uri: imageDir}}
        />
      </TouchableOpacity>
    );
  }
}

HouseCard.defaultProps = {
  house: null,
  onPress: null,
};

HouseCard.propTypes = {
  house: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default HouseCard;
