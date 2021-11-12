import React from 'react';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from '@apollo/client';
import Card from './CardComponent';
import { connect } from 'react-redux';
import { addProducts } from '../redux/shopping/shoppingActions';

const client = new ApolloClient({
    uri:'http://localhost:4000/',
    cache: new InMemoryCache()
});

const testQuery = gql`
  query Query {
      categories{
          name
          products{
            id
            name
            inStock
            gallery
            description
            category
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

    componentWillMount() {
        client.query({
            query: testQuery
        }).then(res => {this.setState({products: res.data.categories[1]}); this.props.addProducts(this.state.products.products)}).catch(e => console.log(e));
        
      }
      

  render(){
  return (
      <ApolloProvider client={client}>
    <div className="container">
        <h1>{this.state.products.name}</h1>

        <div className="card__container">
            {this.state.products.products? this.state.products.products.map((elem, index) => <Card item ={elem} key={index} className="card" />): null}
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

export default connect(null, mapDispatchToProps)(Category);
