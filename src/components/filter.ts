import data from './data';
import { createItemList } from './itemList';
import { IData, IFilter } from './type/interfaces';

const obj: IFilter = {
    type: [],
    countries: [],
    difficulties: [],
    popular: [],
};

function isPrime(elem: IData) {
    // Функция для фильтра

    return (
        (!obj.type.length || obj.type.includes(elem.type)) &&
        (!obj.countries.length || obj.countries.includes(elem.itemCountry)) &&
        (!obj.difficulties.length || obj.difficulties.includes(elem.itemDiff)) &&
        (!obj.popular.length || obj.popular.includes(elem.itemPopular))
    );
}

function filterType(event: Event): void {
    // Функция для выбора параметров фильтра
    const filterCat: HTMLElement | null = document.querySelector('.filter-type-cat');
    const filterDog: HTMLElement | null = document.querySelector('.filter-type-dog');
    const filterRussia: HTMLElement | null = document.querySelector('.filter-country-russia');
    const filterEngland: HTMLElement | null = document.querySelector('.filter-country-england');
    const filterGermany: HTMLElement | null = document.querySelector('.filter-country-germany');
    const filterEasy: HTMLElement | null = document.querySelector('.filter-diff-easy');
    const filterNormal: HTMLElement | null = document.querySelector('.filter-diff-normal');
    const filterHard: HTMLElement | null = document.querySelector('.filter-diff-hard');
    const filterPopular: HTMLElement | null = document.querySelector('.filter-popular');

    const target = event.target as Element;

    if (target === filterCat) {
        filterCat.classList.toggle('_active-btn');
        if (filterCat.classList.contains('_active-btn')) {
            obj.type.push('Кот');
        } else {
            obj.type = obj.type.filter((item) => item !== 'Кот');
        }
    }

    if (target === filterDog) {
        filterDog.classList.toggle('_active-btn');
        if (filterDog.classList.contains('_active-btn')) {
            obj.type.push('Собака');
        } else {
            obj.type = obj.type.filter((item) => item !== 'Собака');
        }
    }

    if (target === filterRussia) {
        filterRussia.classList.toggle('_active-btn');
        if (filterRussia.classList.contains('_active-btn')) {
            obj.countries.push('Россия');
        } else {
            obj.countries = obj.countries.filter((item) => item !== 'Россия');
        }
    }

    if (target === filterGermany) {
        filterGermany.classList.toggle('_active-btn');
        if (filterGermany.classList.contains('_active-btn')) {
            obj.countries.push('Германия');
        } else {
            obj.countries = obj.countries.filter((item) => item !== 'Германия');
        }
    }

    if (target === filterEngland) {
        filterEngland.classList.toggle('_active-btn');
        if (filterEngland.classList.contains('_active-btn')) {
            obj.countries.push('Англия');
        } else {
            obj.countries = obj.countries.filter((item) => item !== 'Англия');
        }
    }

    if (target === filterEasy) {
        filterEasy.classList.toggle('_active-btn');
        if (filterEasy.classList.contains('_active-btn')) {
            obj.difficulties.push('Легко');
        } else {
            obj.difficulties = obj.difficulties.filter((item) => item !== 'Легко');
        }
    }

    if (target === filterNormal) {
        filterNormal.classList.toggle('_active-btn');
        if (filterNormal.classList.contains('_active-btn')) {
            obj.difficulties.push('Средне');
        } else {
            obj.difficulties = obj.difficulties.filter((item) => item !== 'Средне');
        }
    }

    if (target === filterHard) {
        filterHard.classList.toggle('_active-btn');
        if (filterHard.classList.contains('_active-btn')) {
            obj.difficulties.push('Сложно');
        } else {
            obj.difficulties = obj.difficulties.filter((item) => item !== 'Сложно');
        }
    }

    if (target === filterPopular) {
        filterPopular.classList.toggle('_active-btn');
        if (filterPopular.classList.contains('_active-btn')) {
            obj.popular.push('Да');
        } else {
            obj.popular = obj.popular.filter((item) => item !== 'Да');
        }
    }

    const perem: IData[] = data.filter(isPrime);
    createItemList(perem);

    if (perem.length === 0) {
        alert('Извините, совпадений не обнаружено');
    }
}

export { filterType };
