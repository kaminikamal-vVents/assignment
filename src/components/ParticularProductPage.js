import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Button } from 'semantic-ui-react';
import { Link , browserHistory } from 'react-router';
import * as api from '../moltin';
import _ from 'lodash';

class ParticularProductPage extends Component {
    constructor(props){
        super(props);

    }

    addtoCart(event, data){
        console.log("add to cart:", event.id, data)
        api.AddCart(event.id, 2)
        .then((res) => {
            console.log("item added:", res);
        })
        .catch((err)=>{
            console.warn(err);
        })
    }

    render(){
        console.log("inside particular propject:", this.props.params.id)
        
        let itemToview = _.find(this.props.data, (el, i)=>{
            return (el.id === this.props.params.id);
        })
        

        console.log("selcetde::", itemToview)
        return(
            <div>
                ParticularProductPage
                {
                    (this.props.data===undefined) ?
                    browserHistory.push("/home")
                :
                <div style={{border: "2px solid gray"}}>
               
                      <p>{itemToview.name +" "+itemToview.slug}</p>
                      <p>{itemToview.description}</p>
                      <p>{itemToview.sku + " " + itemToview.meta.display_price.with_tax.formatted}</p>
                      <p>{ itemToview.meta.stock.level + " " + itemToview.meta.stock.availability}</p>
                      <Button content="Add to cart" primary onClick={ this.addtoCart.bind(this, itemToview) }></Button>
                    
                </div>
                }
                
            </div>
        )
    }
}

function mapStateToProps(state)
{
 const { data } = state;console.log("inside mapstateto props::", state, data);
  return{
	data
  }
}



export default connect(mapStateToProps, null)(ParticularProductPage);
//ex