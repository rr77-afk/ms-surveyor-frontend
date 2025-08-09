import { Outlet } from "@remix-run/react";

export default function Root() {
  return (
    <html>
      <head>
        <title>MS Surveyor</title>
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
