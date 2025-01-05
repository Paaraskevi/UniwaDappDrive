# Decentralized Image Upload and Sharing

This project enables decentralized file upload and sharing on the blockchain using Solidity for the smart contract and React for the front-end interface. Users can securely upload images to IPFS (InterPlanetary File System).


## Features

- **Decentralized Storage:** Files are uploaded to IPFS, ensuring decentralized and immutable storage.
- **Smart Contract:** Utilizes Solidity smart contracts on the Ethereum blockchain for access control and ownership management.

## Technologies Used

- **Solidity:** Smart contract development for ownership and access control.
- **React:** Front-end interface for uploading images and managing access.
- **IPFS:** Decentralized storage protocol for hosting uploaded images.

## Usage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Paaraskevi/UniwaDappDrive.git
   ```
2. Install dependencies for the hardhat:

   ```bash
   # Navigate to the root directory
   cd UniwaDappDrive
   # Install hardhat dependencies
   npm install
   ```
3. Compile the Solidity smart contract to generate the necessary artifacts:
   ```bash
   # Compile Smart Contract
   npx hardhat compile
   ```
4. Deploy the Solidity smart contract to an Ethereum testnet or local development environment.
   ```bash
   # Deploy Smart Contract
   npx hardhat run scripts/deploy.js --network <network-name>
   ```
5. Install React Frontend Dependencies:
   ```bash
   # Navigate to the client directory
   cd client 
   # Install React dependencies
   npm install
   ```
6. Run the react application:
   ```bash
   # Start React Application
   npm start
   ```
7. Install React Backend Dependencies:
   ```bash
   # Navigate to the backend directory
   cd backend 
   # Install React dependencies
   npm install
   ```
8. Run the server application:
   ```bash
   # Start Application
   npm start
   ```
   
### Configuration

1. Set up environment variables:

   -IPFS API Keys: You will need to obtain API keys from Pinata (or any          other IPFS provider) to interact with IPFS.
   -Pinata Configuration: Update the FileUpload.js component in your React       application with your Pinata API keys to enable image uploads. 
### Usage

Once the setup and configuration are complete, follow these steps to utilize the decentralized image upload and sharing system:

1. **Install Metamask:**
   - To interact with the Ethereum network, you must have Metamask installed and configured in your browser. Metamask acts as your wallet and allows your app to interact with the blockchain.

2. **Update Contract Address:**
   - After smart contract deployment, make sure to update the contract address in `App.js` within the React application.

3. **Upload File before "Get Data":**
   -Before clicking on the "Get Data" button, ensure you've uploaded an file to IPFS using the frontend. This is important as the system needs the IPFS hash to retrieve the file.


