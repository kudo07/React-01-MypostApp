import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
        <section className='hero-sec'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                
                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>

                
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </section>
        <section className='feature-post container'>
        <h3 className='text-center text-uppercase py-4'>Feature Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <div className='d-grid'>
               <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a> 
              </div>
          
              </div>
            </div>
          </div>
          </div>
        </div>
        </section>
        <section className='lat-post container pt-3'>
          <h3 className='text-center text-uppercase py-3'>Latest Posts</h3>
                  <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
            <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <div className='d-grid'>
               <div className='d-grid'>
                <a href="#" className="btn btn-warning">Read More</a> 
              </div>
          
              </div>
            </div>
          </div>
          </div>
        </div>
        </section>
        <section className='d-flex flex-column justify-content-center align-items-center  container-fluid bg-primary-subtle bg-gradient mt-4' style={{minHeight:'190px'}}>
          <div className=' d-flex flex-column justify-content-center align-items-center'>
          <i className="text-black fs-3 mt-3 fa-solid fa-square-up-right"></i>
          <h2 className='text-uppercase'>Full View of Posts</h2>
          <button className='fw-bolder btn btn-warning '>VIEW OUR POST!!</button>
          </div>
           
         
        </section>
        <section className='portfolio container'>
          <h3 className='text-center text-uppercase p-3'>Our Portfolio</h3>
            <div className="container text-center">
            <div className="row g-2">
              <div className="col-6">
                <div className="p-1"> <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/></div>
              </div>
              <div className="col-6">
                <div className="p-1"> <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/></div>
              </div>
              <div className="col-6">
                <div className="p-1"> <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/></div>
              </div>
              <div className="col-6 mb-2">
                <div className="p-1"> <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/></div>
              </div>
            </div>
</div>
        </section>


      
    </div>
  )
}

export default Home