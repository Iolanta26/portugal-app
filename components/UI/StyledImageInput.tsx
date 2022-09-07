import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import Image from "next/image";

import { ImageInput } from "./ImageInput";
import { getBase64, getImgSizeInMB } from "../../utils";

import cameraIcon from "/public/camera-icon.svg";
import closeIcon from "/public/x.svg";

type Props = {
  id: string;
  onSetImage: (file: File | null) => void;
  defaultImage?: File | string | null;
  isError?: boolean;
};

export const StyledImageInput = ({
  id,
  onSetImage,
  defaultImage,
  isError,
}: Props) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  useEffect(() => {
    if (defaultImage instanceof File)
      getBase64(defaultImage).then((val) => setImagePreview(val));
    else if (typeof defaultImage === "string") setImagePreview(defaultImage);
  }, []);

  return (
    <>
      {imagePreview ? (
        <PreviewContainer htmlFor={id}>
          <ImagePreview
            src={imagePreview}
            alt="image-preview"
            draggable={false}
          />
          <CloseButton
            onClick={() => {
              setImagePreview(null);
              onSetImage(null);
            }}
          >
            <Image src={closeIcon} alt="close-icon" />
          </CloseButton>
        </PreviewContainer>
      ) : (
        <UploadImageContainer htmlFor={id} $isError={isError}>
          <Image src={cameraIcon} alt="camera-icon" />
          <ImageInput
            id={id}
            isHidden
            onChange={(file) => {
              if (file && getImgSizeInMB(file?.size) <= 5) {
                onSetImage(file);
                setImagePreview(file ? URL.createObjectURL(file) : "");
              } else {
                <div>Image size is too big</div>;
              }
            }}
          />
        </UploadImageContainer>
      )}
    </>
  );
};

const PreviewContainer = styled.label`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  user-select: none;
`;

const ImagePreview = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
  border-radius: 15px;
  object-fit: cover;
`;

const UploadImageContainer = styled.label<{
  $isError?: boolean;
}>`
  background: transparent;
  width: 80px;
  height: 80px;
  border: 1px solid rgba(252, 183, 67, 1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  ${({ $isError }) =>
    $isError &&
    css`
      border: 2px dashed #eb5757;
    `}
`;

const CloseButton = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: white;
  color: red;
  width: 24px;
  height: 24px;
  border-radius: 10px;
  cursor: pointer;
`;
