import React from 'react';
import { connect } from 'react-redux';
import './About.scss';
import {FormattedMessage, FormattedDate} from 'react-intl';


export default class About extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

        <div className="col s2 m2 l2">
		    <h2 className="header">American Life</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img id="cardImage" src="./logo.png" alt="AmericanLife logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          <p><i>AmericanLife</i> <FormattedMessage id="app.faqs.a1" /> </p>
		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank">
		          <FormattedMessage id="app.about.link1" />
		          </a>
		        </div>
		      </div>
		    </div>
		  </div>

		  <hr/>

		  <div className="col s2 m2 l2">
		    <h2 className="header">Hyungwu Pae</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img id="cardImage" src="./hyungwu.jpeg" alt="AmericanLife logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		        	<h5>
		        		<FormattedMessage id="app.about.link2" />
		        	</h5>
		          <p> Something About you </p>
		          <a href="https://www.linkedin.com/in/hyungwupae/" target="_blank">
		          	<FormattedMessage id="app.about.addMe" />
		          </a>
		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank">Github</a>
		        </div>
		      </div>
		    </div>
		  </div>
		  		  <div className="col s2 m2 l2">
		    <h2 className="header">Marco Alvarado</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img id="cardImage" src="./marco.jpeg" alt="AmericanLife logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		        	<h5>
		          	<FormattedMessage id="app.about.link2" />
		          	</h5>
		          <p> 
		          	<FormattedMessage id="app.about.marco" />
		          </p>
		          <a href="https://www.linkedin.com/in/marco-alvarado-cano/" target="_blank">
		          	<FormattedMessage id="app.about.addMe" />
		          </a>
		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank">Github</a>
		        </div>
		      </div>
		    </div>
		  </div>
		  		  <div className="col s2 m2 l2">
		    <h2 className="header">Stephen Urena</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img id="cardImage" src="./stephen.jpeg" alt="AmericanLife logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          	<h5>
		          	<FormattedMessage id="app.about.link2" />
		          	</h5>
		          <p> Something About you </p>
         		  <a href="https://www.linkedin.com/in/stephenmurena/" target="_blank">
		          	<FormattedMessage id="app.about.addMe" />
		          </a>
		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank">Github</a>
		        </div>
		      </div>
		    </div>
		  </div>
		  		  <div className="col s2 m2 l2">
		    <h2 className="header">David Naimi</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img id="cardImage" src="./david.jpeg" alt="AmericanLife logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">

		          <h5>
					<FormattedMessage id="app.about.link2" />
		          </h5>
		          <p> 
		          	<FormattedMessage id="app.about.david" /> 
		          </p>
		          <a href="https://www.linkedin.com/in/davidnaimi/" target="_blank">
		          	<FormattedMessage id="app.about.addMe" />
		          </a>

		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank">Github</a>
		        </div>
		      </div>
		    </div>
		  </div>


      </div>
    );
  }
}

