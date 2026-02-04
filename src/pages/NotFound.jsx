function NotFound({ data }) {
  const { notFound } = data;

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
