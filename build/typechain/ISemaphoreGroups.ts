/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ISemaphoreGroupsInterface extends utils.Interface {
  contractName: "ISemaphoreGroups";
  functions: {
    "getDepth(uint256)": FunctionFragment;
    "getRoot(uint256)": FunctionFragment;
    "getSize(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSize",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getDepth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSize", data: BytesLike): Result;

  events: {
    "GroupAdded(uint256,uint8)": EventFragment;
    "MemberAdded(uint256,uint256,uint256)": EventFragment;
    "MemberRemoved(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
}

export type GroupAddedEvent = TypedEvent<
  [BigNumber, number],
  { groupId: BigNumber; depth: number }
>;

export type GroupAddedEventFilter = TypedEventFilter<GroupAddedEvent>;

export type MemberAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { groupId: BigNumber; identityCommitment: BigNumber; root: BigNumber }
>;

export type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;

export type MemberRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { groupId: BigNumber; identityCommitment: BigNumber; root: BigNumber }
>;

export type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;

export interface ISemaphoreGroups extends BaseContract {
  contractName: "ISemaphoreGroups";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISemaphoreGroupsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSize(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getDepth(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoot(groupId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getSize(groupId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSize(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "GroupAdded(uint256,uint8)"(
      groupId?: BigNumberish | null,
      depth?: null
    ): GroupAddedEventFilter;
    GroupAdded(
      groupId?: BigNumberish | null,
      depth?: null
    ): GroupAddedEventFilter;

    "MemberAdded(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;
    MemberAdded(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;

    "MemberRemoved(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;
    MemberRemoved(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;
  };

  estimateGas: {
    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSize(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSize(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
