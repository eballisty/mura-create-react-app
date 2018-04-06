import React, { Component } from 'react';

// Material UI
import {AppBar, Typography, Toolbar, GridList} from 'material-ui';
// Custom component
import Car from './components/Car';
// Mura Magic
import Mura from "mura.js";

Mura.init(
	{
		siteid: 'default',
		rootpath: 'http://dream-cars.local.blueriver.com'
	}
);

//const Mura = window.Mura;

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    Mura.getFeed('content')
      .where()
      .prop('filename')
      .beginsWith('car-catalog/')
      .getQuery()
      .then(collection => {
        const items = collection.getAll().items;
        this.setState({ items });
      });
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Dream Cars
            </Typography>
          </Toolbar>
        </AppBar>
        <GridList>
          {this.state.items.map(item =>
            <Car key={`car-${item.contenthistid}`} title={item.title} summary={item.summary} images={item.images}/>
          )}
        </GridList>
      </div>
    );
  }
}

export default App;
