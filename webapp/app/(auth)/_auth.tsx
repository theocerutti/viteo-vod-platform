import React from "react";
import { Flex, FormControl, FormHelperText, FormLabel, Input, VStack } from "@chakra-ui/react";

const Auth = ({ mode }: { mode: string }) => {
  return (
    <Flex justifyContent="center">
      <VStack style={{ width: "50%" }}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </VStack>
    </Flex>
  );
};

export default Auth;
