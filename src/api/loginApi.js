import React from "react";

export const login = (email, password) => {
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

export const signup = (email, password, firstName, lastName, phone, address) => {
    console.log(email, password, firstName, lastName,  phone, address)
    return fetch(`http://localhost:3000/signup`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({email, password, firstName, lastName,  phone, address})
    })
        .then(() => { debugger; console.log("you singup") })
        .catch((err) => {
    //        debugger
            console.log(err);
        })
}
