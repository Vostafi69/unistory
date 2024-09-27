declare global {
  declare type RootStateType = import("./app/store/store").RootState;
  declare type AppDispatchType = import("./app/store/store").AppDispatch;
}

export {};
