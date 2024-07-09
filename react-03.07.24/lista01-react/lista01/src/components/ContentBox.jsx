import React from "react";

function ContentBox({texto}){
    return(
        <>
        <div className="content-box">
          <h3>{texto}</h3>  
        </div>
        </>
    )
}

export default ContentBox