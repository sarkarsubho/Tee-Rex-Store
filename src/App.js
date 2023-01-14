import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/appContext";
import { GetDataError, GetDataRequest, GetDataSuccess } from "./Context/context.types";
import { ItemCart } from "./Components/ItemCart";

function App() {
  const [state, dispatch] = useContext(AppContext);

  useEffect( () => {
    dispatch({ type: GetDataRequest })
     fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => {dispatch({type:GetDataSuccess,payload:res})})
      .catch((er) =>{ console.log(er); dispatch({ type: GetDataError })});
  }, [dispatch]);
  console.log(state);
  return (
    <div className="App">
      <h1>Welcome Home</h1>
      {
        state.data.map((e)=>{
          return <ItemCart key={e.id}data={e}></ItemCart>
        })
      }
     
    </div>
  );
}

export default App;
