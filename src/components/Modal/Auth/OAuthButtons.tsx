import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

export default function OAuthButtons() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" w="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" h="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other provider</Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
}
