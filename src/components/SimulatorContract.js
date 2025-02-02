import {
    useContract
} from '@starknet-react/core'

import SimulatorAbi from '../../abi/simulator_abi.json'
// export const SIMULATOR_ADDR = '0x06fea4edba44e89743f728a0c03bed6bf3cfeb99a43aa6d57c64dffc4d0a2538' // S0
export const SIMULATOR_ADDR = '0x079720113ecedfe20dc470ba4fb6a53c508491ac06768cff255762b0c531f314' // S1

export function useSimulatorContract () {
    return useContract ({ abi: SimulatorAbi, address: SIMULATOR_ADDR })
}
