import "./App.css";
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
    </section>
  );
}

export default App;
