class UserList extends React.Component {  
  render() {
    var listOfUsernames = this.props.data.map((user) => {
      return (<Comment author={comment.author}>
      {comment.text}
      </Comment>)
    });
    return (<div className="commentList">
    {commentNodes}
    </div>)
  }
}