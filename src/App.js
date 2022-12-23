import './App.css';
import { NavBar } from './components';
import { Header, About, Menu, Chef, Intro } from './container';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Menu />
      <Chef />
      <Intro />
    </>
  );
}

export default App;
