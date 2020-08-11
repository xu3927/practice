import React from 'react'
import _ from 'lodash'

const Comp1 = () => {
    return (
        <div>
            <div>comp1</div>
            <button
                onClick={() => {
                    console.log(33, _.VERSION)
                }}
            >
                btn
            </button>
        </div>
    )
}

export default Comp1
