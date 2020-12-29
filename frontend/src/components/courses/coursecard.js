import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardMedia } from '@material-ui/core';
import React, { Component } from 'react';

class CourseCard extends Component {
    render() {
        return (
            <div>
                <Card>

                    <CardActionArea>
                        <CardMedia 
                            image={this.props.img}
                        />
                    </CardActionArea>

                    <ButtonGroup size="small">
                        <Button>Enter</Button>
                    </ButtonGroup>

                </Card>
            </div>
        );
    }
}

export default CourseCard;