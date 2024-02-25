import { Box, Container, Flex, Text } from "@radix-ui/themes";
import React from "react";

const Header = () => {
  return (
    <Container size="2">
      <Flex justify="between" gap="3">
        <Box>Logo</Box>
        <Flex direction="column" className="border p-3 rounded-xl">
          <Text>87 Lê Văn Duyệt, P. 3, Q. Bình Thạnh, TP. HCM</Text>
          <Text>09.44.68.68.68 - 08.44.68.68.68</Text>
        </Flex>
        <Flex direction="column" className="border p-3 rounded-xl">
          <Text>87 Lê Văn Duyệt, P. 3, Q. Bình Thạnh, TP. HCM</Text>
          <Text>09.44.68.68.68 - 08.44.68.68.68</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
