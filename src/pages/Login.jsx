import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#5c1b50",
        color: "white",
        height: "100vh",
      }}
    >
      <h1>Nordstone</h1>
      <hr />
      <p>Software Development</p>

      <FormLogin />
    </div>
  );
};

export default Login;
