import React from "react";
import useUserStore from "../zustand/store";

export const signup = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const response = await fetch(
      "https://9b72-2001-e60-104a-9544-f8a7-c7e4-6336-d42e.ngrok-free.app/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an issue with the signup process", error);
    return null;
  }
};
