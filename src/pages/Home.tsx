import { Avatar, Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { dataUser } from "../models/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faBriefcase,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cover from "../components/Cover";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const PROFILE_WIDTH = 140;
const PROFILE_BORDER_WIDTH = PROFILE_WIDTH + 8;

const Home = () => {
  const [value, setValue] = useState("About");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Cover />
      <Stack
        direction="column"
        spacing={2}
        sx={{ p: 8, pt: 10, m: 0, position: "relative", zIndex: 20 }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: PROFILE_WIDTH / 2 - 10,
            top: -PROFILE_BORDER_WIDTH / 2,
            width: PROFILE_BORDER_WIDTH,
            height: PROFILE_BORDER_WIDTH,
            borderRadius: "50%",
            background: "white",
          }}
        >
          <Avatar
            sx={{ width: PROFILE_WIDTH, height: PROFILE_WIDTH }}
            src={dataUser.profilePicture}
          />
        </Box>
        <Stack direction="column" spacing={1}>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "flex-end",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            {dataUser.name}
            <Typography
              sx={{
                ml: 1,
                color: "text.secondary",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              @{dataUser.nickname}
            </Typography>
          </Typography>
          <Typography color="textPrimary">{dataUser.headline}</Typography>
          <Typography color="textSecondary">{dataUser.logo}</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: 5 }} />
            {dataUser.status}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <FontAwesomeIcon icon={faBirthdayCake} style={{ marginRight: 5 }} />
            {dataUser.birthDate}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <FontAwesomeIcon icon={faCalendar} style={{ marginRight: 5 }} />
            {dataUser.joinedDate}
          </Typography>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary">
            <Tab value="About" label="About" sx={{ textTransform: "none" }} />
            <Tab
              value="Experience"
              label="Experience"
              sx={{ textTransform: "none" }}
            />
            <Tab
              value="Projects"
              label="Projects"
              sx={{ textTransform: "none" }}
            />
            <Tab
              value="Contact"
              label="Contact"
              sx={{ textTransform: "none" }}
            />
          </Tabs>
        </Box>
        <Box sx={{ pt: 2 }}>
          {value === "About" && <AboutSection />}
          {value === "Experience" && <ExperienceSection />}
          {value === "Projects" && <ProjectsSection />}
          {value === "Contact" && <ContactSection />}
        </Box>
      </Stack>
    </>
  );
};

export default Home;
