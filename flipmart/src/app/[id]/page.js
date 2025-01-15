function page({ params }) {
  const id = params.id;
  throw Error("it works");

  return <div>hello world {id}</div>;
}

export default page;
