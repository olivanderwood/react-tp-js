import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className=" py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-3/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap items-center justify-center py-9">
                <form onSubmit={handleSubmit(onSubmit)} className="w-8/12">
                  <h3 className="text-3xl font-bold">Login</h3>
                  <input
                    placeholder="Email"
                    className={`${
                      (isDirty || isSubmitted) &&
                      errors.email &&
                      "border-red-500"
                    } form-control mt-4 block w-full py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none`}
                    {...register("email", {
                      required: true,
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    })}
                  />
                  {(isDirty || isSubmitted) &&
                    errors.email?.type === "required" && (
                      <p className={`text-xs text-red-500 text-left`}>
                        Email is required
                      </p>
                    )}
                  {(isDirty || isSubmitted) &&
                    errors.email?.type === "pattern" && (
                      <p className={`text-xs text-red-500 text-left`}>
                        Email is invalid
                      </p>
                    )}
                  <input
                    placeholder="Password"
                    className={`${
                      (isDirty || isSubmitted) &&
                      errors.email &&
                      "border-red-500"
                    } form-control mt-4 block w-full py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none`}
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {(isDirty || isSubmitted) &&
                    errors.password?.type === "required" && (
                      <p className={`text-xs text-red-500 text-left`}>
                        Password is required
                      </p>
                    )}
                  <input
                    type="submit"
                    value="Login"
                    className="w-full mt-7 rounded-md duration-300 bg-purple-500 cursor-pointer tr py-3 px-4 text-md font-semibold text-white hover:bg-purple-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
