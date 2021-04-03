import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <Grid container={true} direction="column">
      <Grid item={true}>
        <Header />
      </Grid>

      <Grid item={true} container={true}>
        <Grid xs={0} sm={2} item={true} />   
        <Grid xs={12} sm={8} item={true}>          
         <Content />
        </Grid>
        <Grid xs={0} sm={2} item={true} />
      </Grid>

    </Grid>
  );
}

export default App;
