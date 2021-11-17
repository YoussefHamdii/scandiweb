import React from 'react';
import {ApolloProvider, gql} from '@apollo/client';
import client from "../Apiurl";
import Card from './CardComponent';
import { connect } from 'react-redux';
import { addProducts } from '../redux/shopping/shoppingActions';



const testQueryTech = gql`
  query Query {
    category (input: {title: "tech"}){
      products{
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
  }
`;

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {products:{}};
      }

    componentDidMount() {
        client.query({
            query: testQueryTech
        }).then(res => {this.props.addProducts(res.data.category.products)})
        .catch(e => console.log(e));
      }

      componentDidUpdate(){
        const testQueryTech = gql`
            query Query {
              category (input: {title: "${this.props.cat}"}){
                products{
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
            }
          `;

          client.query({
            query: testQueryTech
          }).then(res => {this.props.addProducts(res.data.category.products)})
          .catch(e => console.log(e));
      }
      
  render(){
  return (
      <ApolloProvider client={client}>
    <div className="container">
        <h1>{this.props.cat}</h1>
        <div className="card__container">
            {this.props.products? this.props.products.map((elem, index) => <Card item ={elem} key={index} className="card" />): null}
        </div>
    </div>
    </ApolloProvider>
  );}
}

const mapDispatchToProps = dispatch => {
  return{
    addProducts: (products) => dispatch(addProducts(products))
  }
}

const mapStateToProps = state => {
  return{
    products: state.shop.products,
    category: state.shop.clothes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
