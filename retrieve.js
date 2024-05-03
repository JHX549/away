// Retrieve the uploaded image data from localStorage
let uploadedImage = localStorage.getItem('uploadedImage');

// Set the src attribute of the uploadedImage element to the uploaded image data
if (uploadedImage) {
  document.getElementById('uploadedImage').src = uploadedImage;
}