export const checkPrice = (arr) => {
    const price = arr.find((item) => item.name === 'price');
    const promotionalPrice = arr.find(
        (item) => item.name === 'promotionalPrice'
    );
    console.log(price, promotionalPrice)
    if (parseFloat(price.model) <= parseFloat(promotionalPrice.model)) {
        return true
    }
    return false
};