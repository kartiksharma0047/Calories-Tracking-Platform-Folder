import { useEffect } from "react";
import blackOnlyCalsLogo from "../Assets/logos/OnlyCals-Logo_black.svg";
import whiteOnlyCalsLogo from "../Assets/logos/OnlyCals-Logo_black.svg";

export default function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
export const headerLogo={
  WHITE_LOGO:whiteOnlyCalsLogo,
  BLACK_LOGO:blackOnlyCalsLogo
}