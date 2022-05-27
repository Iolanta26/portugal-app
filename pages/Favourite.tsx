import React from "react";
import { ListOfFavourites } from "../components/ListOfFavourites";
import { RegionVisual } from "../types";
import { NextRouter, withRouter } from "next/router";

type Props = {
  router: NextRouter;
  placeName: string;
  placeImage: string;
  location: string;
  placeDesc: string;
  regionVisual: RegionVisual;
};

const Favourite = ({ router }: Props) => {
  const { placeName, regionVisual } = router.query;
  return (
    <div>
      <ListOfFavourites />
    </div>
  );
};

export default withRouter(Favourite);
