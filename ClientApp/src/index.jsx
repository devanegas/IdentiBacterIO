import "bootstrap/dist/css/bootstrap.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import configureStore from "./store/store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

const theme = createMuiTheme({
	palette: {
		primary: {
            main: "#32ce9f",
            gradient: "linear-gradient(45deg, #32ce9f 30%, #149092 90%)",
            contrastText: '#FFFFFF'
        },
		secondary: {
            main: "#149092",
		},
	},
});

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
