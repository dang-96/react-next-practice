"use client";
import { useForm } from "react-hook-form";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function AdvancedSignupForm() {
  const {
    register, // 1. 입력창(input)을 훅 폼에 등록하고 연결하는 함수
    handleSubmit, // 2. 폼 제출 시 유효성 검사를 실행하고 데이터를 처리하는 함수
    watch, // 3. 특정 입력값의 변화를 실시간으로 감시하는 함수
    setError, // 4. 특정 입력창에 수동으로 에러 메시지를 꽂아넣는 함수
    reset, // 5. 폼의 모든 입력값과 상태를 초기 상태로 되돌리는 함수
    formState: {
      errors, // 6. 발생한 유효성 검사 에러들의 정보가 담긴 객체
      isSubmitting, // 7. 폼이 현재 제출(서버 통신) 중인지 여부 (true/false)
      isDirty, // 8. 사용자가 폼 내용을 하나라도 수정했는지 여부 (true/false)
      isValid, // 9. 폼의 모든 입력값이 유효성 검사를 통과했는지 여부 (true/false)
    },
  } = useForm<SignupFormData>({
    mode: "onBlur", // 10. 최초 유효성 검사 시점 (입력 후 다른 곳으로 커서가 빠져나갈 때)
    reValidateMode: "onChange", // 11. 에러가 뜬 후 재검사 시점 (글자를 고칠 때마다 실시간으로)
    defaultValues: {
      // 12. 입력창들의 맨 처음 초기값 설정
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (data: SignupFormData) => {
    if (data.email === "test@example.com") {
      setError("email", {
        type: "server",
        message: "이미 가입된 이메일 입니다.",
      });
      return;
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>회원가입 심화</h1>

      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "이름을 입력해 주세요.",
            minLength: {
              value: 2,
              message: "이름은 2자 이상 입력해 주세요.",
            },
          })}
        />

        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "올바른 이메일 형식으로 입력해 주세요.",
            },
          })}
        />

        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
              message:
                "비밀번호는 8자 이상, 영문 대/소문자, 특수문자를 각각 1개 이상 포함해야 합니다.",
            },
          })}
        />

        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm", {
            required: "비밀번호를 한 번 더 입력해 주세요.",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
        />

        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "처리 중..." : "가입하기"}
      </button>

      <button
        type="button"
        onClick={() => reset()}
        disabled={!isDirty}
      >
        초기화
      </button>

      <p>폼 유효성: {isValid ? "통과" : "실패"}</p>
    </form>
  );
}
