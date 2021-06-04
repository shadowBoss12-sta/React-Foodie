import CardC from "../components/CardC";


const Home = ({foods,triggerFavourite,triggerDelete}) => {
    return (
        <div>
            <h1>Home</h1>

            {
                foods.length>0 ? foods.map((food,index) => <CardC triggerFavourite={triggerFavourite}
                  key={index} 
                  triggerDelete={triggerDelete}
                food={food} />) : <h1>No Food Added Yet</h1>
            }
           

        </div>
      


    );
};

export default Home;
