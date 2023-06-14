import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserStateType } from "./userReducer";


export type StateType = {
  user: UserStateType

}

export default configureStore({
  reducer: {
    user: userReducer

    // 分模块 ， 扩展：问卷信息
  }
});
