// import reactLogo from './assets/react.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';
import { PopUp } from './components/PopUp/PopUp';

function App() {
  return (
    <>
      <Header />
      {/* <MainSection /> */}
      <PopUp />
    </>
  );
}

export default App;
