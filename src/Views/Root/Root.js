import React,{Component} from 'react';
import styles from './Root.module.css';
import ItemWrapper from '../../components/ItemWrapper/ItemWrapper';
import Form from '../../components/Form/Form';

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
      <div className={styles.wrapper}>
        <ItemWrapper 
          users={users}
          deleteItem={this.handleDelete}
          />
        <Form submitFn={this.handleAddItemOnSubmit}/>
      </div>
    );
  }
}
 
export default Root;
