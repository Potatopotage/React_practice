import { useState } from "react"

import Input from "../components/input"
import Card from "../components/Card"


const Home = () => {

    const [inputs, setInputs] = useState<string[]>([])


    return (
        <>
            <h1>사용자 입력 받기</h1>
            <Input inputs={inputs} setInputs={setInputs} />
            <Card inputs={inputs} setInputs={setInputs}/>
        </>
    )
}

export default Home