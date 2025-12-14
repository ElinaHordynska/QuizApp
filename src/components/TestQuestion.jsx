import React, { Component } from 'react';
import style from "../styles/components/testQuestion.module.scss"

export default class TestQuestion extends Component {
    render() {
        return (
            <div className={style.question + " card"}>
                <h2 className="card-header">
                    Question #{this.props.questionId}: {this.props.questionText}
                </h2>
                <ul className="card-body">
                    {this.props.answers.map((a, i) => (
                        <li key={i}>
                            <input type="radio" id={'answer1' + i} name='answer' value={a} />
                            <label htmlFor={'answer1' + i}>{a}</label>
                        </li>
                    ))}
                </ul>
                <div className={style.btns}>
                    <button onClick={() => this.props.prev()}>Previous</button>
                    <button onClick={() => this.props.next()}>Next</button>
                </div>
            </div>
        )
    }
}
