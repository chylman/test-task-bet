export const initMenuToggle = () => {
  const menuButtonHtmlElement = document.querySelector('[data-menu-toggle="button"]')
  const menuHtmlElement = document.querySelector('[data-menu-toggle="nav"]')

  if (!menuButtonHtmlElement || !menuHtmlElement) {
    return;
  }

  const handleMenuButtonHtmlElement = () => {
    menuHtmlElement.classList.toggle('active');
    menuButtonHtmlElement.classList.toggle('active');
  };

  menuButtonHtmlElement.addEventListener('click', handleMenuButtonHtmlElement);
}
