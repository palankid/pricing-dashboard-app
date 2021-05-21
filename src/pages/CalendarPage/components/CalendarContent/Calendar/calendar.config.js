import moment from "moment";

export const locale = {
  lang: {
    locale: "en",
    dayFormat: moment.updateLocale("en", {
      weekdaysMin: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    }),
  },
};
