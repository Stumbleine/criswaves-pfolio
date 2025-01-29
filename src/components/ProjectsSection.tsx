import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid2,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { dataUser } from "../models/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsSection = () => {
  return (
    <Stack direction="column" spacing={2}>
      {dataUser.projects.map((project, index) => (
        <Card elevation={0}>
          <CardContent>
            <Stack direction="row" spacing={2} key={index}>
              {project.img && (
                <Box
                  component="img"
                  src={project.img}
                  sx={{
                    width: { sm: 250, md: 330 },
                    height: { sm: 140, md: 160 },
                    borderRadius: 1.5,
                    display: { xs: "none", sm: "flex" },
                  }}
                ></Box>
              )}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  component={Link}
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
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                  {project.url && (
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
                  {project.description}
                </Typography>
                {project.repositoryUrl && (
                  <Grid2 container spacing={1} sx={{ pt: 1 }}>
                    <Grid2>
                      <IconButton
                        component={IconButton}
                        onClick={() =>
                          window.open(project.repositoryUrl, "_blank")
                        }
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        size="small"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </IconButton>
                    </Grid2>
                  </Grid2>
                )}
                {/* {project.url && (
                    <Grid2>
                      <IconButton
                        component={IconButton}
                        onClick={() => window.open(project.url, "_blank")}
                        sx={{
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                        size="small"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                      </IconButton>
                    </Grid2>
                  )} */}
                {project.technologies && (
                  <Grid2 container spacing={1} sx={{ pt: 1 }}>
                    {project.technologies.map((tech, index) => (
                      <Grid2 key={index}>
                        <Chip size="small" label={tech} />
                      </Grid2>
                    ))}
                  </Grid2>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default ProjectsSection;
