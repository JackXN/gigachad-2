import React from "react";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import GoldLogo from "../../Assets/Logos/gold-logo.png";
import {
  HeroContainer,
  LeftHero,
  HeroTitle,
  HeroDescription,
  RightHero,
  HeroLogo,
  LearnMoreButtonContainer,
} from "./HeroElements";
import "../../App.css";

function Hero() {
  return (
    <HeroContainer>
      <LeftHero>
        <HeroTitle>
          <h1>
            Giga Chad's <br /> Crypto Fraternity
          </h1>
        </HeroTitle>
        <HeroDescription>
          <h2>The Power Is In Your Hands</h2>
          <p>
            With Extensive Tools, Educational Resources and a community driven
            network Of enthusiastic crypto traders like yourself. We offer you
            the ability to explore a World where you can trade the crypto market
            effortlessly.
          </p>
        </HeroDescription>
        <LearnMoreButtonContainer>
          <div class="blob">
            <a href="#" alt="Arrow-Icon" className="Arrow">
              <Arrow />
            </a>
          </div>
          <p>Learn More</p>
        </LearnMoreButtonContainer>
      </LeftHero>
      <RightHero>
        <HeroLogo src={GoldLogo} alt="GoldChad" />
      </RightHero>
    </HeroContainer>
  );
}

export default Hero;
