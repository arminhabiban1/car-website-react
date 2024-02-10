import React ,{useState} from 'react';
import Navbar from './component/Navbar/Navbar';
import Background from './component/Background/Background';
 import Hero from './component/Hero/Hero';

const App = () => {
  let HeroData=[
    {text1:'Dive into' ,text2:'What you love'},
    {text1:'Indulge' ,text2:'Your passions'},
    {text1:'Give in TO' ,text2:'Your passions'},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero />
    </div>
  )
}

export default App