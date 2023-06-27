import { useState } from "react";

const GalleryItem = ({ itemData, getGallery }) => {
  const { id, path, description, likes } = itemData;
  const [showDescription, setShowDescription] = useState(false);

  const addLike = () => {
    fetch(`/gallery/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(getGallery())
      .catch((err) => console.error(err));
  };

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
      <button onClick={addLike}>like</button>
      <span>{likes}</span>
    </div>
  );
};

export default GalleryItem;
