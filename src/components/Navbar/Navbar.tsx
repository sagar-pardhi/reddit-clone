import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <Flex bg="white" h="44px" p="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" h="30px" />
        <Image
          src="/images/redditText.svg"
          h="46px"
          display={{
            base: "none",
            md: "unset",
          }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      {/* <RightContent /> */}
    </Flex>
  );
}
