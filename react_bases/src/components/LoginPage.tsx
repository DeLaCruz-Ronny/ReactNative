import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

const LoginPage = () => {
  const authState = useAuthStore((state) => state.status);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authState === "cheking") {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h3>Login Page</h3>
      {authState === "authenticated" ? (
        <div>Auntenticado como: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No Auntenticado</div>
      )}

      {authState === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("correo@gmail.com", "123")}>Login</button>
      )}
    </>
  );
};

export default LoginPage;
