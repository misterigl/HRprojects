class App extends React.Component {

  constructor(props) {
    super(props);
    let list = this.props.searchYouTube() || exampleVideoData;
    console.log('list', list);
    // var exists = !!Object.keys(this.props.searchYouTube).length;
    this.state = {
      list: list,
      currentVideo: list[0]
    };
    console.log(this.state);
    this.handlers = {
      onVLEClick: (event) => {
        this.setState({currentVideo: this.state.list.filter(function(obj) { return obj.id.videoId === event.target.id; })[0]});
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
