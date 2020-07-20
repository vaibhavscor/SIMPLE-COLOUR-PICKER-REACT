import React,{useState} from "react"


const Colors = () => {
    const [colourName] = useState(['#FEA47F','#25CCF7','#EAB543',
    '#55E6C1','#CAD3C8','#F97F51','#1B9CFC','#F8EFBA','#82589F','#BDC581']);
    
    const copyColour = (e) => {
        let color = e.target.innerText;
        // console.log(color);
        //if(navigator.clipboard){
            navigator.clipboard.writeText(color); // copy text from clipboard
            navigator.clipboard.readText(); // paste it 
            
        //}
    }
    
    
    
    
    return(
        <div className="row">
            {colourName.map(color1 => (
                <div className="item" key={color1} style={{background: color1}}
                onClick={copyColour}
                >
                    <div>{color1}</div>
                </div>
                ))}
        </div>
    );
}
export default Colors;