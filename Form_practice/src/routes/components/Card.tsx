const Card = ({inputs, setInputs}) => {

    return (
        <>
            <h3>입력값 출력되는 곳</h3>
            <ul>
                {inputs.map((input) => <li>{input}</li>)}
            </ul>
        </>
    )
}

export default Card