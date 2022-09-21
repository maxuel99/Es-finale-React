import Even from "./Even";
import Odd from "./Odd";
import { useState } from "react"

const Home = () => {
    const [data, setData] = useState('')
    const [counter, setCounter] = useState(0)
    const [frase, setFrase] = useState('')
    const [item, setItem] = useState([])
    const [listodd, setListOdd] = useState(false)
    const [listeven, setListEven] = useState(false)
    const [dispari, setDispari] = useState([])
    const [pari, setPari] = useState([])

    function handleClick() {
        fetch ('http://numbersapi.com/random/math')
        .then((response) => {
            return response.text()
        })
        
        .then((data) => {
            setData(data)
            setFrase(data)
            item.push(data)
            console.log(data)
            
            let DATA = data.substring(0, 4)
            if (DATA % 2 === 0) {
                return setPari((array) => [...pari, data])     
            } else {
                return setDispari((array) => [...dispari, data])
            }
            
        })
    }
    
    const handleListOdd = () => {
        setListOdd(!listodd)
    }

    const handleListEven = () => {
        setListEven(!listeven)
    }


   
    return (
        
        <div>
            <p>{frase}</p>
            <button onClick={handleClick}>Click</button>
            
            {/* <ul>
                {item.map((frase, index) => {
                    return <li key={index}>{frase}</li>
                })}
            </ul> */}
        
            <button onClick={handleListOdd}>Odd</button>
            {listodd && <Odd sentence={dispari} />}

            <button onClick={handleListEven}>Even</button>
            {listeven && <Even sentence={pari} />}

        </div>
     );
}
 
export default Home; 