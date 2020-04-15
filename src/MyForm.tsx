import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        type="text"
        ref={register({
          required: "必須項目です！",
          maxLength: {
            value: 3,
            message: "3文字以内で指定してください",
          },
        })}
      />
      <input type="submit" value="登録" />
      {/* error message area */}
      {errors.name && <div>{errors.name.message}</div>}
    </form>
  );
};

export default MyForm;
