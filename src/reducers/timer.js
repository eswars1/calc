const timer = (state = {timer:0}, action) => {
  switch (action.type) {
      case "START":
        return { isRunning: true,timer:action.timer };
      case "STOP":
        return { isRunning: false,timer:action.timer };
      case "RESET":
        return { isRunning: false, reset: true ,timer:action.timer};
        case "DISPLAY":
        return {timer:action.timer};
      default:
        return state;
    }
  };
  
  
  export default timer;
  