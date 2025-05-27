import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'


const Sofas = () => {

    const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/sofa-collection").then((response) => {
      setCollection(response.data);
    });
  },[]);

  return (
    <>
      <Navbar/>

       <div className="p-10">
        <div className="flex overflow-x-auto gap-4 pb-2">
          {collection.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] flex-shrink-0 bg-white rounded-xl shadow-md p-2"
            >
              <img
                src={`https:${item.image}`}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <p className="mt-2 text-center font-medium text-gray-800 text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className=" font-bold text-4xl pl-10" style={{color:"#808000"}}>Sofas</h2>
      <div className="flex justify-between px-10 py-4">
        <p className="text-lg">Our stylish and comfortable sofas, perfect for any living room.</p>
        <div className="flex gap-10">
          <p>Sort By:</p>
          <select className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none cursor-pointer mt-[-7px]">
            <option>Featured</option>
            <option>Best Selling</option>
            <option>Price,Low to High</option>
            <option>Price,High to Low</option>
          </select>
        </div>
      </div>



      {/* ---------------------------------------Main Content----------------------------------------------- */}
      <div className="p-10 flex">
        <div className="w-1/4 h-auto">

        {/* -----------------Configuration----------------------- */}
            <div>
              <div className="bg-orange-50 h-[50px] font-semibold p-2 text-lg" style={{border: "3px solid rgb(163 163 163 )",borderRadius:"5px"}}>Configuration</div>
              <div className="px-4">
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">Chairs(4)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">Chiars(3)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">Sofa(5)</span>
              </div>
            </div>
          {/* ------------------------Size--------------------------- */}
             <div className="pt-4">
              <div className="bg-orange-50 h-[50px] font-semibold p-2 text-lg" style={{border: "3px solid rgb(163 163 163 )",borderRadius:"5px"}}>Size</div>
              <div className="px-4">
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">1.5 to 2.5-Seater(4)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">3 to 3.5-Seater(5)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">4 to 4.5-Seater(3)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">5 to 5.5-Seater(3)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">6-Seater(1)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">7-Seater(2)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">8-Seater(1)</span><br/>
                 <input type="checkbox" className="h-4 w-4" style={{marginTop:"20px"}} /><span className="pl-4 font-medium">10-Seater(1)</span>
              </div>
            </div>
            {/* ----------------------------Color------------------------ */}
            <div className="pt-4">
              <div className="bg-orange-50 h-[50px] font-semibold p-2 text-lg" style={{border: "3px solid rgb(163 163 163 )",borderRadius:"5px"}}>Color</div>
              <div className="flex justify-evenly mt-4">
                <div className="h-10 w-10 bg-color1" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-black" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-color2" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-color3" style={{borderRadius:"50%"}}></div>
              </div>

              <div className="flex justify-evenly mt-6">
                <div className="h-10 w-10 bg-color4" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-color5" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-color6" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-color7" style={{borderRadius:"50%"}}></div>
              </div>

              <div className="flex justify-evenly mt-6">
                <div className="h-10 w-10 bg-blue-400" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-green-600" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-blue-600" style={{borderRadius:"50%"}}></div>
                <div className="h-10 w-10 bg-purple-500" style={{borderRadius:"50%"}}></div>
              </div>
            </div>

            {/* -----------------------------Price------------------------------ */}

              <div className="pt-4">
              <div className="bg-orange-50 h-[50px] font-semibold p-2 text-lg" style={{border: "3px solid rgb(163 163 163 )",borderRadius:"5px"}}>Price</div>
              <div className="px-4">
              <p>The maximum price is $7362.00.</p>
                 <input type="text" placeholder='From'  style={{marginTop:"20px",border:"1px solid black",borderRadius:"5px"}} />
                 <input type="text" placeholder='To'  style={{marginTop:"20px",border:"1px solid black",borderRadius:"5px"}} />
              </div>
            </div>

            <button className='bg-orange-50 h-[50px] w-full font-semibold p-2 text-lg mt-8' style={{border: "3px solid rgb(163 163 163 )",borderRadius:"5px"}}>Apply Filter</button>
        </div>
        <div className="w-3/4 bg-red-100 h-auto"> </div>
      </div>
    </>
  
  )
}

export default Sofas