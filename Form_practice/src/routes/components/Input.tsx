import { useState } from "react"

const Input = ({ inputs, setInputs}) => {

    const [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onClick = () => {

        if (input) {setInputs([...inputs, input])}
        setInput('')
        console.log(inputs)
    }


    return (
        <>
            <input 
                type="text" 
                onChange={onChange}
                value={input}
            />
            <button
                onClick={onClick}
            >제출
            </button>
        </>
    )
}

export default Input