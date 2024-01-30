import css from './gallery.module.css'
import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL, tags, largeImageURL }) => <ImageGalleryItem key={id} url={webformatURL} tags={tags} largeImageURL={largeImageURL} />)
  return <ul className={css.gallery}>
{elements}
</ul>
}

export default ImageGallery;