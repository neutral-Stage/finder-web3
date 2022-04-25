import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { FinderProvider } from "../context/FinderContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://hyfkg4oqhy4l.usemoralis.com:2053/server"
      appId="GPfl6i2GC2a28xPilMZNPCHwOLfitfePxFUx8fBm"
    >
      <FinderProvider>
        <Component {...pageProps} />
      </FinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
