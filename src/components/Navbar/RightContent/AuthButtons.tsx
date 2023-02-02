import { Button } from "@chakra-ui/react";

export default function AuthButtons() {
  return (
    <>
      <Button
        variant="outline"
        h="28px"
        display={{ base: "none", sm: "flex" }}
        w={{ base: "70px", md: "110px" }}
        mr={2}
      >
        Log In
      </Button>
      <Button
        h="28px"
        display={{ base: "none", sm: "flex" }}
        w={{ base: "70px", md: "110px" }}
        mr={2}
      >
        Sign Up
      </Button>
    </>
  );
}
