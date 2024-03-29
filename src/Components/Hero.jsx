import React from 'react';
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='blur hero-blur'></div>
      <div className="left-h">
            <Header/>
            {/* The Best Ad */}
            <div className="the-best-ad">
                <div></div>
                <span>The Best Fitness Club In The Town</span>
            </div>
            {/* Hero Heading */}
            <div className="hero-text">
                <div><span className='stroke-text'>Shape </span><span>Your</span></div>
                <div><span>Ideal Body</span></div>
                <div><span>In here we will help you to shape and build your ideal body and live up your life fullest.</span></div>
            </div>
            {/* Figures */}
            <div className='figures'>
              <div><span>+140</span><span>EXPERT COACHES</span></div>
              <div><span>+978</span><span>MEMBERS JOINED</span></div>
              <div><span>+50</span><span>FITNESS PROGRAMS</span></div>
            </div>
            {/* Buttons */}
            <div className="hero-btn">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="heart image" />
          <span>Heart Rate</span><span>116 bpm</span>
        </div>
        {/* Hero Images */}
        <img src={hero_image} alt="" className='hero-image'/>
        <img src={hero_image_back} alt="" className='hero-image-back'/>
        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt="calories image"/>
          <div><span>CaloriesBurn</span><span>220 kcal</span></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
