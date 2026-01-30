import { useForm, type SubmitHandler } from "react-hook-form";

interface Props {
  username: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();

  const onSubmit: SubmitHandler<Props> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
      </div>
      {errors.username && <span>This field is required</span>}
      <div>
        <input
          type="text"
          placeholder="Password"
          {...register("password", { required: true })}
        />
      </div>
      {errors.password && <span>This field is required</span>}
    </form>
  );
}

export default Login;
