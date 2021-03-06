import React from "react"

import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
