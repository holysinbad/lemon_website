import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack spacing={8}>
      <Image
        alt="Project image"
        src={imageSrc}
        width="75%"
        height="250px"
        borderRadius="lg"
      />
      <VStack>
        <Heading fontSize="lg" fontWeight="600">
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
      </VStack>
      <HStack mt={4}>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
