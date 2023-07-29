import {Link} from "react-router-dom";
import download from "../assests/images/download.png"
import { Button } from "../components/Button";
import { useEffect } from "react";

export const PageNotFound = () => {

  useEffect(()=>{
    document.title=`Page Not Found/Cinemaak`;
  });
  
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
         <div className="flex flex-col items-center my-4 ">
              <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404,OOPS!</p>
              
              <img className="rounded " src={download} alt="404"/>
              
         </div>
         <div className="flex justify-center my-4">
          <Link to="/">
            <Button>back to cinemaak</Button>
          </Link>
         </div>
      </section>
    </main>
  )
}
