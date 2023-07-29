// import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container'>
        {/* container is the space which shown in about us page padding like */}
        <h2 className='text-center text-uppercase pt-3'>Contact Us</h2>
        <div className='mb-4 mx-auto contact-form-container text-muted p-1 rounded-3 shadow border border-black'>
            <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Name</label>
                <input type="text" className="form-control" id="name" required/>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="phn" className="form-label">Contact No.</label>
                <input type="text" className="form-control" id="phn"/>
                <div id="emailHelp" className="form-text">We ll never share your Phone no. with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" required/>
                <div id="emailHelp" className="form-text">We ll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="timing" className="form-label">Where can i Reach You</label>
                <select className="form-select" id="timing" >
                <option defaultValue="">Best Time to Reach</option>
                <option value="1">Morning</option>
                <option value="2">Afternoon</option>
                <option value="3">Evening</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="query" className="form-label">Enter Your Query Below</label>
                <textarea className="form-control" id="query" ></textarea>
            </div>
            <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
            </div>

            </form>
        </div>
        
    </div>
  )
}

export default Contact