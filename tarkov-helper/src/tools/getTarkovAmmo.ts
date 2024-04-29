import React from "react";

export const getTarkovAmmo = async (item: string) => {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
        items(types: ${item}) {
        name
        avg24hPrice
      }
  }`,
    }),
  });
  const data = await response.json();
  return data;
};
