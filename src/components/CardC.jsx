import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { DeleteForever, FavoriteOutlined, HearingTwoTone } from '@material-ui/icons';
import React from 'react'
import { useHistory } from 'react-router-dom';

const CardC = ({ food, triggerFavourite,triggerDelete}) => {
    
    const history=useHistory();
   
    return (
        <Card  elevation={12}  color="default"  className="card1" >
            <CardActionArea>
                <CardMedia
                    className="media"
                 
                
                    image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {food.foodName}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {food.foodDescription}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    history.location.pathname !== "/favourites"&&
                    <>
                        <Button size="medium" color="secondary" onClick={() => { triggerFavourite(food) }}>
                            <FavoriteOutlined />
                        </Button>
                        <Button size="large" onClick={() => triggerDelete(food)} color="primary">
                            <DeleteForever />
                        </Button>
                    </>
                }
              
            </CardActions>
        </Card>


    )
}

export default CardC
