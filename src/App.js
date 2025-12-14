import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TestQuestion from './components/TestQuestion'
import StartQuiz from './components/StartQuiz'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuizStarted: false,
      questionNumber: 0
    }
    this.startQuiz = this.startQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this)
    this.prevQuestion = this.prevQuestion.bind(this)
  }

  startQuiz() {
    this.setState({ isQuizStarted: true });
  }

  nextQuestion() {
    if(this.state.questionNumber !== this.quiz1.questions.length - 1);
    this.setState({ questionNumber: this.state.questionNumber + 1});
  }

  prevQuestion() {
    if(this.state.questionNumber > 0)
    this.setState({ questionNumber: this.state.questionNumber - 1});
  }

  quiz1 = {
    quizName: "Capitals test",
    quizDescription: "Test your Geography knowledge",
    questions: [
      {
        questionId: 1,
        questionText: "What is the capital of Great Britain?",
        answers: ["Kyiv", "New York", "London", "Dublin"],
        correctAnswer: "London",
      },
      {
        questionId: 2,
        questionText: "What is the capital of Greece?",
        answers: ["Paris", "Belgrade", "Athens", "Rome"],
        correctAnswer: "Athens",
      },
      {
        questionId: 3,
        questionText: "What is the capital of Switzerland?",
        answers: ["Bern", "Stockholm", "Sofia", "Baku"],
        correctAnswer: "Bern",
      },
      {
        questionId: 4,
        questionText: "What is the capital of Romania?",
        answers: ["Chișinău", "Budapest", "Bratislava", "Bucharest"],
        correctAnswer: "Bucharest",
      },
      {
        questionId: 5,
        questionText: "What is the capital of Montenegro?",
        answers: ["Tirana", "Podgorica", "Sarajevo", "Zagreb"],
        correctAnswer: "Podgorica",
      },
    ]
  }

  render() {
    return (
      <>
        <Header />
        <main>
          {this.state.isQuizStarted ? (
            <TestQuestion
              questionId={this.quiz1.questions[this.state.questionNumber].questionId}
              questionText={this.quiz1.questions[this.state.questionNumber].questionText}
              answers={this.quiz1.questions[this.state.questionNumber].answers}
              next={this.nextQuestion}
              prev={this.prevQuestion}
            />
          ) : (
            <StartQuiz name={this.quiz1.quizName} description={this.quiz1.quizDescription} startQuiz={this.startQuiz} />
          )}

        </main>
        <Footer />
      </>
    )
  }
}
