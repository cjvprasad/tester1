import './App.css';
import Video from './components/Video';
import axios from './components/axios'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AddVideo from './components/AddVideo';

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/v2/posts")
      setVideos(res.data)
      return res
    }
    fetchData()
  }, [])

  console.log(videos);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/add" component={AddVideo} />

          <div className="app__videos">
            {videos.map(({ url, channel, description, song, likes, shares, messages, _id }) => (
              <Video
                key={_id}
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                shares={shares}
                messages={messages}
              />

            ))}

          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
