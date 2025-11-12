import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <div className="">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
