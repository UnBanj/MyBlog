import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (password !== confirmPass) {
        setError("Password and confirm password do not match!");
        return;
      }
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Create Account</h1>
      {error && <p className="error">{error}</p>}
      <input
        className="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="pass"
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="pass"
        type="password"
        placeholder="Re-enter your password"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <button onClick={createAccount}>Create new account</button>
      <Link to="/login">Already have an account?Log-in here</Link>
    </>
  );
};

export default CreateAccountPage;
