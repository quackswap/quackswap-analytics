import {JsonRpcProvider} from '@ethersproject/providers'

const provider = new JsonRpcProvider(process.env.REACT_APP_NETWORK_URL)

export const getProvider = () => provider
