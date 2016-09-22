// Include React 
var React = require('react');

var Main = React.createClass({

	// Database configuration with mongoose
	mongoose.connect('mongodb://localhost/nytreact');

	var db = mongoose.connection;

	// show any mongoose errors
	db.on('error', function(err) {
	  console.log('Mongoose Error: ', err);
	});

	// once logged in to the db through mongoose, log a success message
	db.once('open', function() {
	  console.log('Mongoose connection successful.');
	});
	// Here we render the function
	render: function(){

		return(

			<div className="container">
				<div className="jumbotron">
					<h2><strong>New York Times Article Scrubber</strong></h2>
					
					<p><em>Search for and annotate of interest</em></p>
					
					<hr/>

				</div>

				<div className="row">
					
					<p>
						<a href="#/Child1"><button className="btn btn-primary btn-lg">Show Child #1</button></a>
						<a href="#/Child2"><button className="btn btn-danger btn-lg">Show Child #2</button></a>
						<a href="#/Child3"><button className="btn btn-danger btn-lg">Show Child #3</button></a>
					</p>
					{/*This code will dump the correct Child Component*/}
					{this.props.children}

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;