import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function About(props) {


// State variable (myStyle)
// const [myStyle, setMyStyle] = useState(
//   {
//     color: '#042743',
//     backgroundColor: 'white',
//     border: '2px solid white',
//   })

let myStyle = {
  color: props.mode === 'dark'?'white':'#042743',
  backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
  border: '2 px solid',
  borderColor: props.mode === 'dark'?'white':'#042743'
}




// const [btntext, setBtntext] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //     if(myStyle.color == '#042743'){
  //       setMyStyle({
  //         color: 'white',
  //         backgroundColor: '#042743'
  //       });
  //     }
  //     // else{
  //     //   setMyStyle({
  //     //     color: 'white',
  //     //     backgroundColor: '#042743'
  //     //   });
  //     // }
  // }

//   const toggleStyle = () => {
//     if(myStyle.color === 'white'){
//       setMyStyle({
//         color: '#042743',
//         backgroundColor: 'white',
//         border: '2px solid white'
//       });
//       setBtntext("Enable Dark Mode")
//     }
//     else{
//       setMyStyle({
//         color: 'white',
//         backgroundColor: '#042743',
//         border: '2px solid #042743'
//       });
//       setBtntext("Enable Light Mode")
//     }
// }



  return (
    <>

    <div className="container">
      <h1 className="my-2" style={{color: props.mode === 'dark'?'white': '#042743'}}>About Us</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong>                     Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong>  TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

      </div>
    </div>
  </div>
</div>
</div>
<br />

    </>
  )
}
