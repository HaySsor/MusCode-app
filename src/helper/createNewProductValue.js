export const createNewProductValue = (arr) => {
    return arr.reduce((obj, value) => {
        if (value.name === 'promotionalPrice' && value.model === '') {
            value.model = 0;
        }

        if (value.inputType === 'number') {
            obj[value.name] = parseInt(value.model);
        } else {
            obj[value.name] = value.model;
        }
        return obj;
    }, {});
};