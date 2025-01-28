import {
  Card,
  CardContent,
  Chip,
  Grid2,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { dataUser } from "../models/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ExperienceSection = () => {
  return (
    <Stack direction="column" spacing={2}>
      {dataUser.experiences.map((exp, index) => (
        <Card elevation={0}>
          <CardContent>
            <Stack direction="row" spacing={1} key={index}>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    //textTransform: "uppercase",
                  }}
                >
                  {moment(exp.dateStarted).format("MMM YYYY") +
                    " — " +
                    (exp.dateEnded
                      ? moment(exp.dateEnded).format("MMM YYYY")
                      : "Current")}
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    gap: 0.5,
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  component={Link}
                  href={exp.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.role + " · " + exp.company.name}
                  {exp.company.website && (
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      style={{ transform: "rotate(45deg)" }}
                    />
                  )}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  sx={{ lineHeight: 1.4 }}
                >
                  {exp.description}
                </Typography>
                <Grid2 container spacing={1} sx={{ pt: 1 }}>
                  {exp.technologies.map((tech, index) => (
                    <Grid2 key={index}>
                      <Chip size="small" label={tech} />
                    </Grid2>
                  ))}
                </Grid2>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default ExperienceSection;
