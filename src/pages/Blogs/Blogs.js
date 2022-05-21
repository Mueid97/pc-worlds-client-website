import React from 'react';
import Footer from '../Share/Footer';

const Blogs = () => {
    return (
        <div>
            <div className='px-14 my-5'>
                <div className='mb-5'>
                    <h1 className='text-3xl text-bold'> How will you improve the performance of a React Application?</h1>
                    <p>Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>
                </div>
                <div className='mb-5'>
                    <h1 className='text-3xl text-bold '> What are the different ways to manage a state in a React application?</h1>
                    <p>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.

                        The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.</p>
                </div>
                <div className='mb-5'>
                    <h1 className='text-3xl text-bold '> How does prototypical inheritance work?</h1>
                    <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
                <div className='mb-5'>
                    <h1 className='text-3xl text-bold '> Why you do not set the state directly in React? </h1>
                    <p>If you update it directly, calling the setState() afterward may just replace the update you made.
                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        You will lose control of the state across all components.</p>
                </div>
                <div className='mb-5'>
                    <h1 className='text-3xl text-bold '> What is a unit test? Why should write unit tests? </h1>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application known as the "unit" meets its design and behaves as intended.In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, or an individual method. By writing tests first for the smallest testable units, then the compound behaviors between those, one can build up comprehensive tests for complex applications</p>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;