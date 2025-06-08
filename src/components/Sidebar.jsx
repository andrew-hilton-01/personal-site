import githubMark from '../assets/github-mark-white.svg'
import linkedIn from '../assets/InBug-White.png'
import xLogo from  '../assets/xlogo.svg'
{/*import gMail from '../assets/mail.svg'*/}
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h1 className="sidebar__name">Andrew Hilton</h1>
        <p className="sidebar__desc">
          aspiring ai superuser / building stuff
          <p>Last Updated: June 7, 2025</p>
        </p>
        <nav className="sidebar__nav">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#skills">skills</a>
        </nav>
      </div>
      <div className="sidebar__socials">
        <a href="https://www.linkedin.com/in/andrew-hilton-690106281/" target="_blank" aria-label="linkedin">
          <img src={linkedIn} alt="linkedin logo" style={{ width: 32, height: 32 }} />
        </a>
        <a href="https://github.com/andrew-hilton-01" target="_blank" aria-label="github">
          <img src={githubMark} alt="github logo" style={{ width: 32, height: 32 }} />
        </a>
        <a href="https://x.com/Hilton0A" target="_blank" aria-label="x">
          <img src={xLogo} alt="x logo" style={{ width: 32, height: 32 }} />
        </a>
        {/*
        <a href="mailto:andrew2001hilton@gmail.com" target="_blank" aria-label="email">
          <img src={gMail} alt="mail" style={{ width: 42, height: 42 }} />
        </a>
        */}
      </div>
    </aside>
  )
}