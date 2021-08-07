import logo from './logo.svg';
import './App.css';
import Benaebi from './component/Benaebi';
function App() {
  const BIO = {
    Name:'Benaebi Pulley',
    Group:'Emergency Report App',
    Sit:'32'
  }
  return (
    <div className="App">
      <Benaebi profile = {BIO}/>
      <h1>Add your own Contribution</h1>
    </div>
  );
}

export default App;
