import { useState } from "react";
import styled from "styled-components";

import { PlaceCard } from "../components";
import { PLACES } from "../dummy-data";
import { RegionVisual } from "../types";

type Props = {
  regionVisual: RegionVisual;
};

const Search = ({}: Props) => {
  const [searchPlace, setSearchPlace] = useState("");

  const searchPlaces = PLACES.filter((place) => {
    if (place.placeName.toLowerCase().includes(searchPlace.toLowerCase())) {
      return (
        <PlaceCard
          place={place}
          regionVisual={place.visual as RegionVisual}
          style="image_only"
        />
      );
    } else if (
      place.location.toLowerCase().includes(searchPlace.toLowerCase())
    ) {
      return (
        <PlaceCard
          place={place}
          regionVisual={place.visual as RegionVisual}
          style="image_only"
        />
      );
    }
  });

  return (
    <>
      <SearchMainContainer>
        <SearchBarWrapper>
          <SearchInput
            type="text"
            onChange={(event) => {
              setSearchPlace(event.target.value);
            }}
            placeholder="Search locations"
          />
          <SearchIcon src="./search.svg" alt="search" />
        </SearchBarWrapper>
      </SearchMainContainer>
      <FlexWrapper>
        <AllItems>
          {searchPlaces.map((place) => {
            return (
              <PlaceCardContainer key={place.id}>
                <PlaceCard
                  place={place}
                  regionVisual={place.visual as RegionVisual}
                  style="image_only"
                />
              </PlaceCardContainer>
            );
          })}
        </AllItems>
      </FlexWrapper>
    </>
  );
};

export default Search;

const SearchMainContainer = styled.div`
  position: relative;
  top: 50px;
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover input {
    width: 250px;
    height: 50px;
    background: white;
    border-radius: 10px;

    ::placeholder {
      color: black;
    }
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 70px;
  height: 70px;
  background: none;
  border: 2px solid #ffd52d;
  border-radius: 50px;
  box-sizing: border-box;
  font-size: 16px;
  color: black;
  outline: none;
  transition: 0.5s;

  ::placeholder {
    color: white;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: #ffd52d;
  transition: 0.2s;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceCardContainer = styled.div`
  display: flex;
`;

const AllItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin-top: 10px;
  padding-top: 150px;
  padding-bottom: 100px;
`;
