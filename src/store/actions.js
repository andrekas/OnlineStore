import axios from 'axios';
import { API_BASE } from '../config';

import {
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,

} from './mutation-types';

// eslint-disable-next-line import/prefer-default-export
export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);
    axios.get(`${API_BASE}`, { params:
        { AUTH: 'fae7b9f6-6363-45a1-a9c9-3def2dae206d' } }).then((response) => {
      commit(ALL_PRODUCTS_SUCCESS, response.data);
    });
  },
  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);
    axios.get(`${API_BASE}${payload}`, { params: { AUTH: 'fae7b9f6-6363-45a1-a9c9-3def2dae206d' } }).then((response) => {
      // console.log(payload, response.data);
      commit(PRODUCT_BY_ID_SUCCESS, response.data);
    });
  },
};
