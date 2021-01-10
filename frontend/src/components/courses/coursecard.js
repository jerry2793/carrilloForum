import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';

import CourseDefaultImg from '../../img/courseDefaultImage.jpg'


class CourseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    
    render() {
        const { course } = this.props
        
        return (
            <div>
                <Card>

                    <CardActionArea>
                        <CardMedia
                            classes={{
                                media: {
                                    height: 140
                                }
                            }}
                            // image={course.img === undefined? CourseDefaultImg: course.img}
                        />
                    </CardActionArea>

                    <CardContent>
                        {course}
                        <Typography variant='h5'>
                            {/* {course.name === undefined? 'course.name true': 'No Course Name'} */}
                        </Typography>
                        <Typography variant='body2'>
                            {/* {course.description} */}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <ButtonGroup size="small">
                            <Button>Enter</Button>
                        </ButtonGroup>
                    </CardActions>

                </Card>
            </div>
        );
    }
}

export default CourseCard;