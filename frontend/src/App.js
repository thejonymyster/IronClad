import { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home'
import AddPost from './components/AddPost'
import AllPosts from './components/AllPosts'
import Auth from './components/Auth'
import Profile from './components/Profile'
import actions from './api'
import { Switch, Route, Link } from 'react-router-dom'
import LanguageList from './components/LanguageList';
import Test from './components/Test'




function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  return (
    <div className="App">

            <h1>Zooble Translate</h1>
      <h4>Logged in as {user.email}</h4>
      <nav>
        <Link class="links" to="/">Homepage</Link>
        <Link class="links" to="/Languages">Languages</Link>
        <Link class="links" to="all-posts">All Messages</Link>
        <Link class="links" to="add-posts">Send a Message</Link>
        {!user.email ? <Link class="links" to="/auth">Log in</Link> : <Link class="links" to="/profile">Profile</Link>}


      </nav>


      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/all-posts" render={(props) => <AllPosts {...props} />} />
        <Route exact path="/add-posts" render={(props) => <AddPost propAnimal="P" {...props} />} />
        <Route exact path="/auth" render={(props) => <Auth setUser={setUser} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile user={user} {...props} />} />
        <Route exact path="/Languages" render={(props) => <LanguageList {...props} />} />
      </Switch>

    </div>


  
  );
}

export default App;

// import { useEffect, useState } from 'react'
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home'
// import AddPost from './components/AddPost'
// import AllPosts from './components/AllPosts'
// import Auth from './components/Auth'
// import Profile from './components/Profile'
// import actions from './api'
// import { Switch, Route, Link, useHistory } from 'react-router-dom'
// import TheContext from './TheContext'



// function App() {

//   const [user, setUser] = useState({})

//   useEffect(() => {
//     actions.getUser().then(res => {
//       setUser(res.data)
//     }).catch(console.error)
//   }, [])

//   const history = useHistory()

//   return (
//     <TheContext.Provider value={{ user, setUser, history }}>
//       <div className="App">

//         <h1>🤯 Iron Plate  🚀 </h1>
//         <h4>{user.email}</h4>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="all-posts">All Posts</Link>
//           <Link to="add-posts">Add Post</Link>
//           {!user.email ? <Link to="/auth">Log in</Link> : <Link to="/profile">Profile</Link>}


//         </nav>


//         <Switch>
//           <Route exact path="/" render={(props) => <Home {...props} />} />
//           <Route exact path="/all-posts" render={(props) => <AllPosts {...props} />} />
//           <Route exact path="/add-posts" render={(props) => <AddPost {...props} />} />
//           <Route exact path="/auth" render={(props) => <Auth setUser={setUser} {...props} />} />
//           <Route exact path="/profile" render={(props) => <Profile {...props} />} />
//         </Switch>

//       </div>
//     </TheContext.Provider>
//   );
// }

// export default App;