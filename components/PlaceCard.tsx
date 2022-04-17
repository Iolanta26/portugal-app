import styled from "styled-components";
import { Place } from "../types";

type Props = {
  placeName: string;
  placeImage: string;
  location: string;
};

export const PlaceCard = ({ placeImage, placeName, location }: Props) => {
  return (
    <Card>
      <PlaceImage src={placeImage} alt="place image" />
      <ShortDesc>
        <Name>{placeName}</Name>
        <Location>Location: {location}</Location>
      </ShortDesc>
      <Gradient></Gradient>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff5e8;
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 0;
`;

const ShortDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 5px;
  width: fit-content;
  z-index: 3;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;

const Location = styled.div`
  font-size: 10px;
  font-weight: 400;
`;

const Gradient = styled.div`
  position: absolute;
  width: 150px;
  height: 60px;
  background: linear-gradient(
    0deg,
    #2e70b2 14.13%,
    rgba(46, 112, 178, 0.66) 58.69%,
    rgba(46, 112, 178, 0) 100%
  );
  bottom: 0;
  border-radius: 15px;
`;

const PlaceImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;
`;
