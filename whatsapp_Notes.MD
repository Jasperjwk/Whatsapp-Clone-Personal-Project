Tech in my project build

1) React
2) Firebase Firestore Realtime db
3) Material UI
4) React Router
5) React Context API
6) REDUX
7) Google Authentication
8) Deploy using Firebase!

Hosting URL: https://whatsapp-clone-personal-98bdc.web.app

My Personal Notes

npx create-react-app whatsapp-clone-personal-project

BEM naming convention - easy way of naming components in React

place-items: center;

/* Use up full width, takes up all the room */
flex: 1;

/* Center the items in the container */
align-items: center;

// If something is overflowing
overflow: scroll;

.chat__headerRight {
    display: flex;
    justify-content: space-between;
    min-width: 100px;
}

/* Depending on how much text is in there, it will just reach that amount*/
width: fit-content;

position: relative;

// move to the top
position: absolute;

.chat__footer > form > button {
    /* Get rid of the button but the functionality still holds */
    display: none;
}

{/* DataLayer that surrounds the app. I can push
information into the data layer and i can pull it from any
component*/}
<StateProvider initialState={initialState} reducer={reducer}>
