import { Input as $Input, Slider as $Slider } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { SliderProps } from "antd/lib/slider";

export const Slider = ({
  name,
  validate,
  ...restProps
}: FormikFieldProps & SliderProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Slider
        value={value}
        onChange={e => {
          setFieldValue(name, e.valueOf());
        }}
        {...restProps}
      />
    )}
  </Field>
);
