import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { FcLike} from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

 
const Card =(probs)=>{
    let course = probs.course;
    let likedCourse=probs.likedCourse;
    let setLikedCourse=probs.setLikedCourse;
    function clickHandler(){
                
        if (likedCourse.includes(course.id)){
            setLikedCourse((prev)=>prev.filter((cid)=>(cid !==course.id)));
             toast.warning("liked remove");
        }  
        else{
            // pahle ye course liked nhi hua hai
           if(likedCourse.length===0){
                  setLikedCourse([course.id])
           }
           else{
               setLikedCourse((prev)=>[...prev,course.id]);
           }
           toast.success("Liked Successfully");
      
      
        }

    
      }

    return(

        <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden">
               <div className="relative">
                  <img src={course.image.url}></img>
                    
                    <div className='w-[36px] h-[36px] bg-white rounded-full absolute right-2 my-[-20px]
                                    grid place-items-center'>
                        <button onClick={clickHandler}>
                          {
                            likedCourse.includes(course.id) ? 
                             <FcLikePlaceholder fontSize="1.75rem"/>:
                             <FcLike fontSize="1.75rem"/>
                          }
                        </button>
                    </div>

                      <div className="p-4">
                          <p className="text-white font-bold text-lg leading-6 ">{course.title}</p>
                          <p className="mt-2 text-white">
                            {

                            course.description.length>100 ?
                            (course.description.substr(0,100))+ "...":
                            (course.description)
                            }

                            </p>
                      </div>
               </div>

        </div>
    )


}
export  default Card;