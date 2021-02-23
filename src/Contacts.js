import contacts from "./contacts.json";
import React, { Component } from 'react'
import ContactDetail from "./ContactDetail.js"

export default class Contacts extends Component {
    state = {
        contacts: contacts.slice(0,5)
    }
// Add
    handleAdd = () => {

        let randomIndex = Math.floor(Math.random() * contacts.length)
        let randomContact = contacts[randomIndex]

        this.setState({
            contacts: [...this.state.contacts, randomContact]
        })
    }
// Sort
    handleSortByName = () => {

        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))

        clonedContacts.sort((first, second) => {
            if (first.name > second.name){
                return 1
            }
            if (first.name < second.name) {
                return -1
            }
            else {
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    handleSortByPop = () => {

        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))

        clonedContacts.sort((first, second) => {
            return second.popularity - first.popularity;
        })

        this.setState({
            contacts: clonedContacts
        })
    }
// Delete

handleDelete = (contactId) =>{
    console.log('Delete')

    // filter all contacts that dont match that id
    let filteredContacts = this.state.contacts.filter((singleContact) => {
        return singleContact.id !== contactId
    })

    // make sure you update the state with the filtered contacts
    this.setState({
        contacts: filteredContacts
    })
}

// Render
    render() {
      return (
          <div>
              <h1>Contacts</h1>
              <div><button onClick={this.handleAdd} >Add random contact</button><button onClick={this.handleSortByName} >Sort by name</button><button onClick={this.handleSortByPop} >Sort by popularity</button></div>
              

              {
                  // always use a map and return a JSX element
                      this.state.contacts.map((singleContact, index) => {
                          return <ContactDetail 
                              key = {index} 
                              name = {singleContact.name} 
                              picture = {singleContact.pictureUrl}
                              popularity = {singleContact.popularity}
                              onDelete = {this.handleDelete}
                              id = {singleContact.id}
                            />
                      })
              }
          
          </div>
      )
  }
}

