const React = require('react-native');
const { AppRegistry } = React;
const MovieListView = require('./shared/movie_list_view.js');


var AwesomeProject = React.createClass({

  render: function() {
    return (
      <MovieListView />
    )
  }

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
