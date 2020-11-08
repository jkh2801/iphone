import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Color from './components/Color'

function App() {
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav')
    nav.classList.toggle("sticky", window.scrollY > 0)
  })
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Color/>
    </div>
  );
}

export default App;
