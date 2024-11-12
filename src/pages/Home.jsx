import React from "react";
import Bleft from "../assets/images/B-1.png";
import Bright from "../assets/images/B-3.png";
// import ONGCLogo from "../assets/images/ongc.png";
import gameVideo from "../assets/video/gameVideo.mp4";
import { gamesList } from "./games";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="left-banner">
          <img src={Bleft} alt="" />
          <Link to="/games">
            <button>Register Now</button>
          </Link>
        </div>
        <div className="right-banner">
          <img src={Bright} alt="" />
        </div>
      </div>

      <div className="section">
        <div className="about">
          <h2>Whether you're a seasoned fan, an aspiring <span className="about-span">athlete</span>, or just <span className="about-span">curious</span>, <span className="about-span">SportSphere</span> is your gateway to the diverse world of sports. From popular games like soccer and basketball to unique challenges like archery and bobsledding, we bring you in-depth knowledge, exciting histories, and easy-to-understand rules for every sport imaginable. Discover the greatest tournaments, legendary athletes, and get tips to start your own journey in any sport. Join us to explore, learn, and celebrate the spirit of sports that unites the world!</h2>
        </div>
        
        <div className="hallabol-video">
          <video
            style={{ maxWidth: "100%" }}
            playsInline
            loop
            muted
            controls
            autoPlay
            alt="All the devices"
            src={gameVideo}
          ></video>
        </div>

        <div className="about">
          <h2>
            Mark your calendars for some of the best and happening nights at
            IITGN! Yes, we are talking about HallaBol - yayyy - will set the
            ground on fire from 11-16 Feb and 20-26 Feb! Here's to 11 nights
            that you will never forget!
          </h2>
        </div>

        <div style={{ marginTop: "100px" }}>
          <div className="heading">
            <h1>Featured Sports</h1>
          </div>
        </div>

        <div className="games">
          {gamesList.map((game, index) => (
            <Link
              key={index}
              className="blogItem-link"
              to={`/games${game.Link}`}
            >
              <div className="game-item" key={index}>
                <div className="image-card">
                  <img src={game.Images} />
                </div>
                <div className="game-item-caption">
                  <p>{game.GameName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
