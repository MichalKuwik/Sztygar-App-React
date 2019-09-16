import React,{Component} from 'react'
import Input from '../Input/Input';
import AppContext from '../../context';
import Button from '../Button/Button.js';
import styles from './Form.module.css';
import Title from '../Title/Title';
import Radio from '../Radio/Radio';

const types = {
  crew: "crew",
  works: "works",
  raports: "raports",
};

const descriptions = {
  crew: "załogę",
  works: "roboty",
  raports: "raporty",
};


class Form extends Component {

  state = {
    type: types.crew,
    image:'',
    proffesion:'',
    name:'',
    description:''
}

  handleRadioChange = (type) => {
    this.setState({
      type:type
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })

  }

  render(){

    const {type} = this.state

    return(
      <AppContext.Consumer>
      {context => (
        <div className={styles.wrapper}>
        <Title>Dodaj {descriptions[type]}</Title>
         <form 
           autoComplete="off"
           onSubmit={(e) => context.handleSubmit(e,this.state)}
           className={styles.form}
           >
           <div className={styles.formOptions}>
             <Radio 
               id={types.crew}
               checked={this.state.activeOption === types.crew}
               changeFn={() => this.handleRadioChange(types.crew)}
               >
                 Crew
             </Radio>
             
             <Radio 
               id={types.works}
               checked={this.state.activeOption === types.works}
               changeFn={() => this.handleRadioChange(types.works)}
             >
                 Works
             </Radio>
 
             <Radio 
               id={types.raports}
               checked={this.state.activeOption === types.raports}
               changeFn={() => this.handleRadioChange(types.raports)}
               >
                 Raports
             </Radio>
           </div>
 
           {/* {type !== 'crew' ? null : <Input
             onChange={this.handleInputChange}
             value={this.state.image} 
             name="image"
             id="image"
             label="zdjęcie"
           />} */}
           
           {type !== 'crew' ? null :  <Input
             onChange={this.handleInputChange}
             value={this.state.proffesion} 
             name="proffesion"
             id="proffesion"
             label="stanowisko"
             required
           />}
          
           {type !== 'raports' ? <Input
             required
             onChange={this.handleInputChange}
             value={this.state.name} 
             name="name"
             id="name"
             label={type === "crew" ? "imię i nazwisko": "Nazwa roboty"}
             maxLength={30}
           />: null}
   
           {type !== 'works' ? <Input
             onChange={this.handleInputChange}
             required
             value={this.state.description}
             tag="textarea"
             name="description"
             id="descritpion"
             label={ type === "crew" ? "O pracowniku": "Opis roboty"}
           /> : null} 
          <Button>Dodaj</Button>
         </form>
       </div>
      )}
      </AppContext.Consumer>
    )
  }
  
}

export default Form;