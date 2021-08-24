
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Welcome'
import LatestRelease from "./components/LatestRelease"



function App() {
  return (
   <div>
     <MyNavbar title="My Bookshop" color="light"/>
     <MyJumbotron />
     <LatestRelease />
     <MyFooter />
    </div>
  );
}

export default App;
