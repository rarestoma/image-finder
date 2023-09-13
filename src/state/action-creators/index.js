import axios from "axios";
import ActionType from "../action-types";

export const updateUserName = (userName) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.UPDATE_USER_NAME,
            payload: userName
        });
    }
};

export const updateUserSurname = (userSurname) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.UPDATE_USER_SURNAME,
            payload: userSurname
        });
    }
};

export const searchImage = (searchTerm) => {
    return async (dispatch) => {

        const unsplashAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY;

        dispatch({
            type: ActionType.SEARCH_START
        });

        try {
            const response = await axios.get('https://api.unsplash.com/photos/random/', {
                params: {
                    query: searchTerm,
                  },
                headers: {
                    Authorization: `Client-ID ${unsplashAPIKey}`,
                  },
              });
    
              const userImage = await response.data.urls.regular;
              const userTopic = searchTerm;

              dispatch({
                type: ActionType.SEARCH_IMAGE,
                payload: { userImage, userTopic }
            });
    
        } catch (error){
            alert(error);
        }
    }
};

