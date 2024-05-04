import { useState } from 'react';
import axios from 'axios';


// function App() {
//   const [dogImageUrl, setDogImageUrl] = useState('');

//   const fetchRandomDogImage = async () => {
//     try {
//       const response = await axios.get('https://dog.ceo/api/breeds/image/random');
//       setDogImageUrl(response.data.message);
//     } catch (error) {
//       console.error('Error fetching dog image:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchRandomDogImage}>Get Random Dog Image</button>

//       {dogImageUrl && <img src={dogImageUrl} alt="none"/>}
//     </div>
//   );
// }

// export default App;



export default function FetchedData(){

    const [dogImageUrl,setDogImageUrl] = useState('')

    const getData = async () => {
        try{
            let response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
            setDogImageUrl(response.data.message)
        }catch(err){
            console.log("error",err)
        }
    }
    

    return(
        <div>
        <button onClick={getData}>Next</button>
        
        {dogImageUrl && <img src={dogImageUrl} alt="none"/>}
        </div>
    )
}
