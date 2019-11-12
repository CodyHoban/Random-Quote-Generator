import React from 'react';
import Quotes from './Quotes';
import {connect} from 'react-redux'



class QuoteGeneratorContainer extends React.Component {
  constructor(props) {
    super(props);  
  }
   
  newRandomQuote = () => {
    this.props.dispatch({type: "NEWQ"});
  }
    
   
    //quote: "one" needs to be all quotes
    
    render() {

    return (
        <div id="quote-box">
          <h3>Your New Quote!</h3>
          {console.log(this.props)}
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
export default connect(mapStateToProps)(QuoteGeneratorContainer);

