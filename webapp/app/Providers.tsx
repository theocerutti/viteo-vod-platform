"use client";

import StyledComponentsRegistry from "@/styles/registry";
import { themes, ThemeType } from "@/styles/theme";
import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";

const Providers = (props: React.PropsWithChildren) => {
  const themeType: ThemeType = "light";
  return (
    <StyledComponentsRegistry>
      <ColorModeScript initialColorMode={themeType} />
      <CacheProvider>
        <ChakraProvider theme={extendTheme({ colors: themes[themeType] })}>
          <ThemeProvider theme={themes[themeType]}>
            {props.children}
          </ThemeProvider>
        </ChakraProvider>
      </CacheProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
