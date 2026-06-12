import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { WorkExperience } from "./components/WorkExperience";
import { Publications } from "./components/Publications";
import { Projects } from "./components/Projects";
import { Articles } from "./components/Articles";
import { ExtraCurricular } from "./components/ExtraCurricular";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Summary />
      <Skills />
      <Education />
      <WorkExperience />
      <Publications />
      <Projects />
      <Articles />
      <ExtraCurricular />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
