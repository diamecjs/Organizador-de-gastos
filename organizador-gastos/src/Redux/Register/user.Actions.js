import axios from "axios";
import { addusers, getAllUsers } from "./userSlice";

export const postUser = (value) => (dispatch) => {
  axios
    .post("http://localhost:3001/users", value)
    .then((res) => dispatch(addusers(res.data.user)))
    .catch((e) => console.log(e, "No estoy funcionando en ACTIONUSER"));
};

export const getUsers = () => (dispatch) => {
  axios
    .get("http://localhost:3001/users")
    .then((res) => dispatch(getAllUsers(res.data.user)))
    .catch((e) => console.log(e, "Rompo en ACTION GETUSER"));
};
