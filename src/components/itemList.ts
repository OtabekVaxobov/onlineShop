import { IData } from './type/interfaces';

function createItemList(data: IData[]): void {
    const father: Element | null = document.querySelector('.list-item');
    if (father) {
        father.innerHTML = '';
        for (let i = 0; i < data.length; i += 1) {
            father.innerHTML += `
        <div class="item">
          <h2>Наименование: <span class="item-name">${data[i].name}</span></h2>
          <p class="item-class">Тип: ${data[i].type}</p>
          <p class="item-diff">Сложность: ${data[i].itemDiff}</p>
          <p class="item-country">Страна: ${data[i].itemCountry}</p>
          <p class="item-count">Количество: ${data[i].itemCount}</p>
          <p class="item-year">Год выведения: ${data[i].itemYear}</p>
          <p class="item-class">Популярное: ${data[i].itemPopular}</p>
          <p class="item-price">Цена: ${data[i].itemPrice}</p>
          <img class="item-photo" src="${data[i].image}">
          <button class="_btn item-btn additem" data-itemid="${data[i].itemid}">Добавить в корзину</button>
          <button class="_btn item-btn removeitem" data-itemid="${data[i].itemid}">Удалить из корзины</button>
        </div>
      `;
        }
    }
}

export { createItemList };
