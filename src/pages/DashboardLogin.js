import "./DashboardLogin.css";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { passwordPattern, dummyUser } from "../utilities";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const DashboardLogin = () => {
  const navigate = useNavigate();
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const [isInValid, setPasswordValid] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!passwordPattern.test(passwordInput.current.value)) {
      setPasswordValid(true);
    } else if (passwordInput?.current?.value !== dummyUser.password) {
      toast.error("The provided password is wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (usernameInput?.current?.value !== dummyUser.username) {
      toast.error("The provided username is wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Login success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setPasswordValid(false);
      await delay(3000);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="dashboard-login">
        <img className="bg-icon" alt="" src="/bg.svg" />
        {/* <div className="form" >
          <div className="username">
            <input
              type="email"
              className="rectangle"
              placeholder="USERNAME"
              ref={usernameInput}
            />
            <img className="user-icon" alt="" src="/user.svg" />
          </div>

          <div className="password">
            <input
              type="password"
              className="rectangle1"
              // onChange={handleChange}
              placeholder="PASSWORD"
              ref={passwordInput}
            />
            <img className="user-icon" alt="" src="/lock.svg" />
          </div>
          {isInValid ? (
            <div style={{ color: "Red" }}>Wrong combination</div>
          ) : null}

          <div class="d-grid gap-2 col-12 mx-auto login-btn">
            <button class="btn btn-light" type="button" onClick={handleClick}>
              Login
            </button>
          </div>
          <div className="forgot-password">Forgot password?</div>
          <img className="group-icon" alt="" src="/group.svg" />
        </div> */}
        <div className="container-fluid h-100 text-center">
          <div className="row justify-content-center" id="Box">
            <div className="col-md-12">
              <img alt="" src="/group.svg" />
            </div>

            <div className="col-md-12 col-sm-4" id="usernameCol">
              <div className="row w-100">
                <div className="col-2">
                  <img className="user-icon" alt="" src="/user.svg" />
                </div>
                <div className="col-10">
                  <input
                    type="email"
                    className="rectangle"
                    placeholder="USERNAME"
                    ref={usernameInput}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12" id="passwordCol">
              <div className="row w-100">
                <div className="col-2">
                  <img className="user-icon" alt="" src="/lock.svg" />
                </div>
                <div className="col-10">
                  <input
                    type="password"
                    className="rectangle"
                    placeholder="PASSWORD"
                    ref={passwordInput}
                  />
                </div>
              </div>
            </div>
            {isInValid ? (
              <div style={{ color: "Red" }}>Wrong combination</div>
            ) : null}

            <div id="LoginCol" class="col-md-12">
              <button
                class="login-btn w-100"
                type="button"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
            <div className="col-md-12 text-end" id="forgotText">
              Forgot password?
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default DashboardLogin;
