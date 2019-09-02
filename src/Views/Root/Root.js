import React,{Component} from 'react';
import styles from './Root.module.css';
import ItemWrapper from '../../components/ItemWrapper/ItemWrapper';


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

  render() { 
    const {users} = this.state

    return (  
      <div>
        App
        <ItemWrapper users={users}/>
      </div>
    );
  }
}
 
export default Root;
