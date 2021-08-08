import React from 'react';
import {Container, Typography, Grid, Paper} from '@material-ui/core';

import useStyles from './styles';
import Form from '../Form/Form';

export default () => { 

    const classes = useStyles();

    return (
        <div style={{width: '50%', margin: '0 auto'}}>
            <Grid container style={{marginTop: 40}} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" style={{fontWeight: 'bold'}}>Create presentations lightning fast.</Typography>
                </Grid>
                <Grid item xs={6}> 
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h6">How it works:</Typography>
                        <ul> 
                            <li><Typography variant="p">Type your presentation's content using an easy and efficient markup language</Typography></li>
                        </ul>
                        <ol>
                            <li><Typography variant="p">Title slide</Typography></li>
                            <ul>
                                <li><Typography variant="p">Title</Typography></li> 
                                <li><Typography variant="p">Subtitle</Typography></li> 
                            </ul>
                            <li><Typography variant="p">The rest of the slides</Typography></li> 
                            <ul>
                                <li><Typography variant="p">Title</Typography></li> 
                                <li><Typography variant="p">Bullet points (multiple)</Typography></li> 
                            </ul>
                        </ol>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h6"> See an example: copy and paste the following text into the box and click download </Typography>
                        <Typography variant="p"><pre>{`
FastPres
Create presentations fast

How it works
image: logo.png
Write a simple text file
Run the program 
Get a formatted .pptx file ready to present

How it was built
image: logo.png
Python
Django
React

Image Slide
image: stock_image.jpg

Notes
image: logo.png
The title slide must have a title and a subtitle 
The other slides must have a title; everything else is optional

Current version's limitations
Currently, images only work with the local python script

What's Next
image: logo.png
Graphs
More customizability: option to set font size, color, etc
Save templates to user account
                        `}</pre></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <Form/>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </div>
    )
}