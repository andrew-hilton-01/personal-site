import project1thumbnail from  '../assets/SMAIRPthumbnail.jpg'
export default function Main(){
    return (
        <div className="main">
        <section id="about">
        <h2>about me</h2>
        <p>I'm a tech-focused business student with a genuine curiosity about how technology, strategy, and real human problems fit together. I spent 3 years
            in the esports industry, eventually being a signed player under T1 North America's Valorant Academy team in 2022. Since retiring from the esports indsutry,
            I've been pursuing my degree and developing a deep passion on top of my previous leadership experience for technology and AI systems.
        </p>
        <p> I’m not interested in AI as just hype; I care about using it to actually make things better and more efficient for people. My drive is to take technology out of the abstract and 
            put it to work in ways that help to tackle problems worth solving.
        </p>
        <p> 

        Whenever I run into inefficiency, I see it as a challenge and an opportunity to make things better through thoughtful design and practical solutions.

        I’ve always been drawn to leadership, mostly because I like working with sharp, motivated people and seeing ambitious ideas turn into real projects. I enjoy organizing teams around a shared vision and making sure the work leads somewhere concrete. For me, it’s about trying things, learning fast, and actually building solutions instead of just talking about them.

        At the core, I believe technology should serve people, not the other way around. I want to build and lead projects that don’t just keep up with change, but actively move things in a better direction. If you’re looking for someone who understands both the business and technical sides, and who cares about using AI to solve real problems, that’s what I do. I’m always learning, always building, and always looking for the next thing to improve.
        </p>
        </section>

        <section id="projects">
        <h2>what i'm working on</h2>
        <p>In partnership with the sales department at my university, I've been developing an AI roleplay bot which can create an entire SPIN selling conversation dialogue tree for an arbitrary company,
            and then analyze and serve audio in realtime for realistic sales conversation practice.</p><p>Demo available upon request.
        </p>
        <img src={project1thumbnail} className="project-thumbnails"></img>
        </section>

        <section id="skills">
        <h2>skills</h2>
        <div className="skills-list">
        <p className="skills">
        Python • Javascript • React • Nodejs • Godot • FastAPI • AI APIs
        </p>
        </div>

        {/* icons, skill names, whatever */}
        </section>
        </div>
    );
}