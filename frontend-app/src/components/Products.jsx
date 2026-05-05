import ProductCard from "./ProductCard";

const Products = () => {
    let products = [
        {
            name: "mobile",
            price: 50000,
            description: "good condition",
            ratings: "⭐⭐⭐",
            imageSrc:"https://darlingretail.com/cdn/shop/files/iPhone_15_Blue_Pure_Back_iPhone_15_Blue_Pure_Front_2up_Screen__WWEN.jpg?v=1695103868",
        },
    
        {
            name: "laptop",
            price: 75000,
            description: "good condition",
            ratings: "⭐⭐⭐⭐",
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-t9Ix5P-jFp6ksUffJ8lRS8HxcgbwHvopw&s",
        },

        {
            name: "cloth",
            price: 5000,
            description: "good condition",
            ratings: "⭐⭐⭐",
            imageSrc:"https://t3.ftcdn.net/jpg/01/38/81/76/360_F_138817681_4FCgB89eGIBi7W7i0g0mPJHsg9ZuZyzU.jpg",
        },
    ],
    return (
        <>
        <Nav/>
      <div id="main-container">
        {products.map((products)=>(
            <div>
                <ProductCard details={products}/>

            </div>
        ))}
      </div>
      </>
    );
};
export default Products;