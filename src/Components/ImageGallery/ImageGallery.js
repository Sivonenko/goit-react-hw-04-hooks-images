import React from 'react';
import PropsTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ array, onClick }) {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem items={array} onClick={onClick} />
    </ul>
  );
}

ImageGallery.PropsTypes = {
  array: PropsTypes.object,
};
