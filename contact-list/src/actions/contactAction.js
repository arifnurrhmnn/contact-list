import axios from "axios";

export const GET_CONTACT_LIST = "GET_CONTACT_LIST";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getContactList = (dispatch) => {
  //   console.log("2. Masuk Action");
  // Loading
  dispatch({
    type: GET_CONTACT_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: "http://localhost:3000/contact",
    timeout: 120000,
  })
    .then((response) => {
      //   console.log("3. Berhasil Get Data dari Axios: ", response);
      dispatch({
        type: GET_CONTACT_LIST,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      //   console.log("3. Gagal Get Data dari Axios: ", error.message);
      dispatch({
        type: GET_CONTACT_LIST,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const addContact = (dispatch, data) => {
  //   console.log("2. Masuk Action");
  // Loading
  dispatch({
    type: ADD_CONTACT,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "POST",
    url: "http://localhost:3000/contact",
    timeout: 120000,
    data: data,
  })
    .then((response) => {
      //   console.log("3. Berhasil POST Data dari Axios: ", response);
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      //   console.log("3. Gagal Get Data dari Axios: ", error.message);
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const deleteContact = (dispatch, id) => {
  //   console.log("2. Masuk Action");
  // Loading
  dispatch({
    type: DELETE_CONTACT,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "DELETE",
    url: "http://localhost:3000/contact/" + id,
    timeout: 120000,
  })
    .then((response) => {
      //   console.log("3. Berhasil DELETE Data dari Axios: ", response);
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      //   console.log("3. Gagal DELETE Data dari Axios: ", error.message);
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const detailContact = (dispatch, data) => {
  //   console.log("1. Masuk Action");
  dispatch({
    type: DETAIL_CONTACT,
    payload: {
      data: data,
    },
  });
};

export const updateContact = (dispatch, data) => {
  console.log("2. Masuk Action");
  // Loading
  dispatch({
    type: UPDATE_CONTACT,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "PUT",
    url: "http://localhost:3000/contact/" + data.id,
    timeout: 120000,
    data: data,
  })
    .then((response) => {
      console.log("3. Berhasil UPDATE Data dari Axios: ", response);
      dispatch({
        type: UPDATE_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log("3. Gagal UPDATE Data dari Axios: ", error.message);
      dispatch({
        type: UPDATE_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
