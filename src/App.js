
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './Constants/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div >

          <Header/>
          <Body/>
      
    </div>
    </Provider>
  );
}

export default App;
