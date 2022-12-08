import React from "react"
import  ReactDOM from "react-dom"
import Header from "./Header"
import './index.css'
import MainContent from "./MainContent"
import Footer from "./Footer"






function Page(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))