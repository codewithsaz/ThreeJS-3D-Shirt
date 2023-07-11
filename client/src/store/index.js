import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#243d22",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./cws_w.png",
  fullDecal: "./bg_4.jpg",
});

export default state;
