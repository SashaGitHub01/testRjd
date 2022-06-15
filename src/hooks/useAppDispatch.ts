import { useDispatch } from "react-redux";
import { AppDispatch, TypedDispatch } from "../store";


export const useAppDispatch = () => useDispatch<TypedDispatch>()