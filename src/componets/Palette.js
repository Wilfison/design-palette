import React, { useEffect, useState } from 'react'
import PaletteItem from './PaletteItem'

function Palette(props) {
  const [currentVariants, setCurrentVariants] = useState([])
  const palette = props.palette

  useEffect(() => {
    setCurrentVariants(props.palette.colors[0].variants)
  }, [props.palette])

  return (
    <div className='palette-show'>
      <div className='palette-main-colors'>
        {
          palette.colors.map((mainColor) => {
            return (
              <button
                key={mainColor.main}
                className='palette-main-color-btn'
                style={{backgroundColor: mainColor.main}}
                onClick={() => setCurrentVariants(mainColor.variants)}
              >
              </button>
            )
          })
        }
      </div>
      <div className='palette-show-variants'>
        {
          !!currentVariants && currentVariants.map((color, index) => {
            return <PaletteItem key={`color-${index}`} color={color} />
          })
        }
      </div>
    </div>
  )
}

export default Palette