export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
}

export const setAccessToken = (payload: string) => {
    localStorage.setItem("accessToken", payload);
}

export const setClientID = (payload: string) => {
    localStorage.setItem("clientID", payload);
}

export const getClientID = () => {
    return localStorage.getItem("clientID");
}