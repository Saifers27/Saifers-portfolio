declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.gltf" {
  const src: string;
  export default src;
}

interface Window {
  EmailJS: any;
}
