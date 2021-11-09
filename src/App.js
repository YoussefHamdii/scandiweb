import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Category from './Components/CategoryPage';
import Navigation from './Components/NavigationComponent';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Navigation />
      <Category />
    </div>
  );}
}

export default App;
