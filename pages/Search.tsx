import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import styled, { StyledProps } from "styled-components";
import { PlaceCard } from "../components";
import { AppContext } from "../components/store";
import { PLACES } from "../dummy-data/places";
import { RegionVisual } from "../types";

type Props = {
  regionVisual: RegionVisual;
};

const Search = ({ regionVisual }: Props) => {
  const [searchPlace, setSearchPlace] = useState("");

  //   const { regionVisualColor, setRegionVisualColor } = useContext(AppContext);

  console.log("regionVisual: ", regionVisual);
  return (
    <>
      <SearchBarWrapper>
        <SearchInput
          type="text"
          onChange={(event) => {
            setSearchPlace(event.target.value);
          }}
          placeholder="Search locations"
        />
      </SearchBarWrapper>
      <ListOfPlaces>
        {PLACES.filter((place) => {
          if (searchPlace === "") {
            return place;
          } else if (
            place.placeName.toLowerCase().includes(searchPlace.toLowerCase())
          ) {
            return (
              <PlaceCard
                place={place}
                regionVisual={regionVisual as RegionVisual}
              />
            );
          } else if (
            place.location.toLowerCase().includes(searchPlace.toLowerCase())
          ) {
            return (
              <PlaceCard
                place={place}
                regionVisual={regionVisual as RegionVisual}
              />
            );
          }
        }).map((place) => {
          return (
            <div key={place.id}>
              <PlaceCard
                place={place}
                regionVisual={regionVisual as RegionVisual}
              />
            </div>
          );
        })}
      </ListOfPlaces>
    </>
  );
};

export default Search;

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
  color: #ffd52d;
  outline: none;
  transition: 0.5s;
`;

const ListOfPlaces = styled.div`
  margin-top: 100px;
`;
