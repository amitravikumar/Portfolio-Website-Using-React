import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  X,
  Article,
  ExperienceContainer,
  ExperienceTitle,
  DetailBlock,
  DetailPoint,
  Image,
  WorkLink,
  TextLink,
  HomeLink,
  HomeText,
  Hero,
  Body,
  ImageBackground,
  Overlay,
  Container,
  RoleTime,
  Role,
  Time,
  Client
} from "../styles/About.styles";

const About = ({ history }) => {
  const [animateWork, setAnimateWork] = useState(false);
  const [animateHome, setAnimateHome] = useState(false);

  useEffect(() => {
    animateWork &&
      setTimeout(() => {
        setAnimateWork(false);
        history.push("/work");
      }, 400);
    animateHome &&
      setTimeout(() => {
        setAnimateHome(false);
        history.push("/");
      }, 400);
  }, [animateWork, animateHome, history]);

  const canada = require("../assets/images/canada.jpg");

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimateHome(true)} animating={animateHome}>
        <HomeText>Home</HomeText>
      </HomeLink>
      <Body>
        <ImageBackground backgroundImage={canada}>
          <Overlay />
        </ImageBackground>
        <Container>
          <Hero>
            <Heading>Who am i?</Heading>
            <Subtitle>
              So I'm Amit Kumar, a <X>A Software Engineer based in Mumbai</X>.
              I've travelled in India in places like{" "}
              <X>
                Mumbai, Visakhapatnam, Delhi, Amritsar, Chandigarh, Manali,
                Shimla, Rohtang Pass, Srinagar
              </X>{" "}
              etc. I'm a 2020 <X>Electronics Engineering Graduate </X>
              and <X>exploring everything other than Electronics</X> (as in I
              know how to knit and stuff). In general, I'm just{" "}
              <X>always curious</X>. I'd like to think I'm a solid{" "}
              <X>web developer</X>, but I know I have much to learn, and I make
              it a mission to learn something new <X>every day</X>. I hope I get
              the chance to <X>grow</X> with <X>you</X>!
            </Subtitle>
          </Hero>
          <ExperienceContainer>
            <ExperienceTitle>EXPERIENCE</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>Associate Software Engineer</Role>
                <Time>Jan 2021 - Present</Time>
              </RoleTime>
              <Client>Pinkvilla Media Pvt. Ltd.</Client>
              <DetailPoint>
                Worked on designing and feature development of the company.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Market Analyst &amp; Business Intern</Role>
                <Time>Summer 2020</Time>
              </RoleTime>
              <Client>BYJU's Careerlabs Pvt. Ltd.</Client>
              <DetailPoint>
                Point of contact for building connections with clients and
                studying the market trends.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Tech Team Lead </Role>
                <Time>2019</Time>
              </RoleTime>
              <Client>Pillai's Alegria - The Festival of Joy</Client>
              <DetailPoint>
                Responsible for the Web-Application making for the festival and
                various contests.
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>EDUCATION</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>B.E.(Electronics Engineering)</Role>
                <Time>2016 - 2020</Time>
              </RoleTime>
              <Client>Pillai College of Engineering</Client>
              <DetailPoint />
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>LATEST PROJECTS</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>Start-up Landing Page Using Next.js, Theme-UI</Role>
                <Time>2021</Time>
              </RoleTime>
              <Client>JavaScript, React, CSS, Next.js, Theme-UI</Client>
              <DetailPoint>
                *Created a Start-up landing page using Next.js and other
                trending web technologies
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Amazon Website Using React.js</Role>
                <Time>2020</Time>
              </RoleTime>
              <Client>JavaScript, React, CSS, Firebase</Client>
              <DetailPoint>
                Creating a clone website of Amazon using React.js
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Friends Data portal - Full Stack</Role>
                <Time>2020</Time>
              </RoleTime>
              <Client>
                AFriends Data portal - A Full-Stack application <br /> with
                login/logout flow using JWT tokens,
                <br /> bycrypt, Node.js, Express.js and PostgreSQL
              </Client>
              <DetailPoint>
                Created a Friends portal application to learn Full-stack
                development
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
        </Container>
      </Body>
      <WorkLink onClick={() => setAnimateWork(true)} animating={animateWork}>
        <TextLink>Take a look at some of my work!</TextLink>
      </WorkLink>
    </Wrapper>
  );
};

export default withRouter(About);
