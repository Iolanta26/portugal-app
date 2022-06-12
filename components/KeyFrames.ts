import { keyframes } from "styled-components";

export const opacityAnimation = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const pictureMoveUp = keyframes`
0% {
	transform: translateY(0);
}
50% {
	transform: translateY(-140px);
}
100% {
	transform: translateY(0);
}
`;
