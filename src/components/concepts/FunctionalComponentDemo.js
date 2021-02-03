import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <div>
                    <h1>Functional Component</h1>
                    <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
                </div>
                <div>
                    <dl>
                        <dt>Can use state</dt>
                            <dd>With the 'useState' hook, functional components an now both render a display to the page and update the information to be shown.</dd>
                        <dt>No 'this' keyword</dt>
                            <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                        <dt>Can use effects</dt>
                            <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>
                        <dt>return()</dt>
                            <dd>Must return a single element, but this element may have nested elements insde.</dd>
                    </dl>
                    <h1>Functional Syntax versus Arrow Function</h1>
                    <HelloWorld />
                    <HelloWorldFatArrow />
                </div>
            </div>
        </div>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function() {
    return (
        <div>
          <Card>
            <CardImg top width="100%" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">No Arrow Function</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Playing with React Strap</CardSubtitle>
              <CardText><pre>const HelloWorld = function()</pre></CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
    );
};

const HelloWorldFatArrow = () => {
    return (
        <div>
          <Card>
            <CardImg top width="100%" src="https://www.local-pc-guy.com/wp-content/uploads/2019/03/arrow_function.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Fat Arrow Function</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Playing with React Strap</CardSubtitle>
              <CardText><pre>const HelloWorldFatArrow = () =></pre></CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
    );
};

