import Header from "@/pages/header"



const aboutMe =() => {
    return(
        <>
            <Header/>
                <div className="index">
                   
                <section class="side"></section>
                <section class="projects">
                <div class="panel">
                    <h1><div>About Me</div></h1>
                    {/* <div style={{color: "rgb(78, 78, 148)", paddingBottom: "10px"}}> 
                            <h2 style={{textAlign: "center", 
                                        border: "2px solid rgb(255, 255, 255)", padding: "40px", margin: "20px"
                                        }}>
                                this page is under construction...
                            </h2>
                    </div> */}
                    <article>
                        <h2>Hi, I'm Danielle</h2>
                        <p>At my core, I am a creative expressing through many mediums. Software development has become one
                            of the most powerful and versitile building tools in my skillset. 

                        </p>
                        
                    <br/>
                        <span> <a href="https://www.github.com/daniellemdavid">Github</a>  </span>
                    </article>

                </div>
            </section>
            <section class="side"></section>
            </div>
        </>
    )
}

export default aboutMe;