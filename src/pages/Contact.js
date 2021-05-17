import React, { useState, useEffect } from "react";
import { Wrapper, Container, Header } from "../styles/Contact.styles";
import { HomeLink, TextLink } from "../styles/Work.styles";
import { withRouter } from "react-router";

const Contact = ({ history }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    animate &&
      setTimeout(() => {
        history.push("/");
        setAnimate(false);
      }, 400);
  }, [animate, history]);

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Header style={{ color: "red" }}>Lets Catch Up?</Header>
        <Header>iamitravikumar@gmail.com</Header>
        <Header>+91 986-975-6314</Header>
        <Header>
          <a
            href="https://twitter.com/iamitravikumar"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "rgb(29, 161, 242)"
            }}
          >
            Twitter: iamitravikumar
          </a>
        </Header>
        <Header>
          <a
            href="https://www.linkedin.com/in/amitravikumar/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#0e76a8"
            }}
          >
            LinkedIn: iamitravikumar
          </a>
        </Header>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
