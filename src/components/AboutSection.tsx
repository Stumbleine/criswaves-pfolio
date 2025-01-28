import { Card, CardContent, Link, Stack, Typography } from "@mui/material";
import { dataUser } from "../models/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const AboutSection = () => {
  const {
    languages,
    education: { university, certifications },
  } = dataUser;
  return (
    <Stack direction="column" spacing={2}>
      {dataUser.about.split("\n\n").map((paragraph, index) => (
        <Typography key={index} color="textSecondary">
          {paragraph}
        </Typography>
      ))}
      <Typography color="primary">Education</Typography>
      <Card elevation={0}>
        <CardContent>
          <Typography
            color="textPrimary"
            fontWeight="bold"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {university.degree}
          </Typography>
          <Typography color="textSecondary">
            {university.name},{" "}
            {university.location.city + " — " + university.location.country}
          </Typography>
          <Typography color="textSecondary">
            {moment(university.dateJoined).format("YYYY") +
              " — " +
              moment(university.dateFinished).format("YYYY")}
          </Typography>
        </CardContent>
      </Card>
      <Typography color="primary">Languages</Typography>
      <Card elevation={0}>
        <CardContent>
          {languages.map((lng, index) => (
            <Typography
              key={index}
              color="textPrimary"
              sx={{ display: "flex" }}
            >
              {lng.name}
              <Typography color="textSecondary" sx={{ ml: 1 }}>
                {" "}
                — {lng.level}
              </Typography>
            </Typography>
          ))}
        </CardContent>
      </Card>
      <Typography color="primary">Certifications</Typography>
      <Stack spacing={1}>
        {certifications.map((cert, index) => (
          <Card elevation={0} key={index}>
            <CardContent>
              <Typography
                component={Link}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                color="textPrimary"
                fontWeight="bold"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {cert.name}{" "}
                {cert.url && (
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ transform: "rotate(45deg)" }}
                  />
                )}
              </Typography>
              <Typography color="textSecondary" sx={{}}>
                {cert.institution}
              </Typography>
              <Typography color="textSecondary">
                {moment(cert.date).format("MMM YYYY")}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Typography
        component={Link}
        href={dataUser.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        color="textPrimary"
        fontWeight="bold"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          textDecoration: "none",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        View Full Resume
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ transform: "rotate(45deg)" }}
        />
      </Typography>
    </Stack>
  );
};
export default AboutSection;
