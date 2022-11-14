import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<App />
			</RecoilRoot>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</Provider>,
	// </React.StrictMode>
);
