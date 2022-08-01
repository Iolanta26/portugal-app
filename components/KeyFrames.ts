import { keyframes } from "styled-components";
import { theme } from "../theme";

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

export const SunRays = keyframes`
0%   {box-shadow: 
	0 0 6px ${theme.colors.brownPalette},
	0 0 0 6px ${theme.colors.orangePalette},
	0 0 0 10px ${theme.colors.greenPalette},
	0 0 0 14px ${theme.colors.bluePalette};}
50%  {box-shadow: 
	0 0 2px ${theme.colors.brownPalette},
	0 0 0 3px ${theme.colors.orangePalette},
	0 0 0 5px ${theme.colors.greenPalette},
	0 0 0 8px ${theme.colors.bluePalette};}
100% {box-shadow: 
	0 0 6px ${theme.colors.brownPalette},
	0 0 0 6px ${theme.colors.orangePalette},
	0 0 0 10px ${theme.colors.greenPalette},
	0 0 0 14px ${theme.colors.bluePalette};}
`;
