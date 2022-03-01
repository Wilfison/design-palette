import React from 'react'

function PaletsList({palette, onSelect}) {
  return (
    <button className='palettes-list-item' onClick={onSelect}>
      <div className='palettes-list-item-colors'>
        {
          palette.show_colors.map((color, index) => {
            return (
              <div style={{backgroundColor: color}} className='palettes-list-item-color' key={index}></div>
            )
          })
        }
      </div>

      <p className='palettes-list-item-title'>{palette.name}</p>
    </button>
  )
}

export default PaletsList