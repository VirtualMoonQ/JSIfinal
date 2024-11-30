import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { collection, doc, setDoc, addDoc, getDoc, query, orderBy, startAfter, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
import { db } from "./firebase.js";

// Query the first page of docs
const first = query(collection(db, "items"), limit(4));
const documentSnapshots = await getDocs(first);

// Get the last visible document
const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
console.log("last", lastVisible);

// Construct a new query starting at this document,
// get the next 25 cities.
const next = query(collection(db, "items"),
    startAfter(lastVisible),
    limit(4));
    
const shoppee =  document.getElementsByClassName("shop-content");
documentSnapshots.forEach((element) => {
    console.log(element.id)
    shoppee.innerHTML += `
          <div class="product-box">
                <img src="${element.src}">
                <h2 class="product-title">${element.title}</h2>
                <span class="price">$${element.price}</span>
                <i class='bx bx-shopping-bag add-card'></i>
            </div>
          `
    }
);
// for(let i = 0; i < documentSnapshots.docs.length; i++){