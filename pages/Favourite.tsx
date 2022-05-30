import React, { useContext, useEffect, useState } from "react";
import { Place, RegionVisual } from "../types";
import { AppContext } from "../components/store/appContext";

type Props = {
  place: Place;
  regionVisual: RegionVisual;
};

const Favourite = () => {
  const [list, setList] = useState([]);
  const { selectedFavouritePlace, setSelectedFavouritePlace } =
    useContext(AppContext);

  const { placeName, location, placeDesc } = selectedFavouritePlace;

  console.log(selectedFavouritePlace);

  return (
    <div>
      <div></div>
      <div>{placeName}</div>
      <div>{location}</div>
      <div>{placeDesc}</div>
    </div>
  );
};

export default Favourite;
