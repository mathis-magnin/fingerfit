const { Quiz, Position } = require('../../models')


const getQuizzes = () => {
    const quizzes = Quiz.get()
    return quizzes.map((quiz) => getQuiz(quiz.id))
}


const getQuiz = (quizId) => {
    const quiz = Quiz.getById(quizId)
    const positions = Position.get().filter((position) => (quiz.positions.includes(position.id)))
    return { ...quiz, positions: positions }
}


const createQuiz = (quiz) => {
    const positionsId = quiz.positions.map((position) => (position.id))
    return Quiz.create({ ...quiz, positions: positionsId })
}


const updateQuiz = (quizId, quiz) => {
    const positionsId = quiz.positions.map((position) => (position.id))
    return Quiz.update(quizId, { ...quiz, positions: positionsId })
}


const deleteQuiz = (quizId) => {
    Quiz.delete(quizId)
}


module.exports = {
    getQuizzes,
    getQuiz,
    createQuiz,
    updateQuiz,
    deleteQuiz
}