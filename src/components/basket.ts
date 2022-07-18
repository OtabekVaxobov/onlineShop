let countBasket = 0; //Перенести

// Фуункционал корзины
function addBasket(event: Event): void {
    changeStyleCard(event); // Функция изменения фона и блокировки кнопочек
    changeCountBasket(event); // Функция добавления и удаления из корзины
}

function changeStyleCard(event: Event): void {
    const target = event.target as Element;
    const fatherDiv: HTMLDivElement | null = target.closest('div'); // Родительский DIV кликнутого элемента

    if (fatherDiv) {
        const addKey: HTMLButtonElement | null = fatherDiv.querySelector('.additem');
        const removeKey: HTMLButtonElement | null = fatherDiv.querySelector('.removeitem');

        if (target.classList.contains('additem') && addKey && removeKey) {
            addKey.disabled = true;
            removeKey.disabled = false;
            fatherDiv.classList.add('addBasket');
        }
        if (target.classList.contains('removeitem') && addKey && removeKey) {
            addKey.disabled = false;
            removeKey.disabled = true;
            fatherDiv.classList.remove('addBasket');
        }
    }
}

function changeCountBasket(event: Event): void {
    const countBasketForm: HTMLTemplateElement | null = document.querySelector('.basket-count-span');
    const target = event.target as Element;

    if (countBasketForm) {
        if (target.classList.contains('additem')) {
            if (countBasket < 20) {
                countBasket += 1;
                countBasketForm.textContent = String(countBasket);
            } else {
                alert('Извините, все слоты заполнены');
            }
        }

        if (target.classList.contains('removeitem')) {
            if (countBasket > 0) {
                countBasket -= 1;
                countBasketForm.textContent = String(countBasket);
            } else {
                console.log('корзина и так пустая');
            }
        }
    }
}

export { addBasket };
