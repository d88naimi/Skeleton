import React from 'react';
import { connect } from 'react-redux';
import './FAQ.scss';


export default class About extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      	<table className="stipped bordered highlight">
      		<thead>
      			<trow>
      				<td>
      				Frequently Asked Questions
      				</td>
      			</trow>
      		</thead>
      		<tbody>
      			<tr>
      				<td>
      					<h5> What is TransUnited?</h5><br/>
      					<p><i>TransUnited</i> is a service helps the thousands of immigrants make the transition to the United States smoother by connecting them to a selection of agents handpicked that can offer them a number of services to assist them with their transfer.  Services can include translation, helping opening a bank account, finding a car, finding a place to live in, etc.  Our app is easy to use and it can be displayed in other languages for easy access and peace of mind so you know you’re contacting the right agent.</p>
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> How does it work?</h5><br/>
      					<p>Simply create an account either as a User or Agent.<br/>
      					Users can login right away and search for an agent that fits their needs.<br/>
      					Agents have to add more information to become an agent on our website.</p>
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> Can I become an agent?</h5><br/>
      					<p>Anybody that meets and can provide all the information in your dashboard can become an agent and begin assisting people right away.  Be sure to selecet which services you can provide!</p>
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> What requirements do I have to have to become an agent?</h5><br/>
      					<p>All the information needed can be accessed in your dashboard.</p>
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> How much does it cost?</h5><br/>
      					<p>Cost will depend on the package you select, we have created different packages that represent the complexity of the task and priced them accordingly.</p>
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> What services can agents assist me with?</h5><br/>
      					<p>All the packages include different sercives dependign on your needs and timeline.  Packages can also be customized once you connect with an agent. </p>
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> How fast is the process?</h5><br/>
      					<p>Time will depend entirely on the number of tasks, complexity and User/Agent availability.</p>
      				</td>
      			</tr>
      		</tbody>
      	</table>
      	
      </div>
    );
  }
}

