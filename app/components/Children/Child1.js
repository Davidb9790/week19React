// Include React
var React = require('react');


//SEARCH Component
//creating React components
var Child1 = React.createClass({

	render: function(){

		return(

			<div className='container'>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Search</h3>
					</div>

					<div class="panel-body">
						<div class='input-group'>
							<span class="input-group-addon" id="basic-addon1">Topic</span>
							<input type="text" class="form-control" placeholder="Topic" aria-describedby="basic-addon1"></input>
						</div>

						<br></br>

						<div class="input-group">
							  <span class="input-group-addon" id="basic-addon1">Start Year</span>
							  <input type="text" class="form-control" placeholder="Start Year" aria-describedby="basic-addon1"></input>
						</div>

						<br></br>

						<div class="input-group">
							  <span class="input-group-addon" id="basic-addon1">End year</span>
							  <input type="text" class="form-control" placeholder="End Year" aria-describedby="basic-addon1"></input>
						</div>

						<br></br>

						<p><a class="btn btn-primary btn-lg" align="center" href="#" role="button">Search</a></p>

					</div>

				</div>
			</div>
		)
	}
});

module.exports = Child1;
