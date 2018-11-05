import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";

const styles = {
    card: {
    },
    media: {
    },
};
function CardComponent(props) {
    function openComic() {
        window.location.href=props.link
    }
        return (
            <Grid item xs={6} sm={2} >
                <Card onClick={openComic} className="comicCard">
                    <CardActionArea>
                        <CardMedia
                            className="comicCardMedia"
                            component="img"
                            image={props.cover}
                            title={props.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography component="p">
                                Number of Episodes: {props.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
}
export default withStyles(styles)(CardComponent)