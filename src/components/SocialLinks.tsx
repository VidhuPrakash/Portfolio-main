import { cn } from "@/lib/utils";
import {
  Facebook,
  Linkedin,
  Twitter,
  ExternalLink,
  Instagram,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/vidhu.pr/",
      icon: <Facebook />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/vidhu.prakashhh/",
      icon: <Instagram />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/fullstackdev-vidhuprakashtp/",
      icon: <Linkedin />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
