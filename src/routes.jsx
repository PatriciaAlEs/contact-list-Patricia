// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { AddContact } from "./pages/addContact.jsx";
import { EditContact } from "./pages/EditContact.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/AddContact" element={<AddContact />} />
      <Route path="/editContact/:id" element={<EditContact />} />
    </Route>
  )
);