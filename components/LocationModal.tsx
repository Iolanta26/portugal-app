import styled from "styled-components";
import { FlexContainer } from "./StyledComponents";

type Props = {
  // placeName: string;
  // placeImage: string;
  // location: string;
  // regionVisual: string;
  // description: string;
  onClose: () => void;
};

export const LocationModal = ({
  // placeImage,
  // placeName,
  // location,
  // description,
  onClose,
}: Props) => {
  return (
    <FlexContainer>
      <div> {/* <ImageOfPlace src={placeImage} alt="place image" /> */}</div>
      {/* <div>{placeName}</div>
      <div>{location}</div>
      <div>{description}</div> */}
      LocationModal
      <button onClick={onClose}>Close</button>
    </FlexContainer>
  );
};

const ImageOfPlace = styled.img`
  width: 200px;
`;
