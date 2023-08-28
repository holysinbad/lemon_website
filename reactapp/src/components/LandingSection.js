import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sri!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar src="https://i.pravatar.cc/150?img=7" />
      <p>
      {greeting}
      </p>
      <Heading
        size="lg"
        color="white"
        fontWeight="bold"
        letterSpacing="wide"
      >
        {bio1} 
        
      </Heading>
      <Heading
        size="lg"
        color="white"
        fontWeight="bold"
        letterSpacing="wide"
      >
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
