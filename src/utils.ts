export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
}

export const setAccessToken = (payload: string) => {
    localStorage.setItem("accessToken", payload);
}