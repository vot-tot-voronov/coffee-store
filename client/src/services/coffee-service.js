// work with server

export default class CoffeeService {
    data = [
        {
            id: 1,
            name: 'BLACK LAKE',
            img: 'https://mikale.shop/upload/iblock/b2a/b2a903e5f46d6e06917012120865702c.jpg',
            country: 'Бразилия',
            bouquet: 'чернослив, изюм, шоколад, какао, ромовые и коньячные ноты',
            region: 'Espírito Santo, Sao Domingos do Norte',
            feature: 'высокое содержание кофеина',
            cookMethod: 'эспрессо / фильтр',
            fry: 'средний',
            fabricator: 'MIKALE',
            weight: '350',
            price: '400'
        },
        {
            id: 2,
            name: 'BLACK LAKE',
            img: 'https://mikale.shop/upload/iblock/b2a/b2a903e5f46d6e06917012120865702c.jpg',
            country: 'Бразилия',
            bouquet: 'чернослив, изюм, шоколад, какао, ромовые и коньячные ноты',
            region: 'Espírito Santo, Sao Domingos do Norte',
            feature: 'высокое содержание кофеина',
            cookMethod: 'эспрессо / фильтр',
            fry: 'средний',
            fabricator: 'MIKALE',
            weight: '350',
            price: '400'
        },
        {
            id: 3,
            name: 'BLACK LAKE',
            img: 'https://mikale.shop/upload/iblock/b2a/b2a903e5f46d6e06917012120865702c.jpg',
            country: 'Бразилия',
            bouquet: 'чернослив, изюм, шоколад, какао, ромовые и коньячные ноты',
            region: 'Espírito Santo, Sao Domingos do Norte',
            feature: 'высокое содержание кофеина',
            cookMethod: 'эспрессо / фильтр',
            fry: 'средний',
            fabricator: 'MIKALE',
            weight: '350',
            price: '400'
        }
    ];
    getCoffee () {
        return this.data;
    }
}