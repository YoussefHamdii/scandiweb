import React from 'react';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
      }

  render(){
  return (
    <div className="images__showcase">
        <div className="images__showcase1">
            <img src={this.props.item?this.props.item[0]:''} alt="img" />
            <img src={this.props.item?this.props.item[0]:''} alt="img" />
            <img src={this.props.item?this.props.item[0]:''} alt="img" />
        </div>

        <div className="images__showcase2">
            <img src={this.props.item?this.props.item[0]:''} alt="img" />
        </div>
        
    </div>
  );}
}

export default ProductShow;
