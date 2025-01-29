import { Box, Grid2, IconButton } from "@mui/material";
import { dataUser } from "../models/data";

const Links = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
      <Grid2 container spacing={1} sx={{ pt: 1 }}>
        {dataUser.links.map((link, index) => (
          <Grid2
            component={IconButton}
            key={index}
            onClick={() => window.open(link.url, "_blank")}
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {link.icon}
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Links;
