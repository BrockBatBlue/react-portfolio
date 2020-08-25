import React from "react";
import "../Styles/Contact.css";

function Contact() {
  return (
    <>
      <main className="flex-shrink-0">
        <br />
        <h5 className="Contact-Title">Contact Me</h5>
        <hr />
        <br />
        <form className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="form-group col-12">
              <label for="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <button type="button" className="btn btn-primary btn-lg">
                SEND
              </button>
            </div>
          </div>
        </form>
        <br />
      </main>
    </>
  );
}

export default Contact;
