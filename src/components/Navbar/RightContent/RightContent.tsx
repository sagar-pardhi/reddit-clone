import AuthModel from "@/components/Modal/Auth/AuthModel";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";

type Props = {};

export default function RightContent({}: Props) {
  return (
    <>
      <AuthModel />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
}
