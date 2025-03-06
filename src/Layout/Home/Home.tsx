import { useState } from "react";
import Button from "./Button";
import Text from "./Text";


const Home = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <p>hello everything is good now</p>
            <Text text = {"TypeScript"} num={20} />
            <Text text = {"JavaScript"} num={20} />
            <br/>
            <p>{count}</p>
            <Button onClick={() => setCount(count + 1)} text="Up"></Button>
            <Button onClick={() => setCount(count - 1)} text="Down"/>
        </div>
    );
};

export default Home;