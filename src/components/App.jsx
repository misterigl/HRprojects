class App extends React.Component {

  constructor(props) {
    super(props);
    var exists = !!Object.keys(this.props.searchYouTube).length;
    this.state = {
      list: exists ? this.props.searchYouTube : exampleVideoData,
      currentVideo: exists ? this.props.searchYouTube[0] : exampleVideoData[0]
    };
    this.handlers = {
      onVLEClick: () => {
        console.log('got clicked?', this.state, arguments);
        // this.setState({currentVideo: props.video});
      }
    };
  }
  

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.list} callbacks={this.handlers} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
