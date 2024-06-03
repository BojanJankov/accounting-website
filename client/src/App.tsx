import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CompanyContainer from "./components/CompanyContainer/ComapnyContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import ServicesContainer from "./components/ServicesContainer/ServicesContainer";

function App() {
  return (
    <section className="App">
      <Header />
      <MainContainer />
      <ServicesContainer />
      <CompanyContainer />
      <Footer />
    </section>
  );
}

export default App;
