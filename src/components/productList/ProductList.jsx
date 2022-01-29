import Product from '../product/Product'
import './productList.css'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>My Projects</h1>
        <p className='pl-desc'>Below are some of my projects</p>
      </div>
      <div className='pl-list'>
        {products.map((product) => {
          const { id, img, link } = product
          return <Product key={id} img={img} link={link} />
        })}
      </div>
    </div>
  )
}

export default ProductList
