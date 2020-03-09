import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
};

function RenderComments({ comments }) {
    if (comments != null) {
        const comts = comments.map((comment) => {
            return (
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li> --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    </li>
                </ul>
            )
        });
        return (
            <div>
                <h4>Comments</h4>
                {comts}
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};

const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="column col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="column col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish ? props.dish.comments : null} />
                </div>
            </div>
        </div>
    );
};


export default DishDetail;