import { RecoilRoot, useRecoilValue } from 'recoil';
import './App.css';
import { Buttons } from './Components/Buttons';
import { colorA } from './Components/atoms';

function App(){

  return (<><MainApp></MainApp></>)

}

function MainApp() {
  // Using useRecoilValue to get the current value of colorA atom
  const colorAom = useRecoilValue(colorA);

  return ( 
       
        <div style={{ backgroundColor: colorAom, height: '100vh' }}>
          <Buttons />
        </div>
      
    
  );
}

export default App;
