import Moment from "moment";
import _ from "lodash";

export const date_to_local = (date, format = null) => {
  if (!date) {
    return "TBD";
  }
  if (!Moment(date).isValid()) {
    return "TBD";
  }

  return !_.isNull(format)
    ? Moment.utc(date).local().format(format) || ""
    : Moment.utc(date).local().format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";
};
