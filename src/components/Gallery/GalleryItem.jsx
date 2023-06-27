import { useState } from "react";

const GalleryItem = ({ itemData }) => {
  const { id, path, description, likes } = itemData;
  console.log(path);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div>
      <div
        className="content-container"
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        {showDescription && <span>{description}</span>}
        {!showDescription && <img src={path} />}
      </div>
      <button>like</button>
      <span>{likes}</span>
    </div>
  );
};

export default GalleryItem;
