import clsx, { ClassValue } from "clsx";

type CurveProps = {
  className?: ClassValue;
  size: "sm" | "lg";
};

const curveProperties = {
  sm: {
    viewBox: "0 0 240 40",
    path: "M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z",
  },
  lg: {
    viewBox: "0 0 373 72",
    path: "M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z",
  },
};

export default function Curve({ className, size }: CurveProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={curveProperties[size].viewBox}
      className={clsx(className)}
      preserveAspectRatio="none"
    >
      <path d={curveProperties[size].path} />
    </svg>
  );
}
