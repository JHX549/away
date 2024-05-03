// Check if the current page is index.html
if (window.location.pathname === '/index.html') {
    // Menu fade in
    window.addEventListener('scroll', function() {
        var menubox = document.getElementById('menubox');
        if (window.scrollY > 100) {
            if (menubox.style.display == 'none') {
                menubox.style.display = 'block';
                fadeIn(menubox); // Call fadeIn function to add fade-in effect
            }
        } else {
            menubox.style.display = 'none';
        }
    });
}

function fadeIn(element) {
    var opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    },);
}

// Event listener for changing opacity of both logobox and sentence
window.addEventListener('scroll', function() {
    var logobox = document.getElementById('logobox');
    var sentence = document.getElementById('sentence');
    var scrollPosition = window.scrollY;

    // Calculate opacity based on scroll position
    var opacity = 1 - (scrollPosition / (window.innerHeight * 3));
    opacity = Math.max(0, opacity); // Ensure opacity is not negative
    opacity = Math.min(1, opacity); // Ensure opacity is not greater than 1

    // Set the opacity of logobox and sentence
    logobox.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places for smoother transition
    sentence.style.opacity = opacity.toFixed(2);
});

// Event listener for changing position of logobox
window.addEventListener('scroll', function() {
    var logobox = document.getElementById('logobox');
    var scrollPosition = window.scrollY;

    // Calculate opacity based on scroll position
    var opacity = 1 - (scrollPosition / (window.innerHeight * 5));
    opacity = Math.max(0, opacity); // Ensure opacity is not negative
    opacity = Math.min(1, opacity); // Ensure opacity is not greater than 1

    // Set the opacity of logobox
    logobox.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places for smoother transition

    // Calculate the new top position for the logobox based on scroll position
    var newPosition = 50 + scrollPosition * 1; // Adjust the scroll speed as needed

    // Apply the new position to the logobox
    logobox.style.top = newPosition + 'vh';
});


  window.addEventListener('scroll', function() {
    var logobox = document.getElementById('logobox');
    var scrollPosition = window.scrollY;

    // Calculate opacity based on scroll position
    var opacity = 1 - (scrollPosition / window.innerHeight * 5);
    opacity = Math.max(0, opacity); // Ensure opacity is not negative
    opacity = Math.min(1, opacity); // Ensure opacity is not greater than 1

    // Set the opacity of logobox
    logobox.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places for smoother transition

    // Calculate the new top position for the logobox based on scroll position
  var newPosition = 50 + scrollPosition * 1; // Adjust the scroll speed as needed

  // Apply the new position to the logobox
  logobox.style.top = newPosition + 'vh';

  });

// upload and store image on index.html
document.addEventListener("DOMContentLoaded", function() {
    let inputFile = document.getElementById("input-file");

    inputFile.onchange = function(){
        // Get the uploaded image file
        let uploadedFile = inputFile.files[0];
        
        if (uploadedFile) {
            // Create a FileReader object to read the uploaded image
            let reader = new FileReader();
            
            // Set up the FileReader onload event
            reader.onload = function(event) {
                // Get the data URL representing the uploaded image
                let imageUrl = event.target.result;

                // Store the image URL in localStorage
                localStorage.setItem('uploadedImage', imageUrl);

                // Redirect to poster.html
                window.location.href = 'poster.html';
            };
            
            // Read the uploaded image as a data URL
            reader.readAsDataURL(uploadedFile);
        }
    };
});

// display on poster.index
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the uploaded image URL from localStorage
    let uploadedImageUrl = localStorage.getItem('uploadedImage');
    
    // Get the uploadedImage element
    let uploadedImageElement = document.getElementById("uploadedImage");

    // Set the source of the uploadedImage element to the uploaded image URL
    if (uploadedImageUrl) {
        uploadedImageElement.src = uploadedImageUrl;
    }
});

// resize and drag the image within the box
document.addEventListener("DOMContentLoaded", function() {
    let uploadedImage = document.getElementById("uploadedImage");
    let offsetX, offsetY;

    // Add mousedown event listener
    uploadedImage.addEventListener("mousedown", function(event) {
        event.preventDefault();

        // Calculate offset from mouse to image corner
        offsetX = event.clientX - uploadedImage.getBoundingClientRect().left;
        offsetY = event.clientY - uploadedImage.getBoundingClientRect().top;

        // Add mousemove event listener
        document.addEventListener("mousemove", dragImage);
    });

    // Add mouseup event listener
    document.addEventListener("mouseup", function() {
        // Remove mousemove event listener
        document.removeEventListener("mousemove", dragImage);
    });

    // Function to handle image dragging
    function dragImage(event) {
        // Calculate new image position
        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;

        // Update image position
        uploadedImage.style.left = newX + "px";
        uploadedImage.style.top = newY + "px";
    }
});

// Apply filter
// var image = document.getElementById('uploadedImage');
// var filterControls = document.querySelectorAll('input[type=range]');

// function applyFilter() {
//     var computedFilters = ''; // Always apply grayscale filter
//     filterControls.forEach(function(item, index) {
//         computedFilters += ' ' + item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ')';
//     });
//     image.style.filter = computedFilters;
// }

