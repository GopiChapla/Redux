import './App.css';
import Inputdata from './Inputdata';
import store from './Store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <div className='title'><u>Redux Demo</u></div>
      <Provider store={store}>
        <Inputdata />
      </Provider>
    </div>
  );
}

export default App;
