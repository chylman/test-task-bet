import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {CustomSelect} from './modules/select/custom-select.js';
import {
  uploadFile,
  uploadFileDrop,
  uploadFileDropPreview,
  uploadImage,
  uploadImageDrop
} from './modules/input-file/init-upload.js';
import {initInputRange} from './modules/input-range/init-input-range.js';
import {initMenuToggle} from "./modules/menu-toggle/init-menu-toggle.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const select = new CustomSelect();
    select.init();
    initModals();
    uploadImage();
    uploadFile();
    uploadImageDrop();
    uploadFileDrop();
    uploadFileDropPreview();
    initInputRange();
    initMenuToggle();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
