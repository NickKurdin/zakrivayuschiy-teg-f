const likeIcons = document.querySelectorAll('.like-icon');
const likeButtons = document.querySelectorAll('.card__like-button');
const iconButtons = document.querySelectorAll('.card__icon-button');

iconButtons.forEach((iconButton, index) => {
  iconButton.addEventListener('click', () => {
    toggleLike(likeIcons[index], likeButtons[index]);
  });
});

likeButtons.forEach((likeButton, index) => {
  likeButton.addEventListener('click', () => {
    toggleLike(likeIcons[index], likeButton);
  });
});

function toggleLike(icon, button) {
  icon.classList.toggle('is-liked');
  const isLiked = icon.classList.contains('is-liked');

  window.setTimeout(() => {
    button.querySelector('.button__text').textContent = isLiked
      ? 'Unlike'
      : 'Like';
  }, 500);
}
