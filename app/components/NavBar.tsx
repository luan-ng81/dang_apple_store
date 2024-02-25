import { Box, Button, Flex, Section, Text } from "@radix-ui/themes";
import { MdPhoneIphone } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

import React from "react";

const NavBar = () => {
  return (
    <Section>
      <Flex gap="3" justify="between">
        <Button size="4" variant="outline" color="gray">
          <MdPhoneIphone /> <Text>IPHONE 15</Text>
          <FaChevronDown />
        </Button>
        <Button size="4" variant="outline" color="gray">
          <MdPhoneIphone /> <Text>IPHONE 14</Text>
          <FaChevronDown />
        </Button>
        <Button size="4" variant="outline" color="gray">
          <MdPhoneIphone /> <Text>IPHONE 13</Text>
          <FaChevronDown />
        </Button>
        <Button size="4" variant="outline" color="gray">
          <MdPhoneIphone /> <Text>MACBOOK</Text>
          <FaChevronDown />
        </Button>
        <Button size="4" variant="outline" color="gray">
          <MdPhoneIphone /> <Text>WATCH</Text>
          <FaChevronDown />
        </Button>
        <Button size="4" variant="outline" color="gray">
          <MdPhoneIphone /> <Text>MAY CU</Text>
          <FaChevronDown />
        </Button>
      </Flex>
    </Section>
  );
};

export default NavBar;
