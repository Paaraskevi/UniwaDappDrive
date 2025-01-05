import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./Home.css";


function Home() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        setContract(contract);
        setProvider(provider);
        // console.log(contract)
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <>
      <div container="Home">
        {/* Navbar */}
        <header>
          <div class="container">

            {<nav>
              <ul>
                <li><a href="/Home.js">Home</a></li>
                <li><a href="About.js">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>}
          </div>
        </header>

        {/* Container */}
        <div class="container">
         
            <div class="col-sm-offset-1 col-sm-10" id="one">
            <div class="row it">
              <h1>DApp Uniwa</h1>
              <p>
                Please upload documents only in 'pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png', 'heic' & 'text' format.
              </p>
              <div row="row">
                <div class="col-sm-offset-4 col-sm-4 form-group">
                  <h3>My Documents</h3>
                </div>
              </div>
              <div id="uploader">
                <div class="row uploadDoc">
                  <div class="col-sm-3">
                    <div class="docErr">Please upload a valid file</div>
                    <div class="fileUpload btn btn-orange">
                      <p class="account-info">
                        Account: {account ? account : "Not connected"}
                      </p>
                      <FileUpload
                        account={account}
                        provider={provider}
                        contract={contract}
                      />
                    </div>
                  </div>
                  <Display contract={contract} account={account} />
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer class="site-footer">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12"> 
                  <h6>About</h6>
                  <p class="text-justify"><i>A decentralized application (DAPP)</i>  that leverages blockchain technology to provide secure, transparent, and tamper-proof solutions without relying on central authorities. Built for enhanced privacy and user control, it offers seamless peer-to-peer interactions, empowering users with full ownership of their data and assets. Whether it’s for finance, governance, or digital identity, our DAPP ensures trustless, decentralized operations for a wide range of use cases.</p>
                </div> 

                <div class="col-sm-12 col-md-12 d-flex justify-content-between align-items-center">
                  <div class="quick-links">
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                      <li><a href="https://ice.uniwa.gr/">Uniwa</a></li>
                    </ul>
                  </div>

                  <ul className="social-icons d-flex" id = "social">
                    <br />
                    <div align="center" class="socialbtns">
                      <ul>
                        <li><a href="#" class="fa fa-lg fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-lg fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-lg fa-github"></a></li>
                        <li><a href="#" class="fa fa-lg fa-linkedin"></a></li>
                        <li><a href="#" class="fa fa-lg fa-instagram"></a></li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <hr />
              </div> 
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-sm-6 col-xs-12">
                  <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by <a href="https://github.com/Paaraskevi/UniwaDappDrive">GitHub - Asprou Paraskevi </a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Home;
