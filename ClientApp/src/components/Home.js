import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Home.css'; // Import your custom CSS stylesheet
import image from '/Users/Bibek Bastola/source/repos/SportHub/ClientApp/src/components/static/images/cards/sport-image.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className='centered-container'>
        <Card sx={{ maxWidth: 400 }} className='custom-card'>
          <CardMedia
            sx={{ height: 140 }}
            image={image}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Get Updates from your favorite sports and players! Enjoy!!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className='custom-button'>Sign Up</Button>
            <Button size="small" className='custom-button'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
