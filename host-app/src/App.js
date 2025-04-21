import React, { Suspense, lazy } from "react";

const RemoteHeader = lazy(() => import("remoteApp/Header"));

function App() {
  return (
    <Suspense fallback={<div>This is host app. Remote will be loaded soon..</div>}>
      <RemoteHeader />
    </Suspense>
  );
}

export default App;