"use client";

import React, { CSSProperties } from "react";
import styled from "styled-components";
import { spacing } from "@/styles/theme";
import { getThemePropSelector } from "@/styles/utils";

type ContainerProps = {
  $center?: boolean;
  $alignCenter?: boolean;
  className?: string;
  style?: CSSProperties;
} & React.PropsWithChildren;

const Container = styled.div<ContainerProps>`
  display: flex;
  height: 100%;
  margin: ${spacing.sp8};
  padding: ${spacing.sp8};
  background-color: ${getThemePropSelector("backgroundLevel1")} ${(props) => props.$center && "justify-content: center;"} ${(props) => props.$alignCenter && "align-items: center;"}
`;

export {
  Container
};
