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

const Favourite = ({
  router,

  placeDesc,
  placeImage,
  location,
}: Props) => {
  const { placeName, regionVisual } = router.query;
  return (
    <div>
      <ListOfFavourites
        placeName={placeName}
        placeImage={placeImage}
        location={location}
        placeDesc={placeDesc}
        regionVisual={regionVisual}
      />
    </div>
  );
};

export default withRouter(Favourite);
