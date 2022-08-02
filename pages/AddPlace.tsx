import styled from "styled-components";
import { GeneralInput } from "../components";

const AddPlace = () => {
  return (
    <MainContainer>
      <FormContainer>
        <GeneralInput placeholder="Type restaurant name" label="Restaurant" />
        <Space />
        <GeneralInput placeholder="Type city" label="City" />
        <Space />
        <select>
          <option value="north">North</option>
          <option value="lisbon">Greater Lisbon</option>
          <option>Central Portugal</option>
          <option>Alentejo</option>
          <option>Algarve</option>
        </select>
      </FormContainer>
    </MainContainer>
  );
};

export default AddPlace;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   background-color: red;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Space = styled.div`
  height: 20px;
`;
