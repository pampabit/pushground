import React, { useState, useEffect } from 'react'
import Auth from '../api/Auth'

const initialContext = {
  user: null,
  token: Auth.token()
}

const AppContext = React.createContext([
  initialContext,
  () => {}
])

const AppProvider = (props) => {
  const [state, setState] = useState(initialContext);

  useEffect(() => {

    let data = Auth.me()

    data ? setState({
      ...state,
      user: JSON.parse(data),
    }) : setState({
      ...state,
    })

  }, [])

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
