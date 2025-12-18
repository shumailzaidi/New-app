import React from 'react'
import Navbar from './Compoents/Navbar';
import Newsboard from './Compoents/Newsboard';

const App = () => {
  const [category, setCategory] = React.useState("technology");
  return (

    <div>
    

 <Navbar setCategory={setCategory} />
      <Newsboard category={category} />

    </div >
    
  )
}
export default App;