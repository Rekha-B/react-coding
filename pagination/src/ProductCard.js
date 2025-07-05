const ProductCard = ({ product }) => {
    console.log(product);
    return (
       <div>
          <img src={product?.thumbnail} />
          <p>{product?.title}</p>
       </div>
    )
}

export default ProductCard;