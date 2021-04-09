
import logo from './logo.svg';
import './App.css';

import backgrounds from "./backgrounds";
import React, {ChangeEvent, ChangeEventHandler, EventHandler, useState} from "react";





interface Props {
    // location: Location
}

const App: React.FC<Props> = props => {
// function App() {

    const [backGroundsState, setBackGroundState] = useState<Array<{
        name: string;
        type: string;

    }>>(
        backgrounds
    );

    const [selectedThemeState, setSelectedThemeState] = useState<{
        name: string;
        type: string;

    }>({
        name: backGroundsState[0].name,
        type: '',
    });





    console.log("selectedThemeState: ", selectedThemeState);



    const templateOptionsState = { key: '', name: '', type:''};


    const tempAllOptionsState = backGroundsState.map((oneOption:{
            name: string;
            type: string;

        }, index:number) =>
            ({...templateOptionsState, key: index, name: oneOption.name, type:oneOption.type})
    );


    // ChangeEventHandler<T = Element>
    // EventHandler<ChangeEvent<T>>
    //EventHandler<ChangeEvent>
    const updateTheme = (e:any) => {


        console.log("e.target.value: \n\n",e.target.value);

        // console.log("e.target: ",e.target);



        const filteredOneTheme = backGroundsState.filter(oneItem => oneItem.name.toLocaleLowerCase().
        match(e.target.value.toLocaleLowerCase()))[0];


        setSelectedThemeState({name: e.target.value,
            type: filteredOneTheme.type});







    };



    console.log(`selectedThemeState => 
    ${selectedThemeState.name}.${selectedThemeState.type}
    
    ${selectedThemeState.name},
    ${selectedThemeState.type}
    
    `);


    return (
        <div className="App-header">



            {
                (selectedThemeState.type ==='')
                    ?(
                        <img src={logo}
                             alt="logo"
                             style={{

                             }}
                        />
                    )
                    : (selectedThemeState.type ==='jpg')
                    ? (<img src={`${selectedThemeState.name}.${selectedThemeState.type}`}
                            alt="logo"
                            style={{

                            }}
                    />)
                    :(
                        <video



                            // controls
                            muted=  {true}
                            // muted=  {true}
                            loop={true}
                            autoPlay={true}
                            src={`${selectedThemeState.name}.${selectedThemeState.type}`}


                            width=  {"250"}
                            height= {"250"}

                            //             height?: number | string;
                            // playsInline?: boolean;
                            // poster?: string;
                            // width?: number | string;
                            // disablePictureInPicture?: boolean;
                            // disableRemotePlayback?: boolean;

                        >


                        </video>


                    )



            }







            <div className="wrap" id="select-bg">

                <label htmlFor="cars" style={{
                    color: 'gold',
                    fontWeight: 'bold',
                    fontSize: 50,

                }}>Theme:</label>

                <select name="cars" id="cars"
                        style={{
                            // color: 'gold',
                            color: 'greenyellow',
                            // width: '7%',
                            textAlign: 'center',
                            fontSize: 50,
                            // width: '100',
                            // height: '100',
                        }}

                        value={selectedThemeState.name}
                    // onChange={updateTheme}

                        onChange={(itemValue) =>
                            updateTheme(itemValue)
                        }

                >


                    {
                        tempAllOptionsState.map((
                            oneOption,
                            index) =>
                            <option key={oneOption.key} value={oneOption.name} >{oneOption.name}</option>)
                    }
                </select>

            </div>


        </div>
    );
}

export default App;
