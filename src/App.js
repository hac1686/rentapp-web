import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './scenes/Welcome'
import Properties from './scenes/Properties'
import PropertyDetails from './scenes/PropertyDetails'
import TopMenu from './components/TopMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//putting menu outside the switch puts it on every page
function App() {
  return (
   <Router>
     <TopMenu /> 
     <Switch>
        <Route path="/properties/:propertyId" component={PropertyDetails} />
        <Route path="/properties" component={Properties} />
        <Route path="/" component={Welcome} />
     </Switch>
   </Router>
  )
}

export default App;
