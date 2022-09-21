
export default function Odd ( {sentence} ) {
    return ( 
    <div>
        <h2>Odd</h2>
       <ul>
        {sentence.map((c, index) => {
            return <li key={index}>{c}<button>X</button></li>
        })}
       </ul>
    </div>
     );
}
