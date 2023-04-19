import './index.css'

const CardItem = props => {
  const {each, thumbnailImgClick} = props
  const {thumbnailUrl, id} = each

  const clickThumbnail = () => {
    thumbnailImgClick(id)
  }
  return (
    <li className="each-img">
      <button type="button" className="button-items" onClick={clickThumbnail}>
        <img src={thumbnailUrl} className="img-thumb" alt="thumbnail" />
      </button>
    </li>
  )
}
export default CardItem
