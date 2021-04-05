import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@neves/navbar",
  app: () => System.import("@neves/navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@neves/bar",
  app: () => System.import("@neves/bar"),
  activeWhen: location => location.pathname === "/"
});

registerApplication({
  name: "@neves/foo",
  app: () => System.import("@neves/foo"),
  activeWhen: ["/foo"]
});

start({
  urlRerouteOnly: true,
});
