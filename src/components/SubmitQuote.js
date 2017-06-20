import React from 'react';
import PropTypes from 'prop-types'

export default class SubmitQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  update(e) {
    this.setState({
      text: e.target.value,
      favorited: false
    })
  }

  submit(e) {
    e.preventDefault();
    this.setState(Object.assign(this.state, {text: this.state.text.trim()}));
    this.props.saveQuote(this.state);
    this.setState({text: ''});

  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <h2>Submit Quotes</h2>
        </div>
        <div className='form'>
          <form onSubmit={this.submit.bind(this)}>
            <div className='form-group'>
              <label id='search-label' htmlFor='search'>Quote text</label>
              <input value={this.state.text} onChange={this.update.bind(this)} type='text' className='form-control' placeholder='Type your quote text.' />
            </div>
            <button onClick={this.submit.bind(this)} className='btn btn-primary btn-space' disabled={this.state.text.length < 1}><i className='fa fa-submit'></i> Submit</button>
          </form>
        </div>
        <br/>
      </div>
    );
  }
}

SubmitQuote.propTypes = {
  saveQuote: PropTypes.func.isRequired
};
