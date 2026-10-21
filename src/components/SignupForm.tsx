"use client";
import { useForm } from "react-hook-form";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
    console.log("회원가입 정보", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>회원가입</h1>

      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "이름을 입력해 주세요.",
          })}
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "올바른 이메일 형식으로 입력해 주세요.",
            },
          })}
        />

        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상 입력해 주세요.",
            },
          })}
        />

        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">가입하기</button>
    </form>
  );
}
