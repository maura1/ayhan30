

import {  Mail, Phone} from "lucide-react";
const Impressum = () =>{
    return(
        <>
      
           <div className=" bg-softWhiteC px-48 py-12">
            <div className="relative text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium text-blackC">Impressum</h1>
          

          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-4">
            <div className="md:w-1/2 pt-2 p-24">

              <h3 className="pb-4 text-3xl">Adresse:</h3>
            <p>
              Frauenstr. 30a
              <br />
              86830 Schwabmünchen
              <br />
              Germany
            </p>


              <div className="text-lg py-4 ">
              {/* Phone Number */}
              <div className="flex items-center  mb-2">
                <Phone className="w-5 h-5 mr-2  text-blackC bg-champagneC" />
                <p>0151-1155 30 31</p>
              </div>
              {/* Email Address */}
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blackC bg-champagneC" />
                <p>info@ayhankublay.de</p>
              </div>
              </div>

          </div>
            <div className="md:w-1/2 pt-2">right half</div>
          </div>
           </div>


        
        </>
    )
}
export default Impressum