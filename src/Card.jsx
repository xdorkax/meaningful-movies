const Card = ({title, sub, text, index}) => (
  <div className="card">
    <span className="index">{index+1}</span>
    <h1>{title}</h1>
    <p className="sub">{sub}</p>
    <p className="text">{text}</p>
    <button className="card-button">Watch </button>
  </div>
)

export default Card;