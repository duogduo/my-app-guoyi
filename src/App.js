import React, { Component } from 'react';
class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    // fetch('test.txt')
    // .then(response => response.text())
    // .then(data => this.setState({textGY:data}))
    // .then(data => {
    //   // 处理文件内容
    //   console.log(data);
    // })
    // .catch(error => {
    //   // 处理错误
    //   console.log("wrong wrong wrong ");
    //   console.log(error);
    // });

    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  render() {
    const { posts } = this.state;
  
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Posts from our API call</h1>
        </div>
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">
              ID #{post.id} {post.title}
            </div>
            <div className="card-body">
              <img src={post.thumbnailUrl}></img>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;

