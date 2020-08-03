import orderBy from 'lodash/orderBy';


export const sortBy = (product, filters, text) => {
    let sortBySearch = filterBySearch(product, text);
    switch (filters) {
        case 'all':
            return sortBySearch;
        case 'price_cheap':
            return orderBy(sortBySearch, 'price', 'asc');
        case 'price_expensive':
            return orderBy(sortBySearch, 'price', 'desc');
        case 'manufacturer':
            return orderBy(sortBySearch, 'producer', 'asc');;
        default:
            return sortBySearch;
    }
};

const filterBySearch = (product, text) => {
    const products = Object.values(product);
    return products && products.filter(o => o.title.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
        o.producer.toLowerCase().indexOf(text.toLowerCase()) >= 0);
}
