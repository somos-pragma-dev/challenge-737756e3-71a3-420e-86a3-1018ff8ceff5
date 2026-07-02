export default function imageLoader(imageName) {
  return new Promise(resolve => {
    const img = new Image();
    img.src = `./assets/images/${imageName}`;
    img.onload = () => resolve(img.src);
  });
}