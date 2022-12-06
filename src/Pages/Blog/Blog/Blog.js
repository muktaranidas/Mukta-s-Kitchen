import React from "react";

const Blog = () => {
  return (
    <div className="">
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-6xl font-bold p-5 text-purple-500">
          Difference between SQL and NoSQL ?
        </h2>
        <h6 className=" text-2xl font-bold text-pink-600">
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </h6>
      </div>
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-6xl font-bold p-5 text-purple-500">
          What is JWT, and how does it work?
        </h2>
        <h6 className=" text-2xl font-bold text-pink-600">
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </h6>
        <h6 className=" text-2xl font-bold text-pink-600">
          In authentication, when the user successfully logs in using their
          credentials, a JSON Web Token will be returned. Since tokens are
          credentials, great care must be taken to prevent security issues. In
          general, you should not keep tokens longer than required.
        </h6>
      </div>
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-6xl font-bold p-5 text-purple-500">
          {" "}
          What is the difference between javascript and NodeJS?
        </h2>
        <h6 className=" text-2xl font-bold text-pink-600">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language
        </h6>
      </div>
      <div className="border border-2 border-success m-8 p-8">
        <h2 className="text-6xl font-bold p-5 text-purple-500">
          How does NodeJS handle multiple requests at the same time?{" "}
        </h2>
        <h6 className=" text-2xl font-bold text-pink-600">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </h6>
      </div>
    </div>
  );
};

export default Blog;
