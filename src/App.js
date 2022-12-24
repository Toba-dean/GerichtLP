import './App.css';
import { NavBar } from './components';
import { Header, About, Menu, Chef, Intro, Laurels, Gallery, FindUs } from './container';

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
      <Gallery />
      <FindUs />
    </>
  );
}

export default App;
