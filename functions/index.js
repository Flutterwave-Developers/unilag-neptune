import firebase from './fire';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const db = firebase.firestore();
// module.exports.createRoom = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
//         db.collection("chatrooms").doc("new").onSnapshot((data) => {
//             console.log(data);
//         })
//     })
// })