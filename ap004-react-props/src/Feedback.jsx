//rafce
import React from 'react'

const Feedback = ({ textoOk, textoNOK, funcaoOk, funcaoNOK }) => {
  return (
    <div className='d-flex justify-content-evenly m-2'>
      <button
        type="button"
        onClick={funcaoOk}
        className="btn btn-primary"
      >
        {textoOk}
      </button>

      <button
        type="button"
        onClick={funcaoNOK}
        className="btn btn-danger"
      >
        {textoNOK}
      </button>
    </div>
  )
}
export default Feedback