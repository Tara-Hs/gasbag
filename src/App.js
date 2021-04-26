import './App.css';
import { ChatEngine } from 'react-chat-engine'
import LoginForm from './components/LoginForm'
import NewUser from './components/NewUser'
import ChatFeed from './components/ChatFeed'
import { Switch, Route, Link } from 'react-router-dom'
import About from './components/About'
import { username, password } from './components/LoginForm'


function App() {

  // if not loggedIn? go to login page
  if(!localStorage.getItem('username')) {
    return <LoginForm />
  }
  // it keeps comig back to the loginform, or whatever the if statement provides. how do i get it to render sign up page if clicked on?

  return (
    
    <div className="App">
    

      <ChatEngine 
      height="100%" 
      projectID="5c6bd2ad-3827-4f00-a041-6d328c95b4f2"
      // instead of hardcoding, we get the username n pass from the localStorage, which stores the entry data by the user each time
      userName={localStorage.setItem('username', username)}
      userSecret={localStorage.setItem('password', password)}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}/>
      

    </div>
  );
}

export default App;

// username: "Mrs.Berry" 
// password: "abcabc"


// react-scroll-to-bottom
// react-emoji
// socket.io-client
// query-string