// import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
// import { ThemeProvider } from "@mui/material/styles";
import theme from "./src/theme";
import ContainerContent from "./src/components/ContainerContent";
import { ThemeProvider } from "@mui/material";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata = {
  title: "ToopTime",
  description: "A site that provides appointments for gyms",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>{children}</body>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <ContainerContent>{children}</ContainerContent>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
