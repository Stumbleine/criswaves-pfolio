import { Box, useTheme } from "@mui/material";
import "./animation.sass";
const Cover = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ width: "100%", height: 350, position: "relative", zIndex: 10 }}>
      {/* animation */}
      <div className="container">
        <div className={`sky ${darkMode ? "night-mode" : "day-mode"}`}>
          <div
            className={`sky__sun ${
              darkMode ? "night-mode__sun" : "day-mode__sun"
            }`}
          ></div>
          {/* Agrega más contenido de la animación aquí */}
        </div>

        <div id="vehicle" className={`vehicle `}>
          <div className="vehicle__body">
            <div className="vehicle__body__windows">
              <div>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="vehicle__body__top"></div>
            <div className="vehicle__body__forklift">
              <div className="rod"></div>
              <div className="rod"></div>
              <div className="rod"></div>
              <div className="flag">
                <div className="flag__row-1"></div>
                <div className="flag__row-2"></div>
                <div className="flag__row-3"></div>
              </div>
            </div>
            <div className="vehicle__body__suitcase">
              <div className="box__1"></div>
              <div className="box__2"></div>
              <div className="box__3"></div>
            </div>
            <div className="vehicle__body__tail tail">
              {Array(12)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="tail__smoke"></div>
                ))}
            </div>
            <div className="vehicle__body__light">
              <div className="spotlight"></div>
              <div
                className={`light ${darkMode ? "dark-mode" : "light-mode"}`}
              ></div>
            </div>
            <div className="vehicle__body__back"></div>
            <div className="vehicle__body__front"></div>
          </div>
          <div className="vehicle__wheels">
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="salar">
          <div className={`water ${darkMode ? "dark-mode" : "light-mode"}`}>
            <i></i>
          </div>

          <div className="salar__dune">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div key={i} className={`salar__dune__${i + 1}`}>
                  <div></div>
                </div>
              ))}
          </div>
        </div>

        <div className="haze">
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                style={{ "--i": i + 1 } as React.CSSProperties}
              ></span>
            ))}
        </div>
        <div className="stars">
          <i></i>
        </div>
      </div>
    </Box>
  );
};

export default Cover;
