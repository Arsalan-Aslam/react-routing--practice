import React from 'react'
import "../App.css"
import Nav from './Nav/Nav';
import contactImage from '../images/smokyday.jpg'

const Contact = () => {
  return (
    <div className="App">
      <Nav />
      <h1>Contact</h1>
      <img src={contactImage} alt='Home' style={{ width: "100%" }} />
      <p style={({ textAlign: "justify" }, { padding: "0.8em" })}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        cupiditate consequatur at libero officia saepe assumenda modi ipsam
        distinctio tenetur impedit, ex similique voluptatibus ratione nihil
        vitae commodi maxime dignissimos laborum quaerat sapiente deleniti! Vero
        temporibus voluptate officiis sint deserunt, molestias iure ex vel optio
        dignissimos quas eaque sunt. Ea nostrum inventore ex provident sit
        officiis dolores voluptate quis quas minima consequuntur, vitae tempora
        repellat recusandae voluptatem eaque dicta maiores hic suscipit autem
        fugiat debitis odit. Molestias saepe quae commodi, dolorum architecto
        reprehenderit eligendi nobis aperiam ex? Consequuntur, debitis. Delectus
        expedita optio, distinctio odio commodi aspernatur non sit harum soluta?
      </p>
    </div>
  )
}

export default Contact
