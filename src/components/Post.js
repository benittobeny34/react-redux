import React, { Component } from 'react';

class Post extends Component {
	state = {
		id:null
	}
  componentDidMount(){
   let id = this.props.match.params.post_id;
    console.log(this.props);
    this.setState({
    	id:id
    })
  }
    render() {
        return (
            <div className="container">
            	<h4>route parameter:{this.state.id}</h4>
            </div>
        );
    }
}

export default Post;
