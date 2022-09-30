import { InputAdornment } from "@mui/material";
import styled from "styled-components";
import {
  GeneralInput,
  GenericButton,
  RegionSelect,
  StyledImageInput,
  TextArea,
} from "../components";
import { theme } from "../theme";

const AddPlace = () => {
  return (
    <MainContainer>
      <FormContainer>
        <TextContainer>
          <SubText>Add your favourite place to eat</SubText>
        </TextContainer>
        <div
          style={{ fontSize: "14px", marginBottom: "20px", marginTop: "20px" }}
        >
          This section is in progress...
        </div>
        <GeneralInput placeholder="Type restaurant name" label="Restaurant" />
        <Space />
        <RegionSelect />
        <Space />
        <GeneralInput placeholder="Type city" label="City" />
        <Space />
        <GeneralInput
          placeholder="Instagram account (optional)"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InstaIcon src="./instagram.png" alt="instagram-icon" />
              </InputAdornment>
            ),
          }}
        />
        <SmallText>Click and upload your images here</SmallText>
        <ImageContainer>
          <StyledImageInput
            id="firstImage"
            onSetImage={(file) => console.log(file)}
          />
          <StyledImageInput
            id="firstImage"
            onSetImage={(file) => console.log(file)}
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImageInput
            id="firstImage"
            onSetImage={(file) => console.log(file)}
          />
          <StyledImageInput
            id="firstImage"
            onSetImage={(file) => console.log(file)}
          />
        </ImageContainer>
        <TextArea placeholder="Describe your experience" />
        <Space />
        <GenericButton
          onClick={() => {
            console.log("submit");
          }}
          text="Submit"
          regionVisual="central"
        />
      </FormContainer>
    </MainContainer>
  );
};

export default AddPlace;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: fit-content;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 50px;
`;

const Space = styled.div`
  height: 20px;
`;

const TextContainer = styled.div`
  display: flex;
`;

const SubText = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #b07420;
`;

const SmallText = styled.div`
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 7px;
  color: ${theme.colors.darkBluePalette};
`;

const ImageContainer = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-evenly;
  margin-bottom: 15px;
`;

const InstaIcon = styled.img`
  width: 17px;
`;
