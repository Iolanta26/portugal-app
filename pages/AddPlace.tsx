import styled from "styled-components";
import { Input } from "../components";

const AddPlace = () => {
  return (
    <FormContainer>
      <Input placeholder="Type your favourite restaurant" />
    </FormContainer>
  );
};

export default AddPlace;

const FormContainer = styled.div``;
