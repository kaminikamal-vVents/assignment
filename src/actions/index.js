import { FEEDLIST_LIST, PRODUCT_LIST } from '../constants/constants.jsx';

export function storeFeedList(items) {
  const action = {
    type: FEEDLIST_LIST,
    items
  }
  return action;
}

export function productList(data) {
  const action = {
    type: PRODUCT_LIST,
    data
  }
  return action;
}
