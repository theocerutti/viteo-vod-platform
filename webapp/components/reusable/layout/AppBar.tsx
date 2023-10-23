"use client";

import React from "react";
import styled from "styled-components";
import { getThemePropSelector } from "@/styles/utils";
import Image from "next/image";
import { Container } from "./Container";

type AppBarProps = {
  hasLogo: boolean;
  mode: "simple" | "full" | "compact";
  className?: string;
} & React.PropsWithChildren;

const StyledAppBar = styled.div<AppBarProps>`
  width: 100%;
  height: 100px;
  ${(props) => props.$transparent && `background-color: ${getThemePropSelector("border")}`};
`;

const AppBar = ({
  hasLogo = true,
  mode = "simple",
  transparent = false,
  className,
  ...rest
}: AppBarProps) => {
  return (
    <StyledAppBar {...rest} $transparent={transparent}>
      <Container style={{ alignContent: "flex-start", marginLeft: "1rem" }} $alignCenter>
        {hasLogo && <Image src="/icons/icon.png" alt="Logo" height={0} width={0} sizes="1" style={{ width: `8rem`, height: `50%` }} />}
      </Container>
    </StyledAppBar>
  );
};

export default AppBar;
