import React from "react";

function NotFound() {
  const notFoundData = {
    title: "404",
    message: "Oops! Page not found",
    linkLabel: "Return to Home",
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="type-page-title mb-3 font-black">{notFoundData.title}</h1>
        <p className="type-body-lg mb-4 text-muted-foreground">
          {notFoundData.message}
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {notFoundData.linkLabel}
        </a>
      </div>
    </div>
  );
}

export default NotFound;
