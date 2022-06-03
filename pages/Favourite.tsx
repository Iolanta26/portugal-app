import Image from "next/image";
import React, { useContext, useState } from "react";
import { BackWrapper, PlaceCard } from "../components";
import { AppContext } from "../components/store";
import { Place, RegionVisual } from "../types";

import back from "../public/back-icon.svg";
import { useRouter } from "next/router";
import styled from "styled-components";

type Props = {
  place: Place;
  regionVisual: RegionVisual;
  selectedFavouritePlace: Place;
};

const Favourite = ({}: Props) => {
  const router = useRouter();
  const { selectedFavouritePlace, regionVisualColor } = useContext(AppContext);

  console.log(selectedFavouritePlace);
  console.log("regionVisual:", regionVisualColor);

  return (
    <div>
      <BackWrapper onClick={() => router.back()}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <TextWrapper>
        <Places>Your favourite locations</Places>
      </TextWrapper>
      <div>
        <PlaceCard
          regionVisual={regionVisualColor as RegionVisual}
          place={selectedFavouritePlace}
        />
      </div>
    </div>
  );
};

const TextWrapper = styled.div`
  margin-top: 50px;
  color: #13406c;
  width: 300px;
`;

const Places = styled.div`
  font-size: 30px;
`;

export default Favourite;
