import { Router, Route } from "@vaadin/router";
import { MainPage } from "../views";
import { NavbarComponent } from "../views/navbar";

const components = {
  "nav-bar": NavbarComponent,
  "main-page": MainPage,
};

const outlet = document.getElementById("app");

export const routes: Route[] = [
  {
    path: "/",
    component: "main-page",
  },
];
const router = new Router(outlet);
router.setRoutes(routes);
export { router };
