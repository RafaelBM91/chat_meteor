import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import Home from '../../ui/pages/home/index.jsx';

Meteor.startup(() => {
  render(
  	<Home />,
  	document.getElementById('root')
  );
});
