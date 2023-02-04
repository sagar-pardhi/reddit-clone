import AuthModel from "@/components/Modal/Auth/AuthModel";
import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user: any
};

export default function RightContent({user}: RightContentProps) {
  return (
    <>
      <AuthModel />
      <Flex justify="center" align="center">
        {user ? <Button onClick={() => signOut(auth)}>Logout</Button> : <AuthButtons />}
      </Flex>
    </>
  );
}
