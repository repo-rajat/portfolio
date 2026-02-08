import React from "react";
import { useContent } from "../context/ContentContext";

function NotFound() {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-white">
        Loading...
      </div>
    );
  }

  const { notFound } = content;

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="type-page-title mb-3 font-black">{notFound.title}</h1>
        <p className="type-body-lg mb-4 text-muted-foreground">
          {notFound.message}
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {notFound.linkLabel}
        </a>
      </div>
    </div>
  );
}

export default NotFound;
