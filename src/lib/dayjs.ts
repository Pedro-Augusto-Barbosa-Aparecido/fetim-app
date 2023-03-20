import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import isToday from "dayjs/plugin/isToday";

dayjs.locale(ptBR);
dayjs.extend(isToday);
