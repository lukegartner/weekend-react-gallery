import GalleryItem from "./GalleryItem";

const GalleryList = ({ gallery, getGallery }) => {
  return (
    <div className="gallery-list">
      {gallery.map((itemData) => (
        <GalleryItem
          key={itemData.id}
          itemData={itemData}
          getGallery={getGallery}
        />
      ))}
    </div>
  );
};

export default GalleryList;
