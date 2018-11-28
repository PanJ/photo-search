import axios from "axios";
const initialState = { photos: [] };
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "photo/SEARCH_PENDING":
      return {
        ...state,
        searchPending: true,
        photos: []
      };
    case "photo/SEARCH_FULFILLED":
      return {
        ...state,
        searchPending: false,
        photos: action.payload.data.results
      };
    case "photo/SEARCH_REJECTED":
      return {
        ...state,
        searchPending: false
      };
    case "photo/GET_PENDING":
      return {
        ...state,
        getPending: true,
        photo: null
      };
    case "photo/GET_FULFILLED":
      return {
        ...state,
        getPending: false,
        photo: action.payload.data
      };
    case "photo/GET_REJECTED":
      return {
        ...state,
        getPending: false
      };
    default:
      return state;
  }
};

export const search = keyword => ({
  type: "photo/SEARCH",
  payload: axios.get("http://www.mocky.io/v2/5bfd109e3100007d002cf669")
});

export const get = id => ({
  type: "photo/GET",
  payload: axios.get("http://www.mocky.io/v2/5bfd1f9d31000011002cf6dc")
});
