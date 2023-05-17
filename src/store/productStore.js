import { ref } from 'vue'
import Image1 from '/photos/img1.png'
import Image2 from '/photos/img2.png'
import Image3 from '/photos/img3.png'

export default function productStore() {
    const products = ref([
        {
            id: 0,
            name: 'iPhone 6s Plus 16GB',
            price: 1000,
            promotionalPrice: 649,
            currency: '$',
            img: Image1,
        },
        {
            id: 1,
            name: 'iPad Pro 32GB',
            price: 800,
            promotionalPrice: 600,
            currency: '$',
            img: Image2,
        },
        {
            id: 2,
            name: 'MacBook Pro',
            price: 8000,
            promotionalPrice: 0,
            currency: 'PLN',
            img: Image3,
        }
    ])

    const newProductListCreate = (value, id) => {
        const { name, price, promotionalPrice, currency } = value
        return products.value.map(product => {
            if (product.id === id) {
                return { ...product, name, price, promotionalPrice, currency, }
            }
            return { ...product }
        })
    }

    const handleProductChange = (value, id) => {
        const newProductList = newProductListCreate(value, id)
        products.value = newProductList
    }




    return { products, handleProductChange }
}



// $, PLN, EUR