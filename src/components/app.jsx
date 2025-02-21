import Navbar from "./navbar/navbar.jsx";
import Hero from "./hero/hero.jsx";
import Project from "./project/project.jsx";
import Resume from "./resume/resume.jsx";
import HireMe from "./hireMe/hireMe.jsx"
import ToolsAndSkills from "./toolsAndSkills/toolsAndSkills.jsx";
import ContactPerson from "./contactPerson/contactPerson.jsx";

function App() {
  return (
    <div className="bg-bgGradient">
      <Navbar />
      <Hero />
      <Resume />
      <Project />
      <ToolsAndSkills />
      <HireMe />
    </div>
  );
}

export default App;
