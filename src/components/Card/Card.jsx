import React from 'react'
import './card.css'
import { FiMail, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi';
import person  from './person.jpg';

const Card = () => {
    return (
      <>
        <div
          style={{ background: "#202020", color: "white" }}
          className="card col-md-4 col-12 mx-auto my-4"
        >
          <img
            className="card-img-top "
            // style={{
            //   position: "absolute",
            //   width: "317px",
            //   height: "317px",
            //   left: "116px",
            //   top: "44px",
            //   borderRadius: "10px 10px 0px 0px",
            // }}
            src={person}
            alt="Card image cap"
          />
          <div className="card-body col-md-12 mx-auto">
            <h2 className="card-title text-center">John Doe</h2>
            <h4 className="card-title text-center">Frontend Developer </h4>
            <a className="d-block text-center" href="jondoe.com">
              jondoe.com
            </a>
          </div>

          {/* buttons */}
          <div
            style={{ background: "#202020", textAlign: "center" }}
            className="card-body col-12 col-md-12 mx-auto"
          >
            <button
              type="button"
              name="email"
              id="mailbtn"
              className="btn btn-light btn-block text-dark m-3"  
              style={{display: "inline-block", width:"110px"}}
            > 
              <FiMail /> Email
            </button>

            <button
              type="button"
              name="linkedin"
              id="linkedinbtn"
              className="btn btn-primary btn-block m-3"
              style={{display: "inline-block"}}
            >
              <FiLinkedin /> LinkedIn
            </button>
          </div>

          {/* intro section */}
          <div style={{ background: "#202020", color: "white" }}
            className="card-body col-md-12 mx-auto p-5">
          <div
            
          >
            <h2 className="card-title">About</h2>
            <p className="card-text ">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div
            className='mt-3'
          >
            <h2 className="card-title">Interests</h2>
            <p className="card-text ">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.{" "}
            </p>
          </div>
          </div>

          {/* social media icons  */}
          <div
            style={{ background: "#161619", textAlign: "center" }}
            className="card-footer col-md-12 col-12 text-muted mx-auto my-auto"
          >
            <a href="">
              <FiTwitter
                className="m-2"
                style={{ height: "45px", width: "45px", display:"inline-block" }}
              />
            </a>
            <a href="">
              <FiFacebook
                className="m-2"
                style={{ height: "45px", width: "45px", display:"inline-block" }}
              />
            </a>
            <a href="">
              <FiInstagram
                className="m-2"
                style={{ height: "45px", width: "45px", display:"inline-block" }}
              />
            </a>
            <a href="">
              <FiGithub
                className="m-2"
                style={{ height: "45px", width: "45px", display:"inline-block" }}
              />
            </a>
          </div>
        </div>
      </>
    );
}

export default Card
