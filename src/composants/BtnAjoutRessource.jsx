import './BtnAjoutRessource.scss';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    }
  }
});

export default function BtnAjoutRessource() {
  return (
    <button className="BtnAjoutRessource">
      <MuiThemeProvider theme={theme}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
      </MuiThemeProvider>
    </button>
  );
}