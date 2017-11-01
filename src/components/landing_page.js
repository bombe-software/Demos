import Navbar from "./generics/navbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import {Doughnut} from 'react-chartjs-2';

class LandingPage extends Component {
  render() {
  	let data = {
		labels: [
			'PRI',
			'PAN',
			'PRD'
		],
		datasets: [{
			data: [300, 50, 100],
			backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			]
		}]
	};
    return (
      <div>
        	<Doughnut data={data} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps,  null )(LandingPage);