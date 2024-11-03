
const Product = ({ product }) => {
    const { product_id, product_title, product_image, category, price, description } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl object-cover h-[250px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}K</p>
                    <div className="card-actions">
                        <button className="btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;