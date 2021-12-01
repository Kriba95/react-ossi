import React, { createContext, Component } from "react";
import axios from "axios";

export const Context = createContext();


// Define the base URL
const Axios = axios.create({
  baseURL: "http://localhost:5005",
});

class ContextProvider extends Component {
  // constructor() {
  //   super();
  //   this.opettajanTila();

  // }

  // Root State
  state = {
    showLogin: true,
    isAuth: false,
    oTila: "",
  };


  ///////////////////////////////////////////////////77

  search = async (user) => {
    // Sending the user Login request
    const haku = await Axios.post("api/haku", {
      haku: user.haku      
    });
    // console.log(haku.data)
    return haku.data;
  };

  opettajanTila = async () => {
    // Sending the user Login request
    const oTila = await Axios.get("api/opettajantila");
    // console.log(oTila)
    // console.log(haku.data)
    if (oTila) {
      console.log(oTila);
      this.setState({
        ...this.state,
        oTila: oTila.data
    
      });
    }
    return oTila.data;

  };



  ////////////////////////////////////////////////////77

  

  // Toggle between Login & Signup page
  toggleNav = () => {
    const showLogin = !this.state.showLogin;
    this.setState({
      ...this.state,
      showLogin,
    });
  };

  // On Click the Log out button
  logoutUser = () => {
    localStorage.removeItem("loginToken");
    this.setState({
      ...this.state,
      isAuth: false,
    });
  };

  // GET Express

  getSearch = async (user) => {
    // Sending the user Login request
      // Fetching the user information
      const { data } = await Axios.get("api/projekts");
      console.log(data)

      // If user information is successfully received
      if (data.success && data.user) {
        this.setState({
          ...this.state,
      
        });
      }
  };


  ///
  postSearch = async (name) => {
    // Sending the user registration request
    const postSearch = await Axios.post("api/projekts", {
      name: name,
      email: "user.email",
      password: "user.password",
    });
    console.log(postSearch.data);

    return postSearch.data;
  };










  registerUser = async (user) => {
    // Sending the user registration request
    const register = await Axios.post("register.php", {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return register.data;
  };

  search = async (user) => {
    // Sending the user Login request
    const haku = await Axios.post("api/haku", {
      haku: user.haku      
    });
    // console.log(haku.data)
    return haku.data;
  };

  // opettajanTila = async (user) => {
  //   // Sending the user Login request
  //   const haku = await Axios.post("api/haku", {
  //     haku: user.haku      
  //   });
  //   // console.log(haku.data)
  //   return haku.data;
  // };







  // Checking user logged in or not
  isLoggedIn = async () => {
    const loginToken = localStorage.getItem("loginToken");

    // If inside the local-storage has the JWT token
    if (loginToken) {
      //Adding JWT token to axios default header
      Axios.defaults.headers.common["Authorization"] = "bearer " + loginToken;

      // Fetching the user information
      const { data } = await Axios.get("user-info.phps");

      // If user information is successfully received
      if (data.success && data.user) {
        this.setState({
          ...this.state,
          isAuth: true,
          theUser: data.user,
        });
      }
    }
  };

  render() {
    const contextValue = {
      rootState: this.state,
      toggleNav: this.toggleNav,
      isLoggedIn: this.isLoggedIn,
      registerUser: this.registerUser,
      loginUser: this.loginUser,
      search: this.search,
      opettajanTila: this.opettajanTila,

      logoutUser: this.logoutUser,
    };
    return (
      <Context.Provider value={contextValue}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
