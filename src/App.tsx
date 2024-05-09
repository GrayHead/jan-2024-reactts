import React, {FC} from 'react';
import './App.css';


const ChildComponent3: FC<any> = ({foobar}) => {
    return <div>
        <button onClick={() => {
            foobar('okten');
        }}>click me
        </button>

    </div>
}

const ChildComponent2: FC<any> = ({foobar}) => {
    return <div>
        <ChildComponent3 foobar={foobar}/>

    </div>
}

const ChildComponent1: FC<any> = ({foobar}) => {

    foobar('ashdasjhdj');
    return <div>

        <ChildComponent2 foobar={foobar}/>
    </div>
}

const App = () => {

    const foobar = (arg1: any) => {
        console.log(arg1);
    }


    return (
        <div>
            <ChildComponent1 foobar={foobar}/>
        </div>
    );
};

export default App;
