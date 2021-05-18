import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AppIcon from '@material-ui/icons/Apps'
import HelpOutline from '@material-ui/icons/HelpOutline'
import SettingIcon from '@material-ui/icons/Settings'

function Header ( { userPhoto }) {
    return (
        <div>
            <Container>
                <Logo>
                    <img src="/images/logo.png"/>
                    <span>Drive</span>
                </Logo>
                <SearchArea>
                    <div>
                    <SearchIcon/>
                    <input type="text" placeholder="Search in Drive"/>
                    <ExpandMore/>
                    </div>

                </SearchArea>

                <IconArea>
                    <span>
                        <div> <HelpOutline/></div>
                        
                         
                        <div><SettingIcon/></div>
                    </span>

                    <span>
                        <AppIcon/>
                        <img src={userPhoto}  alt="User"/>
                    </span>
                </IconArea>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    display:flex;
    height:60px;
    border-bottom:1px solid rgb(219,219,219);

`
const Logo = styled.div`
    padding-left:12px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    
    img{
        height:80%;
        
    }
    span{
        color:gray;
        font-size:20px;
        margin-left:6px;
        font-weight:500;
    }
    
`
const SearchArea = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    padding:8px;
    margin-left:92px;
    padding-left:10px;

    input{
        flex:1;
        height:60%;
        color:lightgray;
        background:none;
        border:none;
        margin-left:12px;

        &:focus{
            color:black;
            outline:none;
        }
    }
    div{
        width:55%;
        height:110%;
        background-color:rgb(239,239,239);
        border-radius:6px;
        padding:0 8px;
        display:flex;
        align-items:center;
    }
`
const IconArea = styled.div`
    padding:8px;
    display:flex;
    
    align-items:center;
    margin-right:30px;
    font-spacing:5px;
    color:rgb(82,82,82);
    img{
        height:35px;
        width:35px;
        margin-left:8px;
        border-radius:50%;
    }
    span{
        display:flex;
        align-items:center;
        margin-right:20px;

        div{
            display:flex;
            align-items:center;
            margin-left:8px;  
        }
    }
    

`