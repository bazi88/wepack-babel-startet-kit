 import React from 'react';
 import ReactDOM from 'react-dom';
 import AnonymousStyleResolution from './components/AnonymousStyleResolution';
 import NamedStyleResolution from './components/NamedStyleResolution';
 class App extends React.Component{
   render(){
     console.log(process.env.DB_HOST);
     return(
    <div>
      <AnonymousStyleResolution/>
      <NamedStyleResolution/>
   </div>
     )
   }
 }
export default App;
 ReactDOM.render(<App/>, document.getElementById('root'));