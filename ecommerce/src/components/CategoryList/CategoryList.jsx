import './CategoryList.css'
import Category from './Category'
import { MdNavigateNext } from 'react-icons/md'

const CategoryList = (props) => {
  return (
    <div className='list'>
      <div className="container">
        <div className="left">
          <div className="heading">
            <p>{props.title}</p>
            <button><MdNavigateNext className='more-icon' /></button>
          </div>

          <div className="wrap">
            {
              props.data.map((e, index) => {
                return (
                  <Category key={index} image={e.image} title={e.title} discount={e.discount} />
                );
              })
            }
          </div>
        </div>
        <div className="right-box">
          <img src={props.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CategoryList