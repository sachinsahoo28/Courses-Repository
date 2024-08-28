import React, { useEffect } from "react";
import { apiUrl, filterData } from "./data";

import Cards from "./Component/Cards";
import Filter from "./Component/Filter";
import Navbar from "./Component/Navbar";
import Spinner from "./Component/Spinner";

import { toast } from "react-toastify";
import { useState } from "react";
const App = () => {
   
   const [courses,setCourses] = useState(null);
   const [loading, setLoading]= useState(true);
   const [category, setCategory]= useState(filterData[0].title);
     
          const fetchData= async()=>{
            setLoading(true);
            try{
              const res = await fetch(apiUrl);
              const output = await res.json();
              setCourses(output.data);
            }
            catch(error) {
              toast.error("something went wrong");
            }
           setLoading(false);
          } 
         
          useEffect(()=>{
            fetchData();
          }, [])

         
     

        return (
        <div className=" max-h-min bg-bgDark2">
               
               <div>
               <Navbar/>
               </div>

                <div >

                <Filter  filterData={filterData} 
                          category={category}
                          seCategory={setCategory}/>
              

              <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center
                              items-center main-h[50vh]">
                
              {
               loading ? <Spinner/> : <Cards courses={courses} category={category}/>
                }
              </div>
                  
                 </div>   
               
                 


        </div>
         

  )
};

export default App;
