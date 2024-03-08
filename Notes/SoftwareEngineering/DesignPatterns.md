---
title: Design Patterns
---
<br>
>Repeatable and reusable solutions to commonly-occurring design problems (Wikipedia).
<br>
These are proven solutions to common design problems. Experts will make use of these in their development process to "work smarter, not harder" and avoid anti-patterns.
<br>
### A Simple Example

```
for i = 1 to l do
	statement in loop
end for
```

serves as the design template for a more specific implementation like

```
for(int i = 0; i < n; i++){
	print(i);
}
```
<br>

## What Makes Good Design?
- A change in one part doesn't trigger changes elsewhere.
- Each business logic only has one home.
- Simple Structure.
- Strong cohesion and loose coupling.

Pattern is a three-part rule that explains the relations between...
- Context
- Problem
- Solution


Note: there is a distinction between design and architecture. Model View Controller, for example is an architecture pattern, not a design one.

## Types of Design Patterns
- Creational Patterns - Object creation separate from business code.
- Structural Patterns - How classes are structured and data is accessed.
- Behavioral Patterns - How classes behave.

<br>

## Creational Pattern - Factory Method
Using the `new` operator in client code, can cause two-way dependencies. Hence, `new` should be hidden from client code. For this, we can use a "factory" that creates objects for the client code.

This method uses an abstraction (like an interface) as a template to create an object which can then be passed on to the client code.

If the factory returns shapes for example, when the factory is asked to return a Circle, it will return a Shape object with the characteristics fo a Circle. This enables the factory to return any type of shape that the client code requires.

<br>

## Creational Pattern -  Abstract Factory Method
Nearly identical to the Factory method but the client code can make use of an AbstractFactory instead of directly using the specific factory it requires. This allows the client to simply use the AbstractFactory to create using multiple different factories.

<br>

## Creational Pattern - Singleton Design Pattern
This is used to make a class only initializable once (only a single object). Lazy initialization (initialize object only when needed) of a class can improve performance.

<br>

## Structural Pattern - Adapter
Useful to combine two incompatible interfaces into a new class that can provide the functionalities of both. 

For example, if there are two interfaces, one for playing MP3 and one for playing MP4, these methods may be incompatible with one another. But if we want to combine these methods into one MediaPlayer method, we can use a MediaAdapter that employs a delegate to implement MP4 functionality and then use the adapter's functionality in a MediaPlayer method that implements the MP3 functionality.

## Structural Pattern - Composite
Representing a group of objects as a single objects. For example, we can use a CEO to find their subordinates and fin d their subordinates and so on.

## Structural Pattern - Facade
In this pattern, the client code uses another class to create an object, similar to Factory method. However, method invocation is also handled by the other class. Hence object creation and method invocation are both "hidden" from the client.

## Structural Pattern - Proxy Design Pattern
Uses a proxy class to hide certain functionality from the client code. The proxy class uses a delegate of the real class to access its properties and augments how the client code can interact with these properties in ways that can either aid security and/or efficiency.