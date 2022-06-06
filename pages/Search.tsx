import { useEffect, useState } from "react";
import styled from "styled-components";
import { PlaceCard } from "../components";
import { PLACES } from "../dummy-data/places";
import { getRegionById } from "../functions/functions";
import { RegionVisual } from "../types";

type Props = {
  regionVisual: string;
};

const Search = ({}: Props) => {
  const [searchPlace, setSearchPlace] = useState("");
  const [regionVisual, setRegionVisual] = useState<RegionVisual>();

  // useEffect(() => {
  //   switch (region?.regionName) {
  //     case "North":
  //       region.regionName === "North";
  //       setRegionVisual("north");
  //       break;
  //     case "Lisbon":
  //       region.regionName === "Lisbon";
  //       setRegionVisual("lisabon");
  //       break;
  //     case "Central Portugal":
  //       region.regionName === "Central Portugal";
  //       setRegionVisual("central");
  //       break;
  //     case "Alentejo":
  //       region.regionName === "Alentejo";
  //       setRegionVisual("alentejo");
  //       break;
  //     case "Algarve":
  //       region.regionName === "Algarve";
  //       setRegionVisual("algarve");
  //       break;
  //   }
  // }, [regionVisual]);

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
                regionVisual={place.visual as RegionVisual}
              />
            );
          } else if (
            place.location.toLowerCase().includes(searchPlace.toLowerCase())
          ) {
            return (
              <PlaceCard
                place={place}
                regionVisual={place.visual as RegionVisual}
              />
            );
          }
        }).map((place) => {
          return (
            <div key={place.id}>
              <PlaceCard
                place={place}
                regionVisual={place.visual as RegionVisual}
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
