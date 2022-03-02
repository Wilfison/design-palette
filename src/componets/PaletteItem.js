import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { copyColorToClipboardAsync } from '../actions'
import { AppContext } from '../App'

function PaletteItem(props) {
  const [isCopied, setIsCopied] = useState(false)
  const appContext = useContext(AppContext)

  const copyToClipboard = (color) => {
    copyColorToClipboardAsync(color, appContext.colorType)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <button
      className='palette-show-color'
      style={{backgroundColor: props.color.value}}
      onClick={() => copyToClipboard(props.color.value)}
    >
      <span className='palette-show-color-label'>{props.color.label}</span>

      { isCopied && <span className='palette-show-msg-success'>Copiado</span> }
    </button>
  )
}

PaletteItem.propTypes = {
  color: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
}

export default PaletteItem