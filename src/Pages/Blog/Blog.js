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
            1. What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> There are four main
              ways to manage a state in a React apps:
            </p>
            <ul>
              <li>1. Local state</li>
              <li>2. Global state</li>
              <li>3. Server state</li>
              <li>4. URL state</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
        >
          <div className="collapse-title text-xl font-medium">
            2. How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
        >
          <div className="collapse-title text-xl font-medium">
            3. What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> The main objective of
              unit testing is to isolate written code to test and determine if
              it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages.
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
