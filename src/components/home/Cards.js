import { Fragment } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container , Box } from '@mui/system';
import background from '../../assests/images/background.png';



const Cards = () => {

    const img1='https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png';

    const img2 = 'https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png';

    const img3 = 'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg';
    const img4 = 'https://www.zdnet.com/a/img/resize/a0dcec40a8cd8d2e1b3a9e12a05c2819622d20be/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=1200&width=1200';
   
  
  return (
    <Fragment >
      <Container sx={{height : '100%', mt : '0px' , backgroundImage: `url(${background})`}}>
      <Box sx={{display : 'flex' , flexDirection : 'row' , flexWrap : 'wrap', justifyContent :'space-around' , alignItems : 'center'}}>
    <Card sx={{ maxWidth: 345 , mt : '120px' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img1}
        title="green iguana"
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          React JS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='success' size="small" >Share</Button>
        <Button variant='contained' color='success' size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 , mt : '120px' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img2}
        title="green iguana"
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Material Ui
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='primary' size="small">Share</Button>
        <Button  variant='outlined' color='primary' size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 , mt : '120px' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img3}
        title="green iguana"
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JavaScript
        </Typography>
        <Typography variant="body2" color="text.secondary">
        JavaScript is a programming language, often abbreviated as JS,the core technologies is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='primary' size="small">Share</Button>
        <Button variant='contained' color='primary' size="small">Learn More</Button>
      </CardActions>
    </Card>

       </Box>
    </Container>
    </Fragment>
  )
}

export default Cards
