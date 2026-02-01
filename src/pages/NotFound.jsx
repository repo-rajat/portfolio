import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 - page not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="type-page-title mb-3 font-black">404</h1>
        <p className="type-body-lg mb-4 text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
