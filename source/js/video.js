import {iframesAttributes, iframesValues} from './utils';

const playButton = document.querySelector('.video__button');
const containerForVideo = document.querySelector('.video');

const fillSrcAttribut = (elementForFill,url) => {
  const fullUrl = `${elementForFill.dataset.src}${url}`;
  return fullUrl;
};

const createIframe = (arrOfAttributes, arrOfValues) => {
  const iframe = document.createElement('iframe');
  arrOfAttributes.forEach((elem,index) => {
    iframe.setAttribute(elem, arrOfValues[index]);
  });
  iframe.src = fillSrcAttribut(containerForVideo,'?autoplay=1');
  return iframe;
};

const addVideo = () => {
  if(!containerForVideo) {
    return;
  }
  containerForVideo.appendChild(createIframe(iframesAttributes, iframesValues));
  containerForVideo.classList.add('video--loaded');

};

const initVideo = () => {
  if(playButton) {
    playButton.addEventListener('click', addVideo);
  }
};

export {initVideo};
