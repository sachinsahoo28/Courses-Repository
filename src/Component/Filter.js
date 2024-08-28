import React from "react";

const Filter=(probs)=>{

    let filterData = probs.filterData;
    let category= probs.category;
    let seCategory=probs.seCategory;

     function filterHandler(title){
        seCategory(title);
     }

    return(

        <div className="flex  flex-wrap  space-x-4 gap-y-4 ma-auto py-4 justify-center"> 
            {filterData.map((data)=>{
               return( <button
               className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 
              transition-all duration-300
              ${category===data.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"} 
              `} key={data.id} 
                onClick={()=>filterHandler(data.title)}
                >{data.title}
            </button>)
            })}
        </div>
    )

};

export default Filter