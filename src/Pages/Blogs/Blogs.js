import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mt-4 w-50 mx-auto'>
        <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Difference between javascript and nodejs?</Accordion.Header>
                <Accordion.Body>
                JavaScript is a proper high-level programming language used to create web scripts whereas Node. js is a run time environment built on google's v8 engine. JavaScript is executed in the browser whereas using Node. js gives us the ability to execute JavaScript outside the browser. 
                Node. js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
              </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                <Accordion.Body>
                MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                <Accordion.Body>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What is the purpose of jwt and how does it work.</Accordion.Header>
                <Accordion.Body>
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </Accordion.Body>
              </Accordion.Item>
         </Accordion>
     </div>
    );
};

export default Blogs;