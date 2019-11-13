import React from 'react';
import Quotes from './Quotes';
import {connect} from 'react-redux'
import '../App.css'


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
        <div className="background" id="quote-box">
          <h3>Your New Quote!</h3>
          {console.log(this.props)}
          <h2 className="words">{this.props.randomQuote[this.props.quote].quote}</h2>
          <h2 className="thePerson">{this.props.randomQuote[this.props.quote].author}</h2>
          <button className="press" onClick={this.newRandomQuote}>New Words</button>
        </div>
    
    )
  }
   
  
}

const mapStateToProps = (state) => ({
  randomQuote: state.randomQuote,
  quote: state.quote
});
export default connect(mapStateToProps)(QuoteGeneratorContainer);

