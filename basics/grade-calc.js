let getGradeString = function(scoreAchieved, totalScore) {
    let percentage = (scoreAchieved / totalScore) * 100
    let grade = undefined
    if(percentage >= 90) {
        grade = 'A'
    }
    else if(percentage >= 80) {
        grade = 'B'
    }
    else if(percentage >= 70) {
        grade = 'C'
    }
    else if(percentage >= 60) {
        grade = 'D'
    }
    else {
        grade = 'F'
    }
    return `You got a ${grade} (${percentage})% grade`
}

console.log(getGradeString(65, 100))