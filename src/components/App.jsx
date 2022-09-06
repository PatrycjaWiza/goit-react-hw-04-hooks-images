import styles from '../index.css';
import { useState, useEffect } from 'react';
import * as api from '../Services/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [searchWord, setSearchWord] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const renderImages = async (searchQuery, page) => {
    try {
      setLoading(true);
      const fetchedImages = await api.fetchImagesWithQuery(searchQuery, page);
      setImages([...images, ...fetchedImages]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    renderImages(searchWord, page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord, page]);

  const getSearchWord = searchWord => {
    setImages([]);
    setSearchWord(searchWord);
    setPage(1);
  };

  const loadMoreBtn = () => {
    setPage(page + 1);
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={styles.App}>
      {showModal && (
        <Modal images={images} closeModal={closeModal} escModal={closeModal}>
          <img src={largeImageURL} alt="enlarged" />
        </Modal>
      )}

      {error && <p>{error.message}</p>}
      <Searchbar onSubmit={getSearchWord} />
      {isLoading && <Loader />}

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {images.length > 0 && <Button loadMore={loadMoreBtn} />}
    </div>
  );
};
