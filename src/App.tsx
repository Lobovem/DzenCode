import reactLogo from './assets/react.svg';
import './App.scss';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="container">
      <p className="container__title">Hello world</p>
      <img src={reactLogo} />
      <Button variant="success">Test</Button>
    </div>
  );
}

export default App;
