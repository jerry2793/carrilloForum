import { InputBase } from "@material-ui/core";

export default ({ input, meta, ...rest }) => {
  return <textarea {...input} {...rest} />;
};
