import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
	state = {
		post:null
	}
  componentDidMount(){
   let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(res => {
    this.setState({
    	post:res.data
      })
    // console.log(res.data)
    })
   
  }

    render() {
    	const post_details = this.state.post ? (
   	 <div className="post">
   	   <h1 className="center">{this.state.post.title}</h1>
   	   <p>{this.state.post.body}</p>
   	 </div>
   	) : (
   	 <h4 className="center">No post Exist for this id</h4>
   	); 
        return (
            <div className="container">
            	{post_details}
            </div>
        );
    }
}

export default Post;
