"use client";
export const dynamic = "force-dynamic";

import React from "react";
import { useSearchParams } from "next/navigation";
import styles from "./login.module.css";
import AuthForm from "@/components/AuthForm/Authform";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login"; // fallback

  return (
    <div className={styles.container}>
      <AuthForm
        auth={
          mode === "login"
            ? "LoginPage"
            : mode === "register"
            ? "RegisterPage"
            : "LoginPage"
        }
      />
    </div>
  );
};

export default AuthPage;
