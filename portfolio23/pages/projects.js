// projects.js
// Takes array list of objects(projects) into a component
//  an array of my projects (objects)
// 
const myProjects =
    // ,{
    //         id: ,
    //         name: " ", 
    //         technologies: , 
    //         description: , 
    //         img: ,
    //         gitlink: 
    //     } 
[
    {
        id: 1,
        name: "Your Pick", 
        technologies: ["html", "css", "javascript"], 
        description: "Simple small business shop with three pages including a store with inventory in database and paypal",
        img: [null, "your pick website screenshot"],
        gitlink: "https://github.com/daniellemdavid/portfolio"
    },
    {
        id: 2,
        name: "Klique2", 
        technologies: ["html", "css", "react"], 
        description: null, 
        img: [null, "Klique main page screenshot"],
        gitlink: "danielledavid.com"
    },{
        id: 3,
        name: "Portfolio", 
        technologies: ["react", "html", "css"], 
        description: "This website--danielledavid.com--was designed and created by me", 
        img: [null, null],
        gitlink: "https://github.com/daniellemdavid/portfolio"
    } 
]

// https://beta.reactjs.org/learn#rendering-lists 
const Projects = () => {
    // const [projects, setProjects] = useState(myProjects);
    return(
        < div className = "index">
            <section className="side"></section>
            <section className="projects">
                <div className="panel" >
                    <h1><div>Projects..</div></h1>
                    {/* <div style={{color: "rgb(78, 78, 148)", paddingBottom: "10px"}}> 
                        <h2 style={{textAlign: "center", 
                                    border: "2px solid rgb(255, 255, 255)", padding: "40px", margin: "20px"
                                    }}>
                            this page is under construction...
                        </h2>
                    </div> */}
                    
                    {myProjects.map(project => (
                            <article>
                                <h2>{project.name}</h2>
                                <span className="tech">Technologies: </span>
                                <p >
                                    {project.technologies
                                        .sort()
                                        .map ( tech => (
                                            <a style = {{marginRight: "5px"}}>
                                                {tech}
                                            </a> 
                                        ))
                                    }
                                </p>
                                <span className="desc">Description: </span>
                                <p> {project.description? project.description: " "}</p>
                                {project.img && (project.img[0]? <img src={project.img[0]} alt={project.img[1]} /> : null)}
                            <br/>
                                <span> <a href={project.gitlink}>Github Repository</a>  </span>
                            </article>
                    ))}
                </div>
            </section>
            <section className="side"></section>
        </div>
    )
}

export default Projects;