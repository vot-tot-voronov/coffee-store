// work with server

export default class CoffeeService {
    data = [
        {
            id: 1,
            name: 'BLACK LAKE',
            series: 'Dark Places / коллекционная серия',
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
            name: 'BLUE BEARD',
            series: 'Dark Places / коллекционная серия',
            img: 'https://mikale.shop/upload/iblock/ea1/ea1d8c6802ccc2166e4945c95a1060f4.jpg',
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
            img: 'https://mikale.shop/upload/iblock/8f6/8f6d04ea7f8067bf4aee9a43e0ad02fb.jpg',
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
            img: 'https://mikale.shop/upload/iblock/ef5/ef5bb0b158f9adb7ca93d34a08e627ee.jpg',
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
            img: 'https://mikale.shop/upload/iblock/622/622b274550364cac43d0d18aecff1088.jpg',
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
            img: 'https://mikale.shop/upload/iblock/c46/c4603bb06a5d79c6a1e9e1d1c68989a9.jpg',
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