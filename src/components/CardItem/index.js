import './index.css'

const cardItem = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails
  return (
    <li className={`${className} cardClass`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img className="img1" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default cardItem
