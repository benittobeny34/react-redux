import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Home extends Component {
  state = {
    posts:[]
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {

      this.setState({
        posts:res.data.slice(0,20)
      })
      // console.log(this.state.posts)
    })

  }
    

    render() {
      const { posts } = this.state;
      const postList = posts.length ? (
        posts.map(post => {
          return (
            <div className="post card" key={post.id}>
             <div className="card-content">
             <Link to={'/' + post.id }>
             <div className="card-title">{post.title}</div>
             </Link>
             <p>{post.body}</p>
             </div>
            </div>
            )
        })
        ): (
        <div className="center ">Loading...</div>);
        return (
            <div className="container">
             {postList}
            </div>
        );
    }
}

export default Home;
