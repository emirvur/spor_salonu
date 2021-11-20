import React from 'react'
import Card from '../Card/Card'
import "./Posts.css"

export default function Posts() {
    const people = [
        { id: 1, name: "Johnny", gender: "male", age: 30 },
        { id: 2, name: "Jenny", gender: "female", age: 28 },
        { id: 3, name: "Sam", gender: "male", age: 13 },
        { id: 4, name: "Dean", gender: "male", age: 8 },
        { id: 1, name: "Johnny", gender: "male", age: 30 },
        { id: 2, name: "Jenny", gender: "female", age: 28 },
        { id: 3, name: "Sam", gender: "male", age: 13 },
        { id: 4, name: "Dean", gender: "male", age: 8 },
        { id: 1, name: "Johnny", gender: "male", age: 30 },
        { id: 2, name: "Jenny", gender: "female", age: 28 },
        { id: 3, name: "Sam", gender: "male", age: 13 },
        { id: 4, name: "Dean", gender: "male", age: 8 },
        { id: 1, name: "Johnny", gender: "male", age: 30 },
        { id: 2, name: "Jenny", gender: "female", age: 28 },
        { id: 3, name: "Sam", gender: "male", age: 13 },
        { id: 4, name: "Dean", gender: "male", age: 8 }
      ];
    return (
        <div className="postsContainer">
            <div className="postsWrapper">
            {people.map(person => {
    return (
   <Card>
   </Card>
    )
  })}
            </div>
          
        </div>
    
    )
}
