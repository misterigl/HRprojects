class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.searchYouTube,
      currentVideo: this.props.searchYouTube[0]
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.list} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
