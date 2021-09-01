import React from 'react'
import Card from './Card'

const CardList = ({ findJoke}) => {
    return (
        <div className="container col-12 p-5 row">
            {
                 findJoke.map((joke,i)=>{
                    return(
                         <Card 
                               key={i}
                               pict={joke.icon_url}
                               joke={joke.value}
                              
                         />
                    )
               })
            }
            
        </div>
    )
}

export default CardList
