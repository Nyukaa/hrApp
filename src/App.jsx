import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PersonList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
