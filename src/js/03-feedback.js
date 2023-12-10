import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const button = document.querySelector("button")

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище
//    объект с полями email и message, в которых сохраняй текущие значения полей формы. 
//    Пусть ключом для хранилища будет строка "feedback-form-state".


form.addEventListener('input', throttle(onSetLocalStorage, 500));
form.addEventListener('submit', onSubmitForm)
const currentContent = "feedback-form-state";
onFillingForm()
 

function onSetLocalStorage (event){
  const currentData = { 
  email : form.email.value,
  message : form.message.value
}
  localStorage.setItem(currentContent, JSON.stringify(currentData));

  const saveData = localStorage.getItem(currentContent);
  // console.log(saveData);
 
}


// 2. При загрузке страницы проверяй состояние хранилища, 
//    и если там есть сохраненные данные, заполняй ими поля формы. 
//    В противном случае поля должны быть пустыми.
function onFillingForm (){
const saveData = localStorage.getItem(currentContent);
if(saveData){
  const saveDataItem = JSON.parse(saveData)
  console.log(saveDataItem);
  form.email.value = saveDataItem.email;
  form.message.value = saveDataItem.message;
}

}
// 3. При сабмите формы очищай хранилище и поля формы, 
//    а также выводи объект с полями email, message и текущими их значениями в консоль.
function onSubmitForm(event){
event.preventDefault();
const dataAfterSub = localStorage.getItem(currentContent)
if(dataAfterSub){
  const saveData = JSON.parse(dataAfterSub)
  console.log(saveData);
}
event.currentTarget.reset();
localStorage.removeItem(currentContent)
}

// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//     Для этого добавь в проект и используй библиотеку lodash.throttle.

















