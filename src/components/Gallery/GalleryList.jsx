import GalleryItem from "./GalleryItem";

const GalleryList = ({ gallery }) => {
  return (
    <div className="gallery-list">
      {gallery.map((itemData) => (
        <GalleryItem itemData={itemData} />
      ))}
    </div>
  );
};

export default GalleryList;
