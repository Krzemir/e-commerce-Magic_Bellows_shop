export const getMainImage = (images) => {
  // console.log(images[0].fileName.charAt(images[0].fileName.length - 5));
  const mainImage = images.find(
    (image) => image.fileName.charAt(image.fileName.length - 5) === '1',
  );
  return mainImage.fileName;
};
