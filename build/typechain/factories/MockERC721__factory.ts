/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockERC721, MockERC721Interface } from "../MockERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "simpleMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokensMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002d5638038062002d568339818101604052810190620000379190620001b1565b82828160009080519060200190620000519291906200008f565b5080600190805190602001906200006a9291906200008f565b5050508060069080519060200190620000859291906200008f565b50505050620003c2565b8280546200009d90620002e7565b90600052602060002090601f016020900481019282620000c157600085556200010d565b82601f10620000dc57805160ff19168380011785556200010d565b828001600101855582156200010d579182015b828111156200010c578251825591602001919060010190620000ef565b5b5090506200011c919062000120565b5090565b5b808211156200013b57600081600090555060010162000121565b5090565b60006200015662000150846200027b565b62000252565b9050828152602081018484840111156200016f57600080fd5b6200017c848285620002b1565b509392505050565b600082601f8301126200019657600080fd5b8151620001a88482602086016200013f565b91505092915050565b600080600060608486031215620001c757600080fd5b600084015167ffffffffffffffff811115620001e257600080fd5b620001f08682870162000184565b935050602084015167ffffffffffffffff8111156200020e57600080fd5b6200021c8682870162000184565b925050604084015167ffffffffffffffff8111156200023a57600080fd5b620002488682870162000184565b9150509250925092565b60006200025e62000271565b90506200026c82826200031d565b919050565b6000604051905090565b600067ffffffffffffffff82111562000299576200029862000382565b5b620002a482620003b1565b9050602081019050919050565b60005b83811015620002d1578082015181840152602081019050620002b4565b83811115620002e1576000848401525b50505050565b600060028204905060018216806200030057607f821691505b6020821081141562000317576200031662000353565b5b50919050565b6200032882620003b1565b810181811067ffffffffffffffff821117156200034a576200034962000382565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61298480620003d26000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80636352211e116100ad578063a144819411610071578063a14481941461033f578063a22cb4651461035b578063b88d4fde14610377578063c87b56dd14610393578063e985e9c5146103c35761012c565b80636352211e1461028757806370a08231146102b75780637d549e99146102e75780638832e6e31461030557806395d89b41146103215761012c565b806340c10f19116100f457806340c10f19146101e757806342842e0e1461020357806342966c681461021f5780634f558e791461023b57806358dd27181461026b5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b60048036038101906101469190611c18565b6103f3565b6040516101589190611fb5565b60405180910390f35b6101696104d5565b6040516101769190611fd0565b60405180910390f35b61019960048036038101906101949190611c6a565b610567565b6040516101a69190611f4e565b60405180910390f35b6101c960048036038101906101c49190611b75565b6105ec565b005b6101e560048036038101906101e09190611a6f565b610704565b005b61020160048036038101906101fc9190611b75565b610764565b005b61021d60048036038101906102189190611a6f565b61078c565b005b61023960048036038101906102349190611c6a565b6107ac565b005b61025560048036038101906102509190611c6a565b6107b8565b6040516102629190611fb5565b60405180910390f35b61028560048036038101906102809190611a0a565b6107ca565b005b6102a1600480360381019061029c9190611c6a565b6107f3565b6040516102ae9190611f4e565b60405180910390f35b6102d160048036038101906102cc9190611a0a565b6108a5565b6040516102de9190612192565b60405180910390f35b6102ef61095d565b6040516102fc9190612192565b60405180910390f35b61031f600480360381019061031a9190611bb1565b610963565b005b610329610973565b6040516103369190611fd0565b60405180910390f35b61035960048036038101906103549190611b75565b610a05565b005b61037560048036038101906103709190611b39565b610a13565b005b610391600480360381019061038c9190611abe565b610a29565b005b6103ad60048036038101906103a89190611c6a565b610a8b565b6040516103ba9190611fd0565b60405180910390f35b6103dd60048036038101906103d89190611a33565b610ac5565b6040516103ea9190611fb5565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104be57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104ce57506104cd82610b59565b5b9050919050565b6060600080546104e4906123b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610510906123b7565b801561055d5780601f106105325761010080835404028352916020019161055d565b820191906000526020600020905b81548152906001019060200180831161054057829003601f168201915b5050505050905090565b600061057282610bc3565b6105b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a890612112565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105f7826107f3565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90612152565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610687610c2f565b73ffffffffffffffffffffffffffffffffffffffff1614806106b657506106b5816106b0610c2f565b610ac5565b5b6106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec90612092565b60405180910390fd5b6106ff8383610c37565b505050565b61071561070f610c2f565b82610cf0565b610754576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074b90612172565b60405180910390fd5b61075f838383610dce565b505050565b61076e828261102a565b6001600760008282546107819190612246565b925050819055505050565b6107a783838360405180602001604052806000815250610a29565b505050565b6107b5816111f8565b50565b60006107c382610bc3565b9050919050565b6001600760008282546107dd9190612246565b925050819055506107f08160075461102a565b50565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561089c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610893906120d2565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610916576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090d906120b2565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60075481565b61096e838383611309565b505050565b606060018054610982906123b7565b80601f01602080910402602001604051908101604052809291908181526020018280546109ae906123b7565b80156109fb5780601f106109d0576101008083540402835291602001916109fb565b820191906000526020600020905b8154815290600101906020018083116109de57829003601f168201915b5050505050905090565b610a0f8282611364565b5050565b610a25610a1e610c2f565b8383611382565b5050565b610a3a610a34610c2f565b83610cf0565b610a79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7090612172565b60405180910390fd5b610a85848484846114ef565b50505050565b6060610a9561154b565b610a9e836115dd565b604051602001610aaf929190611f2a565b6040516020818303038152906040529050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610caa836107f3565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610cfb82610bc3565b610d3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3190612072565b60405180910390fd5b6000610d45836107f3565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610db457508373ffffffffffffffffffffffffffffffffffffffff16610d9c84610567565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dc55750610dc48185610ac5565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dee826107f3565b73ffffffffffffffffffffffffffffffffffffffff1614610e44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3b90612132565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eab90612032565b60405180910390fd5b610ebf83838361178a565b610eca600082610c37565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f1a91906122cd565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f719190612246565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561109a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611091906120f2565b60405180910390fd5b6110a381610bc3565b156110e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110da90612012565b60405180910390fd5b6110ef6000838361178a565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461113f9190612246565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000611203826107f3565b90506112118160008461178a565b61121c600083610c37565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461126c91906122cd565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611313838361102a565b611320600084848461178f565b61135f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135690611ff2565b60405180910390fd5b505050565b61137e828260405180602001604052806000815250611309565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e890612052565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114e29190611fb5565b60405180910390a3505050565b6114fa848484610dce565b6115068484848461178f565b611545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153c90611ff2565b60405180910390fd5b50505050565b60606006805461155a906123b7565b80601f0160208091040260200160405190810160405280929190818152602001828054611586906123b7565b80156115d35780601f106115a8576101008083540402835291602001916115d3565b820191906000526020600020905b8154815290600101906020018083116115b657829003601f168201915b5050505050905090565b60606000821415611625576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611785565b600082905060005b600082146116575780806116409061241a565b915050600a82611650919061229c565b915061162d565b60008167ffffffffffffffff811115611699577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156116cb5781602001600182028036833780820191505090505b5090505b6000851461177e576001826116e491906122cd565b9150600a856116f39190612463565b60306116ff9190612246565b60f81b81838151811061173b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611777919061229c565b94506116cf565b8093505050505b919050565b505050565b60006117b08473ffffffffffffffffffffffffffffffffffffffff16611926565b15611919578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026117d9610c2f565b8786866040518563ffffffff1660e01b81526004016117fb9493929190611f69565b602060405180830381600087803b15801561181557600080fd5b505af192505050801561184657506040513d601f19601f820116820180604052508101906118439190611c41565b60015b6118c9573d8060008114611876576040519150601f19603f3d011682016040523d82523d6000602084013e61187b565b606091505b506000815114156118c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b890611ff2565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061191e565b600190505b949350505050565b600080823b905060008111915050919050565b600061194c611947846121d2565b6121ad565b90508281526020810184848401111561196457600080fd5b61196f848285612375565b509392505050565b600081359050611986816128f2565b92915050565b60008135905061199b81612909565b92915050565b6000813590506119b081612920565b92915050565b6000815190506119c581612920565b92915050565b600082601f8301126119dc57600080fd5b81356119ec848260208601611939565b91505092915050565b600081359050611a0481612937565b92915050565b600060208284031215611a1c57600080fd5b6000611a2a84828501611977565b91505092915050565b60008060408385031215611a4657600080fd5b6000611a5485828601611977565b9250506020611a6585828601611977565b9150509250929050565b600080600060608486031215611a8457600080fd5b6000611a9286828701611977565b9350506020611aa386828701611977565b9250506040611ab4868287016119f5565b9150509250925092565b60008060008060808587031215611ad457600080fd5b6000611ae287828801611977565b9450506020611af387828801611977565b9350506040611b04878288016119f5565b925050606085013567ffffffffffffffff811115611b2157600080fd5b611b2d878288016119cb565b91505092959194509250565b60008060408385031215611b4c57600080fd5b6000611b5a85828601611977565b9250506020611b6b8582860161198c565b9150509250929050565b60008060408385031215611b8857600080fd5b6000611b9685828601611977565b9250506020611ba7858286016119f5565b9150509250929050565b600080600060608486031215611bc657600080fd5b6000611bd486828701611977565b9350506020611be5868287016119f5565b925050604084013567ffffffffffffffff811115611c0257600080fd5b611c0e868287016119cb565b9150509250925092565b600060208284031215611c2a57600080fd5b6000611c38848285016119a1565b91505092915050565b600060208284031215611c5357600080fd5b6000611c61848285016119b6565b91505092915050565b600060208284031215611c7c57600080fd5b6000611c8a848285016119f5565b91505092915050565b611c9c81612301565b82525050565b611cab81612313565b82525050565b6000611cbc82612203565b611cc68185612219565b9350611cd6818560208601612384565b611cdf81612550565b840191505092915050565b6000611cf58261220e565b611cff818561222a565b9350611d0f818560208601612384565b611d1881612550565b840191505092915050565b6000611d2e8261220e565b611d38818561223b565b9350611d48818560208601612384565b80840191505092915050565b6000611d6160328361222a565b9150611d6c82612561565b604082019050919050565b6000611d84601c8361222a565b9150611d8f826125b0565b602082019050919050565b6000611da760248361222a565b9150611db2826125d9565b604082019050919050565b6000611dca60198361222a565b9150611dd582612628565b602082019050919050565b6000611ded602c8361222a565b9150611df882612651565b604082019050919050565b6000611e1060388361222a565b9150611e1b826126a0565b604082019050919050565b6000611e33602a8361222a565b9150611e3e826126ef565b604082019050919050565b6000611e5660298361222a565b9150611e618261273e565b604082019050919050565b6000611e7960208361222a565b9150611e848261278d565b602082019050919050565b6000611e9c602c8361222a565b9150611ea7826127b6565b604082019050919050565b6000611ebf60298361222a565b9150611eca82612805565b604082019050919050565b6000611ee260218361222a565b9150611eed82612854565b604082019050919050565b6000611f0560318361222a565b9150611f10826128a3565b604082019050919050565b611f248161236b565b82525050565b6000611f368285611d23565b9150611f428284611d23565b91508190509392505050565b6000602082019050611f636000830184611c93565b92915050565b6000608082019050611f7e6000830187611c93565b611f8b6020830186611c93565b611f986040830185611f1b565b8181036060830152611faa8184611cb1565b905095945050505050565b6000602082019050611fca6000830184611ca2565b92915050565b60006020820190508181036000830152611fea8184611cea565b905092915050565b6000602082019050818103600083015261200b81611d54565b9050919050565b6000602082019050818103600083015261202b81611d77565b9050919050565b6000602082019050818103600083015261204b81611d9a565b9050919050565b6000602082019050818103600083015261206b81611dbd565b9050919050565b6000602082019050818103600083015261208b81611de0565b9050919050565b600060208201905081810360008301526120ab81611e03565b9050919050565b600060208201905081810360008301526120cb81611e26565b9050919050565b600060208201905081810360008301526120eb81611e49565b9050919050565b6000602082019050818103600083015261210b81611e6c565b9050919050565b6000602082019050818103600083015261212b81611e8f565b9050919050565b6000602082019050818103600083015261214b81611eb2565b9050919050565b6000602082019050818103600083015261216b81611ed5565b9050919050565b6000602082019050818103600083015261218b81611ef8565b9050919050565b60006020820190506121a76000830184611f1b565b92915050565b60006121b76121c8565b90506121c382826123e9565b919050565b6000604051905090565b600067ffffffffffffffff8211156121ed576121ec612521565b5b6121f682612550565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006122518261236b565b915061225c8361236b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561229157612290612494565b5b828201905092915050565b60006122a78261236b565b91506122b28361236b565b9250826122c2576122c16124c3565b5b828204905092915050565b60006122d88261236b565b91506122e38361236b565b9250828210156122f6576122f5612494565b5b828203905092915050565b600061230c8261234b565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156123a2578082015181840152602081019050612387565b838111156123b1576000848401525b50505050565b600060028204905060018216806123cf57607f821691505b602082108114156123e3576123e26124f2565b5b50919050565b6123f282612550565b810181811067ffffffffffffffff8211171561241157612410612521565b5b80604052505050565b60006124258261236b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561245857612457612494565b5b600182019050919050565b600061246e8261236b565b91506124798361236b565b925082612489576124886124c3565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6128fb81612301565b811461290657600080fd5b50565b61291281612313565b811461291d57600080fd5b50565b6129298161231f565b811461293457600080fd5b50565b6129408161236b565b811461294b57600080fd5b5056fea2646970667358221220ac982ad01e2a4bd11b841b80b0866248a747f234d9035fa1a19f8f5eb51594a764736f6c63430008040033";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockERC721";
  }

  deploy(
    name: string,
    symbol: string,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC721> {
    return super.deploy(
      name,
      symbol,
      uri,
      overrides || {}
    ) as Promise<MockERC721>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, uri, overrides || {});
  }
  attach(address: string): MockERC721 {
    return super.attach(address) as MockERC721;
  }
  connect(signer: Signer): MockERC721__factory {
    return super.connect(signer) as MockERC721__factory;
  }
  static readonly contractName: "MockERC721";
  public readonly contractName: "MockERC721";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new utils.Interface(_abi) as MockERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC721 {
    return new Contract(address, _abi, signerOrProvider) as MockERC721;
  }
}