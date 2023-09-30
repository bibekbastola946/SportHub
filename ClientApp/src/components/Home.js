import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Home.css'; // Import your custom CSS stylesheet
import image from '/Users/Bibek Bastola/source/repos/SportHub/ClientApp/src/components/static/images/cards/sport-image.jpg';
import {SignUp} from './SignUp';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className='App'>
        <SignUp />
      </div>
    );
  }
}
