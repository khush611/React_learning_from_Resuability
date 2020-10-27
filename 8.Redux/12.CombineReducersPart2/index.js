import store from "./redux"; //./redux/index
import { changeCount } from "./redux/count";

store.dispatch(changeCount(42));
