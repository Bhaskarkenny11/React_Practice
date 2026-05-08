import Card from "./comppnents/Card";
import amazon from "./assets/amazon.jpg"
import fb from "./assets/fb.png"
import git from "./assets/git.png"
const App=()=>{
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: amazon,
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Hyderabad, India",
    saved: false,
    applyText: "Apply Now"
  },

  {
    id: 2,
    company: "Git",
    logo: git,
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India",
    saved: false,
    applyText: "Apply Now"
  },

  {
    id: 3,
    company: "Facebook",
    logo: fb,
    posted: "1 week ago",
    role: "React Developer",
    type: "Remote",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Mumbai, India",
    saved: true,
    applyText: "Apply Now"
  }
];
return(
    <div className="parent">
      {jobs.map(function(elem,idx){
        console.log(idx)
        return (
          <div key={idx}>
            <Card company= {elem.company} logo={elem.logo} role={elem.role} posted={elem.posted} type={elem.type} level={elem.level} salary={elem.salary} location={elem.location} />
          </div>
        )
      })} 
    </div>
  ) 
}

export default App