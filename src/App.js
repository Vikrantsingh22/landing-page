import TypewriterBox from "./About";
import "./App.css";
import FAQ from "./FAQ.js";
import Footer from "./Footer";
import Herro from "./Herro";
// import Navbar from "./Navbar";
import Prizes from "./Prizes";
import Sponsor from "./Sponsor";
// import Sponsors from "./Sponsors";
// import Hero from "./Parallax";
// import Scroll from "./Scroll";
import TeamMemberCard from "./Team_card";
import CountdownTimer from "./Test1.js";
import Timeline from "./Timeline";
// import Time from "./Time";

// import Random from "./Random.js";

function App() {
  return (
    <div className="App">
      {/* <Random /> */}
      {/* <Hero /> */}
      {/* <Scroll /> */}
      <Herro />
      {/* <Navbar /> */}
      <CountdownTimer />
      <Timeline />
      <TeamMemberCard />
      <Prizes />
      <Sponsor />
      {/* <Time /> */}
      <TypewriterBox />
      <FAQ/>
      <Footer />

      {/* <Sponsors /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
