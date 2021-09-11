import logo from './logo.svg';
import './App.css';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import VocTrainerImpl from './components/VocTrainerImpl'
import './style.css'

library.add(fas);

function App() {
  return (
    <div className="App">
        <br /><br /><br /><br />
        <VocTrainerImpl />
    </div>
  );
}

export default App;
