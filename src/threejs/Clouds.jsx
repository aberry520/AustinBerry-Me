import { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import * as THREE from "three";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import styled from "styled-components";
import React from "react";
import BIRDS from "vanta/dist/vanta.birds.min.js";

const Vanta = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  color: white;
  padding: 20px;
  font-size: 24px;
`;

const Clouds = (props) => {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          birdSize: 2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <Vanta ref={vantaRef}>
      <span>Foreground content goes here</span>
    </Vanta>
  );
};
export default Clouds;
