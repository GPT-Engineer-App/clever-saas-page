import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color={useColorModeValue("gray.700", "white")} textAlign={["center", "center", "left", "left"]}>
            Innovative Cloud Solutions for Your Business
          </Heading>
          <Heading as="h2" size="md" color={useColorModeValue("gray.800", "gray.200")} opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Take your business to the next level with our state-of-the-art cloud platform.
          </Heading>
          <Button borderRadius="8px" py="4" px="4" lineHeight="1" size="md" rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid" boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)">
            Get Started
          </Button>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          {/* TODO: Replace "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEwMTc3MzM4fDA&ixlib=rb-4.0.3&q=80&w=1080" with actual image url */}
          <Image src="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEwMTc3MzM4fDA&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign="center" mb={20}>
        <Heading as="h3" size="lg">
          Why Choose Us?
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")}>Our cloud solutions are designed to be fast, reliable, and secure, ensuring that your business stays ahead in today's competitive market.</Text>
        <Stack direction={"row"} justify="center" spacing={6}>
          <Feature icon={<FaCloud />} text="Scalable Cloud Infrastructure" />
          <Feature icon={<FaRocket />} text="Rapid Deployment" />
        </Stack>
      </Stack>
    </Container>
  );
};

const Feature = ({ icon, text }) => {
  return (
    <Stack align="center">
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("teal.500", "teal.300")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default Index;
