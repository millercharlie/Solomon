// CSS modules or plain CSS
declare module "*.css";

// SVG imports
declare module "*.svg" {
  const content: string;
  export default content;
}

// Images
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
