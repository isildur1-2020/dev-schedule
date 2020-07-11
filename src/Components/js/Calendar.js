import moment from "moment";

export default class Calendar {
  generateDates(monthToShow = moment()) {
    if (!moment.isMoment(monthToShow)) {
      return null;
    }
    let dateStart = moment(monthToShow).startOf("month");
    let dateEnd = moment(monthToShow).endOf("month");
    let cells = [];
    // OBTENIENDO EL PRIMER DÍA A MOSTRAR EN CALENDARIO
    while (dateStart.day() !== 1) {
      dateStart.subtract(1, "day");
    }
    // OBTENIENDO EL ÚLTIMO DÍA A MOSTRAR EN CALENDARIO
    while (dateEnd.day() !== 0) {
      dateEnd.add(1, "day");
    }
    // OBTENER TODOS LOS DÍAS DEL MES A MOSTRAR
    do {
      cells.push({
        date: moment(dateStart),
        isInCurrentMonth: dateStart.month() === monthToShow.month(),
        isSelect: false
      });
      dateStart.add(1, "day");
    } while (dateStart.isSameOrBefore(dateEnd));

    return cells;
  }
}
