import React, { useEffect } from "react";
import { useField, ErrorMessage } from "formik";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/Slices/userSlice";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(
      // addUser([field.value])
      // );
  })

  return (
    <div className="mb-2 ">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control m-auto shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField;
