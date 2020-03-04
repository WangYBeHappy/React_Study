import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        
        console.log('Dishdetail Component constructor is invoked.')
    }
    renderDish(dish){
        if(dish !=null){
          return(
              <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
        }else{
          return(
            <div></div>
          );
        }
    };

    renderComments(comments){    
        if(comments != null){
            const comts = comments.map((comment) => {
                return (
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li> --{comment.author}, {comment.date}</li>
                    </ul>
                )
            });  
            return(
                <div>
                    <h4>Comments</h4>
                    {comts}
                </div>              
            );
        }else{
            return(
                <div></div>
            );
        }
    };

    render(){
        const dish = this.props.selectedDish;
        const comments = dish ? dish.comments : null;
        return(
            <div className="row">
                <div className="column col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="column col-12 col-md-5 m-1">                   
                    {this.renderComments(comments)}
                </div>
            </div>
        );
    }; 
}

export default Dishdetail;