import React from "react";

const Blog = () => {
  return (
    <div className=" p-2 bg-slate-100  h-[800px] ">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-center text-black first-line: text-3xl font-semibold  py-6">
          Question & Answer
        </h2>
        <div className="border border-black mx-auto w-4/5"></div>
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
            4. React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> React is considered a
              UI library. They define themselves as: “A JavaScript library for
              building user interfaces” Facebook developers are behind the
              development and maintenance of this library. And, in this case,
              most of Facebook’s products are made with React. <br />
              <br /> Angular is a front-end framework with lots of components,
              services, and tools. On Angular’s site, you can see that they
              define Angular as: “The modern web developer’s platform” It is
              developed and maintained by Google developers, but curiously it is
              not used to implement any of their most common products such as
              Search or YouTube. <br />
              <br /> Last but not least, Vue.js is, according to its site: “A
              progressive JavaScript framework” Vue.js is developed and led by
              Evan You, but also it counts on a huge open-source community.
              <br />
              <br />
              These three frameworks have several things in common, such as each
              follows a component-based architecture and allows creating UI
              features quickly. React and Vue.js are mainly declarative, and
              while Angular could also be declarative, it’s really more
              imperative. Nevertheless, they present some more differences
              according to their structure, architecture and way of working
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
