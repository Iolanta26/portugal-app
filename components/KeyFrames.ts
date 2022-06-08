import { keyframes } from "styled-components";

export const opacityAnimation = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const tramMove = keyframes`
0% {
  transform:translate(0px, 0);
}
100% {
  transform: translate(-80px, 0);
}
`;
