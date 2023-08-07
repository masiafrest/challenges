import Elements from "./components/Elements";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import "./App.css";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

function App() {
  console.log("hello world");
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <Elements /> */}
      <Footer />
    </div>
  );
}

export default App;
