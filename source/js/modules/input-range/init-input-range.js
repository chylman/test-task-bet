import noUiSlider from '../../vendor/nouislider.js';

export const initInputRange = () => {
  const inputsRange = document.querySelectorAll('[data-input-range]');

  inputsRange.forEach(item => {
    const inputHtmlElement = item.querySelector('[data-input-range-item]')
    const valueHtmlElement = item.querySelector('[data-input-range-value]')
    console.log(valueHtmlElement)

    if (inputHtmlElement) {
      noUiSlider.create(inputHtmlElement, {
        start: [75],
        step: 1,
        range: {
          'min': [0],
          'max': [100]
        }
      });

      inputHtmlElement.noUiSlider.on('update', function (values) {
        if (valueHtmlElement) {
          console.log(values)
          valueHtmlElement.innerHTML = Math.floor(values);
        }
      })
    }



  })
}
