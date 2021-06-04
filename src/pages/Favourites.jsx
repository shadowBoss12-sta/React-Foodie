import React from 'react'
import CardC from '../components/CardC'

const Favourites = ({ favourites}) => {
    return (
        <div>
            <h1>Favourites</h1>
            {
                favourites.length > 0 ? favourites.map((favourite, index) => <CardC key={index}
                    food={favourite} />) : <h1>No  Favourite Food Added Yet</h1>
            }

        </div>
    )
}
export default Favourites
