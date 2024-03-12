import React from 'react'
import myImage from "../images/WhatsApp Image 2024-03-05 at 10.06.44 PM.jpeg"
import Header from './Header';

const About = () => {
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab (tabName) {
    for (let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
  return (
    <>
<Header/>
    <div id="about">
        <div className="conatiner">
            <div className="row">
                <div className="about-col1">
                    <img src={myImage} alt="My Image" />
                </div>
                <div className="about-col2">
                    <h1 className="sub-title">About Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis incidunt eaque saepe consequatur commodi, eligendi vel tempora voluptatem iure hic dolorum iusto rem mollitia dolores nihil error quasi molestiae deleniti fuga corporis. Deleniti nemo nam nesciunt pariatur iste! Ex sequi voluptatum illo! Inventore aliquam corporis autem, modi cum assumenda ad.</p>

                    <div className="tab-titles">
                        <div className="tab-links active-link" onClick= {()=> openTab("skills")}>Skills</div>
                        <div className="tab-links" onClick= {()=> openTab("experience")}>Experience</div>
                        <div className="tab-links" onClick= {()=> openTab("education")}>Education</div>
                    </div>
                    <div className="tab-contents active-tab" id= "skills">
                        <ul>
                            <li><span>UI/UX</span><br/>Designing website interfaces</li>
                            <li><span>Web Development</span><br/>Designing website interfaces</li>
                            <li><span>Mobile Development</span><br/>Building Android/IOS Apps</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id= "experience">
                        <ul>
                            <li><span>2020-2023</span><br/>Client Success Mager at LiveAdmins</li>
                            <li><span>2018-2020</span><br/>SQA at Ghost and Amigo Software</li>
                            <li><span>2014-2018</span><br/>Integration Executive at CureMD</li>
                            <li><span>2010-2014</span><br/>Customer support at TRG</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id= "education">
                        <ul>
                            <li><span>MPhill</span><br/>University of Management and Technology</li>
                            <li><span>BSC(Hons)</span><br/>FCCU University</li>
                            <li><span>A Levels</span><br/>Pamir Internation Collage</li>
                            <li><span>O Levels</span><br/>ST. Anthoney's High School</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About