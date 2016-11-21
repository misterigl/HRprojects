var searchYouTube = (options, callback) => {
  var result = [];
  $.ajax({
  url: "https://www.googleapis.com/youtube/v3/search",
  data: {part: 'snippet', q: 'cats', key: YOUTUBE_API_KEY, max: 5, videoEmbeddable: 'true', type: 'video'},
  async: false,
  success: function( data ) {
      result = data.items;
    }
  });
  return result;
  // callback();
};

window.searchYouTube = searchYouTube;
