//[...sign-in] nos sirve para el manejo de rutas anidadas, en este caso se maneja el signin. Podemos entrar a
// /auth/sign-in/test/test y nos va a mostrar el texto SignInPage, entra a este componente. En este caso es posible
// porque existe page.js en auth. En el caso de que no exista podemos usar doble brackets [[...sign-in]]

import React from "react";

const SignInPage = ({ params }) => {
  console.log(params);
  return <h1 className="text-7xl">SignInPage</h1>;
};

export default SignInPage;
