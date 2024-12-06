import "./styles/global.scss";
import Counter from "./components/feature/counter/Counter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Counter />
      </Main>
      <Footer />
    </>
  );
}

export default App;
