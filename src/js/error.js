import Notiflix from 'notiflix';

function messageError() {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );
}
export { messageError };
