import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import Image from "mui-image";

import Navbar from "../components/Navbar";
import Page from "../components/Page";

import LandingPicture from "../assets/images/LandingPicture.jpg";
import FancyButton from "../components/FancyButton";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Page>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "40px",
            backgroundColor: "#ff8256",
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "5%",
              paddingRight: "0%",
            }}
          >
            <Stack sx={{ height: "100%" }}>
              <Box
                sx={{
                  height: "40%",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: "#F6F1E9",
                    fontFamily: "var(--font-raleway)",
                    fontSize: 60,
                    pr: "5%",
                    "&::first-letter": {
                      fontWeight: "bold",
                      color: "#febf62", // Change the color to your desired value
                    },
                  }}
                >
                  Nơi đam mê khám phá hội tụ
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "50%",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  pt: "3%",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "#febf62",
                    fontSize: 24,
                    fontFamily: "var(--font-raleway)",
                    mb: "1%",
                  }}
                >
                  Hãy đồng hành cùng chúng mình nhé!
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: "#F6F1E9",
                    fontSize: 18,
                    fontFamily: "var(--font-inter)",
                    textAlign: "justify",
                  }}
                >
                  Đến với chúng mình, những người có 1 "tâm hồn ăn uống" to lớn,
                  các bạn sẽ được trải nghiệm các quán ăn, nhà hàng phổ biến bậc
                  nhất trong khu vực.
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "10%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                }}
              >
                {/* <Button variant="contained">Contained</Button> */}
                <FancyButton/>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            container
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image
              src={LandingPicture}
              height="80%"
              width="80%"
              fit="fill"
              duration={0}
            />
          </Grid>
        </Grid>
      </Page>
    </>
  );
}
