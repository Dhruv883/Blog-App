import React, { useEffect } from "react";
import Main from "../components/Main";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../services/index/users";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/reducers/userReducer";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ username, password }) => {
      return signin({ username, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("acc", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const { username, password } = data;
    mutate({ username, password });
  };

  return (
    <Main>
      <section className="flex flex-col items-center gap-6 pb-10 pt-10">
        <div className="text-primaryYellow text-5xl font-medium pt-4 lg:pt-0">
          Sign In
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          className="w-full p-10 lg:p-0 md:w-2/3 lg:w-2/5 tracking-wide"
        >
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <span className="text-primaryYellow text-2xl font-light">
                Username
              </span>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="outline-none bg-transparent placeholder:text-xl border-b-2 border-primaryYellow  py-2 text-xl"
                maxLength={15}
                minLength={5}
                required
              />
            </div>
            <div className="flex flex-col">
              <span className="text-primaryYellow text-2xl font-light">
                Password
              </span>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="outline-none bg-transparent placeholder:text-xl border-b-2 border-primaryYellow  py-2 text-xl"
                maxLength={15}
                required
              />
            </div>

            <div>
              <input
                type="submit"
                value="Sign In"
                disabled={isLoading}
                className="w-full p-3 rounded-lg bg-primaryYellow text-2xl cursor-pointer"
              />
            </div>
          </div>
          <div className="text-xl font-thin text-left w-full mt-6 tracking-wide">
            Don't have an account ?
            <Link to="/signup">
              <span className="text-primaryYellow hover:underline underline-offset-auto mx-2">
                Sign Up
              </span>
            </Link>
          </div>
        </form>
      </section>
    </Main>
  );
};

export default SignIn;
