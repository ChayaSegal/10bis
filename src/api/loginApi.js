import React from "react";

export const loginToServer = (userName, password) => {
    return fetch(`http://localhost:3000/login/${email}/${password}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });

}

export const signup = (userName, firstName, lastName, email, password, phone, adrress) => {
    console.log(userName, firstName, lastName, email, password, phone, adrress)
    debugger;
    return fetch(`http://localhost:3000/users/signup`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({userName, firstName, lastName, email, password, phone, adrress })
    })
        .then(() => { debugger; console.log("you singup") })
        .catch((err) => {
    //        debugger
            console.log(err);
        })
}
