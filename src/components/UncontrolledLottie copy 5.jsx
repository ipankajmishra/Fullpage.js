import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/drawkit-grape-animation-6-LOOP.json'

class UncontrolledLottie6 extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        
        <Lottie options={defaultOptions}
              height={500}
              width={500}
        />
      </div>
    )
  }
}

export default UncontrolledLottie6