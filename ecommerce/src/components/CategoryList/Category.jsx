import './Category.css'

const Category = (props) => {
  return (
    <div className='category'>
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="text">
        <p className="title">{props.title}</p>
        <p>Min. {props.discount}% Off</p>
      </div>
    </div>
  )
}

export default Category