import {approaches} from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
export default function Approach(){return <section id="approach" className="section approach-section"><SectionHeading number="03" label="Engineering approach" title="The answer is only part of the system." description="I care about the path from a messy problem to useful, repeatable software."/><div className="approach-grid">{approaches.map(a=><article key={a.number}><span className="mono">/{a.number}</span><h3>{a.title}</h3><p>{a.body}</p></article>)}</div></section>}
