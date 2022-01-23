import './App.css';
import Head from './components/Head';
import Content from './components/Content';
import Foot from './components/Foot.js';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
        <Head/>
        <Content/>
        <Resume/>
        <Foot/>
    </div>
  );
}

export default App;
