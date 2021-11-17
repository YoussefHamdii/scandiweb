import React from 'react';
import ProductListingDetails from './ProductListingDetails';
import ProductShow from './ProductShowCase';
import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import { connect } from 'react-redux';

const client = new ApolloClient({
  uri:'http://localhost:4000/',
  cache: new InMemoryCache()
});

class ProductListing extends React.Component {

    constructor(props) {
        super(props);
        this.state ={product: {}};
      }
      

      componentDidMount(){
        const testQuery = gql`
              query Query {
                product (id: "${window.location.pathname.substr(9)}"){
                  id
                  name
                  inStock
                  gallery
                  description
                  category
                  attributes{
                    id
                    name
                    type
                    items{
                      displayValue
                      value
                      id
                    }
                  }
                  prices{
                    currency
                    amount
                  }
                  brand
                }
              }
              `;
              client.query({
                query: testQuery
            }).then(res => {this.setState({product: res.data.product})})
            .catch(e => console.log(e));
            
      }


  render(){
  return (
    
    <div className="product__page">
        <ProductShow item={this.state.product?this.state.product.gallery:null} />
        <ProductListingDetails item={this.state.product?this.state.product:null} currency={this.props.currency? this.props.currency:0}/>
    </div>
  );}
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
    currency: state.shop.currency,
  }
}

export default connect(mapStateToProps)(ProductListing);
