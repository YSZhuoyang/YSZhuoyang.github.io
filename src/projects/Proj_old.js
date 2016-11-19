
import React from 'react';
import Bootstrap from 'bootstrap';

import './bootstrap.min.css';
import './index.css';

export default class Proj extends React.Component {
  render() {
    return (
      <Projects>
        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading"> <a href="https://github.com/YSZhuoyang/Green_Space" target="_blank" rel="nofollow">Green space</a> </h2>
                <p class="lead" style="font-size:140%">A design aid tool that performs plant landscaping with trees and shrubs.<br></br>
                The idea is to replace paper drawings with a 3D virtual scene, thus to simplify designers work. Plant models were built with a rule based modeling method, L-System, and embedded in the application. Users are allowed to easily select a plant model, customize it through specifying the attributes, and then add it to the scene. Prototyping becomes easy and fast. Furthermore, realistic rendering techniques such as phone shading, shadow mapping were used as well. A GPU based particle system simulating weather effects was also implemented.<br></br><br></br>
                <small style="font-style:italic; font-size:70%"> Implemented with: JOGL(OpenGL 4.0+, GLSL), Java</small> </p>
            </div>
            <div class="col-md-5">
                <iframe id="project_video" src="https://www.youtube.com/embed/7JP8YgwPKTw?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
            <div class="col-md-6">
                <iframe id="project_video" src="https://www.youtube.com/embed/V1APHKYzVeQ" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="col-md-6">
                <h2 class="featurette-heading"> <a href="https://github.com/YSZhuoyang/Get-Started-With-Kinect" target="_blank" rel="nofollow">Magic</a> </h2>
                <p class="lead">An HCI game implemented with Kinect v2 SDK and Unity3D.<br></br>
                It is able to track and recognize players' skeleton and gestures, based on which players can interact with the virtual scene and objects.<br></br><br></br>
                <small style="font-style:italic; font-size:70%"> Implemented with: Unity3D, C#, Kinect v2 SDK</small> </p>
            </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading"> <a href="https://github.com/YSZhuoyang/L-System-Plant-Modelling-Platform" target="_blank" rel="nofollow">Plant growth modelling</a> </h2>
                <p class="lead" style="font-size:140%">Doing real world experiments of growing plants takes time and costs, whereas simulation is quick and cheap. The idea behind is partially substituting real world experiments of plant growth with simulation of its growing process and interaction with the environment.<br></br>
                A modelling platform was implemented, where users are allowed to model the plant growth by coding. A rice seedling model was built based on this platform. It consists of a structure model described with L-System rules, physiological model simulating the process of producing and allocating biomass. The model indicates the first 30 days growing of rice seedling, the result of which varies according to the light absorption and nitrogen content.<br></br><br></br>
                <small style="font-style:italic; font-size:70%"> Implemented with: Java3D, Java</small>
                </p>
            </div>
            <div class="col-md-5">
                <img id="project_image" u="image" src="./img/rice seedling.jpg"/>
            </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
            <div class="col-md-5">
                <iframe id="project_video" src="https://www.youtube.com/embed/--IQHUw0SYo" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="col-md-7">
                <h2 class="featurette-heading"> <a href="https://github.com/YSZhuoyang/SWEN90014-Masters-Engineering-Project" target="_blank" rel="nofollow">RideShare-OZ-Orange</a> </h2>
                <p class="lead">An interesting android app for sharing rides in Auz. <br></br>
                RidesharingOz is a non-profit organisation based in Melbourne founded with the principle objective of reversing the trend of increasing traffic congestion, which has significant negative impacts on productivity, the environment.<br></br>
                With RideShare-OZ, users are able to share a ride with others, going to somewhere or some event together.<br></br><br></br>
                <small style="font-style:italic; font-size:70%"> Implemented with: <br></br>
                    App: Android, Java<br></br>
                    Server: Nodejs, Mongodb<br></br>
                    Web: html, bootstrap</small>
                </p>
            </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading"> <a href="https://github.com/YSZhuoyang/News-Digest" target="_blank" rel="nofollow">News Digest</a> </h2>
                <p class="lead">A news feeds website where users are able to read news articles scrapped from multiple news sources (e.g. New York Times, The Age, ABC News), and subscribe based on their interests.<br></br>
                Scrapped news articles are tagged with different tagging gems. And readers who subscribe fron the website will receive emails of latest news matching their interests, which was implemented with a synonym finder api.<br></br><br></br>
                <small style="font-style:italic; font-size:70%"> Implemented with: Ruby on Rails</small>
                </p>
            </div>
            <div class="col-md-5">
                <img id="project_image" u="image" src="./img/news_digest.jpeg"/>
            </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
            <div class="col-md-5">
                <img id="project_image" u="image" src="./img/pass.png"/>
            </div>
            <div class="col-md-7">
                <h2 class="featurette-heading"> <a href="" target="_blank" rel="nofollow">Password security analysis</a> </h2>
                <p class="lead">This project aims to give a direct view of ‘what is a silly password’ and ‘what is a good password’.<br></br>
                A data visualization website was established, where a set of interactive diagrams were implemented with D3 Javascript library for analyzing and demonstrating characteristics (e.g. length, different type of characters used, frequencies of letter combinations and etc) of commonly used password.<br></br>
                The web also enable users to register and validate their passwords. Feedback and suggestions will be given. They can also store their passwords with their accounts.<br></br><br></br>
                <small style="font-style:italic; font-size:70%"> Implemented with: PHP, Mysql, Javascript, D3</small>
                </p>
            </div>
        </div>

        <hr class="featurette-divider"></hr>
      </Projects>
    );
  }
}
