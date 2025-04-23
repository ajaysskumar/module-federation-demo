import React, { Suspense, lazy } from "react";

const RemoteFruitsTable = lazy(() => import("remoteApp/FruitsTable"));

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "Orange" }}>Hello from Host component</h1>
      <Suspense fallback={<div>This is host app. Remote will be loaded soon..</div>}>
        <RemoteFruitsTable />
      </Suspense>
    </div>
  );
}

export default App;