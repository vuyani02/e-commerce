import Card from "./Card"
import "./css/items.css"

const Items = ({items, search}) => {

    return (
        <section className="items">
            
            {(!items.length) && (<p>No results for {search}</p>)}
            {
                items.map(({img, title, reviews, prevPrice, newPrice}) => (
                    <Card key={Math.random()} img={img} title={title} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} />
                ))
            }
        </section>
    )
}

export default Items