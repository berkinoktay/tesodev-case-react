import React, { FC } from "react"
import Header from "./header"

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout