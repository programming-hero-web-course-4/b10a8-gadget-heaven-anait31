import { MdDelete } from "react-icons/md";
const Cart = ({ product }) => {
    const { product_id, product_title, product_image, category, price, description } = product;
    return (
        <div >
            <div className="flex justify-between rounded-lg items-center border-2 mb-3 p-4">
                <div className="flex items-center gap-4">
                    <img className="w-24 object-cover" src={product_image} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold">{product_title}</h3>
                        <p>{description}</p>
                        <p><span className="font-bold">Price:</span> {price}$</p>
                    </div>
                </div>
                <div className="text-2xl ">
                    <MdDelete></MdDelete>
                </div>
            </div>
        </div>
    );
};

export default Cart;