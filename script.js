//your code here
const images = document.querySelectorAll('.image');

let selectedImage = null;

images.forEach((image) => {
  image.addEventListener('dragstart', () => {
    selectedImage = image;
    image.classList.add('selected');
  });

  image.addEventListener('dragend', () => {
    selectedImage = null;
    image.classList.remove('selected');
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  image.addEventListener('drop', () => {
    if (selectedImage !== image) {
      const selectedImageUrl = selectedImage.style.backgroundImage;
      const imageUrl = image.style.backgroundImage;

      selectedImage.style.backgroundImage = imageUrl;
      image.style.backgroundImage = selectedImageUrl;
    }
  });
});
