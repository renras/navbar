import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const links = [
  {
    id: 0,
    title: "home",
  },
  {
    id: 1,
    title: "about",
  },
  {
    id: 2,
    title: "projects",
  },
  {
    id: 3,
    title: "contact",
  },
  {
    id: 4,
    title: "profile",
  },
];

export const icons = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
];
