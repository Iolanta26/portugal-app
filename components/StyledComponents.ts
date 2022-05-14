import styled from "styled-components";

export const BackWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 15px;
  left: 15px;
  position: fixed;
`;

export const FlexContainer = styled.div`
  dipslay: flex;
  justify-content: center;
  flex-direction: center;
  margin: 0;
  padding: 0;
`;

export const PlaceName = styled.div`
  font-family: "Rochester", cursive;
  color: white;
  font-size: 30px;
`;

export const LocationName = styled.div`
  font-size: 16px;
  line-height: 30px;
`;

export const Description = styled.div`
  width: 85%;
  text-align: center;
  margin-bottom: 10px;
`;
