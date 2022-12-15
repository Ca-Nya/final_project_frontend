import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const root = ReactDOM.createRoot(document.getElementById("root"));

Sentry.init({
	dsn: "https://6cbadc058af6448ebf712055dfa0fef8@o4504331746934784.ingest.sentry.io/4504331765678080",
	environment: "production",
	normalizeDepth: 6,
	integrations: [
		new Sentry.Integrations.Breadcrumbs({ console: true }),
		new BrowserTracing(),
	],
});

const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<App />
				</RecoilRoot>
				{/* <ReactQueryDevtools /> */}
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
);
