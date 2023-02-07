import Header from "@/pages/header";
const a = {
    marginRight: "10px"
}



const Contact = () => {
    return(
        <>
        <Header/>
        <div className="contact">
            <section class="side"></section>
        <section class="projects">
            <div class="panel">
                <h1><div>Contact</div></h1>
                
                <article>
                    <h2>Direct</h2>
                    <section>
                        <h3 className = "workexp">Email : Danmckdav@gmail.com</h3>
                        <h3 className = "workexp">Phone : 980-292-4330</h3>
                    </section>
                </article>
                <article>
                    <h2>Social</h2>
                    <section>
                        <h3 className = "workexp">
                            <a style = {a} href="https://www.linkedin.com/in/daniellemdavid">LinkedIn</a>
                            <a  style = {a}href="https://www.github.com/daniellemdavid">Github</a>
                            <a href="https://www.elle0elle.dev">Blog</a>
                        </h3>
                    </section>
                </article>

            </div>
        </section>
        <section class="side"></section>
        </div>
        </>
    )
    
}

export default Contact;