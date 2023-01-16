import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name="step"]');
const amountRef = document.querySelector('input[name="amount"]');
const btnRefRef = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

formRef.addEventListener('submit', onSubmit);

function onSubmit(evn) {
  evn.preventDefault();

  let delay = Number(delayRef.value);
  let step = Number(stepRef.value);
  let amount = Number(amountRef.value);

  for (let i = 0; i <= amount - 1; i += 1) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
