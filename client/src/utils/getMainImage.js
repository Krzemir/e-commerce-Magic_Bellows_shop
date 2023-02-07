export const getMainImage = (images) => {
  const mainImage = images.find(
    (image) => image.fileName.charAt(image.fileName.length - 5) === '1',
  );
  return mainImage.fileName;
};
