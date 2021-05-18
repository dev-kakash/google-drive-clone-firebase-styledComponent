import {useState} from 'react'
import './App.css';
import styled from 'styled-components'
import FileView from './components/FileView/FileView';
import Header from './components/Header'
import Index from './components/Sidebar/index';
import SideIcon from './components/SideIcon'
import { auth, provider } from "./firebase";

function App() {

  const [user,setUser] = useState()


  const handleLogin =()=>{
    if(!user){
      auth.signInWithPopup(provider).then((result)=>{
        setUser(result.user)
      })

    }

    


  }
  return (
    <div className="App">
      {
        user ? 
          ( 
            <>
            <Header userPhoto={user.photoURL}/>
            <Container>
           
            <Index/>
            <FileView/>
            <SideIcon/>
            </Container>

            </>
          ) : (


            <Login>
              <img src="/images/drive.png" alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </Login>
          )
        

      }
      
      
     
      
    </div>
  );
}

export default App;

const Container = styled.div`
  display:flex;  
`

const Login = styled.div`
      height:100vh;
      width:100%;
      display:grid;
      place-items:center;



      img{
        width:20%;
      }

      button{
        width:20%;
        padding:10px 30px;
        background:transparent;
        border:1px solid rgb(89,89,89);
        font-size:24px;
        border-radius:6px;
        transition:.5s;
        
        &:hover{
          background:rgb(67,130,244);
          color:white;
          border:none;
          transform:scale(1.1);
          cursor:pointer;
        }
      }
`