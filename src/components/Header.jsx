import React, { Component } from 'react'
import style from "../styles/components/header.module.scss"

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <img src="./logo.png" alt="logo" />
        <h1>LeafQuiz</h1>
      </header>
    )
  }
}
