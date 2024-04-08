const footElement = document.querySelector('.foot');
const contentElement = document.querySelector('#content');

if (footElement && contentElement) {
  contentElement.parentNode.insertBefore(footElement, contentElement);
}

