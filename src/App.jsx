import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Person
          name="Anna"
          title="Specialist"
          salary="50000"
          phone="+7 999 123 45 67"
          email="anna@example.com"
          animal="Cat"
        />
        <Person
          name="Maria"
          title="Specialist"
          salary="50000"
          phone="+7 999 123 45 67"
          email="maria@example.com"
          animal="Cat"
        />
        <Person
          name="Elja"
          title="Specialist"
          salary="50000"
          phone="+7 999 123 45 67"
          email="elja@example.com"
          animal="Cat"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
