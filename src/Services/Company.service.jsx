import { useState } from "react";
import { Client } from "../api";

export const GetCompanyType = async () => {
  const [data, setData] = useState();
  const fetch = await fetch(`${Client}`)
    .then((res) => res.json())
    .then((d) => setData(d));
  return data;
};
