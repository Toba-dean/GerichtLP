import './App.css';
import { NavBar } from './components';
import { Header, About, Menu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container';

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
      <Footer />
    </>
  );
}

export default App;
