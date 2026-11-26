import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { DefaultIcon } from "@libs/Icons";
import * as Typography from "@libs/Typography";
import logogram from "@assets/logos/logogram.svg?react";
import star from "@assets/misc/bethlehem_star.svg?react";
import starfield from "@assets/misc/starfield.svg?react";
import starDark from "@assets/misc/bethlehem_star_dark.svg?react";
import starfieldDark from "@assets/misc/starfield_dark.svg?react";
import pageDown from "@assets/arrows/page_down.svg?react";
import React from "react";
import { AnimationContext, ThemeContext } from "@libs/Context";
import { Theme } from "@libs/Types";
import { breakpoints } from "@libs/globals";

// Animations
const fadeIn = keyframes`
from {
    opacity: 0;
}
  to {
    opacity: 1;
  }
`;
const starAnim = keyframes`
from {
    transform: rotate(60deg);
}
  to {
    transform: rotate(0deg);
  }
`;
const parallax = keyframes`
  to {
    transform: translateY(100px);
  }
`;

// Emotion Constants
const StandardDashboardTitleContainer = styled.div`
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
const AnimatedDashboardTitleContainer = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  left: 50px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  z-index: 4;

  animation:
    ${fadeIn} 2s ease-in 1s backwards,
    ${parallax} linear both;
  animation-timeline: auto, scroll(root);

  @media (max-width: ${breakpoints.sm}px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Logogram = styled(DefaultIcon)`
  width: 350px;
  margin-top: -35px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 250px;
    margin-top: -50px;
  }
`;

const Heading = styled.div`
  min-height: 100vh;
`;

const NightSky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60%;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
`;
const Stars = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: 50% 40vw;
  animation: ${starAnim} 3s forwards;

  @media (max-width: ${breakpoints.sm}px) {
    animation: ${fadeIn} 3s forwards;
  }
`;
const StarOfBethlehem = styled(DefaultIcon)`
  position: absolute;
  right: 20%;
  top: 25%;
  width: 75px;
  z-index: 5;
`;
const Starfield = styled(DefaultIcon)`
  position: absolute;
  top: -20vh;
  width: 120%;

  @media (max-width: ${breakpoints.sm}px) {
    width: auto;
    height: 120%;
  }
`;

const PageDown = styled.div`
  position: absolute;
  width: 150px;
  height: 100px;
  left: 50%;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  transform: translateX(-50%);
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

const DashboardHeader: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const { doAnim, setDoAnim } = React.useContext(AnimationContext);
  const animTimeout = React.useRef<number>(0);
  const pageHeight = React.useMemo(
    () =>
      window.innerWidth < breakpoints.md
        ? window.outerHeight
        : window.innerHeight,
    [],
  );

  // Stops the dashboard animation if the page has dismounted at least once
  React.useEffect(() => {
    window.clearTimeout(animTimeout.current);
    return () => {
      animTimeout.current = window.setTimeout(() => setDoAnim(false), 0);
    };
  }, [setDoAnim]);

  const handleScroll = () => {
    window.scrollBy({
      top: pageHeight,
      behavior: "smooth",
    });
  };
  return !doAnim ? (
    <>
      <StandardDashboardTitleContainer>
        <Typography.RowHeading>Welcome to</Typography.RowHeading>
        <Logogram icon={logogram} width={300} height={130} hover={false} />
      </StandardDashboardTitleContainer>
      <Typography.LargeParagraph
        id="description"
        style={{
          textWrap: "wrap",
          paddingLeft: "45px",
          paddingRight: "45px",
        }}
      >
        Solomon is a convenient, accessible platform with Christian resources on
        apologetics, theology, and Bible commentary. I hope you can use this
        platform to discover new resources, engage with theologians, and dive
        deeper into your faith!
        <br />
        <br />
        Below, you will find curated introductory resources to apologetics and
        theology, but feel free to explore and find your own resources.
        <br />
        <br />
        Glory be to God the Most High forever and ever!
        {/* <br />
        <br />
        If you wish for additional functionality (such as recommendations,
        favorites) be sure to create an account with us! */}
      </Typography.LargeParagraph>
    </>
  ) : (
    <Heading>
      <AnimatedDashboardTitleContainer>
        <Typography.RowHeading>Welcome to</Typography.RowHeading>
        <Logogram icon={logogram} width={300} height={130} hover={false} />
      </AnimatedDashboardTitleContainer>
      <NightSky>
        <Stars>
          <StarOfBethlehem
            icon={theme._id === Theme.DARK ? star : starDark}
            noDimensions
          />
          <Starfield
            icon={theme._id === Theme.DARK ? starfield : starfieldDark}
            noDimensions
          />
        </Stars>
      </NightSky>
      <PageDown onClick={() => handleScroll()}>
        <Typography.Paragraph>
          <i>Scroll to Dashboard</i>
        </Typography.Paragraph>
        <DefaultIcon icon={pageDown} width={75} height={20} />
      </PageDown>
    </Heading>
  );
};
export default DashboardHeader;
