import React from "react";
import { Accordion } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="container my-5 shadow">
      <h1 className="text-center fw-bolder py-3">
        Essential React.js Questions and Answers.
      </h1>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How does React work?</Accordion.Header>
          <Accordion.Body>
            React is a JavaScript library for building user interfaces. It is
            Component based declarative type which means we can re-use
            code.React creates a Virtual DOM in the memory Which is basically a
            JavaScript Object that repreesent the browser DOM,Its much more
            faster Than the Browser Dom.Instead of manipulating browsers Dom
            which is costly and not efficient, React creates Virtual DOM where
            it does all the manipulating before making change in the Browser
            DOM. React’s Diffing Algorithm is used to compare the Virtual Dom
            when something is changed, React goes to the actual DOM and updates
            the node that was updated in the virtual DOM.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is the difference between state and props in React?
          </Accordion.Header>
          <Accordion.Body>
            Props are JavaScript Object which also known as properties.Props are
            used to pass data from one component to another componenet.Props can
            not be modified,read only and immutable. And State is also
            JavaScript Object which data is passed within the component
            only.States are used to manage the internal environment of a
            component means the data changes inside the component.State is both
            read and write and can be modified.State is local to the component
            it can not be passed to other component.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>how does React.useState work?</Accordion.Header>
          <Accordion.Body>
            The useState() hook is a Special function which allow us to have
            state variable in functional component.We can pass the initial state
            it return us a variable with current state value and a fucntion
            within an array. The returned function is used to update the value
            of that variable.We can use as much useState as need in in the
            functional component based on the functionality. The useState() hook
            can be used to keep track of strings, numbers, booleans, arrays,
            objects etc etc which give us freedom to make complex user
            interfaces easily.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Footer;
