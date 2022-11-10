import { useFormik } from "formik";

import validationSchema from "./validation";

//onBlur, errors, touched are all props that formik provides and we can use them to display errors
function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <br />
        {errors.email && touched.email && (
          <div className="error">*{errors.email}</div>
        )}
        <br />

        <label>Password</label>
        <input
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <br />
        {errors.password && touched.password && (
          <div className="error">*{errors.password}</div>
        )}
        <br />

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
        />
        <br />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">*{errors.passwordConfirm}</div>
        )}
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;