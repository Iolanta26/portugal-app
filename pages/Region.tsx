import styled from "styled-components";
import { REGIONS } from "../dummy-data/regions";
import { NextRouter, useRouter, withRouter } from "next/router";
import back from "../public/back-icon.svg";
import Image from "next/image";

type Props = {
  router: NextRouter;
};

const Region = ({ router }: Props) => {
  const { regionId } = router.query;
  console.log(regionId);

  const getRegionById = (regionId: string) =>
    REGIONS.find((region) => region.id === regionId);

  const region = getRegionById(regionId as string);

  // const { regionName, regionDesc, mainImage } = region;

  return (
    <div>
      <BackWrapper onClick={() => router.push({ pathname: "./ChooseRegion" })}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <RegionImageWrapper>
        <RegionImage src={region?.mainImage} alt="region" />
      </RegionImageWrapper>

      <DescriptionWrapper>
        <DescriptionContainer>
          <RegionName>{region?.regionName}</RegionName>
          <div>{region?.regionDesc}</div>
        </DescriptionContainer>
        <ButtonWrapper>
          <ExploreBtn>Explore more</ExploreBtn>
        </ButtonWrapper>
      </DescriptionWrapper>

      {/* <DescriptionWrapper>
        <DescriptionContainer>
          <RegionName>{block.regionName}</RegionName>
          <div>{block.regionDesc}</div>
        </DescriptionContainer>
        <ButtonWrapper>
          <ExploreBtn>Explore more</ExploreBtn>
        </ButtonWrapper>
      </DescriptionWrapper> */}
    </div>
  );
};

export default withRouter(Region);

const BackWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
`;

const RegionImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 700px;
`;

const RegionImage = styled.img`
  position: absolute;
  height: 500px;
  width: 500px;
  top: 0%;
  left: 0%;
  object-fit: cover;
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  top: 470px;
  left: 0%;
  height: 475px;
  // width: 500px;
  background: #248cf9;
  border-radius: 50px;
`;

const DescriptionContainer = styled.div`
  margin: 20px 24px;
`;

const RegionName = styled.div`
  font-size: 34px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ExploreBtn = styled.button`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  font-size: 15px;
  padding: 20px 25px;
`;
