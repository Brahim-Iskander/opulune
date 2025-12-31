import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRouter } from "next/navigation";

export default function footer() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#b58c4e",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginTop: "50px",
          marginBottom: "0px",
        }}
      >
        <Grid size={12}>
          <Grid size={12}>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontFamily: "var(--font-playfair)",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              À propos de Opulune
            </Typography>
          </Grid>
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button sx={{ color: "#ffffffba" }} onClick={() => {
                  router.push("/pages/search");
                }} >Recherche</Button>
              <Button
                sx={{ color: "#ffffffba" }}
                onClick={() => {
                  router.push("/pages/mentions-legales");
                }}
              >
                mentions légales
              </Button>
              <Button
                sx={{ color: "#ffffffba" }}
                onClick={() => {
                  router.push("/pages/cgv-opulune");
                }}
              >
                conditions Générales de Vente{" "}
              </Button>
              <Button
                sx={{ color: "#ffffffba" }}
                onClick={() => {
                  router.push("/pages/politique-de-retour");
                }}
              >
                politique de retour
              </Button>
              <Button
                sx={{ color: "#ffffffba" }}
                onClick={() => {
                  router.push("/pages/politique-de-confidentialite");
                }}
              >
                politique de confidentilité
              </Button>
              <Button
                sx={{ color: "#ffffffba" }}
                onClick={() => {
                  router.push("/pages/faq");
                }}
              >
                FAQ
              </Button>
            </div>
          </Grid>
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              paddingBottom: "30px",
              borderBottom: "solid 1px #f4eded9b",
            }}
          >
            <div>
              <Button
                sx={{
                  color: "#fffffff5",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(90deg, #f58529, #dd2a7b, #8134af, #515bd4)",
                  width: "150px",
                  textTransform: "none",
                }}
              >
                Follow Us ᥫ᭡
              </Button>
            </div>
            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                href="https://www.facebook.com/profile.php?id=61583061987333"
                target="_blanc"
                aria-label="menu"
                sx={{ ml: 5 }}
              >
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                href="https://www.instagram.com/opu_lune?igsh=MXF4MjYwY2dqNWRzYQ=="
                target="_blanc"
                sx={{ mr: 2 }}
              >
                <InstagramIcon sx={{ color: "white" }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#fffffff5" }}>
            © {new Date().getFullYear()} Opulune. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
