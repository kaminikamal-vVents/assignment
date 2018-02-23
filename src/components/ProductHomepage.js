import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from "../components/NavBar.jsx";
import Loader from "../components/Loader.jsx";
import { PRODUCT_LIST } from "../constants/constants.jsx";
import { connect } from 'react-redux';
import { productList } from "../actions/index.js";
import * as api from "../moltin";
import { GetProducts } from '../moltin';
import _ from 'lodash';
import { Button } from 'semantic-ui-react';
import '../App.css';

class ProductHomepage extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      data: [],
      loader: false
    }
  }

  componentDidMount(){
    console.log("inside compone")
    api.GetProducts().then((res) => {
      console.log("res:", res);
      this.props.productList(res.data);
    })
    .catch((err) => {
      console.warn(err)
    })
    
  }

  // sentRequest = () => {
  //   this.setState({loader: true});
  //   let data = [];
  //   this.props.storeFeedList(data);
  //   let res = this.menu.value;
  //   let arr = this.state.inputparameter.split(/[ ,]+/);
  //   let searchString = arr.join("+");
  //   searchString = searchString.toString();
  //   let url = FETCHURL+searchString+"&lang="+res+"&format=json";

  //   fetch(url)
  //   .then(res => res.json())
  //   .then(response => {
  //     console.log("response", response.data);
  //     if(response.data!==undefined){
  //       this.setState({loader: false});
  //       this.setState({items: response.data});console.log("stata", this.state.items)
  //       this.props.storeFeedList(this.state.items);
  //     }
  //     else{
  //       this.setState({loader: null});
  //       this.setState({items: response.data});console.log("stata", this.state.items)
  //       this.props.storeFeedList([]);
  //     }
  //   })

  // }

  render() {

    return (
        <div>
          <NavBar />
          {
            (this.props.data!==undefined) 
            ?
            _.map(this.props.data, (el, i)=>{
                return(
                  <div key={i} style={{border: "2px solid gray"}}>
                    <div>
                      <p>{el.name}</p>
                      <p>{el.description}</p>
                      <p>{el.sku + " " + el.meta.display_price.with_tax.formatted}</p>
                      <p>{ el.meta.stock.level + " " + el.meta.stock.availability}</p>
                      <Link to={ "/product/"+el.id }><Button content="View Item" primary ></Button></Link>
                    </div>
                  </div>
                )
            })
            :
            null
          }
        </div>
    );
  }
}
function mapStateToProps(state)
{
 const { data } = state;console.log("inside mapstateto props", state, data);
  return{
	data
  }
}



export default connect(mapStateToProps, { productList })(ProductHomepage);
//export default FeedList;
