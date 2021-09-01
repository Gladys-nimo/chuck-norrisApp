import React, { useState } from 'react'
import CategoryButton from './CategoryButton';
import Categoryselect from './Categoryselect';
import Chuck from '../images/Chuck.jpg'


const JokeCard = ({randomJoke, category}) => {
    const [categorySelected, setCategorySelected] = useState('')
    let [newJoke, setNewJoke] = useState('');


    const currentCategory = (currentCat)=>{
         setCategorySelected(currentCat);
    }

    const getJoke = ()=>{
         if(!categorySelected.length>0 || categorySelected==='random'){
              setCategorySelected('random')
              fetch('https://api.chucknorris.io/jokes/random')
           .then(response=>response.json())
              .then(newJoke=>setNewJoke(newJoke.value));
         }else{
              fetch(`https://api.chucknorris.io/jokes/random?category=${categorySelected}`)
              .then(response=>response.json())
              .then(newJoke=>setNewJoke(newJoke.value));
         }
         return newJoke;
    }

    const currentJoke = (!categorySelected.length>0) ? randomJoke :newJoke        

    return (
        <div className="row">
            <div className="col-md-4">
                    <img src={Chuck} alt="chuck"/>
               </div>
               <div className="col-md-8">
                    <div className="card border-info mb-3">
                         <div className="card-body ">
                              <h4 className="card-title h1">Get to find more of Chuck norris Jokes</h4>
                              <p className="card-text font-italic lead">
                                   {currentJoke}
                              </p>
                              <div className="row">
                                   <div className="col-md-6">
                                        <Categoryselect 
                                             category={category}
                                             currentCategory={currentCategory}
                                        />
                                   </div>
                                   <div className="col-md-6">
                                        <CategoryButton getJoke={getJoke}/>
                                   </div>
                              </div>
                          </div>
                    </div>
               </div>
        </div>
    );
}

export default JokeCard
