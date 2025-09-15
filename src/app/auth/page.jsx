import React from "react";
import styles from "./login.module.css";
import AuthForm from "@/components/AuthForm/Authform";

export default function AuthPage({ searchParams }) {
  const mode = searchParams.mode || "login"; // fallback

  return (
    <div className={styles.container}>
      <AuthForm
        auth={mode === "login" ? "LoginPage" : "RegisterPage"}
      />
    </div>
  );
}
