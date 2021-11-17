import React from "react";

const Routes = [
  // DEFAULT PAGES
  {
    path: "/",
    component: React.lazy(() => import("pages/AllContacts")),
    name: "Home",
    exact: true,
  },
  {
    path: "/all-contacts",
    component: React.lazy(() => import("pages/AllContacts")),
    name: "All Contacts",
    exact: true,
  },
  {
    path: "/list-contact",
    component: React.lazy(() => import("pages/ListContact")),
    name: "List Contact",
    exact: true,
  },
  /*
    ---------------------------------------------
    ERROR PAGES, PLEASE KEEP PUT IT AT THE BOTTOM
    ---------------------------------------------
  */
  {
    path: "*",
    component: React.lazy(() => import("pages/404")),
    name: "Page not found",
    exact: true,
  },
];

export default Routes;
