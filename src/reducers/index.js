import { FEEDLIST_LIST, PRODUCT_LIST } from '../constants/constants.jsx';


export default (state = [], action) => {
  //let state = [];

  switch(action.type) {
    case FEEDLIST_LIST:
      const { items } = action;console.log("inside reducer",items);
      return items;

    case PRODUCT_LIST:
    console.log("inside productlist:", action.data)
    //const { data } = action;
    //console.log("inside::". data)
    state = [...action.data]
    console.log("state: ", state);
    return {"data" : state};

    default:
      return state;
  }
}
