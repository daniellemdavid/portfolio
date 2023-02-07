import Header from "./header";
import Projects from "./projects";


const App = () => {
    return (
        <>
            <Header/>
            {/* {<div style={{color: "rgb(78, 78, 148)", display: "flex", width: "70%", margin: "auto auto"}}> 
                            <h2 style={{textAlign: "center", 
                                        padding: "40px", 
                                        color: "gray",
                                        width:"100%"
                                        }}>
                                Hi, Thanks for visiting. I'm a software engineer; check out my projects below and let me know how I can help you. 
                            </h2>
                    </div>  } */}
            <Projects/>
            
        </>
     )
};

export default App;