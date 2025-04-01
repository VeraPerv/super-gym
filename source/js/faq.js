import { questions, answers } from './utils';

const faqButtonsContainer = document.querySelector('.faq__tabs-list');
const questionButtons = document.querySelectorAll('.question-button');
const answersContainers = [...document.querySelectorAll('.faq__question-item p')];
const faqQuestionList = document.querySelector('.faq__question-list');
const questionsContainer = [];

const findQuestionsContainer = () => {
  questionsContainer.length = 0;
  questionButtons.forEach((elem) => {
    questionsContainer.push(elem.firstElementChild);
  });
};

const questionButtonsStates = {
  center: [],
  ticket: [],
  services: [],
  rules: [],
};

const fillElemText = (arrForFill, arrOfData, activeButton) => {
  arrForFill.forEach((elem, index) => {
    elem.textContent = arrOfData[activeButton.id][index];
  });
};

const saveQuestionButtonState = (arrOfStates,activeBtn,arrOfButtons) => {
  if(arrOfStates[activeBtn.id].length) {
    arrOfButtons.forEach((elem) => {
      elem.classList.remove(...elem.classList);
    });
    arrOfButtons.forEach((elem, index) => {
      elem.classList.add(...questionButtonsStates[activeBtn.id][index]);
    });
  } else {
    questionButtons.forEach((elem) => {
      elem.classList.remove('question-button--active');
    });
  }
};

faqButtonsContainer.addEventListener('click', (evt) => {
  const activeButton = evt.target.closest('.faq-button');
  if (activeButton) {
    saveQuestionButtonState(questionButtonsStates,activeButton,questionButtons);
    findQuestionsContainer();
    faqButtonsContainer.querySelector('.faq-button--active').classList.remove('faq-button--active');
    activeButton.classList.add('faq-button--active');
    fillElemText(questionsContainer, questions, activeButton);
    fillElemText(answersContainers, answers, activeButton);
  }
});

const initFaqTabs = () => {
  faqQuestionList.addEventListener('click', (evt) => {
    const activeFaqBtn = document.querySelector('.faq-button--active');
    const activeButton = evt.target.closest('button');
    if(activeButton) {
      activeButton.classList.toggle('question-button--active');
      questionButtonsStates[activeFaqBtn.id].length = 0;
      questionButtons.forEach((elem) => {
        const classList = elem.classList;
        const arrOfClasses = Array.from(classList);
        questionButtonsStates[activeFaqBtn.id].push(arrOfClasses);
      });

      activeButton.closest('.faq__question-item').querySelector('p').ariaHidden = !activeButton.classList.contains('question-button--active');
    }
  });
};

export { initFaqTabs };
