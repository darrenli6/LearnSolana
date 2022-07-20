const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js")

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey

const getWalletBalance = async() => {
    try {
        const connection = new Connection("https://hk32.rpcpool.com/", 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`Wallet balance is ${walletBalance}`)
    } catch(err) {
        console.error(err)
    }
}
// export http_proxy=http://127.0.0.1:1087
const airDropSol = async() => {
    try {
        const connection = new Connection("https://hk32.rpcpool.com/", 'confirmed')
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)
        const latestBlockHash = await connection.getLatestBlockhash();
        await connection.confirmTransaction({
          blockhash: latestBlockHash.blockhash,
          lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          signature: fromAirDropSignature,
        });
    } catch(err) {
        console.log(err)
    }
}




const main = async() => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
  
}
main()