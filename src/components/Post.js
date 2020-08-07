import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { deletePost } from '../actions/postAction';

class Post extends Component {
	// state = {
	// 	post:null
	// }
 //  componentDidMount(){
 //   let id = this.props.match.params.post_id;
 //    axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(res => {
 //    this.setState({
 //    	post:res.data
 //      })
 //    // console.log(res.data)
 //    })
   
 //  }
     handleClick = () => {
      this.props.deletePost(this.props.post.id);
      this.props.history.push('/')
    }
    render() {
      // console.log(this.props)
    	const post_details = this.props.post ? (
   	 <div className="post">
   	   <h1 className="center">{this.props.post.title}</h1>
   	   <p>{this.props.post.body}</p>
       <div className="right  btn-small grey" onClick = {this.handleClick}>Delete</div>
   	 </div>
   	) : (
   	 <h4 className="center">Loading...</h4>
   	); 
        return (
            <div className="container">
            	{post_details}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // deletePost: (id) => {
      //   dispatch({type: 'DELETE_POST',id:id})
      deletePost: (id) => {dispatch(deletePost(id))}
      // }
    }
}

const mapStateToProps = (state,ownProps) => {
  let id = ownProps.match.params.post_id;
  return ({
     post:state.posts.find(post => {
      return post.id === id
     })
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
