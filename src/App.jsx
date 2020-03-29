import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './AppContext'
import UploadButtons from './components/file-upload'
import CommentList from './components/comment-list';
import { Grid } from '@material-ui/core';

function App() {
  const [data, setData] = React.useState({});
  return (
    <AppContext.Provider value={{
      data,
      setData
    }}>
      <div className="App">
        {data.type == null ? <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UploadButtons />
        </header> : <main>
            <Grid container>
              <Grid item lg={3}>
                <CommentList comments={data.comments} />
              </Grid>
            </Grid>
          </main>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
