import * as React from "react"
import './global.scss'

const Header = () => {
  return(
    <div className = "header-container">
      <a href = "#">
      <div class = "header-element logo"><p>O, Sancta simplicitas</p></div></a>
      <div class = "header-element date"><p>9/10</p><p>FRI</p></div>
      <div class = "header-element search"><input id = "input_search" placeholder = "検索"/><button id = "btn_search" type = "submit"><i class="fas fa-search"></i></button></div>
    </div>
  )
}

const Nav = () => {
  return(
    <div className = "nav-container">
        <div class = "nav-element"><p>MOVIES</p></div>
        <div class = "nav-element"><p>MUSICS</p></div>
        <div class = "nav-element"><p>DIARY</p></div>
    </div>
  )
}

const MainContent = () => {
  return(
    <div className = "maincontent-container">
      <div class = "maincontent-element">
        <h1>記事タイトル</h1>
      </div>
    </div>
  )
}

const SubContent = () => {
  return(
    <div className = "subcontent-container">
      <p class = "subcontent-header">このブログについて</p>
      <div class = "subcontent-element">内容</div>
      <p class = "subcontent-header">ピックアップ記事</p>
      <div class = "subcontent-element">内容</div>
    </div>
  )
}

const Content = () => {
  return(
    <div className = "content-container">
      <MainContent/>
      <SubContent/>
    </div>
  )
}

// markup
const IndexPage = () => {
  return (
    <main className = "main-container">
      <Header/>
      <Nav/>
      <Content/>
    </main>
  )
}

export default IndexPage
