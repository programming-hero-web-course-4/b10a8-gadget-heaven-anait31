import { Link, useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
const Banner = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/dashboard')
    }
    return (
        <div className='relative mb-8'>
            <div className='text-center bg-[#9538E2] text-white space-y-3 pb-48 pt-10 px-4'>
                <h1 className='text-2xl md:text-6xl font-bold md:w-3/4 mx-auto'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className=''>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button onClick={handleNavigate}  className='bg-white px-4 py-2 rounded-lg font-bold text-[#9538E2]'>Shop Now</button>
            </div>
            <div className='flex items-center justify-center mt-[-150px] mx-4 md:mx-0'>
                <img className='rounded-xl md:h-[450px] md:w-[1120px] object-cover' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;