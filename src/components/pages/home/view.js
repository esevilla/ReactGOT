import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {HouseCard} from '../../molecules';

class Home extends Component {
  constructor(props) {
    super(props);
    props.fetchHousesList();
  }

  _onHouseTapped = house => {
    this.props.updateSelectedHouse(house);
  };

  _renderItem = ({item}) => {
    return <HouseCard house={item} onPress={this._onHouseTapped} />;
  };

  render() {
    const {housesList} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={housesList}
          renderItem={this._renderItem}
          keyExtractor={(v, i) => `cell-${v.id}`}
          numColumns={2}
          style={styles.list}
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  housesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchHousesList: PropTypes.func.isRequired,
  updateSelectedHouse: PropTypes.func.isRequired,
};

export default Home;
