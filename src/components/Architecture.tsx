import { useId } from 'react';
import { ArrowDown, ArrowRight, RotateCcw } from 'lucide-react';
import type { Step } from '../data/portfolio';
export default function Architecture({steps,title,loop=false}:{steps:Step[];title:string;loop?:boolean}) {
 const id=useId();
 return <figure className="architecture"><figcaption><span className="eyebrow">System map</span><span>Illustrative architecture · not a project screenshot</span></figcaption><ol aria-label={title} className="architecture-nodes">{steps.map((step,i)=><li key={step.title}><button className="arch-node" type="button" aria-describedby={`${id}-${i}`}><span className="mono">{String(i+1).padStart(2,'0')}</span><strong>{step.title}</strong><span className="node-detail" id={`${id}-${i}`}>{step.detail}</span></button>{i<steps.length-1&&<span className="node-arrow" aria-hidden="true"><ArrowRight size={18}/><ArrowDown size={18}/></span>}</li>)}</ol>{loop&&<div className="state-loop"><RotateCcw size={14} aria-hidden="true"/> Multi-turn state returns to the query router</div>}<p className="diagram-help">Hover or focus a node for context. On touch screens, tap a node.</p></figure>;
}
