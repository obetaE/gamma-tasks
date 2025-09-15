"use client";
import React, { useState, useEffect } from "react";
import styles from "./AuthForm.module.css";
import { FcGoogle } from "react-icons/fc";
import { Briefcase, Rocket, Users } from "lucide-react";
import { signIn } from "next-auth/react";

const AuthForm = ({ auth }) => {
  const [authOptions, setAuthoptions] = useState(auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });


  useEffect(() => {
    setAuthoptions(auth);
  }, [auth]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (authOptions === "LoginPage") {
      setFormData((prev) => ({
        ...prev,
        fullname: "",
        confirmpassword: "",
      }));

      if (!formData.email || !formData.password) {
        setError("Please fill in all required fields.");
        setLoading(false);
        return;
      }

      try {
        const res = await signIn("credentials", {
          email: formData.email.toLowerCase().trim(),
          password: formData.password.trim(),
          redirect: false,
        });

        if (res.error) {
          setError("Invalid Credentials");
          return;
        }

        setSuccess("Logged In Successfully");
        setError("");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    if (authOptions === "RegisterPage") {
      if (
        !formData.fullname ||
        !formData.email ||
        !formData.password ||
        !formData.confirmpassword
      ) {
        setError("Please fill in all required fields.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          const data = await res.json();
          setSuccess(data.message);
          setError("");
          setFormData({
            fullname: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
        } else {
          const data = await res.json();
          setError(data.message);
          setSuccess("");
        }
      } catch (error) {
        setError("An error occurred during registration.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>
          {authOptions === "LoginPage"
            ? "Login into your account"
            : "Create your new account"}
        </h1>

        {authOptions === "RegisterPage" && (
          <div className={styles.formGroup}>
            <label htmlFor="fullname" className={styles.label}>
              Type Your Fullname:
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Type your Fullname"
              className={styles.input}
            />
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Type Your Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Type your email"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Type Your Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Type your password"
            className={styles.input}
          />
        </div>

        {authOptions === "RegisterPage" && (
          <div className={styles.formGroup}>
            <label htmlFor="confirmpassword" className={styles.label}>
              Confirm Your Password:
            </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={styles.input}
            />
          </div>
        )}

        <button disabled={loading} className={styles.login}>
          {loading
            ? authOptions === "LoginPage"
              ? "Logging In..."
              : "Registering..."
            : authOptions === "LoginPage"
            ? "Login"
            : "Register"}
        </button>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        {authOptions === "LoginPage" ? (
          <p className={styles.redirect}>
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => setAuthoptions("RegisterPage")}
              className={styles.action}
            >
              Click Here to Register
            </button>
          </p>
        ) : (
          <p className={styles.redirect}>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setAuthoptions("LoginPage")}
              className={styles.action}
            >
              Click Here to Login
            </button>
          </p>
        )}

        <div className={styles.authOptions}>
  <button
    type="button"
    onClick={() => signIn("google", { callbackUrl: "/dashboard" })} 
    className={styles.google}
  >
    Sign-In with Google <FcGoogle size={25} />
  </button>
</div>
      </form>

      <div className={styles.sidePanel}>
        <div className={styles.sideContent}>
          <h2 className={styles.sideTitle}>Join Our Community</h2>
          <p className={styles.sideText}>
            Login to join an active community of developers and tech enthusiasts...
          </p>
          <div className={styles.sideBenefits}>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>
                <Briefcase size={24} />
              </span>
              <span>Network with professionals</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>
                <Rocket size={24} />
              </span>
              <span>Accelerate your learning</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>
                <Users size={24} />
              </span>
              <span>Collaborate on projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
