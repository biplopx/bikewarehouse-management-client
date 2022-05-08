import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
const Blogs = () => {
  return (
    <section className='py-5'>
      <PageTitle title="Blogs"></PageTitle>
      <div className="container">
        <h2 className='text-center fw-bold mb-5'>Blogs</h2>
        <div className="row">
          <div className="col col-lg-8 mx-auto rounded">

            <div className='border p-3 rounded mb-3'>
              <h3 className='mb-3'>1. Difference between javascript and nodejs</h3>
              <p>
                <strong>Ans:</strong> Javascript is scripting and programmming language that use for create interactive website. Javascript is core technology to build website alongside html and css. Javascript run only in browser. Using javascript you can change html css code. Javascript has many framework or libary to modern single page application like react, angular, vue etc. other side Node.js javascript runtime it's allow to run javascipt outside of browser. Using node js we can create website backend. Too make fast backend side we hava express.js web development framwork based on node.js .
              </p>
            </div>
            <div className='border p-3 rounded mb-3'>
              <h3 className='mb-3'>2. When should you use nodejs and when should you use mongodb?</h3>
              <p>
                <strong>Ans:</strong> The technology we use to build a web application first depends on the project and then everything else. Generally node.js is good for applications that require a persistent connection from the client to the server. Using Node.js can be a great way to build real-time web applications where data will be exchanged quickly through the network. Mongodb is greate database to make web application. Monogo is greate choice if the application have services that you many user and who interact like blogs website. MongoDB is a general-purpose database used in various ways to support web applications in many different industries examples telecommunications, gaming, blog, finances, healthcare, and retail.
              </p>
              <h5>MongoDB use cases</h5>
              <ul>
                <li>Integrating large amounts of diverse data</li>
                <li>Describing complex data structures that evolve</li>
                <li>Delivering data in high-performance applications</li>
                <li>Supporting hybrid and multi-cloud applications</li>
                <li>Supporting agile development and collaboration</li>
              </ul>
            </div>
            <div className='border p-3 rounded'>
              <h3 className='mb-3'>3. Differences between sql and nosql databases?</h3>
              <p>
                <strong>Ans:</strong> SQL Database: SQL stands for Structured Query Language. SQL database is relational database where you can store data in table based. SQL database have fixed or static or predefined schema.In this database we can run complex queries. SQLDatabase Examples: MySQL, MariaDB, PostgreSQL. NoSQL Database: NoSQL stand for non SQL or not only SQL. In no sql database you can store data like json file as document. No sql database have dynamic schema. In NoSQL database we can store data in key value pair. NoSQL Database Examples: MongoDB, CouchDB etc</p>
            </div>
            <div className='border p-3 rounded mt-3'>
              <h3 className='mb-3'>4. What is the purpose of jwt and how does it work?</h3>
              <p>
                <strong>Ans:</strong> JWT stands for JSON Web Token. JWT is technique to verify user access to an web application. after user login its send and access code then server side verify the token id and give access to the user.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;