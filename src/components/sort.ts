import data from './data';
import { createItemList } from './itemList';
import { IData } from './type/interfaces';

function sortABC(): void {
    const perem: IData[] = data;
    perem.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    createItemList(perem);
}

function sortNum(): void {
    const perem: IData[] = data;
    perem.sort(function (a, b) {
        return a.itemYear - b.itemYear;
    });
    createItemList(perem);
}

export { sortABC, sortNum };
