import { useDispatch } from "react-redux";
import * as actions from "../../../actions";

const StartApp = () => {
  const dispatch = useDispatch();

  const checkCurrentUser = () => {
    dispatch(actions.actFetchCurrentUser());
  };

  checkCurrentUser();

  return null;
};
export default StartApp;
