import React from 'react'



function ContactDetail(props) {
    // console.log(props.picture)

  

    return (
        <>
            <img src ={props.picture} alt="test" style={{width:"50px"}} />
            <ul>
            <li>Name: {props.name}</li>
            <li>Popularity: {props.popularity}</li>
            </ul>
            <div><button onClick={() => {props.onDelete(props.id)}}>Delete</button></div>
       </>
    )
}

export default ContactDetail