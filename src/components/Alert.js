import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
      <div class="alert alert-danger" role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
      </div>
    </div>
  )
}

