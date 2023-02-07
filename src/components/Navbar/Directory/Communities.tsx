import { useState } from "react";
import CreateCommunityModal from "@/components/Modal/CreateCommunity/CreateCommunityModal";
import { Flex, MenuItem, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";

type Props = {};

export default function Communities({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        w="100%"
        fontSize="10pt"
        _hover={{
          bg: "gray.100",
        }}
        onClick={() => setOpen(true)}
      >
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
}
