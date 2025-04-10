const express = require("express");
const router = express.Router();

router.post("/vc", (req, res) => {
  const record = req.body;

  const vc = {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential", "TransportationRecord"],
    "issuer": "https://transport.gov.tw",
    "credentialSubject": {
      id: record.userDid,
      transportMode: record.mode,
      stationStart: record.start,
      stationEnd: record.end,
      timestamp: record.timestamp,
    },
    proof: {
      type: "MockSignature2025",
      created: new Date().toISOString(),
      verificationMethod: "https://transport.gov.tw/keys/1",
      jws: "mock-jws-token",
    },
  };

  res.json(vc);
});

module.exports = router;
