import React, { Suspense, lazy } from "react";

const RemoteHeader = lazy(() => import("remoteApp/Header"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h4>This is host app. Remote will be loaded soon..</h4>
      <RemoteHeader />
    </Suspense>
  );
}

export default App;