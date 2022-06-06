import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, PlaceCard } from "../components";
import { PLACES } from "../dummy-data/places";
import { RegionVisual } from "../types";

type Props = {
  regionVisual: string;
};

const Search = ({}: Props) => {
  const [searchPlace, setSearchPlace] = useState("");

  const searchPlaces = PLACES.filter((place) => {
    if (searchPlace === "") {
      return place;
    } else if (
      place.placeName.toLowerCase().includes(searchPlace.toLowerCase())
    ) {
      return (
        <PlaceCard place={place} regionVisual={place.visual as RegionVisual} />
      );
    } else if (
      place.location.toLowerCase().includes(searchPlace.toLowerCase())
    ) {
      return (
        <PlaceCard place={place} regionVisual={place.visual as RegionVisual} />
      );
    }
  }).map((place) => {
    return (
      <div key={place.id}>
        <PlaceCard place={place} regionVisual={place.visual as RegionVisual} />
      </div>
    );
  });

  return (
    <FlexContainer $isRow={true}>
      <SearchMainContainer>
        <SearchBarWrapper>
          <SearchInput
            type="text"
            onChange={(event) => {
              setSearchPlace(event.target.value);
            }}
            placeholder="Search locations"
          />
          <Icon src="./search.svg" alt="search" />
        </SearchBarWrapper>
      </SearchMainContainer>
      <AllItems>{searchPlaces}</AllItems>
    </FlexContainer>
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

const Icon = styled.img`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: #ffd52d;
  transition: 0.2s;
`;

// const PlaceCardDiv = styled.div`
//   diplay: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   background-color: blue;
//   width: fit-content;
// `;

const AllItems = styled.div`
  diplay: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  // background-color: green;
  width: 50%;
  padding-top: 150px;
  padding-bottom: 100px;
`;

// const ListOfPlaces = styled.div`
//   diplay: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: red;
// `;
