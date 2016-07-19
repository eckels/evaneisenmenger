//Filter Function

function filterItems(hashtag) {
  var selectedHashtag = hashtag;
  var allImages = document.getElementsByClassName("all");
  var selectedImages = document.getElementsByClassName(hashtag);
  var allImageIndex;
  var selectedImageIndex;

    for (allImageIndex = 0; allImageIndex < allImages.length; allImageIndex++) {
      allImages[allImageIndex].style.display = "none";
    }

    for (selectedImageIndex = 0; selectedImageIndex < selectedImages.length; selectedImageIndex++) {
      selectedImages[selectedImageIndex].style.display = "block";
    }

    var selectedTags = document.getElementsByClassName("tag");
    var tagIndex;

    for (tagIndex = 0; tagIndex < selectedTags.length; tagIndex++) {
      selectedTags[tagIndex].style.fontWeight = "normal";
    }

  var boldTag = document.getElementById(hashtag);
    boldTag.style.fontWeight = "bold";
}

//Modal Function

function imageClick(imageId) {
  var modal = document.getElementById('modalWindow');
  var displayImg = document.getElementById('modalImage');
  var caption = document.getElementById('modalCaption');
  var img = document.getElementById(imageId);
    modal.style.display = "block";
    displayImg.src = img.src;
    displayImg.alt = img.alt;
    caption.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];

function closeClick() {
  var modal = document.getElementById('modalWindow');
  modal.style.display = "none";
}
