
- 版本号
darren@darrendeMBP solana % solana --version
solana-cli 1.9.20 (src:devbuild; feat:2945818700)


cargo install spl-token-cli


solana-keygen new --force 

- 秘钥配置文件
```
 /Users/darren/.config/solana/id.json

```


- 查询公钥
- 
solana-keygen pubkey 

- 查询余额
solana balance --url  https://hk32.rpcpool.com/

solana balance --url  devnet
- 网页查询余额

https://explorer.solana.com/


可以切换网络

solana airdrop 2 HwhmQLK4QrEW3Upy6Ndg9chZG6PXR732fssgw418fgWM --url https://hk32.rpcpool.com/


# mint your token 

- 如果不存在spl-token，下载

cargo install spl-token-cli




- 创建token

spl-token create-token --url https://hk32.rpcpool.com/

spl-token create-token -u devnet   

```
spl-token create-token -u devnet                  
Creating token 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV

Signature: 5PrxEG7rtpUetqSvDzzZwEbM2x7tTwz6AbH6HZxY9G4riKAdPGyP35uo7DEET19H7UFjbj44G11FjXw35xZHuZf5

```

- 创造账号, token的账户

spl-token create-account 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV  -u devnet   

```
spl-token create-account 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV  -u devnet  
Creating account 8e3iDZD8hM8SPmNsFjJGudSpbATqhaC9qXVLKQuKhQWS

Signature: 2cAdzDPxXYqnazPCh5y1ZnZAMY1rZVKv9w6upkdu29AyNsBgwSxA4KAD6hTqQjNrPvQ8Ctass6Y2mpH6XUaMzjRi

```

- 查询某账户的token数量

spl-token balance 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV -u devnet  


`0`

- 挖token 

spl-token mint 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV  1000 -u devnet  

```
spl-token mint 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV  1000 -u devnet  
Minting 1000 tokens
  Token: 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV
  Recipient: 8e3iDZD8hM8SPmNsFjJGudSpbATqhaC9qXVLKQuKhQWS

Signature: 5RX2shcdMcnzQYrew7xCvvn2rtMUnpWsxsNAyhzQ6qvuxBKQv2EHUoqgb11rgbJrv8UDAn6ngfeFEPyjZHCXpmMr

```


# Limit the total supply of your token and burn your token

spl-token supply 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV   -u devnet  

```
1000
```

- 禁止mint

spl-token authorize 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV  mint --disable  -u devnet  


```
Updating 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV
  Current mint authority: HwhmQLK4QrEW3Upy6Ndg9chZG6PXR732fssgw418fgWM
  New mint authority: disabled

Signature: 5NHV4wHoDeyVFzqbozEqTxdb8LZN4bkZscY32qYkZRRdsJea6Lghtb5u6xKPvcdL9M6pd2gvjYWq3mjfMzAPx3ko

```

- 如果再次mint，会报错

spl-token mint 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV  1000 -u devnet 
```
 
Minting 1000 tokens
  Token: 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV
  Recipient: 8e3iDZD8hM8SPmNsFjJGudSpbATqhaC9qXVLKQuKhQWS
RPC response error -32002: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x5 [5 log messages]
```

- burn 

spl-token burn 8e3iDZD8hM8SPmNsFjJGudSpbATqhaC9qXVLKQuKhQWS 100   -u devnet 

```
 
Burn 100 tokens
  Source: 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV
Account could not be parsed as token account: pubkey=5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV
darren@darrendeMBP airdrop-project % 
spl-token burn 8e3iDZD8hM8SPmNsFjJGudSpbATqhaC9qXVLKQuKhQWS 100   -u devnet
Burn 100 tokens
  Source: 8e3iDZD8hM8SPmNsFjJGudSpbATqhaC9qXVLKQuKhQWS

Signature: qAb889GDvdmt6mBqTwVxsXpKpsDq8MUY5LTpYjkK3SKMDU9m7kkWr49MKkJK7qLU4rweoSpFUjNJPFaiCeZcvHM
```
- 测试 


```
darren@darrendeMBP airdrop-project % spl-token balance 5MSiTuMyATfsh56DVS6mLkqoJBkjU77q3j8Kqx9kNqV -u devnet 
900
```

