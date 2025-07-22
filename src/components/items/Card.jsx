import { AiFillStar } from "react-icons/ai"
import "./css/card.css"
import { BsFillBagFill } from "react-icons/bs"

const Card = ({img, title, reviews, prevPrice, newPrice}) => {
    return (
        <section className="card-container">
            <div className="img-container">
                <img src={img} alt="sneaker" className="card-img"/>
            </div>
            <div className="title-container">
                <p className="title">{title}</p>
            </div>
            <div className="star-continer">
                <AiFillStar className="star"/> 
                <AiFillStar className="star"/> 
                <AiFillStar className="star"/>
                <AiFillStar className="star"/>
                <span className="reviews">{reviews}</span>
            </div>
            <div className="prices">
                <div>
                    <del>{prevPrice}</del>
                    <span>${newPrice}</span>
                </div>
                <BsFillBagFill className="bag"/>
            </div>

        </section>
    )
}

export default Card