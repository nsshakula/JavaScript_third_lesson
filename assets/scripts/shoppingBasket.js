//Находим необходимые элементы DOM, записываем в переменные,
//извлекаем значения (textContent), преобразуем в число (унарный плюс)

const stegosaurusAll = document.querySelector(".stegosaurus");
const stegosaurusWrapper = document.querySelector(".stegosaurus__wrapper");
const stegosaurusRealPrice =
  +document.querySelector(".stegosaurus-real").textContent;

const brontosaurusAll = document.querySelector(".brontosaurus");
const brontosaurusWrapper = document.querySelector(".brontosaurus__wrapper");
const brontosaurusRealPrice =
  +document.querySelector(".brontosaurus-real").textContent;

const triceratopsAll = document.querySelector(".triceratops");
const triceratopsWrapper = document.querySelector(".triceratops__wrapper");
const triceratopsRealPrice =
  +document.querySelector(".triceratops-real").textContent;

const ankylosaurusAll = document.querySelector(".ankylosaurus");
const ankylosaurusWrapper = document.querySelector(".ankylosaurus__wrapper");
const ankylosaurusRealPrice =
  +document.querySelector(".ankylosaurus-real").textContent;

const total = document.querySelector(".total-result");
const totalWrapper = document.querySelector(".result__wrapper");
const totalPrice = document.querySelector(".total__price");

//Создаем переменную руб
const currency = "руб.";

//Вычисляем сумму без скидки и записываем в переменную sumRealPrice
const sumRealPrice =
  stegosaurusRealPrice +
  brontosaurusRealPrice +
  triceratopsRealPrice +
  ankylosaurusRealPrice;

//Записываем значение переменной sumRealPrice в текстовый элемент с классом result__number-total
document.querySelector(".result__number-total").textContent = sumRealPrice;

//Создаем функцию, которая принимает число и возвращает 80% от него
const showPercent = (number) => {
  return number * 0.8;
};

//Получаем ссылку на кнопку с классом button и записываем ее в переменную button
const button = document.querySelector(".total__button");

//Создаем функцию устанавливаем свойство "disabled" кнопки в значение true, что делает ее неактивной и неотзывчивой на клики
function deactivateButton() {
  button.disabled = true;
  button.classList.add("total__button-disabled");
  button.classList.remove("total__button");
}

//Создаем функцию makeDiscount, которая выполняет следующие действия:
//Вычисляет новую цену для товара с помощью функции showPercent, сохраняет ее в переменную newPrice.
// Создает новый элемент div с классом "price-default" и добавляет в него текст с новой ценой и валютой, сохраненными в переменной currency.
//Добавляет созданный элемент внутрь элемента All.
// Добавляет класс "price-value-through" к элементу Wrapper.
//Вызывает функцию deactivateButton, которая делает кнопку неактивной

const makeDiscount = () => {
  const newPriceStegosaurus = showPercent(stegosaurusRealPrice);
  const priceStegosaurus = document.createElement("div");
  priceStegosaurus.classList.add("price-default");
  priceStegosaurus.innerHTML = `${newPriceStegosaurus} ${currency}`;
  stegosaurusAll.append(priceStegosaurus);
  stegosaurusWrapper.classList.add("price-value-through");

  const newPriceBrontosaurus = showPercent(brontosaurusRealPrice);
  const priceBrontosaurus = document.createElement("div");
  priceBrontosaurus.classList.add("price-default");
  priceBrontosaurus.innerHTML = `${newPriceBrontosaurus} ${currency}`;
  brontosaurusAll.append(priceBrontosaurus);
  brontosaurusWrapper.classList.add("price-value-through");

  const newPriceTriceratops = showPercent(triceratopsRealPrice);
  const priceTriceratops = document.createElement("div");
  priceTriceratops.classList.add("price-default");
  priceTriceratops.innerHTML = `${newPriceTriceratops} ${currency}`;
  triceratopsAll.append(priceTriceratops);
  triceratopsWrapper.classList.add("price-value-through");

  const newPriceAnkylosaurus = showPercent(ankylosaurusRealPrice);
  const priceAnkylosaurus = document.createElement("div");
  priceAnkylosaurus.classList.add("price-default");
  priceAnkylosaurus.innerHTML = `${newPriceAnkylosaurus} ${currency}`;
  ankylosaurusAll.append(priceAnkylosaurus);
  ankylosaurusWrapper.classList.add("price-value-through");

  const countDiscount =
    newPriceStegosaurus +
    newPriceBrontosaurus +
    newPriceTriceratops +
    newPriceAnkylosaurus;

  const totalFinal = document.createElement("div");
  totalFinal.classList.add("price-default");
  totalFinal.innerHTML = `${countDiscount} ${currency}`;
  total.append(totalFinal);
  totalWrapper.classList.add("price-value-through");

  deactivateButton();
};

//добавляем обработчик события на кнопку, который вызывает функцию makeDiscount при клике на кнопку.
button.addEventListener("click", makeDiscount);
