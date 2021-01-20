// work with server

export default class CoffeeService {
    data = [
        {
            id: 1,
            name: 'BLACK LAKE',
            series: 'Dark Places / коллекционная серия',
            img: 'https://mikale.shop/upload/iblock/cdc/cdc15628278427fca21add4ce37094a6.jpg',
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
            name: 'BLUE BEARD',
            series: 'Dark Places / коллекционная серия',
            img: 'https://mikale.shop/upload/iblock/029/0295085b1a75121999ff1c5a661382cf.jpg',
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
            name: 'HARE HEART',
            series: 'Dark Places / коллекционная серия',
            img: 'https://mikale.shop/upload/iblock/539/539c7a8261646997c2bee65f0a01f2ad.jpg',
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
            id: 4,
            name: 'WHITE FOX',
            series: 'Dark Places / коллекционная серия',
            img: 'https://mikale.shop/upload/iblock/9dc/9dcb63d842d2ed296ed2d00f840db875.jpg',
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
            id: 5,
            name: 'BURUNDI',
            series: 'Colors Collect / лимитированная серия',
            img: 'https://mikale.shop/upload/iblock/fe9/fe9479f92830a6870ea54e31f9b66662.jpg',
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
            id: 6,
            name: 'DECAF',
            series: 'Colors Collect / лимитированная серия',
            img: 'https://mikale.shop/upload/iblock/6aa/6aa4e4873b7847914726b139b27c568b.jpg',
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