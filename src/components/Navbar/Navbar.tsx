import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import Directory from "./Directory/Directory";
import useDirectory from "../../hooks/useDirectory";
import { defaultMenuItem } from "../../atoms/directoryMenuItemAtom";

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const { onSelectMenuItem } = useDirectory();

  return (
    <Flex
      bg="white"
      h="44px"
      p="6px 12px"
      justify={{
        md: "space-between",
      }}
    >
      <Flex
        align="center"
        w={{
          base: "40px",
          md: "auto",
        }}
        mr={{
          base: 0,
          md: 2,
        }}
        cursor="pointer"
        onClick={() => onSelectMenuItem(defaultMenuItem)}
      >
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
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
}
