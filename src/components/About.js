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
		        <img id="cardImage" src="./logo.png" alt="TransUnited logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          <p><i>TransUnited</i> <FormattedMessage id="app.faqs.a1" /> </p>
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
		        <img id="cardImage" src="./hyungwu.jpeg" alt="TransUnited logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		        	<h5>
		        		<FormattedMessage id="app.about.link2" />
		        	</h5>
		          <p> Something About you </p>
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
		        <img id="cardImage" src="./marco.jpeg" alt="TransUnited logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		        	<h5>
		          	<FormattedMessage id="app.about.link2" />
		          	</h5>
		          <p> Web developer with front-end and back-end development experience. Experience in Node environments, database management and RESTful API development and communication. Started my career in graphic design and illustration applying my eye for design on every app built. My interests evolved and went into web development as I became more interested in building web applications. Nothing beats the feeling of seeing something you worked on being used all over the world! Always eager to learn new technologies! </p>
		          <a href="https://www.linkedin.com/in/marco-alvarado-cano/" target="_blank">Add me on LinkedIn</a>
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
		        <img id="cardImage" src="./stephen.jpeg" alt="TransUnited logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          	<h5>
		          	<FormattedMessage id="app.about.link2" />
		          	</h5>
		          <p> Something About you </p>
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
		        <img id="cardImage" src="./david.jpeg" alt="TransUnited logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">

		          <h5>Full Stack Developer</h5>
		          <p> I was born and raised in Encinitas, my father is Persian and Mother is Mexican so my friends call me the Persiacan. Graduated with a Marketing degree but explored my entrepreneurial spirit  and opened a coffee shop at the San Diego County fairgrounds. Although it was enjoyable I wanted a new challenge and was always passionate about Software Development so I joined the UCSD Coding Bootcamp.</p>
		          <h5>
					      <FormattedMessage id="app.about.link2" />
		          </h5>
		          <p> Something About you </p>

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

