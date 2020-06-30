import React from 'react';
import {Row,Col,Image} from 'react-bootstrap'
import {getComment,getSingleBook} from '../fetches/index'
class Details extends React.Component {
    state = { 
        comment:{},
        book:{}
     }

     componentDidMount = async () => {
         const bookID = this.props.match.params.id
         let books = await getSingleBook(bookID)
         let comment = await getComment(bookID)
         this.setState({
             comment:comment.data,
             book:books.data
         })
         console.log(this.state.comment)
         console.log(this.state.book)
     }


    render() { 
        return ( 
         <div className="d-flex flex-row">
           <Row>
             <Col lg={6}>
               {/* <img src={this.state.book.img}></img> */}
                </Col>
                <Col lg={6}>
              <div className="mx-4">
              <p>{this.state.book.title}</p>
              <p>{this.state.book.price}</p>
              <p>{this.state.book.category}</p>
              </div>
                </Col>
             </Row>
             <Row>
                 <Col>
                 <p>{this.state.comment.text}</p>
              <p>{this.state.comment.rate}</p>
                 </Col>
             </Row>
         </div> 
 
      
    )
}
}
export default Details;