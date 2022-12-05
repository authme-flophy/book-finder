// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router,Routes} from './BrowserRouter';

function App() {
  const title = 'Welcome';
  const likes = 50;
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
      </div>
    </div>
  );
}

export default App;
