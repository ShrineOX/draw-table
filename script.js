const rowInput = document.querySelector('#row-input');
const colInput = document.querySelector('#col-input');
const grid = document.querySelector('.grid');

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  // Validation for empy inputs
  if (rowInput.value === '') displayError(rowInput.closest('.input-group'));
  if (colInput.value === '') displayError(colInput.closest('.input-group'));

  const rows = +rowInput.value;
  const cols = +colInput.value;

  // change CSS config for the grid
  grid.style.setProperty('--row-num', rows);
  grid.style.setProperty('--col-num', cols);

  grid.innerHTML = '';
  for (let i = 0; i < rows * cols; i++) {
    grid.insertAdjacentHTML('beforeend', `<div class="grid-item"></div>`);
  }
});

function displayError(elt, msg = 'This field is required!') {
  // only insert error message if they weren't exist
  if (elt.querySelector('.error-message')) return;
  elt.insertAdjacentHTML('beforeend', `<p class="error-message">${msg}</p>`);
  elt.querySelector('.input').classList.add('input--error');

  // if user click on the input again => remove error message
  elt.querySelector('input').addEventListener('focus', function (event) {
    const errorElt = event.target.nextElementSibling;
    if (errorElt) {
      errorElt.remove();
    }
    this.classList.remove('input--error');
  });
}
