const ProductDetailPage = () => {
    const { id } = useParams();
    return (
      <div>
        <h1>Product Detail</h1>
        <p>Details for product ID: {id}</p>
      </div>
    );
  };

  export default ProductDetailPage;