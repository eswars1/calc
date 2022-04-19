import Header from "../component/Header";
import { connect } from "react-redux";

const mapStateToHeaderProps = state => {
  return {
    timer: state.timer.timer,
  };
};

const HeaderContainer = connect(mapStateToHeaderProps)(
  Header
);

export default HeaderContainer;
