import axios from 'axios'
import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {API_BASE_URL} from '../config/constant'

// C:\Users\hp\Desktop\newton\pckt\react-bootstarpapi\mypost-app\src\config\constant.jsx

function PostDetail() {
  const[post,setPost]=useState({})
  const [user, setUser]=useState({})


    const {postId,userId}=useParams();

    const getPostsAndUser=()=>{
      axios.get(`${API_BASE_URL}/posts/${postId}`)
      .then((response)=>{
        setPost(response.data);
         axios.get(`${API_BASE_URL}/users/${userId}`)
      .then((response)=>{
        setUser(response.data);
        debugger;

      })
      .catch((err)=>{
        console.log(err);
      });

      })
      .catch((err)=>{
        console.log(err);
      });
    }
    useEffect(()=>{  //empty array means execute once when component loads
// function AllPost() {
    // console.log("post detail loaded ");
    getPostsAndUser();
    },[]);

  return (
    
    // <div>PostDetail Post-{postId}, User - {userId}</div>
    <div className='container'>
      <div className='row'>
          <div className='col-12'>
        <h2 className='text-center text-uppercase pt-4'>Post Detail</h2>

          </div>
      </div>
      <div className='row'>
        <div className='col-md-9 col-lg-9 col-sm-12 border border-primary'>
          <div className="card mb-3">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
          </div>
      </div>
       <div className='col-md-3 col-lg-3 col-sm-12 border border-primary'>
                  <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">An item</li>
                      <li className="list-group-item">A second item</li>
                      <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
          
          </div>
      </div>
    </div>
  );
}

export default PostDetail