import React from 'react'

const Card = ( {joke, pict} ) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        {/* Card Start */}
        <div className="card border-danger mb-3">
             <div className="card-header text-center">
                  <img src={pict} alt="chuckIcon"/>
             </div>
             <div className="card-body">
                  <h4 className="card-title text-center text-capitalize">
                      
                  </h4>
                  <p className="card-text">
                       {joke}
                  </p>
             </div>
        </div>
        </div>
      
    )
}

export default Card