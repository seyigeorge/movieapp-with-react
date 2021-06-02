// import React, {Component} from 'react';


// class Character extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contacts: [],
//         };
//     }
//     componentDidMount() {
//         fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json()).then((results) => {
//             this.setState({contacts: results})
//         }).catch(console.log)
//     }
//     render() {
//         return (           
//             <div>
//                 <h1>Contact List</h1>
//                 {props.contacts.map((contact) => {
//                     <div className="card">
//                          <div className="card-body">
//                               <h5 className="card-title">
//                                   {contact.name}
//                               </h5>
//                               <h6 className="card-subtitle">{contact.email}</h6>
//                               <p className="card-text">{contact.company.catchPhrase}</p>
//                          </div>
//                     </div>
//                 })}
//             </div>
//         )
//     }
    
// }

// export default Character

