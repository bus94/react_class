import './App.css';
import Title from './Title';
import Checkbox from './List';
import Add from './Add';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='container_title'>
          <Title />
        </div>

        <div className='container_list'>
          <Checkbox />
        </div>

        <div className='container_add'>
          <Add />
        </div>

      </div>

    </div>
  );
}

export default App;
