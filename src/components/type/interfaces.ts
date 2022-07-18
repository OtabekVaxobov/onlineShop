export interface IData {
    name: string;
    type: string;
    image: string;
    itemid: string;
    itemCount: number;
    itemYear: number;
    itemCountry: string;
    itemDiff: string;
    itemPopular: string;
    itemPrice: number;
}

export interface IFilter {
    type: Array<string>;
    countries: string[];
    difficulties: string[];
    popular: string[];
}
