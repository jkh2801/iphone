import {useState, useEffect} from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Pro from './components/Pro'
import Contact from './components/Contact'

function App() {
  const [num, setNum] = useState(0)
  const heights = []
  let page = 0
  const setPage = ((idx) => {
    page = idx
  }) 
  useEffect(() => {
    console.log("render")
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('.nav')
      nav.classList.toggle("sticky", window.scrollY > 0)
    })
    const section = document.querySelectorAll('section')
    section.forEach(function(s) {
      heights.push(s.offsetTop)
    })
    window.addEventListener('mousewheel', function(e) {
      if(e.wheelDelta < 0 && page < 3) {
        console.log("page: " + page)
        window.scrollTo({top:heights[++page], left:0, behavior:'smooth'})
      }
      if(e.wheelDelta > 0 && page > 0) {
        console.log("page: " + page)
        window.scrollTo({top:heights[--page], left:0, behavior:'smooth'})
      }
    })
  })
  return (
    <div className="App">
      <Nav num={num} setNum={setNum} heights={heights} setPage={setPage}/>
      <Main num={num} setNum={setNum}/>
      <About num={num} setNum={setNum}/>
      <Pro/>
      <Contact/>
    </div>
  );
}

export default App;
