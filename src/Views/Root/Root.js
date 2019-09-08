import React,{Component} from 'react';
import styles from './Root.module.css';
import Header from '../../components/Header/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CrewView from '../CrewView/CrewView.js';
import WorkView from '../WorkView/WorkView.js';
import RaportView from '../RaportView/RaportView.js';


const initialState = [
  {
    image:"https://cdnpl1.img.sputniknews.com/images/90/07/900774.jpg",
    name:"Tomasz Kuter",
    proffesion: "Górnik eksploatacji",
    description: "Żonaty, 2 dzieci. Pracuje w górnictwie 18lat"
  },
  {
    image:"https://img17.demotywatoryfb.pl//uploads/201210/1349206587_efukd2_600.jpg",
    name: "Eryk Zuber",
    proffesion: "Górnik cieśla",
    description:"Kawaler, bezdzietny, Pracuje na kopalni od 8lat"
  }
]

class Root extends Component {
  state = { 
    users: initialState
   }

   handleAddItemOnSubmit = (event) => {
     event.preventDefault()

    const newItem = {
      image:event.target[0].value,
      name:event.target[1].value,
      proffesion:event.target[2].value,
      description:event.target[3].value,
    }

    this.setState(prevState => ({
      users: [...prevState.users,newItem]
    }))

    event.target.reset()
   }

  render() { 
    const {users} = this.state

    return ( 
      <BrowserRouter>
        <Header />
        <h1>Hello World!</h1>
        <Switch>
          <Route exact path="/" component={CrewView}/>
          <Route path="/work" component={WorkView}/>
          <Route path="/raport" component={RaportView}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default Root;
