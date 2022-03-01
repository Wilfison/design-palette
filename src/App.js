import { createContext, useState } from 'react';
import './App.css';
import PaleteWrapper from './componets/PaleteWrapper';
import PaletsList from './componets/PaletsList';
import Palette from './componets/Palette';

import palettes from './palettes';

export const AppContext = createContext()

function App() {
  const [currentPalette, setCurrentPalette] = useState(null)
  const [colorType, setColorType] = useState('hex')

  if(!!currentPalette){
    return (
      <AppContext.Provider value={{colorType}}>
        <PaleteWrapper
          currentPalette={currentPalette}
          onChangeColorType={setColorType}
          resetPalette={() => setCurrentPalette(null)}
        >
          <Palette palette={currentPalette}/>
        </PaleteWrapper>
      </AppContext.Provider>
    )
  }

  return (
    <div className="palettes-list">
      {
        palettes.map((palette, index) => {
          return <PaletsList key={index} palette={palette} onSelect={() => setCurrentPalette(palette)} />
        })
      }
    </div>
  );
}

export default App;
