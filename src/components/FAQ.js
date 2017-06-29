import React from 'react';
import { connect } from 'react-redux';
import './FAQ.scss';
import {FormattedMessage, FormattedDate} from 'react-intl';


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
      				<FormattedMessage id="app.faqs.td" />
      				</td>
      			</trow>
      		</thead>
      		<tbody>
      			<tr>
      				<td>
      					<h5> <FormattedMessage id="app.faqs.q1" /></h5><br/>
      					<p><i>TransUnited</i> 
                <FormattedMessage id="app.faqs.a1" />
                </p>
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> <FormattedMessage id="app.faqs.q2" /></h5><br/>
                <FormattedMessage id="app.faqs.a2" />
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> <FormattedMessage id="app.faqs.q3" /></h5><br/>
      					<FormattedMessage id="app.faqs.a3" />
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> <FormattedMessage id="app.faqs.q4"/></h5><br/>
      					<FormattedMessage id="app.faqs.a4" />
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> <FormattedMessage id="app.faqs.q5" /></h5><br/>
                <FormattedMessage id="app.faqs.a5" />
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> <FormattedMessage id="app.faqs.q6" /></h5><br/>
      		      <FormattedMessage id="app.faqs.a6" />
      				</td>
      			</tr>
      			<tr>
      				<td>
      					<h5> <FormattedMessage id="app.faqs.q7" /></h5><br/>
      					<FormattedMessage id="app.faqs.a7" />
      				</td>
      			</tr>
      		</tbody>
      	</table>
      	
      </div>
    );
  }
}

