import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppContainer from "./components/AppContainer";

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chart Creator
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <AppContainer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
