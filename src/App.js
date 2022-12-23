import './App.css';
import { NavBar } from './components';
import { Header, About, Menu, Chef, Intro, Laurels } from './container';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
    </>
  );
}

export default App;
