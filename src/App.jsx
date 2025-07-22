import { useState } from "react"
import AsideBar from "./components/aside-bar/AsideBar"
import Items from "./components/items/items"
import Nav from "./components/nav/Nav"
import Recommended from "./components/recommended/recommended"
import "./App.css"
import data from "./data/data"

const Master = () => {

    const [search, setSearch] = useState('')
    const [selectCategory, setSelectCategory] = useState('')
    const [selectBtn, setSelectBtn] = useState('')
    const [selectPrice, setSelectPrice] = useState('')
    const [selectColor, setSelectColor] = useState('')
    
    let filteredItems = data

    const handleSearch = (e) => setSearch(e.target.value)
    const handleSelectCategory = (e) => setSelectCategory(e.target.value)
    const handleSelectBtn = (e) => setSelectBtn(e.target.value)
    const handleSelectPrice = (e) => setSelectPrice(e.target.value)
    const handleSelectColor = (e) => setSelectColor(e.target.value)

    if(search){
        filteredItems= data.filter((({title, newPrice, company, color, category}) => 
            title.toLowerCase() === search.toLowerCase() ||
            ('$'+newPrice).toLowerCase() === search.toLowerCase() ||
            company.toLowerCase() === search.toLowerCase() ||
            color.toLowerCase() === search.toLowerCase() ||
            category.toLowerCase() === search.toLowerCase()))
    }

    if(selectBtn){
        filteredItems= filteredItems.filter((({company}) => 
            company === selectBtn))
    }

    if(selectCategory){
        filteredItems= filteredItems.filter((({category}) => 
            category === selectCategory))
    }

    if(selectPrice){
        filteredItems = filteredItems.filter((({newPrice}) =>{
            if(selectPrice == 50){
                // console.log(newPrice)
                return newPrice <= 50
            }

            else if(selectPrice == 100){
                return newPrice >= 50 && newPrice <= 100
            }

            else if(selectPrice == 150){
                return newPrice >= 100 && newPrice <= 150
            }

            else if(selectPrice == 200){
                return newPrice >= 150
            }    
        }
        ))
    }

    if(selectColor){
        filteredItems= filteredItems.filter((({color}) => 
            color === selectColor))
    }

    return (
        <section>
            <AsideBar 
                handleSelectCategory={handleSelectCategory}
                handleSelectPrice={handleSelectPrice}
                handleSelectColor={handleSelectColor}
            />
            <Nav search={search} handleSearch={handleSearch}/>
            <Recommended handleSelectBtn={handleSelectBtn}/>
            <Items items={filteredItems} search={search}/>
        </section>
    )
}

export default Master