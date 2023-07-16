import Notiflix from 'notiflix';
import { showLoader } from './loader';

function messageError() {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );
  showLoader('endSearch');
}
export { messageError };
