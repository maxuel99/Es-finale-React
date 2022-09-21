import { useState } from "react"

const Even = ({sentence}) => {
    const [pari, setPari] = useState([])

    function handleRemove (index) {
        sentence.splice(index, 1)
        setPari([...sentence])
    }
    

    return ( 
        <div>
            <h2>Even</h2>
           <ul>
                {sentence.map((c, index) => {
                    return <li key={index}>{c}<button onClick={() => handleRemove(index)}>X</button></li>
                })}
           </ul>
        </div>
         );
    }
     
 
export default Even;