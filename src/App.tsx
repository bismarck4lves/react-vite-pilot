import Routes from "routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/themeConfig";
import { queryClient } from "services/queryClient";
import { QueryClientProvider } from "react-query";
import { SnackbarProvider } from "contexts/SnackbarContext";
import "./main.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
