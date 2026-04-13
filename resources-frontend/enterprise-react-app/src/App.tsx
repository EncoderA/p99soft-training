import { AppProviders } from "./providers";
import Routes from "./routes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <AppProviders>
      <Toaster richColors position="top-right" theme="system" />
      <Routes />
    </AppProviders>
  );
}
