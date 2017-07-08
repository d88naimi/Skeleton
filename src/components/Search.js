import React from 'react';
import { connect } from 'react-redux';
import {moveToSearchResult} from '../actions/agent';
import {FormattedMessage} from 'react-intl';
import './Search.scss';
import {cities} from '../helpers/cityData';
const languageData = ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Turkish',
  'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German', 'French',
  'Punjabi/Lahnda', 'Telugu'];

class Search extends React.Component {


  constructor(props) {
    super(props);
    this.state={
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $(document).ready(function() {
      $('select').material_select();
    });
  }

  handleSubmit(){
    const {moveToSearchResult} = this.props;
    moveToSearchResult({location: this.locationSelect.value, language: this.languageSelect.value});
  }

  render() {
    return (
      <div>
          <br/>
          <div className="row">
            <div className="input-field col s6 m6 l6">
              <select className="" name="location" defaultValue='All' ref={(ref) => this.locationSelect = ref}>
                <option value="All">All</option>
                {cities.map((c, idx) => (<option key={idx} value={c}>{c}</option> ))}
              </select>
              <label htmlFor="by_location">
                <FormattedMessage id="app.search.location" />
              </label>
            </div>

            <div className="input-field col s6 m6 l6">
              <select className="" name="languages" defaultValue="All" ref={(ref) => this.languageSelect = ref}>
                <option value="All">All</option>
                {languageData.map((l, idx) => (<option key={idx} value={l}>{l}</option> ))}
              </select>
              <label htmlFor="by_languages">
                <FormattedMessage id="app.search.language" />
              </label>
            </div>

          </div>

        <div className="row">
          <button onClick={this.handleSubmit}
                  className="btn waves-effect waves-light themeButton"
                  type="submit">
            <FormattedMessage id="app.search.searchBtn" />
          </button>
        </div>
        <br/>
      </div>
    );
  }
}

export default connect(
  ({lang}) => ({ language: lang.language }),
  { moveToSearchResult }
)(Search)



