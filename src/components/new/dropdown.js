import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

function MediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    // height='10px'
                    image="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dl-digital.com%2Fimages%2FAstronomy%2FGalaxies%2FM31-10-2007-16img-Final-cropNR2-1200px.jpg&f=1"
                    title="eheyd nmsb ncbevwk"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        galaxy
                    </Typography>
                    <Typography component="p">
                        one is milky way
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
