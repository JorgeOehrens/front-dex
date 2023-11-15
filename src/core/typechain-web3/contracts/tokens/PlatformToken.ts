/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "../../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type DelegateChanged = ContractEventLog<{
  delegator: string;
  fromDelegate: string;
  toDelegate: string;
  0: string;
  1: string;
  2: string;
}>;
export type DelegateVotesChanged = ContractEventLog<{
  delegate: string;
  previousBalance: string;
  newBalance: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleAdminChanged = ContractEventLog<{
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleGranted = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleRevoked = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface PlatformToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): PlatformToken;
  clone(): PlatformToken;
  methods: {
    BURNER_ROLE(): NonPayableTransactionObject<string>;

    DEFAULT_ADMIN_ROLE(): NonPayableTransactionObject<string>;

    DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>;

    MINTER_ROLE(): NonPayableTransactionObject<string>;

    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    burn(
      account: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    checkpoints(
      account: string,
      pos: number | string | BN
    ): NonPayableTransactionObject<[string, string]>;

    decimals(): NonPayableTransactionObject<string>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    delegate(delegatee: string): NonPayableTransactionObject<void>;

    delegateBySig(
      delegatee: string,
      nonce: number | string | BN,
      expiry: number | string | BN,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    delegates(account: string): NonPayableTransactionObject<string>;

    getChainId(): NonPayableTransactionObject<string>;

    getPastTotalSupply(
      blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    getPastVotes(
      account: string,
      blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    getRoleAdmin(role: string | number[]): NonPayableTransactionObject<string>;

    getVotes(account: string): NonPayableTransactionObject<string>;

    grantRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    hasRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    mint(
      account: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    name(): NonPayableTransactionObject<string>;

    nonces(owner: string): NonPayableTransactionObject<string>;

    numCheckpoints(account: string): NonPayableTransactionObject<string>;

    permit(
      owner: string,
      spender: string,
      value: number | string | BN,
      deadline: number | string | BN,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    renounceRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    revokeRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    "safeTransfer(address,uint256)"(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    "safeTransfer(address,uint256,bytes)"(
      recipient: string,
      amount: number | string | BN,
      _data: string | number[]
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      sender: string,
      recipient: string,
      amount: number | string | BN,
      _data: string | number[]
    ): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      to: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    DelegateChanged(cb?: Callback<DelegateChanged>): EventEmitter;
    DelegateChanged(
      options?: EventOptions,
      cb?: Callback<DelegateChanged>
    ): EventEmitter;

    DelegateVotesChanged(cb?: Callback<DelegateVotesChanged>): EventEmitter;
    DelegateVotesChanged(
      options?: EventOptions,
      cb?: Callback<DelegateVotesChanged>
    ): EventEmitter;

    RoleAdminChanged(cb?: Callback<RoleAdminChanged>): EventEmitter;
    RoleAdminChanged(
      options?: EventOptions,
      cb?: Callback<RoleAdminChanged>
    ): EventEmitter;

    RoleGranted(cb?: Callback<RoleGranted>): EventEmitter;
    RoleGranted(
      options?: EventOptions,
      cb?: Callback<RoleGranted>
    ): EventEmitter;

    RoleRevoked(cb?: Callback<RoleRevoked>): EventEmitter;
    RoleRevoked(
      options?: EventOptions,
      cb?: Callback<RoleRevoked>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "DelegateChanged", cb: Callback<DelegateChanged>): void;
  once(
    event: "DelegateChanged",
    options: EventOptions,
    cb: Callback<DelegateChanged>
  ): void;

  once(event: "DelegateVotesChanged", cb: Callback<DelegateVotesChanged>): void;
  once(
    event: "DelegateVotesChanged",
    options: EventOptions,
    cb: Callback<DelegateVotesChanged>
  ): void;

  once(event: "RoleAdminChanged", cb: Callback<RoleAdminChanged>): void;
  once(
    event: "RoleAdminChanged",
    options: EventOptions,
    cb: Callback<RoleAdminChanged>
  ): void;

  once(event: "RoleGranted", cb: Callback<RoleGranted>): void;
  once(
    event: "RoleGranted",
    options: EventOptions,
    cb: Callback<RoleGranted>
  ): void;

  once(event: "RoleRevoked", cb: Callback<RoleRevoked>): void;
  once(
    event: "RoleRevoked",
    options: EventOptions,
    cb: Callback<RoleRevoked>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
