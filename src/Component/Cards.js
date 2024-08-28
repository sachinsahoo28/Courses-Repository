import React, { useState } from "react";
 import Card from "./Card"


   const Cards= (probs)=>{

        let courses =probs.courses;
        let category=probs.category;
        const [likedCourse, setLikedCourse]=useState([]);

      const getCourses =()=>{
       if (category==="All"){
        let allCourses= [];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
    })
        
        
        return allCourses;
    }
    else{
        // main shirf specific catigor ka data array dunga
         return courses[category];
    }
}

return(
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
        getCourses().map((course)=>{
         return   <Card course={course} 
                        likedCourse={likedCourse}
                       setLikedCourse={setLikedCourse}/>

        })
    }
    </div>
)


};
   
export default Cards;