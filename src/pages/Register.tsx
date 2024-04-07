import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaEnvelope,
  FaKey,
  FaEye,
  FaEyeSlash,
  FaCircleArrowRight,
  FaClipboardUser
} from "react-icons/fa6";

interface formDataI {
  email: string;
  name: string;
  password: string;
}
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialFormData: formDataI = { email: "", name: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const { email, password, name } = formData;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target &&
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    
  }

  return (
    <>
      <div className="pl-6 pt-8">
        <header>
          <p className="font-bold text-2xl text-gray-200">Welcome!</p>
        </header>

        <form className="p-6 mt-8 flex flex-col gap-10">
          <label className="input input-bordered flex items-center gap-2 bg-neutral">
            <FaEnvelope className="w-4 h-4 opacity-70" />
            <input
              type="email"
              className="grow"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 bg-neutral">
            <FaClipboardUser className="w-4 h-4 opacity-70" />
            <input
              type="text"
              className="grow"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 bg-neutral">
            <FaKey className="w-4 h-4 opacity-70" />
            <input
              type={showPassword ? "text" : "password"}
              className="grow"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            {showPassword ? (
              <FaEye onClick={toggleShowPassword} />
            ) : (
              <FaEyeSlash onClick={toggleShowPassword} />
            )}
          </label>

          <div className="flex flex-row  gap-8 text-gray-200">
            <p className="font-bold text-lg">
              Register
            </p>
            <button className="text-3xl text-green-600">
              <FaCircleArrowRight />
            </button>
          </div>

          <Link
            className="font-bold mt-2 self-center"
            to={"/login"}
          >
            Log in instead
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register