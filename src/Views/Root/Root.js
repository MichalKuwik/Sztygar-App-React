import React,{Component} from 'react';
import './Root.css';
import AppContext from '../../context';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CrewView from '../CrewView/CrewView';
import RaportsView from '../RaportsView/RaportsView';
import WorkView from '../WorkView/WorkView';
import {initialState} from '../../assets/data/data';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';


class Root extends Component {

  state = {
    crew:initialState,
    works:[{name:"Poszyć i napiąć T-3/C1"}],
    raports:[{description:"Wykonano szycie nr 13 na T-3/C1"}],
    modalIsOpen: true,
   
  }

  handleSubmit = (e,newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type],newItem],
    }));
    
    

    this.handleCLoseModal()
  }

  handleOpenModal = () => {
    this.setState({
      modalIsOpen:true
    })
  }

  handleCLoseModal = () => {
    this.setState({
      modalIsOpen:false
    })
  }

  deleteItem = (name) => {
    
    const crew = this.state.crew.filter(item => {
      return item.name !== name;
    })
    const works = this.state.works.filter(item => {
      return item.name !== name;
    })
    const raports = this.state.raports.filter(item => {
      return item.name !== name;
    })
    this.setState({
      crew,
      works,
      raports
    })
  }

  render(){

    const {modalIsOpen} = this.state;

    const contextElements = {
      ...this.state,
      handleSubmit: this.handleSubmit,
      deleteItem:this.deleteItem
    }
    
    return (

      <BrowserRouter>
      <AppContext.Provider value={contextElements}>
        <Header openModalFn={this.handleOpenModal}/>
        <Switch>
          <Route exact path="/" component={CrewView} request={this.state.crew.length}/>
          <Route path="/works" component={WorkView}/>
          <Route path="/raports" component={RaportsView}/>
        </Switch>
        {modalIsOpen ? <Modal closeModalFn={this.handleCLoseModal}/> : null}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
  
}


export default Root;
