import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ThemeProvider } from "./components/theme-provider";
import { ToastContainer } from "react-toastify";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
