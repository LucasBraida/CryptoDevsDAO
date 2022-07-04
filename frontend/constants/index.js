import {
    CRYPTODEVS_NFT_CONTRACT_ADDRESS
} from './nftContractAddress'
import {
    CRYPTODEVS_DAO_CONTRACT_ADDRESS
} from './cryptoDevsDAOAddress'
import CryptoDevs from './CryptoDevs.json'
import CryptoDevsDAO from './CryptoDevsDAO.json'

const CRYPTODEVS_NFT_ABI = CryptoDevs.abi
const CRYPTODEVS_DAO_ABI = CryptoDevsDAO.abi

export {
    CRYPTODEVS_DAO_CONTRACT_ADDRESS,
    CRYPTODEVS_DAO_ABI,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    CRYPTODEVS_NFT_ABI,
}
