import React from "react";
import useUserStore from "../zustand/store";

export const signin = async (email: string, password: string) => {
  try {
    const response = await fetch(
      "https://d5ac-2001-e60-87ec-2db6-4196-c5-3946-35a7.ngrok-free.app/user/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Signin failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an issue with the signin process", error);
    return null;
  }
};
