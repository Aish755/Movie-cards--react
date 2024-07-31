import React from "react";
import ReactDOM from "react-dom";

import Card from "./Cards";
import Sdata from "./Sdata";
import Css from "./Index.css";


// function ncard(val){
//     return(
//     <Card
//         imgsrc={val.imgsrc}

//         title={val.title}
//         sname={val.sname}
//         link={val.links}
//     />
//     );
// }
ReactDOM.render(
    <>
        <h1 className="heading_style">List of top 5 netflix series</h1>
       {Sdata.map((val,index)=>{

        console.log(index);
        return(
        <Card
            key={val.id}
            imgsrc={val.imgsrc}

            title={val.title}
            sname={val.sname}
            link={val.links}
        />
        );
       })
       }
    
       
  

        
    </> ,document.getElementById("root")
);