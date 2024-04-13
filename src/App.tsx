// import reactLogo from './assets/react.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';
import { OrderList } from './components/OrderList/OrderList';
import { PopUp } from './components/PopUp/PopUp';
import { ProductList } from './components/ProductList/ProductList';

function App() {
  return (
    <>
      <Header />
      <MainSection>
        <ProductList />
        {/* <OrderList /> */}
      </MainSection>
      {/* <PopUp /> */}
    </>
  );
}

export default App;
