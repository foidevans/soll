import { ethers } from "ethers"

export const getContract = (
  address: string,
  abi: ethers.InterfaceAbi,
  signerOrProvider: ethers.Signer | ethers.Provider,
) => {
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getProvider = () => {
  if (typeof window !== "undefined" && (window as any).ethereum) {
    return new ethers.BrowserProvider((window as any).ethereum)
  }
  return null
}

export const getSigner = async () => {
  const provider = getProvider()
  if (provider) {
    return await provider.getSigner()
  }
  return null
}
