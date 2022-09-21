const Even = ({sentence}) => {
    return ( 
        <div>
            <h2>Even</h2>
           <ul>
                {sentence.map((c, index) => {
                    return <li key={index}>{c}<button>X</button></li>
                })}
           </ul>
        </div>
         );
    }
     
 
export default Even;