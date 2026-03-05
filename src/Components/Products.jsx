import useFetch from "../Hooks/useFetch";
import "./Products.css";

function getRandomColor() {
  const colors = [
    "#ff6b6b",
    "#6a5acd",
    "#20c997",
    "#ff922b",
    "#4dabf7",
    "#f06595",
    "#82c91e",
    "#7950f2"
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function Products() {

  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return (
        <div className="loading">
            Loading.....
        </div>
    );
}
  if (error) {
    return (
        <div className="loading">{error}</div>
    );
}

  return (
    <div className="container">

      <h1 className="title">Photos</h1>

      <div className="grid">

        {data.slice(0,24).map((product) => (
          <div className="card" key={product.id}>

            <img
              src={product.images?.[0]}
              alt={product.title}
              loading="lazy"
              onError={(e)=>{
                e.target.style.display = "none"
                e.target.nextSibling.style.display = "flex"
              }}
            />
            <div className="placeholder" style={{ backgroundColor: getRandomColor() }}>
                600 x 600
            </div>

            <p>{product.title}</p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;
