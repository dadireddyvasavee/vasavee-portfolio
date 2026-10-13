import {useEffect,useState} from 'react';
import {projects} from './data/portfolio';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Approach from './sections/Approach';
import About from './sections/About';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
function caseFromHash(){return projects.find(p=>`#case-${p.id}`===window.location.hash)?.id??null;}
export default function App(){const [active,setActive]=useState<string|null>(caseFromHash);useEffect(()=>{const sync=()=>setActive(caseFromHash());window.addEventListener('hashchange',sync);window.addEventListener('popstate',sync);return()=>{window.removeEventListener('hashchange',sync);window.removeEventListener('popstate',sync);};},[]);useEffect(()=>{const project=projects.find(p=>p.id===active);document.title=project?`${project.name} | Vasavee Dadireddy`:'Vasavee Dadireddy — AI & Software Engineer';},[active]);function open(id:string){history.pushState(null,'',`#case-${id}`);setActive(id);}function close(){history.replaceState(null,'','#work');setActive(null);}const project=projects.find(p=>p.id===active);return <><Navigation/><main id="main"><Hero/><Projects onOpen={open}/><Experience/><Approach/><About/><Skills/><Achievements/><Contact/></main>{project&&<ProjectCaseStudy key={project.id} project={project} onClose={close}/>}</>}
