import './style.css';
import data from './components/data';
import { createItemList } from './components/itemList';
import { addBasket } from './components/basket';
import { sortABC, sortNum } from './components/sort';
import { filterType } from './components/filter';
import { IData } from './components/type/interfaces';

createItemList(data);
document.addEventListener('click', addBasket);

//Перенести ФУНКЦИЯ ПОИСКА
const searchForm: HTMLInputElement | null = document.querySelector('.input-area');

if (searchForm) {
    searchForm.oninput = function (event): void {
        const itemList: NodeListOf<HTMLElement> = document.querySelectorAll('.list-item .item');
        const itemListName: NodeListOf<HTMLElement> = document.querySelectorAll('.list-item .item .item-name');
        const target = event.target as HTMLInputElement;
        const val: string = target.value;

        for (let i = 0; i < itemListName.length; i += 1) {
            if (itemListName[i].innerText.toLowerCase().search(val.toLowerCase()) == -1) {
                itemList[i].classList.add('itemHide');
            } else {
                itemList[i].classList.remove('itemHide');
            }
        }
    };
}

const abc: HTMLElement | null = document.querySelector('.abc-sort');
abc?.addEventListener('click', sortABC);

const num: HTMLElement | null = document.querySelector('.year-sort');
num?.addEventListener('click', sortNum);

//ФУНКЦИЯ СОРТИРОВКИ
const tumblerFilter: HTMLElement | null = document.querySelector('.tumbler-filter-value');
tumblerFilter?.addEventListener('click', filterType);

//СБРОС ВСЕХ ФИЛЬТРОВ
const dellFilter: HTMLElement | null = document.querySelector('.filter-dell');
dellFilter?.addEventListener('click', function () {
    location.reload();
});

// СЛАЙДЕР
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
const slider = document.getElementById('slider') as noUiSlider.target;
const slider1 = document.getElementById('slider1') as noUiSlider.target;

if (slider) {
    noUiSlider.create(slider, {
        start: [1600, 2022],
        connect: true,
        step: 1,
        range: {
            min: 1600,
            max: 2022,
        },
    });

    const input0 = document.getElementById('input-0') as HTMLInputElement;
    const input1 = document.getElementById('input-1') as HTMLInputElement;

    const inputs = [input0, input1];

    slider.noUiSlider?.on('update', function (values: (string | number)[], handle: number): void {
        inputs[handle].value = String(Math.round(Number(values[handle])));

        const obj: IData[] = [];

        for (let i = 0; i < data.length; i += 1) {
            if (data[i].itemYear > Number(input0.value) && data[i].itemYear < Number(input1.value)) {
                obj.push(data[i]);
            }
        }
        createItemList(obj);
    });
}

if (slider1) {
    noUiSlider.create(slider1, {
        start: [1, 50],
        connect: true,
        step: 1,
        range: {
            min: 1,
            max: 50,
        },
    });

    const input2 = document.getElementById('input-2') as HTMLInputElement;
    const input3 = document.getElementById('input-3') as HTMLInputElement;

    const inputs = [input2, input3];

    slider1.noUiSlider?.on('update', function (values: (string | number)[], handle: number): void {
        inputs[handle].value = String(Math.round(Number(values[handle])));

        const obj: IData[] = [];

        for (let i = 0; i < data.length; i += 1) {
            if (data[i].itemCount > Number(input2.value) && data[i].itemCount < Number(input3.value)) {
                obj.push(data[i]);
            }
        }
        createItemList(obj);
    });
}
