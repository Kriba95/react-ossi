import React, { useContext, useState } from "react";
import { Context } from "../../context";


function Haku() {
   const { search } = useContext(Context);

  const initialState = {
    userInfo: {
      haku: "",
    },
    errorMsg: "",
    successMsg: "",
  };

  const [state, setState] = useState(initialState);

  // On change input value (haku & password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    }) ;
        console.warn(state.userInfo);

  };

  // On Submit Login From
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await search(state.userInfo);
    console.log(data)
    if (data.success) {
      setState({
        ...initialState,
        successMsg: "-",
      });
   
    } else {
      setState({
        ...initialState,
        successMsg: "",
        haku: data.message,
      });
    }
  };



  return (
    <>
      <form onSubmit={submitForm} >
            <input
              name="haku"
              type="haku"
              required
              placeholder="Hae"
              value={state.userInfo.haku}
              onChange={onChangeValue}
            />
        <button type="submit">Haku</button>
      </form>
    </>
  );
};

export default Haku;
