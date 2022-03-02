import React from 'react'

import backIcon from '../assets/imgs/arrow-left.svg'

function PaleteWrapper(props) {
  const handleChangeColorType = ({target}) => {
    props.onChangeColorType(!!target.value ? target.value : 'hex')
  }

  return (
    <div>
      <nav>
        <button className='nav-action-btn' onClick={props.resetPalette}>
          <img src={backIcon} alt='Back to paletts list' />
        </button>

        <b>{props.currentPalette.name}</b>

        <select onChange={handleChangeColorType}>
          <option value='hex'>HEX</option>
          <option value='rgb'>RGB</option>
          <option value='rgba'>RGBA</option>
        </select>
      </nav>

      { props.children }
    </div>
  )
}

export default PaleteWrapper