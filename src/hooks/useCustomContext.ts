import { ServerContext, ServerContextJSONValue, useContext } from "react"

export const useCustomContext = (context: ServerContext<ServerContextJSONValue>) => {
  const contxt = useContext(context)

  return contxt
}