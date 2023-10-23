"use client";

import { Container } from "@/components/reusable/layout/Container";
import styled from "styled-components";
import { getThemePropSelector } from "@/styles/utils";

const AuthContainer = styled(Container)`
  display: flex;
  background-color: ${getThemePropSelector("backgroundLevel2")};
  width: 40rem;
`;

export default AuthContainer;
