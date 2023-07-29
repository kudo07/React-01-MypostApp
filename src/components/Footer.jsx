import React from 'react'

function Footer() {
  return (
    <div className='pt-6 container-fluid bg-primary-subtle bg-gradient-' style={{minHeight:'12rem'}}>
        <div className='row pt-4 text-center'>
            {/* Create 3 sections each of cols for lg and md device but for small  device* create one section of 12col*/}
            <div className='col-lg-4 col-md-4 col-sm-12 '>
                <h5>
                    Quick Links
                </h5>
                <div className='mb-2 d-flex flex-column'>
                    <a className='text-purple p-1' href="#">About Us</a>
                    <a className='text-purple p-1' href="#">Our Posts</a>
                    <a className='text-purple p-1' href="#">Our Team</a>
                    <a className='text-purple p-1' href="#">Contact Us</a>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <h5>
                    NewsLatters
                </h5>
                <div style={{minHeight:'7rem'}} className='mb-2 d-flex flex-column justify-content-around'>
                    <input type="text" className='form-control' placeholder='Subscribe for our NewsLatter' />
                    <button className='btn btn-warning'>Subscribe</button>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <h5>Contact Address</h5>
                <div className='d-flex flex-column'>
                    <p><i className="px-2 fa-solid fa-map-location-dot"></i>
                    26 lokanf wala</p>
                    <p>Panipat</p>
                    <p>London-007007</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Footer