import React from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../../data/index";
import { loginUser } from "../../redux/actions/action";
import "./Login.scss";
function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { email, password } = state;

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(state);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(state));
    setIsSubmit(true);
    if (!email || !password) return toast.info("please fill in all fields");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        const data = {
          user: user.user.providerData[0],
          id: user.user.uid,
        };
        dispatch(loginUser(data));
        toast.success("you are login successfully");
        history.push("/admin/dashboard");
      })
      .catch((err) => {
        toast.error("invalid email or password");
      });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="main">
      <div className="contentLeft">
        <h1 className="logo">facebook</h1>
        <p className="slogan">
          Facebook gi??p b???n k???t n???i v?? chia s??? v???i m???i ng?????i trong cu???c s???ng c???a
          b???n
        </p>
      </div>
      <form className="contentRight" onSubmit={handleSubmit}> 
        <TextField
          type="email"
          id="outlined-basic"
          label="Email ho???c s??? ??i???n tho???i"
          variant="outlined"
          className={"txt"}
          onChange={handleChange}
          name="email"
          required
          value={state.email}
        />
        <p>{formErrors.email}</p>
        <br />
        <TextField
          type="password"
          id="outlined-basic"
          label="m???t kh???u"
          className={"txt"}
          onChange={handleChange}
          name="password"
          required
          value={state.password}
        />
        <p>{formErrors.password}</p>
        <br />
        <Button
          variant="contained"
          className="login_btn"
          type="submit"
          // onClick={handleSubmit}
        >
          ????ng nh???p
        </Button>
        <div className="link">
          <a href="/" className="linkForgotPassword">
            Qu??n m???t kh???u?
          </a>
        </div>
        <div className="create_btn">
          <a href="/" className="create_btnAcount">
            T???o t??i kho???n m???i
          </a>
        </div>
      </form>
      <div className="sloganRight">
        <a href="/" className="newPage">
          T???o Trang
        </a> d??nh cho ng?????i n???i ti???ng, nh??n hi???u ho???c doanh nghi???p
      </div>
    </div>
  );
}

export default Login;
