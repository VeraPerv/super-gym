import { prices } from './utils';
const priceButtonsContainer = document.querySelector('.membership');
const priceInCard = [...document.querySelectorAll('.price-card__price')];
const priceForShadow = [...document.querySelectorAll('.price-card__wrapper')];

const initPrices = () => {
  priceButtonsContainer.addEventListener('click', (evt) => {
    const activeButton = evt.target.closest('.membership-button');
    priceButtonsContainer.querySelector('.membership-button--current').classList.remove('membership-button--current');
    activeButton.classList.add('membership-button--current');
    priceInCard.forEach((elem,index) => {
      elem.textContent = prices[activeButton.id][index];
      priceForShadow[index].dataset.price = prices[activeButton.id][index];
    }
    );
  });
};

export { initPrices };
