import React from 'react';
import BigfootTent from '../assets/images/banner/bigfoot-camp-banner.jpg';
import BigfootBook from '../assets/images/decorative/lore2.png';
import MonsterTeam from '../assets/images/decorative/team2.png';

const About = () => {
  return (
    <>
        <img src={BigfootTent} alt="Bigfoot walking through forest near a tent" />
        <section>
            <h1>About Mystic Campers</h1>
            <p>Welcome to Mystic Campers—where the wild meets the weird! We’re more than just a camping gear company; we create immersive outdoor experiences infused with mystery and adventure. From high-quality gear to interactive scavenger hunts and VR explorations, we fuel your curiosity and invite you to embrace the unknown. Whether you seek magical discoveries or unstoppable strength, Mystic Campers is your guide to exploring the uncharted. Gear up and get exploring!</p>
        </section>
        <section>
            <div className="aboutgrid">
                <img src={BigfootBook} alt="Bigfoot reading a book" />
                <h2><a href="lore.html">Our Lore</a></h2>
                <p>Discover the legends that inspire our gear. From Bigfoot’s hidden trails to the glowing eyes in the
                    dark, our products are crafted with stories in mind.</p>
            </div>
            <div className="aboutgrid">
                <img src={MonsterTeam} alt="Bigfoot, Mothman, and Wendingo together" />
                <h2><a href="team.html">Meet the Team</a></h2>
                <p>Get to know the explorers, designers, and cryptid hunters behind Mystic Campers.</p>
            </div>
        </section>
    </>
  );
};

export default About;