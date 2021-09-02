import React from "react"

const handleSubmit=(e) => {
    e.preventDefault()
  }

const Questions = (props) => {
    const callQuestions = props.allQuestions
    
    // function message() {
    //     var x = document.getElementById("myDIV");

    //     let youRight="Correct!"
    //     let node = document.createElement("div")
    //     node.appendChild(document.createTextNode(youRight))
    // }
 
return (
<div>
    <form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion1].title }</h3>
    <button class="correctAnswer" >{callQuestions[props.currentQuestion1].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion1].choices[1]}</button>
    <button>{callQuestions[props.currentQuestion1].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion1].choices[3]}</button>

</form>


<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion2].title }</h3>
    <button class="correctAnswer">{callQuestions[props.currentQuestion2].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion2].choices[1]}</button>
    <button>{callQuestions[props.currentQuestion2].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion2].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion3].title }</h3>
    <button class="correctAnswer">{callQuestions[props.currentQuestion3].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion3].choices[1]}</button>
    <button>{callQuestions[props.currentQuestion3].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion3].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion4].title }</h3>
    <button class="correctAnswer">{callQuestions[props.currentQuestion4].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion4].choices[1]}</button>
    <button>{callQuestions[props.currentQuestion4].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion4].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion5].title }</h3>
    <button>{callQuestions[props.currentQuestion5].choices[0]}</button>
    <button class="correctAnswer">{callQuestions[props.currentQuestion5].choices[1]}</button>
    <button>{callQuestions[props.currentQuestion5].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion5].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion6].title }</h3>
    <button>{callQuestions[props.currentQuestion6].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion6].choices[1]}</button>
    <button class="correctAnswer">{callQuestions[props.currentQuestion6].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion6].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion7].title }</h3>
    <button>{callQuestions[props.currentQuestion7].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion7].choices[1]}</button>
    <button class="correctAnswer">{callQuestions[props.currentQuestion7].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion7].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion8].title }</h3>
    <button>{callQuestions[props.currentQuestion8].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion8].choices[1]}</button>
    <button class="correctAnswer">{callQuestions[props.currentQuestion8].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion8].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion9].title }</h3>
    <button>{callQuestions[props.currentQuestion9].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion9].choices[1]}</button>
    <button class="correctAnswer">{callQuestions[props.currentQuestion9].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion9].choices[3]}</button>
</form>

<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion10].title }</h3>
    <button class="correctAnswer">{callQuestions[props.currentQuestion10].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion10].choices[1]}</button>
    <button>{callQuestions[props.currentQuestion10].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion10].choices[3]}</button>
</form>
</div>
)
}


export default Questions;