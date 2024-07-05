"use client";

import React, { useState } from "react";
import InputField from "./input-field";
import Reflection from "./reflection";
// import { shortsFormService } from "@/src/service/shorts.service";

const ShortsAdmin = () => {
  const [inputValues, setInputValues] = useState({
    value1: "",
    value2: "",
  });
  const { value1, value2 } = inputValues;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleOnSubmit = async (e: any) => {
    // e.preventDefault();
    // try {
    //   if (value1.length > 0 && value2.length > 0) {
    //     const shortsFormResponse = await shortsFormService.shortsFormData(
    //       JSON.stringify(inputValues)
    //     );
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <div className="m-10">
      <form onSubmit={handleOnSubmit}>
        <InputField value={value1} onChange={handleInputChange} id="value1" />
        <InputField value={value2} onChange={handleInputChange} id="value2" />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
      <Reflection value={value1} />
      <Reflection value={value2} />
    </div>
  );
};

export default ShortsAdmin;
