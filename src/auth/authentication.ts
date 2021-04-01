export const isAuthenticated = () => {
    const auth = localStorage.getItem("auth:token");
    if (!auth) return false;
    return true;
};

export const logout = () => {
    localStorage.removeItem("auth:token");
    localStorage.removeItem("auth:token");
    window.location.reload();
};