import React, { Suspense, lazy } from "react";

const RemoteFruitsTable = lazy(() => import("remoteApp/FruitsTable"));

function App() {
  return (
    <Suspense fallback={<div>This is host app. Remote will be loaded soon..</div>}>
      <RemoteFruitsTable />
    </Suspense>
  );
}

export default App;