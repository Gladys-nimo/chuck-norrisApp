import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './Components/ui/Header';
import Contact from './Components/Contact';
import CardList from './Components/CardList.js';
import JokeCard from './Components/JokeCard';

class App extends Component {

    constructor(){
      super()
      this.state={
        randomJoke:'',
        category:[],
        findJoke:[],
      }
    }
 
  
 componentDidMount(){
  fetch('https://api.chucknorris.io/jokes/categories')
                    .then(response=>response.json())
  .then(cate=> this.setState({category:cate}));
 }
 render(){
   return (
     <Fragment>
       <Header />
     <Contact/>
     <h1 className="text-danger text-center mt-auto">hello</h1>
     <div className="container">  
 
     
       <CardList 
         findJoke={this.state.findJoke}
         termSearch={this.state.termSearch}
       />
       <JokeCard 
         randomJoke={this.state.randomJoke} 
         category={this.state.category}
       />
     </div>
     </Fragment>
   );
 }
 }
 


export default App;
