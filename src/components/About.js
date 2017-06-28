import React from 'react';
import { connect } from 'react-redux';
import './About.scss';


export default class About extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

        <div className="col s2 m2 l2">
		    <h2 className="header">TransUnited</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img id="cardImage" src="./logo.png" alt="TransUnited logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          <p><i>TransUnited</i> helps the thousands of immigrants make the transition to the United States smoother by connecting them to a selection of agents handpicked that can offer them a number of services to assist them with their transfer.  Services can include translation, helping opening a bank account, finding a car, finding a place to live in, etc.  Our app is easy to use and it can be displayed in other languages for easy access and peace of mind so you know you’re contacting the right agent. </p>
		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank">Repository</a>
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
		        	<h5>Full Stack Developer</h5>
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
		          	<h5>Full Stack Developer</h5>
		          <p> Something About you </p>
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
		          	<h5>Full Stack Developer</h5>
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

