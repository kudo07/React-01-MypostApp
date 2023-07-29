import './App.css'
import NavBar from './components/navbar'
import About from './screen/About'
import Home from './screen/Home'
import Contact from './screen/Contact'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import AllPost from './screen/AllPost'
import PostDetail from './screen/PostDetail'


function App() {
 

  return (
    <Router>
      <div>
    <NavBar></NavBar>
    
    <Routes>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/post" element={<AllPost/>}></Route>
      <Route exact path="/posts/:postId/:userId" element={<PostDetail/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/" element={<Home/>}></Route>
      
    </Routes>
    <Footer/>
   </div>
    </Router>
  );
}

export default App
