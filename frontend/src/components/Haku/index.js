import React, { useContext, useState } from "react";
import { Context } from "../../context";


function Haku() {
   const { search } = useContext(Context);

  const initialState = {
    userInput: {
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
      userInput: {
        ...state.userInput,
        [e.target.name]: e.target.value,
      },
    }) ;
        // console.warn(state.userInput);

  };

  // On Submit Login From
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await search(state.userInput);
    console.log(data)


    if (data.success) {
      setState({
        ...initialState,
        successMsg: "-",
        haku: "Ei yhteyttä.",
      });
   
    } else {
      setState({
        ...initialState,
        successMsg: "",
        haku: data
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
              value={state.userInput.haku}
              onChange={onChangeValue}
            />
        <button className="btn-primary" type="submit">Haku</button>
      </form>
      <div>


      </div>
    </>
  );
};

export default Haku;
