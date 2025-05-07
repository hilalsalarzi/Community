// auth.ts (or a custom hook later)
export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null; // or any logic you use
  };
  