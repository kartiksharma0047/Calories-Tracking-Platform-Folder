import { useTransform, MotionValue } from "framer-motion";

interface RevealOptions {
  direction?: "left" | "right";
  distance?: number;
  start?: number;
  end?: number;
}

export const useScrollReveal = (
  scroll: MotionValue<number>,
  {
    direction = "right",
    distance = 180,
    start = 0,
    end = 300,
  }: RevealOptions = {}
) => {

  const from = direction === "right" ? distance : -distance;

  const x = useTransform(scroll, [start, end], [from, 0], { clamp: true });
  const opacity = useTransform(scroll, [start, end], [0, 1], { clamp: true });
  const blur = useTransform(scroll, [start, end], ["8px", "0px"], { clamp: true });

  return { x, opacity, blur };
};