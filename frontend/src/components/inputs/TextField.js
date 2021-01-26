import { TextField } from "@material-ui/core";

export default (props) => {
  const { meta, input, label, ...rest } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      label={label}
      error={meta.touched && meta.error}
      helperText={meta.touched ? meta.error : ""}
      {...input}
      {...rest}
    />
  );
};
