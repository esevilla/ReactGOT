import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import _ from 'lodash';

export const updateList = value => {
  const action = {
    type: types.UPDATE_HOUSES_LIST,
    value: value,
  };
  return action;
};

export const updateFetching = value => {
  return {
    type: types.UPDATE_HOUSES_FETCHING,
    value: value,
  };
};

export const updateItem = value => {
  return {
    type: types.UPDATE_HOUSES_ITEM,
    value,
  };
};

export const fetchHousesList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(updateFetching(true));
      const getHousesRes = await api.getHouses();
      const houses = _.get(getHousesRes, 'data.records', []);
      dispatch(updateList(houses));
    } catch (e) {
      Alert.alert(
        'Atención',
        'Ha ocurrido un error, revise su conexión a internet',
      );
    } finally {
      dispatch(updateFetching(false));
    }
  };
};
