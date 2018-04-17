// eslint-disable-next-line import/prefer-default-export
export const productGetters = {

  allProducts: state =>
    state.products,

  productById: (state, getters) => (id) => {
    if (getters.allProducts.length > 0) {
      // eslint-disable-next-line eqeqeq
      return getters.allProducts.filter(p => p.id == id)[0];
    }
    return state.product;
  },
};
