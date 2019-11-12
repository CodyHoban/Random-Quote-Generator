import React from 'react';
import Quotes from './Quotes';
import {connect} from 'react-redux'



class QuoteGeneratorContainer extends React.Component {
  constructor(props) {
    super(props);  
  }
   
  newRandomQuote = () => {
    var qArr = ["zero", "one", "two", "three"];
    var rand = qArr[Math.floor(Math.random() * qArr.length)]
    
    this.setState({
        quote: rand
    });
    
   }
    //quote: "one" needs to be all quotes
    
    render() {

    return (
        <div id="quote-box">
          <h3>Your New Quote!</h3>
          
          <h2>{this.props.randomQuote[this.props.quote].quote}</h2>
          <h2>{this.props.randomQuote[this.props.quote].author}</h2>
          <button onClick={this.newRandomQuote}></button>
      </div>
    
    )
  }
   
  
}

const mapStateToProps = (state) => ({
  randomQuote: state.randomQuote,
  quote: state.quote
});
export default connect()(QuoteGeneratorContainer);

