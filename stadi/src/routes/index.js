import App from "../App";
import AudioLessonsPage from "../lesson";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lessons",
    element: <AudioLessonsPage />,
  }
];

export default routes;
