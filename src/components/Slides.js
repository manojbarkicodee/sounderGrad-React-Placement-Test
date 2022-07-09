import React, { useState } from 'react';

function Slides({slides}) {
    let [value,setvalue]=useState(0)
    
return (
<div>
<div id="navigation" className="text-center">
<button data-testid="button-restart" className={value===0?"outlined" :"small"} disabled={value===0} onClick={()=>setvalue(0)}>Restart</button>
<button data-testid="button-prev" className={value===0?"outlined" :"small"}  disabled={value===0} onClick={()=>setvalue((value)=>value-1)} >Prev</button> <button
data-testid="button-next" className={value===slides.length-1?"outlined" :"small"} disabled={value===slides.length-1} onClick={()=>setvalue((value)=>value+1)}>Next</button> </div>
<div id="slide" className="card text-center">
<h1 data-testid="title">{slides[value].title}</h1>
<p data-testid="text">{slides[value].text}</p>
</div>
</div>
);

}

export default Slides;