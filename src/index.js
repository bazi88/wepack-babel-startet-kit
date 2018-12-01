 import React from 'react';
 import ReactDOM from 'react-dom';
 import AnonymousStyleResolution from './components/AnonymousStyleResolution';
 import NamedStyleResolution from './components/NamedStyleResolution';
 const App = () => (
   <div>
      <AnonymousStyleResolution/>
      <NamedStyleResolution/>
   </div>
 )
 ReactDOM.render(<App/>, document.getElementById('root'));