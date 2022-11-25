import React from "react";

const Blog = () => {
  return (
    <div className=" p-2 bg-slate-800 lg:h-screen md:h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-center text-white first-line: text-3xl font-semibold  py-6">
          Question & Answer
        </h2>
        <div className="border border-white mx-auto w-4/5"></div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
        >
          <div className="collapse-title text-xl font-medium">
            1. What is the difference between SQL and NoSQL?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> SQL is the programming
              language used to interface with relational databases. (Relational
              databases model data as records in rows and tables with logical
              links between them). NoSQL is a class of DBMs that are
              non-relational and generally do not use SQL.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
        >
          <div className="collapse-title text-xl font-medium">
            2. What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> JSON Web Token (JWT)
              is an open standard (RFC 7519) that defines a compact and
              self-contained way for securely transmitting information between
              parties as a JSON object. This information can be verified and
              trusted because it is digitally signed. JWTs can be signed using a
              secret (with the HMAC algorithm) or a public/private key pair
              using RSA or ECDSA. In authentication, when the user successfully
              logs in using their credentials, a JSON Web Token will be
              returned. Since tokens are credentials, great care must be taken
              to prevent security issues. In general, you should not keep tokens
              longer than required.You also should not store sensitive session
              data in browser storage due to lack of security.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
        >
          <div className="collapse-title text-xl font-medium">
            3. What is the difference between javascript and Node JS?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> JavaScript is a simple
              programming language that can be used with any browser that has
              the JavaScript Engine installed. Node. js, on the other hand, is
              an interpreter or execution environment for the JavaScript
              programming
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
        >
          <div className="collapse-title text-xl font-medium">
            4. How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> We know NodeJS
              application is single-threaded. Say, if processing involves
              request A that takes 10 seconds, it does not mean that a request
              which comes after this request needs to wait 10 seconds to start
              processing because NodeJS event loops are only single-threaded.
              The entire NodeJS architecture is not single-threaded. How NodeJS
              handle multiple client requests? NodeJS receives multiple client
              requests and places them into EventQueue. NodeJS is built with the
              concept of event-driven architecture. NodeJS has its own EventLoop
              which is an infinite loop that receives requests and processes
              them. EventLoop is the listener for the EventQueue. If NodeJS can
              process the request without I/O blocking then the event loop would
              itself process the request and sends the response back to the
              client by itself. But, it is possible to process multiple requests
              parallelly using the NodeJS cluster module or worker_threads
              module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
