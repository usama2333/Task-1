
import React , {Fragment} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const Error = () => {
    
    let img2 = "https://thumbs.dreamstime.com/b/error-page-not-found-glitch-effect-style-vector-distorted-horizontal-glitched-lines-neon-glowing-typography-dark-203421762.jpg";
    return (
    <Fragment>

      <Container sx={{mt : '70px' ,display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
      <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 280 }}
        image= {img2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Page not found
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A 404 error is an HTTP status code that means that the page you were trying to reach on a website couldn't be found on their server
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Container>
    </Fragment>
  )
}

export default Error
