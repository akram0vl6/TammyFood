import './DishItem.css'
import { dishes, } from "../../../data/data";
import {useDispatch, useSelector} from 'react-redux'
import { addCart } from "../../../store/Slides/cartSlice";
const DishItem = () => {
    const selector = useSelector((state: any) => state.cart.produks);
    const dispatch = useDispatch()
    const hedelAdd = (el: any) => {
        dispatch(addCart(el))
    }
    console.log(selector);
  return (
    <div className='main-dish'>
        {dishes.map((el) => (
            <div key={el.id} className='dish-item'>
                <div className='dish-item_img'>
                    <img src={el.img} alt="" />
                </div>
                <div className='dish-item_info'>
                    <div className='dish-item_img2'>
                        <img src="./src/assets/icon/icon4.png" alt="" />
                    </div>
                    <h1>{el.name}</h1>
                    <p>{el.title}</p>
                    <div className='dish-item_price'>
                        <h3>{el.price}</h3>
                        <div className='dish-item_price-img'>
                            <img onClick={() => hedelAdd(el)} src="./src/assets/icon/icon3.png" alt="" />
                            <img src="./src/assets/icon/icon2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DishItem