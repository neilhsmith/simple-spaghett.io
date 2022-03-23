import { forwardRef, TextProps, Text as ChaText } from "@chakra-ui/react";

export const Text = forwardRef<TextProps, "p">((props, ref) => (
  <ChaText fontSize={["xl"]} ref={ref} {...props} />
));
