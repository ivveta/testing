import { Link, Outlet, Route, Routes } from 'react-router-dom';

const Root = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Outlet />
  </div>
);
const About = () => (
  <div>
    <h1>About</h1>
    <p>You are on the about page</p>
  </div>
);

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>You are home</p>
  </div>
);

const NoMatch = () => (
  <div>
    <h1>404</h1>
    <p>No match</p>
  </div>
);
//
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <NoMatch />,
//     children: [{ index: true, element: <Home /> }],
//   },
//   {
//     path: 'about',
//     element: <About />,
//   },
// ]);

// export const Main = () => {
//   return <RouterProvider router={router} />;
// };

export const Main = () => {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
