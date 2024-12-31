import './Dish.css'
import DishItem from './DishItem/DishItem'
const Dish = () => {
  return (
    <div className='dish'>
      <h1 className='h1'>Our Delicious Dish</h1>
      <p className='p'>
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />
        industry. Lorem Ipsum has been the industry
      </p>
      <DishItem />
    </div>
  );
}

export default Dish