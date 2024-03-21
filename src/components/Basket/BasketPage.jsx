import { Routes, Route } from 'react-router-dom'
// импорт из каталога или из store????!!!!!
import Catalog from '../catalog/catalog'


export default function BasketPage(){
    const {data, addToCart} = useContext(AppContext)
    const cardProducts = data.map(id => catalog.find(item => item.id == id))
    const summa = cardProducts.reduce((summ,item) => summ + item.price,0)

    return(
        <>
        <h1>Корзина</h1>
        {
            cardProducts.filter(card => card.cart).map(product =>
                <div key={product.id} className="card">
                    <h3>product.name</h3>
                    <i>{product.price} p.</i><br/><br/>

                    <Link to={'${product.id}'}>Подробнее</Link>
                </div>
            )
        }
        <h3>Итого {summa} рублей</h3>
        </>
    )
}