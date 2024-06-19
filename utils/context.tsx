import { createContext, useState } from "react";

export const ctx = createContext({ authenticated: false, setAuthenticated: null });

export const AppProvider = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	return <ctx.Provider value={{ authenticated, setAuthenticated }}>{children}</ctx.Provider>;
};
