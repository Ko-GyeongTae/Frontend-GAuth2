import { BrowserRouter } from 'react-router-dom';
import Router from './components/routes';
import { getAccessToken } from './utils';

function App() {
  let isLoggedIn = getAccessToken();
  return (
    <BrowserRouter>
      <Router isLoggedIn={isLoggedIn}/>
    </BrowserRouter>
  )
}

export default App;