import React from "react";
import { motion } from "framer-motion";

export const HomeScreenIndex = () => {
  return (
    <section style={{ padding: "4rem 0", textAlign: "center" }}>
      <motion.h1
        style={{
          fontSize: "2.25rem",
          fontWeight: 800,
          marginBottom: "1rem",
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to{" "}
        <motion.span
          style={{ color: "#184b8c" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          X-odus
        </motion.span>
      </motion.h1>

      <motion.p
        style={{
          marginTop: "1rem",
          fontSize: "1.125rem",
          opacity: 0.8,
          maxWidth: "40rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        Fast, flexible, and reliable data plans — choose from Daily, Weekly, or
        Monthly options. Sign in to your account to access secure purchasing and
        manage your data plans.
      </motion.p>

      <motion.div
        style={{
          marginTop: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href="/plans"
            style={{
              display: "block",
              padding: "0.75rem 1.5rem",
              borderRadius: "12px",
              backgroundColor: "#184b8c",
              color: "white",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            View Plans
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href="/signin"
            style={{
              display: "block",
              padding: "0.75rem 1.5rem",
              borderRadius: "12px",
              border: "1px solid rgba(24,75,140,0.3)",
              textDecoration: "none",
              color: "#184b8c",
              transition: "all 0.2s",
            }}
          >
            Sign In
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
