import { Route, Switch } from "wouter";
import { SiteShell } from "./components/SiteShell";
import Home from "./pages/Home";
import World from "./pages/World";
import About from "./pages/About";
import EnterWorld from "./pages/EnterWorld";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* ENTER BUTTON PAGE */}
      <Route
        path="/world-of-bloodtasty"
        component={EnterWorld}
      />

      {/* ABOUT PAGE */}
      <Route path="/bloodtasty-team-" component={About} />
      <Route path="/about" component={About} />

      <Route
        path="/terms-and-conditions"
        component={Terms}
      />

      <Route
        path="/privacy-policy"
        component={Privacy}
      />

      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <SiteShell>
      <Router />
    </SiteShell>
  );
}