import "./css/aside.css"
import Category from "./comp/category/Category"
import Price from "./comp/price/Price"
import Color from "./comp/color/Color"

const AsideBar = ({handleSelectCategory, handleSelectPrice, handleSelectColor}) => {
    return (
        <aside className="aside-bar">
            <div className="logo">🛒</div>
            <article>
                <Category handleSelectCategory={handleSelectCategory}/>
                <Price handleSelectPrice={handleSelectPrice}/>
                <Color handleSelectColor={handleSelectColor}/>
            </article>
        </aside>
    )
}

export default AsideBar