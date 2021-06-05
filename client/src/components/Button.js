import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button class="m-6 bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border border-black-700 rounded">
                {props.title}
            </button>
        </div>
    )
}

export default Button
