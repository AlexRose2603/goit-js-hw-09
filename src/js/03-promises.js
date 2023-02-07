import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  ///////1
  // let delay = event.currentTarget.delay.value;
  // let step = event.currentTarget.step.value;
  // let amount = event.currentTarget.amount.value;
  //////2
  // let {delay, step, amount} = event.target;
  // let delayValue = delay.value
  // let stepValue = step.value
  // let amountValue = amount.value
  /////////3
  let { delay, step, amount } = Object.fromEntries(new FormData(event.target));
  delay = Number(delay);
  step = Number(step);
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
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
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(shouldResolve);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
