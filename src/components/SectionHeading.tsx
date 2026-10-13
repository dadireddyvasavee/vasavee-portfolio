export default function SectionHeading({number,label,title,description}:{number:string;label:string;title:string;description?:string}) {
 return <header className="section-heading"><div className="eyebrow"><span>{number}</span><span>{label}</span></div><div><h2>{title}</h2>{description&&<p>{description}</p>}</div></header>;
}
