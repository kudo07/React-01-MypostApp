import React, { useEffect, useState } from 'react';
import {API_BASE_URL} from '../config/constant'
import {Link} from 'react-router-dom'
function AllPost(){

    // create variable to store all posts and a set method to update the value of posts
    //useState hook helps us create this variable with empty array
    const [posts,setPosts]=useState([])
    const [loader,setLoader]=useState(true)
    //es6 function to get all post from rest Api
    // function getAllPosts(){}
    const getAllPosts=()=>{
        fetch(`${API_BASE_URL}/posts`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setPosts(json)
        // setLoader(true)

        setLoader(false)


        });

    }

//we want to load data on page load of this component
useEffect(()=>{  //empty array means execute once when component loads
// function AllPost() {
    // console.log("ALL post loaded ");
    getAllPosts();
    },[])
  return (
    <div>
        <section className='feature-post container'>
        <h3 className='text-center text-uppercase py-4'>All Posts</h3>
        <div className='row' >
            {loader?
            <div className='col-12 text-center'> 
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            
            : posts.map((post,index)=>{
                   return  <div key={index} className='col-lg-4 col-md-4 col-sm-12 mb-4'>
                        <div className="card">
                        <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title ">{post.title}</h5>
                        <p className="card-text ">{post.body}</p>
                        <div className='d-grid'>
                            {/*  ${post.id} it in the data fetched data of posts we just set the post id when we poin to the cursor over read more button same with ${post.userId} it is also the in the fated data the loop pointer post of total in posts */}
                            <Link to={`/posts/${post.id}/${post.userId}`} className="btn btn-warning">Read More</Link>
                        </div>
                        </div>
                    </div>
                    </div>
            })
        }
          </div>
          
        </section>

    </div>
    

);
}
export default AllPost;