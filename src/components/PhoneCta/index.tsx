import { Button, Box } from "@mui/material";

type PhoneCtaProps = {
  phone: number;
};

export const PhoneCta = ({ phone }: PhoneCtaProps) => (
  <Box>
    <Button href={`tel:${phone}`} color="primary" rel="noopener noreferrer">
      Call Now
    </Button>
    &nbsp; or &nbsp;
  </Box>
);
