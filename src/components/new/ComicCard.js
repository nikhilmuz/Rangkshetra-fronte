import React, { Component } from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 10,
    },
    media: {
    },
};
function CardComponent(props) {
        return (
            <Card className="comicCard">
                <CardActionArea>
                    <CardMedia
                        className="comicCardMedia"
                        component="img"
                        image={props.cover}
                        title={props.title}
                        width="100px"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography component="p">
                            {props.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
}
export default withStyles(styles)(CardComponent)