import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from "./pages/Home";
import "./index.css"

import AppBarComponent from './components/AppBarComponent';
import { Container } from '@material-ui/core';
import DialogC from './components/DialogC';
import Favourites from './pages/Favourites';


const App = () => {
    const [dialog, setDialog] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [foods, setFoods] = useState([
        {
            foodName: "Bahal",
            foodDescription: "Best Food in the World"

        },
        {
            foodName: "Domoda",
            foodDescription: "2nd  Best Food in the World"

        }
    ]);
    const [favourites, setFavourites] = useState([]);

    const submitForm = () => {
        if (name && description) {
            setFoods([...foods, { foodName: name, foodDescription: description }]);
            return closeDialog();

        }
        alert("Fill All Input Fields ");
    }

    const closeDialog = () => {
        setName('');
        setDescription('');
        setDialog(!dialog);

    }


    const addToFavourite = (food) => {

        var item = foods.find((value) => value === food);
        
        //(item);
        if (!favourites.includes(item)) return setFavourites([...favourites, item]);
        alert("Already Favourited This Item")
    

    }
    const triggerDelete = (food) => {
        setFoods(foods.filter((value) => value !== food));
    }
    return (


        <BrowserRouter>

            <Container >

                <AppBarComponent onTrigger={() => setDialog(!dialog)} />

                <Route exact path="/"><Home foods={foods}
                    triggerDelete={triggerDelete}
                    triggerFavourite={addToFavourite} /></Route>
                <Route path="/favourites"> <Favourites favourites={favourites} /></Route>


            </Container>

            {
                dialog && <DialogC submitData={() => { submitForm() }}
                    triggerNameChange={(e) => { setName(e.target.value) }}
                    triggerDescriptionChange={(e) => { setDescription(e.target.value) }}
                    open={dialog} triggerClose={() => closeDialog()} />
            }

        </BrowserRouter>



    );
};

export default App;

