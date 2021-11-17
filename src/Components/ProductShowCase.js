import React from 'react';

class ProductShow extends React.Component {

    constructor(props) {
        super(props);
        this.state ={bigImage: ""};
      }
      
      componentDidUpdate(prevProps){
        if (prevProps.item !== this.props.item) 
        this.setState({bigImage: this.props.item?this.props.item[0]:''});
      }

  render(){
  return (
    <div className="images__showcase">
        <div className="images__showcase1">
            {this.props.item?this.props.item.map((elem, index) => 
            <img key={index} src={elem} alt="img" onClick={()=> this.setState({bigImage: elem})} />):null}
        </div>

        <div className="images__showcase2">
              <img src={this.state.bigImage} alt="img" />
        </div>
        
    </div>
  );}
}

export default ProductShow;
