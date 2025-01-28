import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <Box
      sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}
    >
      <Stack spacing={1} textAlign="center" maxWidth={400}>
        <Typography color="textSecondary" textAlign="center">
          I am open to new opportunities, collaborations, questions, or simply
          connecting. Feel free to reach out—I’m always attentive to my email.
        </Typography>
        <Button
          href="#"
          LinkComponent={Link}
          startIcon={<FontAwesomeIcon icon={faEnvelope} />}
          sx={{ textTransform: "none" }}
          onClick={(e) => {
            window.location.href = "mailto:w.cmercadocss@outlook.com";
            e.preventDefault();
          }}
        >
          Say hello
        </Button>
      </Stack>
    </Box>
  );
};
export default ContactSection;
