import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section1/Section1";
import Features from "./Components/Features/Features";
import Section2 from "./Components/Section2/Section2";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Section1 />
      <Features />
      <Section2 />
    </div>
  );
}

export default Main;
