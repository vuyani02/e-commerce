import ".././css/category.css"
import Input from "./Input"

const Price = ({handleSelectPrice}) => {
  return (
    <section className="sect">
      <p className="c-header">Price</p>
      <Input color={'black'} select={''} title={'All'} name={'price'} handleSelectPrice={handleSelectPrice}/>

      <Input color={'black'} select={50} title={'$0 - $50'} name={'price'} handleSelectPrice={handleSelectPrice}/>

      <Input color={'black'} select={100} title={'$50 - $100'} name={'price'} handleSelectPrice={handleSelectPrice}/>

      <Input color={'black'} select={150} title={'$100 - $150'} name={'price'} handleSelectPrice={handleSelectPrice}/>
      
      <Input color={'black'} select={200} title={'Over $150'} name={'price'} handleSelectPrice={handleSelectPrice}/>
    </section>
  )
}

export default Price