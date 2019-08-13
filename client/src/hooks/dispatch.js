import { useDispatch, useSelector } from "react-redux";
import ActionConstants from './constants';

export const useData = () => {
  const dispatch = useDispatch();
  const fetchData = () => {
   fetch('/express_backend')
      .then(res => res.json())
      .then(res => dispatch({type: ActionConstants.FETCH_DATA, res}))
      .catch(err => console.log(err));
  }

  const data = useSelector(state => state.data.data);
  return {
    data,
    fetchData,
  }
}