import React from 'react';
import Logo from "@/assets/logo_2.jpg";
import Logo1 from "@/assets/logo.jpg";
import { FaInfoCircle, FaHandHoldingHeart } from 'react-icons/fa';

const TwoSectionLayout = () => {
  return (
    <div className='p-4'>
  <div className="flex flex-col md:flex-row gap-6 p-6 items-center flex-column justify-center ">
      <section className="flex-1 bg-gray-100 p-6 shadow-lg " style={{ borderRadius: "75px",backgroundImage: `url(${"https://i.ibb.co/1ftXC7kD/1000892870.png"})`, backgroundPosition: "center", backgroundSize: "cover"}}>
        <div style={{ backgroundColor: "green", width: "260px", borderTopLeftRadius: "24px", borderBottomRightRadius: "24px" }} className='shadow-lg'>
          <h1 style={{ color: "white", borderRadius: "24px"  }} className="text-3xl font-bold mb-2 text-center p-3">Gather & Grow</h1>
        </div>
        <img className='p-6 shadow-lg' style={{ borderRadius: "50%", width: "320px", margin: "0 auto", cursor: "pointer" }} alt="revitilize_logo" src={Logo} />      
            
        <p style={{ maxWidth: "720px", position: "relative", backgroundColor: "#fafafa", borderTopRightRadius: "72px", borderBottomLeftRadius: "72px"  }} className='p-8 mx-auto text-1xl text-center font-bold shadow-md mt-6 mb-6 text-green-600'>
            In Kenya’s rural landscapes, women are transforming degraded land into thriving edible forests. This initiative blends indigenous knowledge, agroecology, and economic empowerment. From garlic to mangoes, these forests nourish communities, restore biodiversity, and elevate women as custodians of climate resilience.
        </p>   
        <div className='flex items-center justify-center	mx-auto'>
            <button style={{ marginRight: "8px" }} className="flex items-center shadow mt-6 gap-2 bg-green-600 mb-6 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              <FaHandHoldingHeart className="h-5 w-5" />
              Donate
            </button>
            <button style={{marginLeft: "8px"}} className="flex items-center shadow mt-6 gap-2 bg-blue-600 mb-6 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              <FaInfoCircle className="h-5 w-5" />
              Learn More
            </button>
          </div> 
      </section>

      <section className="flex-1 bg-blue-100 p-6 shadow-lg" style={{ borderRadius: "75px",backgroundImage: `url(${"https://i.ibb.co/BH4Zrtw3/DSC-2179.jpg"})`, backgroundPosition: "center", backgroundSize: "cover"}}>
      <div style={{ backgroundColor: "green", width: "372px", borderTopLeftRadius: "24px", borderBottomRightRadius: "24px" }} className='shadow-lg'>
          <h1 style={{ color: "white", borderRadius: "24px"  }} className="text-3xl font-bold mb-2 text-center p-3">Revitalize Conservation</h1>
        </div>
         <img className='p-6 shadow-lg' style={{ width: "320px", borderRadius: "50%", margin: "0 auto", cursor: "pointer" }} alt="revitilize_logo" src={Logo1} />
        
          <p style={{ maxWidth: "720px", position: "relative", backgroundColor: "#fafafa", borderTopRightRadius: "72px", borderBottomLeftRadius: "72px" }} className='p-8 mx-auto text-1xl text-center font-bold mt-6 mb-6 shadow-md text-green-600'>
            In partnership with schools, we’re cultivating a generation of young environmental stewards. Children are not just planting trees—they’re planting hope, agency, and a future rooted in sustainability. Every seedling is a lesson in resilience, every tree a symbol of climate action led by youth.
          </p>  
          <div className='flex items-center justify-center	mx-auto'>
            <button style={{ marginRight: "8px" }} className="flex items-center shadow mt-6 gap-2 bg-green-600 mb-6 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              <FaHandHoldingHeart className="h-5 w-5" />
              Donate
            </button>
            <button style={{marginLeft: "8px"}} className="flex items-center shadow mt-6 gap-2 bg-blue-600 mb-6 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              <FaInfoCircle className="h-5 w-5" />
              Learn More
            </button>
          </div>
      </section>
    
    </div>
    
    </div>
  
  );
};

export default TwoSectionLayout;
