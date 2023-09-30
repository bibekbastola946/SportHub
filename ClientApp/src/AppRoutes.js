import { Home } from "./components/Home";
import {SignIn} from './components/SIgnIn';
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/signin",
    element: <SignIn />
  }
];

export default AppRoutes;
