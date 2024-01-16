import axios from "axios";
import {
  addSaving,
  getAllSaving,
  getSavingById,
  deleteSaving,
  changeSaving,
} from "./savingSlices";

export const postSaving = (value) => (dispatch) => {
  axios
    .post("http://localhost:3001/savings", value)
    .then((res) => dispatch(addSaving(res.data.saving)))
    .catch((e) => console.log(e));
};

export const getSaving = () => (dispatch) => {
  axios("http://localhost:3001/savings")
    .then((res) => {
      console.log("getAllSaving action:", res.data.savings);
      dispatch(getAllSaving({ savings: res.data.savings }));
    })
    .catch((e) => console.log("Error getting savings:", e));
};

export const getsavingId = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/savings/${id}`)
    .then((res) => dispatch(getSavingById(res.data)))
    .catch((e) => console.log(e));
};

export const Delete = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3001/savings/${id}`)
    .then((res) => {
      dispatch(deleteSaving(res));
    })
    .catch((e) => console.log(e));
};

export const updatedsaving = (savingData, callback) => (dispatch) => {
  console.log("savingData", savingData);
  axios
    .put(`http://localhost:3001/savings/${savingData.id}`, savingData)
    .then((res) => {
      dispatch(changeSaving(res.data));
      callback();
    })
    .catch((e) => console.log(e));
};
