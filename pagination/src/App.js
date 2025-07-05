import { useEffect , useState} from "react"
import ProductCard from "./ProductCard";
import PaginationComp from "./PaginationComp";
import "./App.css"
const App = () => {

  const [products, setProducts] = useState([]);
  const [ currentPage, setCurrentPage] = useState(0);
  const fetchData = async() => {
     const data = await fetch(`https://dummyjson.com/products?limit=500`);
     const results = await data.json();
     console.log("resuts", results);
     setProducts(results?.products);
  }

  useEffect(() => {
     fetchData();
  },[]);

  const PAGE_SIZE = 10;
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const onHandleNext = () => {
    console.log("calling data");
    setCurrentPage((prev) => prev + 1);
  }

  const onHandlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  }
  return (
    <div id="container">
      <h1>Pagination</h1>
      <PaginationComp totalPages={totalPages} size={PAGE_SIZE} currentPage={currentPage} onHandleNext={onHandleNext} onHandlePrev={onHandlePrev}/>
      <div className="products-container">
      {products.slice(start,end).map(product => (
        <ProductCard product={product} />
      ))}
      </div>
    </div>
  )
}

export default App;