const removeFocusFromDisabled = () => {
  document.querySelectorAll('.button--secondary-disabled').forEach((link) => {
    link.addEventListener('focus', (event) => {
      event.target.blur();
    });
  });
};

export {removeFocusFromDisabled };
