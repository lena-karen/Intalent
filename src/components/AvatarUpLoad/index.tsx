import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useIntl } from "react-intl";
import { Avatar, Button } from "@mui/material";
import Title from "../Title";

import "./index.scss";

export default function AvatarUpload() {
  const [images, setImages] = useState([]);
  const [isUploaded, setIsUpLoaded] = useState(false);
  console.log(isUploaded);
  const maxNumber = 1;
  const intl = useIntl();
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
    setIsUpLoaded(true);
  };
  return (
    <div className="avatar__upload">
      <Title type="h3"> {intl.formatMessage({ id: "profile.avatar" })} </Title>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          //   onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          //   isDragging,
          dragProps,
        }) => (
          <div className="avatar__upload__wrapper">
            {/* <Button onClick={onImageRemoveAll}>Remove all images</Button> */}

            {!isUploaded ? (
              <Avatar sx={{ width: 70, height: 70 }} />
            ) : (
              <>
                {imageList.map((image, index) => (
                  <div key={index} className="avatar__upload__wrapper__item">
                    <div className="image-item__btn-wrapper">
                      <Avatar
                        sx={{ width: 70, height: 70 }}
                        src={image.dataURL}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}

            {!isUploaded ? (
              <Button
                variant="outlined"
                sx={{ color: "gray", borderColor: "gray" }}
                onClick={onImageUpload}
                {...dragProps}
              >
                {intl.formatMessage({ id: "profile.upload" })}
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={() => onImageUpdate(0)}
                sx={{ color: "gray", borderColor: "gray" }}
              >
                {intl.formatMessage({ id: "profile.edit" })}
              </Button>
            )}

            <Button
              variant="outlined"
              onClick={() => onImageRemove(0)}
              sx={{ color: "gray", borderColor: "gray" }}
            >
              {intl.formatMessage({ id: "profile.delete" })}
            </Button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
