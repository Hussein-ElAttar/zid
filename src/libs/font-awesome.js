import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  register: (Vue) => {
    Vue.component("font-awesome-icon", FontAwesomeIcon);

    library.add([
      faArrowUp,
      faComments,
      faLinkedinIn,
      faInstagram,
      faYoutube,
      faTwitter,
    ]);
  },
};