//typestatus
document.addEventListener("DOMContentLoaded", function() {
    const postertitle = document.getElementById("postertitle");
    const typebox = document.getElementById("typebox");
    const controlbars = document.getElementById("controlbars");
    const readybutton = document.getElementById("readybutton");
    const uploadedImage = document.getElementById("uploadedImage");
    const letgo = document.getElementById('letgo');
    const preserve = document.getElementById('preserve');
    const posterlogo = document.getElementById('posterlogo')
    let textColorState = 0; // 0: black, 1: white,
    let isReadyState = false;
    let isLogoState = false;

    typestatus.addEventListener("click", function() {
      textColorState = (textColorState + 1) % 2;

      switch (textColorState) {
        case 0:
          postertitle.style.color = "black";
          postertitle.style.textShadow = "none";
          break;
        case 1:
          postertitle.style.color = "white";
          postertitle.style.textShadow = "none";
          break;
      }
      // Toggle logo when type status is clicked
      posterlogo.src = isLogoState ? "images/menu.png" : "images/whitemenu.png";
      isLogoState = !isLogoState; // Toggle the logo state
    });
    readybutton.addEventListener("click", function() {
        if (isReadyState) {
          controlbars.style.display = "block";
          typebox.style.display = "block";
          letgo.style.display= "none";
          preserve.style.display = "none";
          readybutton.textContent = "ready";
        } else {
          controlbars.style.display = "none";
          typebox.style.display = "none";
          letgo.style.display= "block";
          preserve.style.display = "block";
          readybutton.textContent = "longer";
        }
        isReadyState = !isReadyState; // Toggle the state
      });
});

// Apply filter
function applyFilter() {
    const uploadedImage = document.getElementById("uploadedImage");
    const filterControls = document.querySelectorAll('.controlbar');

    let computedFilters = ''; // Initialize with grayscale filter
    filterControls.forEach(function(item) {
        computedFilters += ' ' + item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ')';
    });
    uploadedImage.style.filter = computedFilters;
}

document.addEventListener("DOMContentLoaded", function() {
    const preserveButton = document.getElementById("preserve");

    preserveButton.addEventListener("click", function() {
        const posterbox = document.getElementById("posterbox");

        // Use html2canvas to capture posterbox content and convert it to an image
        html2canvas(posterbox).then(function(canvas) {
            // Apply filters to the canvas
            const ctx = canvas.getContext('2d');
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            // Apply filters to the ImageData
            applyImageDataFilter(imageData);

            // Put the modified image data back to the canvas
            ctx.putImageData(imageData, 0, 0);

            // Convert canvas to JPEG image data URL
            const imageDataURL = canvas.toDataURL("image/jpeg", 1.0); // Use maximum quality

            // Create a temporary link element to trigger the download
            const a = document.createElement("a");
            a.href = imageDataURL;
            a.download = "poster.jpg";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            window.location.href = "gallery.html";
        });
    });
});

// Function to apply filters to ImageData
function applyImageDataFilter(imageData) {
    // Get filter values
    const brightness = parseInt(document.getElementById('brightness').value);
    const contrast = parseInt(document.getElementById('contrast').value);
    const invert = parseInt(document.getElementById('invert').value);

    // Apply filters to the ImageData
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Apply brightness
        imageData.data[i] += brightness; // Red
        imageData.data[i + 1] += brightness; // Green
        imageData.data[i + 2] += brightness; // Blue

        // Apply contrast
        imageData.data[i] = contrast * (imageData.data[i] - 128) + 128; // Red
        imageData.data[i + 1] = contrast * (imageData.data[i + 1] - 128) + 128; // Green
        imageData.data[i + 2] = contrast * (imageData.data[i + 2] - 128) + 128; // Blue
    }
}


// // Check if the current page is index.html
// if (window.location.pathname === '/index.html') {
//     // Menu fade in
//     window.addEventListener('scroll', function() {
//         var menubox = document.getEle// Menu fade in
//         window.addEventListener('scroll', function() {
//           var menubox = document.getElementById('menubox');
//           if (window.scrollY > 100) {
//               if (menubox.style.display !== 'block') {
//                   menubox.style.display = 'block';
//                   fadeIn(menubox); // Call fadeIn function to add fade-in effect
//               }
//           } else {
//               menubox.style.display = 'none';
//           }
//         });
        
//         function fadeIn(element) {
//           var opacity = 0;
//           var intervalID = setInterval(function() {
//               if (opacity < 1) {
//                   opacity += 0.1;
//                   element.style.opacity = opacity;
//               } else {
//                   clearInterval(intervalID);
//               }
//           }, 50);
//         }mentById('menubox');
//         if (window.scrollY > 100) {
//             if (menubox.style.display !== 'block') {
//                 menubox.style.display = 'block';
//                 fadeIn(menubox); // Call fadeIn function to add fade-in effect
//             }
//         } else {
//             menubox.style.display = 'none';
//         }
//     });
// }

// function fadeIn(element) {
//     var opacity = 0;
//     var intervalID = setInterval(function() {
//         if (opacity < 1) {
//             opacity += 0.1;
//             element.style.opacity = opacity;
//         } else {
//             clearInterval(intervalID);
//         }
//     }, 50);
// }