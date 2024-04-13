// import reactLogo from './assets/react.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';
import { PopUp } from './components/PopUp/PopUp';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <>
      <Header />
      <MainSection>
        <ProductsPage />
      </MainSection>
      {/* <PopUp /> */}
    </>
  );
}

export default App;
