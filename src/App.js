import GlobalStyle from "./Components/Reset/reset";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import Works from "./Components/Works";
import Budget from "./Components/Budget";
import Footer from "./Components/Footer";
import Address from "./Components/Address";

function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <HomePage />
    <About />
    <Works />
    <Address />
    <Budget />
    <Footer />
    </>
  );
}

export default App;
