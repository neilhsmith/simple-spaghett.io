import { forwardRef, Heading, HeadingProps } from "@chakra-ui/react";

export const Title = forwardRef<HeadingProps, "h2">((props, ref) => (
  <Heading as="h2" fontSize="md" mb={2} ref={ref} {...props} />
));
