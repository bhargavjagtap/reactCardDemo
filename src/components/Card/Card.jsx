import React from 'react'
import './card.css'

const Card = () => {
    return (
      <>
        <div className="card col-md-4 col-12 mx-auto my-4">
          <img className="card-img-top p-5" width="10" alt="Card image cap" />
          <div className="card-body">
            <h2 className="card-title text-center">John Doe</h2>
            <h4 className="card-title text-center">Frontend Developer </h4>
            <a className="d-block text-center" href="jondoe.com">
              jondoe.com
            </a>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-body col-md-12 mx-auto">
            <button type="button" name="" id="" class="btn btn-light text-dark col-md-5 justify"><span><i class="fa fa-envelope" aria-hidden="true"></i></span>Email</button>
            <button type="button" name="" id="" class="btn btn-primary col-md-5">LinkedIn</button>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </>
    );
}

export default Card
