import React from "react";
import { ValidationOptions, useForm } from "react-hook-form";

const setValidationOptions = (
  isRequired: boolean,
  hasMaxLength: boolean
): ValidationOptions => {
  const validationOptions: ValidationOptions = {};

  if (isRequired) {
    validationOptions.required = "required input";
  }

  if (hasMaxLength) {
    validationOptions.maxLength = {
      value: 3,
      message: "max length is 3 characters",
    };
  }

  return validationOptions;
};

const MyForm = () => {
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>input1:</label>
        <input
          name="input1"
          type="text"
          ref={register(setValidationOptions(true, false))}
        />
        {/* error message area */}
        {errors.input1 && <span>{errors.input1.message}</span>}
      </div>
      <div>
        <label>input2:</label>
        <input
          name="input2"
          type="text"
          ref={register(setValidationOptions(false, true))}
        />
        {/* error message area */}
        {errors.input2 && <span>{errors.input2.message}</span>}
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default MyForm;
