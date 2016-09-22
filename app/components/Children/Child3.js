// Include React
var React = require('react');

//creating React components
var Child2 = React.createClass({

	render: function(){

		return(
			<div className="container">
				<div class="col-lg-12">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Saved Articles</h3>
						</div>
						<div class="panel-body">
							Panel content
						</div>
					</div>
				</div>

			</div>
		)
	}
});

module.exports = Child2;
