import ActivateButton from "../component/ActivateButton";
import { connect } from "react-redux";
let timer=0;
let incrementer=null;
const startTimer =(dispatch)=>{
  
incrementer=setInterval(() => {
  
  timer=timer+1;
  dispatch({type:'DISPLAY',timer:timer});
},1000)
}

const stopTimer=(dispatch)=>{
  clearInterval(incrementer);
  dispatch({type:'DISPLAY',timer:timer})
}
const restTimer=(dispatch)=>{
  timer=0;
  clearInterval(incrementer);
  dispatch({type:'DISPLAY',timer:timer})
}

const mapStateToActivateButtonProps = (state) => ({
  timer: state,
});
const mapDispatchToActivateButtonProps = (dispatch) => ({
  onStartTimer: () => {
    dispatch({ type: "START" ,timer:timer});
    startTimer(dispatch);
  },
  onStopTimer: () => {
    stopTimer(dispatch);
    dispatch({ type: "STOP",timer:timer });
    
  },
  onResetTimer: () => {
    restTimer(dispatch)
    dispatch({ type: "RESET",timer:timer })
  }
});

const ButtonContainer = connect(
  mapStateToActivateButtonProps,
  mapDispatchToActivateButtonProps
)(ActivateButton);

export default ButtonContainer;
