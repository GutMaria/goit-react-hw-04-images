import { useState } from 'react';
import css from './gallery-item.module.css';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ url, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const showModal = () => {
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false);
  }

    return (<>
      <li className={css.galleryItem} onClick={showModal}>
      <img src={url} alt={tags} />
    </li> 
      {isModalOpen && <Modal largeImageURL={largeImageURL} tags={tags} close={closeModal}/>}
      </>)
  }

export default ImageGalleryItem;