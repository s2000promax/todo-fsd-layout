import React from 'react';
import { withProviders } from "./providers";
import { Routing } from 'pages';
import './index.scss';


const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
}

export default withProviders(App);
