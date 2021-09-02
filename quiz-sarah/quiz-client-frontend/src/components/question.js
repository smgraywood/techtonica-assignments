import React, {useState} from "react"

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
 
    // const onButtonClickHandlerCorrect = () => {
    //     var modal = document.getElementById("myModal");
    //     // Get the button that opens the modal
    //     var btn = document.getElementById("myBtn");
    //     // Get the <span> element that closes the modal
    //     var span = document.getElementsByClassName("close")[0];     
    //     // When the user clicks on the button, open the modal
    //     btn.onclick = function() {
    //       modal.style.display = "block";
    //     }
    //     // When the user clicks on <span> (x), close the modal
    //     span.onclick = function() {
    //       modal.style.display = "none";
    //     }   
    //     // When the user clicks anywhere outside of the modal, close it
    //     window.onclick = function(event) {
    //       if (event.target === modal) {
    //         modal.style.display = "none";
    //       }
    //     }
    // };
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter((counter) => counter +1);
      }
    

    const onButtonClickHandlerIncorrect = () => {
        window.alert('Sorry, try again!')
    };
    //     if ("question1Result".style.display === "none") {
    //         "question1Result".style.display = "block";}
    //     else {
    //         "question1Result".style.display = "none";
    //         }
    //   };

return (

    
<div>
{/* <div id="myModal" class="modal" >

<div class="modal-content">
  <span class="close">&times;</span>
  <p>Correct!</p>
  <img src="https://images.squarespace-cdn.com/content/v1/5239e177e4b02bd4dce25d14/1543591045744-L2FB0JCMQJNAX5G2JOE2/Cactus.gif" />
  </div>
</div> */}

    <form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion1].title }</h3>
    <button onClick={onButtonClickHandlerIncorrect}>{callQuestions[props.currentQuestion1].choices[0]}</button>
    <button class="correctAnswer" id = "myBtn" onClick={increment}>{callQuestions[props.currentQuestion1].choices[1]}</button>
    <button onClick={onButtonClickHandlerIncorrect}>{callQuestions[props.currentQuestion1].choices[2]}</button>
    <button class= "lastButton"onClick={onButtonClickHandlerIncorrect}>{callQuestions[props.currentQuestion1].choices[3]}</button>
    {/* <div id = "question1Result"display = "none">Correct Answer!</div> */}
</form>


<form onSubmit= {handleSubmit}>
    <h3>{ callQuestions[props.currentQuestion2].title }</h3>
    <button class="correctAnswer" id = "myBtn" onClick={increment}>{callQuestions[props.currentQuestion2].choices[0]}</button>
    <button onClick={onButtonClickHandlerIncorrect}>{callQuestions[props.currentQuestion2].choices[1]}</button>
    <button onClick={onButtonClickHandlerIncorrect}>{callQuestions[props.currentQuestion2].choices[2]}</button>
    <button class= "lastButton" onClick={onButtonClickHandlerIncorrect}>{callQuestions[props.currentQuestion2].choices[3]}</button>
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
    <button class="correctAnswer"onClick= {increment}onDoubleClick= {increment => increment.currentTarget.disabled =true}>{callQuestions[props.currentQuestion10].choices[0]}</button>
    <button>{callQuestions[props.currentQuestion10].choices[1]}</button>
    <button>{callQuestions[props.currentQuestion10].choices[2]}</button>
    <button class= "lastButton">{callQuestions[props.currentQuestion10].choices[3]}</button>
</form>

<h3 class= "counter">{counter}/10</h3>

<div class="buyYourOwn">
<h4>Want Your Very Own Cactus Baby?</h4>
<a href= "https://planttheoryco.com/">Visit Plant Theory!</a>
</div>
</div>
)
}


export default Questions;