import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";

interface ThemeProps {
  children: ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  const mode = useSelector((state) => state.theme.mode);
  console.log(mode);
  
  // theme-ро танҳо вақте эҷод кун ки mode иваз мешавад
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>{children}</main>
    </ThemeProvider>
  );
}
