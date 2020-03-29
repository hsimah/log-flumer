import { Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import { AppContext } from './AppContext';
import CommentList from './components/comment-list';
import UploadButtons from './components/file-upload';
import PowerFilter from './components/power-filter';
import logo from './logo.svg';

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
              <Grid item xs={12}>
                <PowerFilter />
              </Grid>
              <Grid item xs={12}>
                <CommentList comments={data.current} />
              </Grid>
            </Grid>
          </main>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
