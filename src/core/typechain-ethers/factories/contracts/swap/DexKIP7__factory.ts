/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DexKIP7,
  DexKIP7Interface,
} from "../../../contracts/swap/DexKIP7";

const _abi = [
  {
    inputs: [],
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
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
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060408051808201825260078152660444558737761760cc1b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f6a6f5684613219496cdd2a0ab3d28e0ea8c188284d27e24bf1d5bbe7fd5091e5818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060820152466080808301919091523060a0808401919091528451808403909101815260c0909201909352805191012090819052610f0d610103600039600081816101f901526105ce0152610f0d6000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806342842e0e116100a2578063a9059cbb11610071578063a9059cbb146102a8578063b88d4fde146102bb578063d505accf146102ce578063dd62ed3e146102e1578063eb7955491461030c57600080fd5b806342842e0e1461023057806370a08231146102435780637ecebe001461026357806395d89b411461028357600080fd5b806323b872dd116100e957806323b872dd146101a057806330adf81f146101b3578063313ce567146101da5780633644e515146101f4578063423f6cef1461021b57600080fd5b806301ffc9a71461011b57806306fdde0314610143578063095ea7b31461017657806318160ddd14610189575b600080fd5b61012e610129366004610abd565b61031f565b60405190151581526020015b60405180910390f35b610169604051806040016040528060078152602001660444558737761760cc1b81525081565b60405161013a9190610b2e565b61012e610184366004610b5d565b610371565b61019260005481565b60405190815260200161013a565b61012e6101ae366004610b87565b610387565b6101927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6101e2601281565b60405160ff909116815260200161013a565b6101927f000000000000000000000000000000000000000000000000000000000000000081565b61022e610229366004610b5d565b610448565b005b61022e61023e366004610b87565b610466565b610192610251366004610bc3565b60016020526000908152604090205481565b610192610271366004610bc3565b60036020526000908152604090205481565b6101696040518060400160405280600681526020016504b6c61794c560d41b81525081565b61012e6102b6366004610b5d565b610486565b61022e6102c9366004610c81565b610493565b61022e6102dc366004610ce9565b610573565b6101926102ef366004610d5c565b600260209081526000928352604080842090915290825290205481565b61022e61031a366004610d8f565b610795565b60006001600160e01b03198216636578737160e01b148061035057506001600160e01b0319821663a219a02560e01b145b8061036b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600061037e3384846107c8565b50600192915050565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019811461043257828110156104095760405162461bcd60e51b815260206004820152601c60248201527f4b4950373a20696e73756666696369656e7420616c6c6f77616e63650000000060448201526064015b60405180910390fd5b6001600160a01b0385166000908152600260209081526040808320338452909152902083820390555b61043d858585610829565b506001949350505050565b610462828260405180602001604052806000815250610795565b5050565b61048183838360405180602001604052806000815250610493565b505050565b600061037e338484610829565b6001600160a01b0384166000908152600260209081526040808320338452909152902054600019811461053957828110156105105760405162461bcd60e51b815260206004820152601c60248201527f4b4950373a20696e73756666696369656e7420616c6c6f77616e6365000000006044820152606401610400565b6001600160a01b0385166000908152600260209081526040808320338452909152902083820390555b610544858585610829565b610550858585856109f4565b61056c5760405162461bcd60e51b815260040161040090610de6565b5050505050565b428410156105b25760405162461bcd60e51b815260206004820152600c60248201526b1111560e881156141254915160a21b6044820152606401610400565b6001600160a01b038716600090815260036020526040812080547f0000000000000000000000000000000000000000000000000000000000000000917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b918761062083610e4a565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161069992919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015610704573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061073a5750886001600160a01b0316816001600160a01b0316145b61077f5760405162461bcd60e51b81526020600482015260166024820152754445583a20494e56414c49445f5349474e415455524560501b6044820152606401610400565b61078a8989896107c8565b505050505050505050565b6107a0338484610829565b6107ac338484846109f4565b6104815760405162461bcd60e51b815260040161040090610de6565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661088b5760405162461bcd60e51b8152602060048201526024808201527f4b4950373a207472616e736665722066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610400565b6001600160a01b0382166108ec5760405162461bcd60e51b815260206004820152602260248201527f4b4950373a207472616e7366657220746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610400565b6001600160a01b038316600090815260016020526040902054818110156109635760405162461bcd60e51b815260206004820152602560248201527f4b4950373a207472616e7366657220616d6f756e7420657863656564732062616044820152646c616e636560d81b6064820152608401610400565b6001600160a01b0380851660009081526001602052604080822085850390559185168152908120805484929061099a908490610e65565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109e691815260200190565b60405180910390a350505050565b60006001600160a01b0384163b610a0d57506001610a9c565b604051634e8c461160e11b81526000906001600160a01b03861690639d188c2290610a429033908a9089908990600401610e7d565b6020604051808303816000875af1158015610a61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a859190610eba565b6001600160e01b031916634e8c461160e11b149150505b949350505050565b6001600160e01b031981168114610aba57600080fd5b50565b600060208284031215610acf57600080fd5b8135610ada81610aa4565b9392505050565b6000815180845260005b81811015610b0757602081850181015186830182015201610aeb565b81811115610b19576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610ada6020830184610ae1565b80356001600160a01b0381168114610b5857600080fd5b919050565b60008060408385031215610b7057600080fd5b610b7983610b41565b946020939093013593505050565b600080600060608486031215610b9c57600080fd5b610ba584610b41565b9250610bb360208501610b41565b9150604084013590509250925092565b600060208284031215610bd557600080fd5b610ada82610b41565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610c0557600080fd5b813567ffffffffffffffff80821115610c2057610c20610bde565b604051601f8301601f19908116603f01168101908282118183101715610c4857610c48610bde565b81604052838152866020858801011115610c6157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610c9757600080fd5b610ca085610b41565b9350610cae60208601610b41565b925060408501359150606085013567ffffffffffffffff811115610cd157600080fd5b610cdd87828801610bf4565b91505092959194509250565b600080600080600080600060e0888a031215610d0457600080fd5b610d0d88610b41565b9650610d1b60208901610b41565b95506040880135945060608801359350608088013560ff81168114610d3f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610d6f57600080fd5b610d7883610b41565b9150610d8660208401610b41565b90509250929050565b600080600060608486031215610da457600080fd5b610dad84610b41565b925060208401359150604084013567ffffffffffffffff811115610dd057600080fd5b610ddc86828701610bf4565b9150509250925092565b6020808252602e908201527f4b4950373a207472616e7366657220746f206e6f6e204b49503752656365697660408201526d32b91034b6b83632b6b2b73a32b960911b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610e5e57610e5e610e34565b5060010190565b60008219821115610e7857610e78610e34565b500190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610eb090830184610ae1565b9695505050505050565b600060208284031215610ecc57600080fd5b8151610ada81610aa456fea2646970667358221220c7ad6324f7dd318b69a581121ac4b1167621a5b423178f1041717431520b509a64736f6c634300080c0033";

type DexKIP7ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DexKIP7ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DexKIP7__factory extends ContractFactory {
  constructor(...args: DexKIP7ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DexKIP7> {
    return super.deploy(overrides || {}) as Promise<DexKIP7>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DexKIP7 {
    return super.attach(address) as DexKIP7;
  }
  override connect(signer: Signer): DexKIP7__factory {
    return super.connect(signer) as DexKIP7__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DexKIP7Interface {
    return new utils.Interface(_abi) as DexKIP7Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DexKIP7 {
    return new Contract(address, _abi, signerOrProvider) as DexKIP7;
  }
}
