const saveButton = document.querySelector('.save-button');
const memoryDialog = document.querySelector('.memory-dialog');

saveButton.addEventListener('click', () => {
  memoryDialog.showModal();
});
