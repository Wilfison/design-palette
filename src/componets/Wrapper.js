import React from 'react'
import PropTypes from 'prop-types'

import backIcon from '../assets/imgs/arrow-left.svg'

function Wrapper(props) {
  return (
    <div>
      <nav>
        <button className='nav-action-btn' onClick={props.onBackAction} disabled={!props.onBackAction}>
          {!!props.onBackAction && <img src={backIcon} alt='Back to paletts list' />}
        </button>

        <b>{props.title}</b>

        <button className='nav-action-btn' onClick={props.onRightAction} disabled={!props.onRightAction}>
          {!!props.onRightAction && !!props.rightIcon ? props.rightIcon : null }
        </button>
      </nav>

      { props.children }
    </div>
  )
}

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  onBackAction: PropTypes.func,
  onRightAction: PropTypes.func,
  rightIcon: PropTypes.element
}

export default Wrapper

