import { useState } from "react";

export default function Odd ( {sentence} ) {
    const [dispari, setDispari] = useState([])

    function handleRemove (index) {
        sentence.splice(index, 1)
        setDispari([...sentence])
    }
    return ( 
    <div>
        <h2>Odd</h2>
       <ul>
        {sentence.map((c, index) => {
            return <li key={index}>{c}<button onClick={() => handleRemove(index)}>X</button></li>
        })}
       </ul>
    </div>
     );
}
