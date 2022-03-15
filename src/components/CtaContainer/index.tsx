import { Button, Box } from "@mui/material";

import { PhoneCta } from "../PhoneCta";

type CtaProps = {
  phone?: number;
  mapUrl?: string;
};

export const CtaContainer = ({ phone, mapUrl }: CtaProps) => (
  <Box>
    {phone && <PhoneCta phone={phone} />}
    <Button color="secondary" href={mapUrl}>
      Show Me the Map
    </Button>
  </Box>
);
