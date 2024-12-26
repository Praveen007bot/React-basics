import "./App.css";
import Greeting from "./Greeting";

function App() {
    return (
        <>
            <h1>Hello from react js</h1>
			<Greeting name={'Praveen'} />
			<Greeting name={'Suresh'} />
			<Greeting name={'Ramesh'} />
        </>
    );
}

export default App;