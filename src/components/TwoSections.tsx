import React from 'react';
import Logo from "@/assets/logo_2.jpg";
import Logo1 from "@/assets/logo.jpg";
const TwoSectionLayout = () => {
  return (
    <div>
  <div className="flex flex-col md:flex-row gap-6 p-6">
      <section className="flex-1 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2 text-center">Gather & Grow</h2>
        <img style={{ borderRadius: "50%", width: "55%", margin: "0 auto" }} alt="revitilize_logo" src={Logo} />
        <p className="text-gray-700">
            In Kenya’s rural landscapes, women are transforming degraded land into thriving edible forests. This initiative blends indigenous knowledge, agroecology, and economic empowerment. From garlic to mangoes, these forests nourish communities, restore biodiversity, and elevate women as custodians of climate resilience.
        </p>        
      </section>

      <section className="flex-1 bg-blue-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2 text-center">Revitalize Conservation</h2>
         <img style={{ borderRadius: "50%", width: "55%", margin: "0 auto" }} alt="revitilize_logo" src={Logo1} />
        <p className="text-gray-700">
            At Revitalize Conservation, we believe that regeneration begins with people—especially those often overlooked in climate conversations. Our work is grounded in the power of grassroots action, intergenerational collaboration, and ecological justice. Through two bold initiatives, we’re reimagining conservation as a movement led by schoolchildren and rural women across Kenya.
       </p>
      </section>
     
    </div>
     <h2 className='p-8 text-2xl text-center font-bold'>
        Together, these initiatives embody our belief: conservation is not just about protecting nature—it’s about revitalizing lives, landscapes, and legacies.
      </h2>
    </div>
  
  );
};

export default TwoSectionLayout;
