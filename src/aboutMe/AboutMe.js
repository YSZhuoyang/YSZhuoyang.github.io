
import React from 'react';

import './aboutMe.css';


const IMAGE_ID_PATH = './img/ids/ID.jpg';

export default class AboutMe extends React.Component {

    renderIDPhoto() {
        return(<img src={IMAGE_ID_PATH} alt="My id" id="pic" />);
    }

    renderEmail() {
        return(
            <p>
                Email: 
                <a className="email" href="mailto:sangzhouyang@student.unimelb.edu.au">
                sangzhouyang@student.unimelb.edu.au
                </a>
            </p>
        );
    }

    renderSkills() {
        return(
            <div>
                <dt>Skills</dt>
                <dd>
                    <h2>Software engineering</h2>
                    <ul>
                        <li>software design, Testing</li>
                        <li>JIRA, Git</li>                    
                    </ul>

                    <h2>Languages and tools</h2>
                    <ul>
                        <li>Java, C++, Android, Javascript, Ruby on rails ... </li>
                    </ul>
                    
                    <h2>Research</h2>
                    <ul>
                        <li>Research experiences during undergraduate and master studying</li>
                        <li>One research paper published, two software copyrights</li>
                    </ul>

                    <h2>Others</h2>
                    <ul>
                        <li>Computer graphics(e.g. 3d rendering, modeling).</li>
                        <li>With OpenGL, DirectX, JOGL, Java3D experiences.</li>
                        <li>Unity3D, Kinect SDK</li>
                    </ul>
                    
                    <h2>Go to my <a href="https://github.com/YSZhuoyang" target="_blank" rel="nofollow" ><font color="#ccdd33">Github</font></a> </h2>
                </dd>
            </div>
        );
    }

    renderExp() {
        return(
            <div>
                <dt>Experience</dt>
                <dd>
                    <h2>Research project<span>Major participant - ZJUT, China - 2013-2014</span></h2>
                    <ul>
                        <li>Plant structure modelling using L System</li>
                        <li>Plant physiology model: photosynthesis and assimilate partitioning</li>
                        <li>Publication: 
                            <a href="http://www.davidpublisher.org/index.php/Home/Article/index?id=738.html" >
                            <font color="#dddddd">A Functional-Structural Model of Rice Seedling Coupled with Nitrogen Metabolism</font>
                            </a>
                        </li>
                    </ul>
                    
                    <h2>Research assistance <span>Developer - Microsoft Social NUI, Unimelb - 2016</span></h2>
                    <ul>
                        <li>Animating and modelling with unity and blender</li>
                        <li>Unity scripting with C# and Kinect v2 SDK, skeleton tracking</li>
                    </ul>

                    <h2><a href="http://codebrew.net.au/" ><font color="#eeeeee">Codebrew hackathon 2016</font></a><span>Team: Tomatoes - Melbourne - 2016</span></h2>
                    <ul>
                        <li>Innovation in Sustainability Award</li>
                    </ul>

                    <h2>
                        <a href="https://hackathongoddess.wordpress.com/2016/01/07/ge-breaks-into-the-hackathon-scene-with-industry-challenges/" target="_blank" rel="nofollow" >
                        <font color="#eeeeee">GE hackathon 2015</font>
                        </a>
                        <span>Team: Pocket Rails - Melbourne - 2015</span>
                    </h2>
                    <ul>
                        <li>3rd prize</li>
                    </ul>

                    <h2>Go to my <a href="https://au.linkedin.com/in/yuszy" target="_blank" rel="nofollow">
                    <font color="#ccdd33">LinkedIn</font></a> </h2>
                </dd>
            </div>
        );
    }

    renderInterests() {
        return(
            <div>
                <dt>Interests</dt>

                <dd>Car racing games</dd>
                <dd>Poached eggs</dd>
                <dd>Cantopop</dd>
            </div>
        );
    }

    renderEducation() {
        return(
            <div>
                <dt>Education</dt>
                <dd>
                    <h2>Melbourne University - Master of IT</h2>
                    <p>
                        <strong>Major:</strong> Distributed Computing <br/>
                        <strong>Minor:</strong> Software engineering
                    </p>
                </dd>
            </div>
        );
    }
    
    render() {
        return (
            <div id="about-me">
                {this.renderIDPhoto()}
                <div id="contact-info" className="vcard">
                    <h1 className="fn">Oscar Yu</h1>
                    {this.renderEmail()}
                </div>
                
                <div id="objective">
                    <p>
                        
                        
                    </p>
                </div>
                <div className="clear"></div>
                <dl>
                    <dd/>
                    <p/>
                    {this.renderSkills()}
                    <div className="clear"></div>
                    <p/>
                    {this.renderExp()}
                    <div className="clear"></div>
                    <dd/>
                    <p/>
                    {this.renderEducation()}
                    <dd/>
                    <div className="clear"></div>
                    <p/>
                    {this.renderInterests()}
                </dl>
            </div>
        );
    }
}
