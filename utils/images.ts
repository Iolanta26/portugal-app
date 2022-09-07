import Resizer from "react-image-file-resizer";

export type ImageUtilsErrorType = "incorrect_ouput_type";

export class ImageUtilsError extends Error {
  type: ImageUtilsErrorType;

  constructor(type: ImageUtilsErrorType) {
    super();
    Object.setPrototypeOf(this, ImageUtilsError.prototype);
    this.type = type;
  }
}

export const getImgSizeInMB = (absoluteBytes: number) =>
  absoluteBytes / 1048576;

export function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      80,
      0,
      (base64) => {
        if (typeof base64 == "string") {
          resolve(base64);
        } else {
          reject(new ImageUtilsError("incorrect_ouput_type"));
        }
      },
      "base64"
    );
  });
}

export const getFileFromBase64 = async (
  base64String: string,
  fileName = "image",
  options?: FilePropertyBag
): Promise<File> => {
  const newOptions = {
    lastModified: new Date().getTime(),
    type: "image/png",
    ...options,
  };
  const response = await fetch(base64String);
  const blob = await response.blob();
  return new File([blob], fileName, newOptions);
};
