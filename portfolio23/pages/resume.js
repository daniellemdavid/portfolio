import Header from "@/pages/header";

const exp = [
    {  
        name: "YearUp Application Dev Internship",
        year: "2022-2023"

    },
    {
        name: "Cisco Emerging Talent Mentorship",
        year: "2022"
    },
    {
        name: "HPU Safe Driving Campaign",
        year: "2012"
    }
]

const Resume = () => {
    return(
        <>
        <Header/>
        <div className="resume">
            <section className="side"></section>
            <section className="projects">
            <div className="panel panelResume">
                <h1><div>Resume</div></h1>
                <p>Objective: </p>
                <p >Leverage modern technology to build creative solutions that service and empower my community.</p>
                
                <article>
                    <h2>Experience</h2>
                    {exp.map( e => {
                        return(
                            <section >
                                <h3 className = "workexp" style={{minWidth: "60%"}}> {e.name} | {e.year} </h3>
                            </section>
                        )
                    })
                    }
                </article>

                <article>
                    <h2>Education</h2>
                    <section>
                        <h3 className = "workexp" style={{minWidth: "70%"}}>AAS Software Development | Central Piedmont | 2019-2022 <br/> GPA 3.9</h3>
                    </section>
                </article>

            </div>
        </section>
        <section className="side"></section>
        </div>
        </>
    )
}

export default Resume;