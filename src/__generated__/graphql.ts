/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Division Merkle root */
  DivisionRoot: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Merkle proof */
  Proof: any;
  /** Merkle root */
  Root: any;
};

export type Academy = {
  __typename?: 'Academy';
  club: Club;
  clubId: Scalars['Int'];
  id: Scalars['Int'];
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
};

export type AcademyAvgAggregate = {
  __typename?: 'AcademyAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  startTimestamp?: Maybe<Scalars['Float']>;
};

export type AcademyAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type AcademyCountAggregate = {
  __typename?: 'AcademyCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  id: Scalars['Int'];
  seed: Scalars['Int'];
  startTimestamp: Scalars['Int'];
};

export type AcademyCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type AcademyCreateInput = {
  club: ClubCreateNestedOneWithoutAcademiesInput;
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
};

export type AcademyCreateManyClubInput = {
  id?: InputMaybe<Scalars['Int']>;
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
};

export type AcademyCreateManyClubInputEnvelope = {
  data: Array<AcademyCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AcademyCreateManyInput = {
  clubId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
};

export type AcademyCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<AcademyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AcademyCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<AcademyCreateWithoutClubInput>>;
  createMany?: InputMaybe<AcademyCreateManyClubInputEnvelope>;
};

export type AcademyCreateOrConnectWithoutClubInput = {
  create: AcademyCreateWithoutClubInput;
  where: AcademyWhereUniqueInput;
};

export type AcademyCreateWithoutClubInput = {
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
};

export type AcademyGroupBy = {
  __typename?: 'AcademyGroupBy';
  _avg?: Maybe<AcademyAvgAggregate>;
  _count?: Maybe<AcademyCountAggregate>;
  _max?: Maybe<AcademyMaxAggregate>;
  _min?: Maybe<AcademyMinAggregate>;
  _sum?: Maybe<AcademySumAggregate>;
  clubId: Scalars['Int'];
  id: Scalars['Int'];
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
};

export type AcademyListRelationFilter = {
  every?: InputMaybe<AcademyWhereInput>;
  none?: InputMaybe<AcademyWhereInput>;
  some?: InputMaybe<AcademyWhereInput>;
};

export type AcademyMaxAggregate = {
  __typename?: 'AcademyMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  seed?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['Float']>;
};

export type AcademyMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type AcademyMinAggregate = {
  __typename?: 'AcademyMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  seed?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['Float']>;
};

export type AcademyMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type AcademyMintFee = {
  __typename?: 'AcademyMintFee';
  division: Division;
  divisionId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  value: Value;
  valueId: Scalars['Int'];
};

export type AcademyMintFeeAvgAggregate = {
  __typename?: 'AcademyMintFeeAvgAggregate';
  divisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  valueId?: Maybe<Scalars['Float']>;
};

export type AcademyMintFeeAvgOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type AcademyMintFeeCountAggregate = {
  __typename?: 'AcademyMintFeeCountAggregate';
  _all: Scalars['Int'];
  divisionId: Scalars['Int'];
  dummy: Scalars['Int'];
  id: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type AcademyMintFeeCountOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type AcademyMintFeeCreateInput = {
  division: DivisionCreateNestedOneWithoutAcademyMintFeesInput;
  dummy?: InputMaybe<Scalars['String']>;
  value: ValueCreateNestedOneWithoutAcademyMintFeesInput;
};

export type AcademyMintFeeCreateManyDivisionInput = {
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  valueId: Scalars['Int'];
};

export type AcademyMintFeeCreateManyDivisionInputEnvelope = {
  data: Array<AcademyMintFeeCreateManyDivisionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AcademyMintFeeCreateManyInput = {
  divisionId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  valueId: Scalars['Int'];
};

export type AcademyMintFeeCreateManyValueInput = {
  divisionId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type AcademyMintFeeCreateManyValueInputEnvelope = {
  data: Array<AcademyMintFeeCreateManyValueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AcademyMintFeeCreateNestedManyWithoutDivisionInput = {
  connect?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AcademyMintFeeCreateOrConnectWithoutDivisionInput>>;
  create?: InputMaybe<Array<AcademyMintFeeCreateWithoutDivisionInput>>;
  createMany?: InputMaybe<AcademyMintFeeCreateManyDivisionInputEnvelope>;
};

export type AcademyMintFeeCreateNestedManyWithoutValueInput = {
  connect?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AcademyMintFeeCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<AcademyMintFeeCreateWithoutValueInput>>;
  createMany?: InputMaybe<AcademyMintFeeCreateManyValueInputEnvelope>;
};

export type AcademyMintFeeCreateOrConnectWithoutDivisionInput = {
  create: AcademyMintFeeCreateWithoutDivisionInput;
  where: AcademyMintFeeWhereUniqueInput;
};

export type AcademyMintFeeCreateOrConnectWithoutValueInput = {
  create: AcademyMintFeeCreateWithoutValueInput;
  where: AcademyMintFeeWhereUniqueInput;
};

export type AcademyMintFeeCreateWithoutDivisionInput = {
  dummy?: InputMaybe<Scalars['String']>;
  value: ValueCreateNestedOneWithoutAcademyMintFeesInput;
};

export type AcademyMintFeeCreateWithoutValueInput = {
  division: DivisionCreateNestedOneWithoutAcademyMintFeesInput;
  dummy?: InputMaybe<Scalars['String']>;
};

export type AcademyMintFeeGroupBy = {
  __typename?: 'AcademyMintFeeGroupBy';
  _avg?: Maybe<AcademyMintFeeAvgAggregate>;
  _count?: Maybe<AcademyMintFeeCountAggregate>;
  _max?: Maybe<AcademyMintFeeMaxAggregate>;
  _min?: Maybe<AcademyMintFeeMinAggregate>;
  _sum?: Maybe<AcademyMintFeeSumAggregate>;
  divisionId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type AcademyMintFeeListRelationFilter = {
  every?: InputMaybe<AcademyMintFeeWhereInput>;
  none?: InputMaybe<AcademyMintFeeWhereInput>;
  some?: InputMaybe<AcademyMintFeeWhereInput>;
};

export type AcademyMintFeeMaxAggregate = {
  __typename?: 'AcademyMintFeeMaxAggregate';
  divisionId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type AcademyMintFeeMaxOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type AcademyMintFeeMinAggregate = {
  __typename?: 'AcademyMintFeeMinAggregate';
  divisionId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type AcademyMintFeeMinOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type AcademyMintFeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AcademyMintFeeOrderByWithAggregationInput = {
  _avg?: InputMaybe<AcademyMintFeeAvgOrderByAggregateInput>;
  _count?: InputMaybe<AcademyMintFeeCountOrderByAggregateInput>;
  _max?: InputMaybe<AcademyMintFeeMaxOrderByAggregateInput>;
  _min?: InputMaybe<AcademyMintFeeMinOrderByAggregateInput>;
  _sum?: InputMaybe<AcademyMintFeeSumOrderByAggregateInput>;
  divisionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type AcademyMintFeeOrderByWithRelationInput = {
  division?: InputMaybe<DivisionOrderByWithRelationInput>;
  divisionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<ValueOrderByWithRelationInput>;
  valueId?: InputMaybe<SortOrder>;
};

export enum AcademyMintFeeScalarFieldEnum {
  DivisionId = 'divisionId',
  Dummy = 'dummy',
  Id = 'id',
  ValueId = 'valueId'
}

export type AcademyMintFeeScalarWhereInput = {
  AND?: InputMaybe<Array<AcademyMintFeeScalarWhereInput>>;
  NOT?: InputMaybe<Array<AcademyMintFeeScalarWhereInput>>;
  OR?: InputMaybe<Array<AcademyMintFeeScalarWhereInput>>;
  divisionId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type AcademyMintFeeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AcademyMintFeeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AcademyMintFeeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AcademyMintFeeScalarWhereWithAggregatesInput>>;
  divisionId?: InputMaybe<IntWithAggregatesFilter>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  valueId?: InputMaybe<IntWithAggregatesFilter>;
};

export type AcademyMintFeeSumAggregate = {
  __typename?: 'AcademyMintFeeSumAggregate';
  divisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type AcademyMintFeeSumOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type AcademyMintFeeUpdateInput = {
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutAcademyMintFeesInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutAcademyMintFeesInput>;
};

export type AcademyMintFeeUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AcademyMintFeeUpdateManyWithWhereWithoutDivisionInput = {
  data: AcademyMintFeeUpdateManyMutationInput;
  where: AcademyMintFeeScalarWhereInput;
};

export type AcademyMintFeeUpdateManyWithWhereWithoutValueInput = {
  data: AcademyMintFeeUpdateManyMutationInput;
  where: AcademyMintFeeScalarWhereInput;
};

export type AcademyMintFeeUpdateManyWithoutDivisionInput = {
  connect?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AcademyMintFeeCreateOrConnectWithoutDivisionInput>>;
  create?: InputMaybe<Array<AcademyMintFeeCreateWithoutDivisionInput>>;
  createMany?: InputMaybe<AcademyMintFeeCreateManyDivisionInputEnvelope>;
  delete?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AcademyMintFeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  set?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  update?: InputMaybe<Array<AcademyMintFeeUpdateWithWhereUniqueWithoutDivisionInput>>;
  updateMany?: InputMaybe<Array<AcademyMintFeeUpdateManyWithWhereWithoutDivisionInput>>;
  upsert?: InputMaybe<Array<AcademyMintFeeUpsertWithWhereUniqueWithoutDivisionInput>>;
};

export type AcademyMintFeeUpdateManyWithoutValueInput = {
  connect?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AcademyMintFeeCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<AcademyMintFeeCreateWithoutValueInput>>;
  createMany?: InputMaybe<AcademyMintFeeCreateManyValueInputEnvelope>;
  delete?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AcademyMintFeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  set?: InputMaybe<Array<AcademyMintFeeWhereUniqueInput>>;
  update?: InputMaybe<Array<AcademyMintFeeUpdateWithWhereUniqueWithoutValueInput>>;
  updateMany?: InputMaybe<Array<AcademyMintFeeUpdateManyWithWhereWithoutValueInput>>;
  upsert?: InputMaybe<Array<AcademyMintFeeUpsertWithWhereUniqueWithoutValueInput>>;
};

export type AcademyMintFeeUpdateWithWhereUniqueWithoutDivisionInput = {
  data: AcademyMintFeeUpdateWithoutDivisionInput;
  where: AcademyMintFeeWhereUniqueInput;
};

export type AcademyMintFeeUpdateWithWhereUniqueWithoutValueInput = {
  data: AcademyMintFeeUpdateWithoutValueInput;
  where: AcademyMintFeeWhereUniqueInput;
};

export type AcademyMintFeeUpdateWithoutDivisionInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutAcademyMintFeesInput>;
};

export type AcademyMintFeeUpdateWithoutValueInput = {
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutAcademyMintFeesInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AcademyMintFeeUpsertWithWhereUniqueWithoutDivisionInput = {
  create: AcademyMintFeeCreateWithoutDivisionInput;
  update: AcademyMintFeeUpdateWithoutDivisionInput;
  where: AcademyMintFeeWhereUniqueInput;
};

export type AcademyMintFeeUpsertWithWhereUniqueWithoutValueInput = {
  create: AcademyMintFeeCreateWithoutValueInput;
  update: AcademyMintFeeUpdateWithoutValueInput;
  where: AcademyMintFeeWhereUniqueInput;
};

export type AcademyMintFeeWhereInput = {
  AND?: InputMaybe<Array<AcademyMintFeeWhereInput>>;
  NOT?: InputMaybe<Array<AcademyMintFeeWhereInput>>;
  OR?: InputMaybe<Array<AcademyMintFeeWhereInput>>;
  division?: InputMaybe<DivisionRelationFilter>;
  divisionId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  value?: InputMaybe<ValueRelationFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type AcademyMintFeeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AcademyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AcademyOrderByWithAggregationInput = {
  _avg?: InputMaybe<AcademyAvgOrderByAggregateInput>;
  _count?: InputMaybe<AcademyCountOrderByAggregateInput>;
  _max?: InputMaybe<AcademyMaxOrderByAggregateInput>;
  _min?: InputMaybe<AcademyMinOrderByAggregateInput>;
  _sum?: InputMaybe<AcademySumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type AcademyOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export enum AcademyScalarFieldEnum {
  ClubId = 'clubId',
  Id = 'id',
  Seed = 'seed',
  StartTimestamp = 'startTimestamp'
}

export type AcademyScalarWhereInput = {
  AND?: InputMaybe<Array<AcademyScalarWhereInput>>;
  NOT?: InputMaybe<Array<AcademyScalarWhereInput>>;
  OR?: InputMaybe<Array<AcademyScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
};

export type AcademyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AcademyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AcademyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AcademyScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  startTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
};

export type AcademySumAggregate = {
  __typename?: 'AcademySumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Float']>;
};

export type AcademySumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type AcademyUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutAcademiesInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type AcademyUpdateManyMutationInput = {
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type AcademyUpdateManyWithWhereWithoutClubInput = {
  data: AcademyUpdateManyMutationInput;
  where: AcademyScalarWhereInput;
};

export type AcademyUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<AcademyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AcademyCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<AcademyCreateWithoutClubInput>>;
  createMany?: InputMaybe<AcademyCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<AcademyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AcademyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AcademyWhereUniqueInput>>;
  set?: InputMaybe<Array<AcademyWhereUniqueInput>>;
  update?: InputMaybe<Array<AcademyUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<AcademyUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<AcademyUpsertWithWhereUniqueWithoutClubInput>>;
};

export type AcademyUpdateWithWhereUniqueWithoutClubInput = {
  data: AcademyUpdateWithoutClubInput;
  where: AcademyWhereUniqueInput;
};

export type AcademyUpdateWithoutClubInput = {
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type AcademyUpsertWithWhereUniqueWithoutClubInput = {
  create: AcademyCreateWithoutClubInput;
  update: AcademyUpdateWithoutClubInput;
  where: AcademyWhereUniqueInput;
};

export type AcademyWhereInput = {
  AND?: InputMaybe<Array<AcademyWhereInput>>;
  NOT?: InputMaybe<Array<AcademyWhereInput>>;
  OR?: InputMaybe<Array<AcademyWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
};

export type AcademyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Action = {
  __typename?: 'Action';
  _count?: Maybe<ActionCount>;
  clubs: Array<Club>;
  data: Scalars['JSON'];
  ethereumEvents: Array<EthereumEvent>;
  id: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  players: Array<Player>;
  realWorldTimestamp: Scalars['Float'];
  timestamp: Scalars['Float'];
  type: Scalars['String'];
};


export type ActionClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type ActionEthereumEventsArgs = {
  cursor?: InputMaybe<EthereumEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EthereumEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EthereumEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type ActionPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type ActionAvgAggregate = {
  __typename?: 'ActionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type ActionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type ActionCount = {
  __typename?: 'ActionCount';
  clubs: Scalars['Int'];
  ethereumEvents: Scalars['Int'];
  players: Scalars['Int'];
};

export type ActionCountAggregate = {
  __typename?: 'ActionCountAggregate';
  _all: Scalars['Int'];
  data: Scalars['Int'];
  id: Scalars['Int'];
  inGameTimestamp: Scalars['Int'];
  realWorldTimestamp: Scalars['Int'];
  timestamp: Scalars['Int'];
  type: Scalars['Int'];
};

export type ActionCountOrderByAggregateInput = {
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ActionCreateInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutActionsInput>;
  data: Scalars['JSON'];
  ethereumEvents?: InputMaybe<EthereumEventCreateNestedManyWithoutActionsInput>;
  inGameTimestamp?: InputMaybe<Scalars['Float']>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutActionsInput>;
  realWorldTimestamp?: InputMaybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  type: Scalars['String'];
};

export type ActionCreateManyInput = {
  data: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  inGameTimestamp?: InputMaybe<Scalars['Float']>;
  realWorldTimestamp?: InputMaybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  type: Scalars['String'];
};

export type ActionCreateNestedManyWithoutClubsInput = {
  connect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<ActionCreateWithoutClubsInput>>;
};

export type ActionCreateNestedManyWithoutEthereumEventsInput = {
  connect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionCreateOrConnectWithoutEthereumEventsInput>>;
  create?: InputMaybe<Array<ActionCreateWithoutEthereumEventsInput>>;
};

export type ActionCreateNestedManyWithoutPlayersInput = {
  connect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionCreateOrConnectWithoutPlayersInput>>;
  create?: InputMaybe<Array<ActionCreateWithoutPlayersInput>>;
};

export type ActionCreateOrConnectWithoutClubsInput = {
  create: ActionCreateWithoutClubsInput;
  where: ActionWhereUniqueInput;
};

export type ActionCreateOrConnectWithoutEthereumEventsInput = {
  create: ActionCreateWithoutEthereumEventsInput;
  where: ActionWhereUniqueInput;
};

export type ActionCreateOrConnectWithoutPlayersInput = {
  create: ActionCreateWithoutPlayersInput;
  where: ActionWhereUniqueInput;
};

export type ActionCreateWithoutClubsInput = {
  data: Scalars['JSON'];
  ethereumEvents?: InputMaybe<EthereumEventCreateNestedManyWithoutActionsInput>;
  inGameTimestamp?: InputMaybe<Scalars['Float']>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutActionsInput>;
  realWorldTimestamp?: InputMaybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  type: Scalars['String'];
};

export type ActionCreateWithoutEthereumEventsInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutActionsInput>;
  data: Scalars['JSON'];
  inGameTimestamp?: InputMaybe<Scalars['Float']>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutActionsInput>;
  realWorldTimestamp?: InputMaybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  type: Scalars['String'];
};

export type ActionCreateWithoutPlayersInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutActionsInput>;
  data: Scalars['JSON'];
  ethereumEvents?: InputMaybe<EthereumEventCreateNestedManyWithoutActionsInput>;
  inGameTimestamp?: InputMaybe<Scalars['Float']>;
  realWorldTimestamp?: InputMaybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  type: Scalars['String'];
};

export type ActionGroupBy = {
  __typename?: 'ActionGroupBy';
  _avg?: Maybe<ActionAvgAggregate>;
  _count?: Maybe<ActionCountAggregate>;
  _max?: Maybe<ActionMaxAggregate>;
  _min?: Maybe<ActionMinAggregate>;
  _sum?: Maybe<ActionSumAggregate>;
  data: Scalars['JSON'];
  id: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  realWorldTimestamp: Scalars['Float'];
  timestamp: Scalars['Float'];
  type: Scalars['String'];
};

export type ActionListRelationFilter = {
  every?: InputMaybe<ActionWhereInput>;
  none?: InputMaybe<ActionWhereInput>;
  some?: InputMaybe<ActionWhereInput>;
};

export type ActionMaxAggregate = {
  __typename?: 'ActionMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type ActionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ActionMinAggregate = {
  __typename?: 'ActionMinAggregate';
  id?: Maybe<Scalars['Int']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type ActionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ActionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActionOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActionAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActionCountOrderByAggregateInput>;
  _max?: InputMaybe<ActionMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActionMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActionSumOrderByAggregateInput>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ActionOrderByWithRelationInput = {
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  data?: InputMaybe<SortOrder>;
  ethereumEvents?: InputMaybe<EthereumEventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum ActionScalarFieldEnum {
  Data = 'data',
  Id = 'id',
  InGameTimestamp = 'inGameTimestamp',
  RealWorldTimestamp = 'realWorldTimestamp',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type ActionScalarWhereInput = {
  AND?: InputMaybe<Array<ActionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ActionScalarWhereInput>>;
  OR?: InputMaybe<Array<ActionScalarWhereInput>>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  inGameTimestamp?: InputMaybe<FloatFilter>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ActionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ActionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ActionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ActionScalarWhereWithAggregatesInput>>;
  data?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  inGameTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  realWorldTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  timestamp?: InputMaybe<FloatWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
};

export type ActionSumAggregate = {
  __typename?: 'ActionSumAggregate';
  id?: Maybe<Scalars['Int']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type ActionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type ActionUpdateInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutActionsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  ethereumEvents?: InputMaybe<EthereumEventUpdateManyWithoutActionsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutActionsInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateManyMutationInput = {
  data?: InputMaybe<Scalars['JSON']>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateManyWithWhereWithoutClubsInput = {
  data: ActionUpdateManyMutationInput;
  where: ActionScalarWhereInput;
};

export type ActionUpdateManyWithWhereWithoutEthereumEventsInput = {
  data: ActionUpdateManyMutationInput;
  where: ActionScalarWhereInput;
};

export type ActionUpdateManyWithWhereWithoutPlayersInput = {
  data: ActionUpdateManyMutationInput;
  where: ActionScalarWhereInput;
};

export type ActionUpdateManyWithoutClubsInput = {
  connect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<ActionCreateWithoutClubsInput>>;
  delete?: InputMaybe<Array<ActionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  set?: InputMaybe<Array<ActionWhereUniqueInput>>;
  update?: InputMaybe<Array<ActionUpdateWithWhereUniqueWithoutClubsInput>>;
  updateMany?: InputMaybe<Array<ActionUpdateManyWithWhereWithoutClubsInput>>;
  upsert?: InputMaybe<Array<ActionUpsertWithWhereUniqueWithoutClubsInput>>;
};

export type ActionUpdateManyWithoutEthereumEventsInput = {
  connect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionCreateOrConnectWithoutEthereumEventsInput>>;
  create?: InputMaybe<Array<ActionCreateWithoutEthereumEventsInput>>;
  delete?: InputMaybe<Array<ActionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  set?: InputMaybe<Array<ActionWhereUniqueInput>>;
  update?: InputMaybe<Array<ActionUpdateWithWhereUniqueWithoutEthereumEventsInput>>;
  updateMany?: InputMaybe<Array<ActionUpdateManyWithWhereWithoutEthereumEventsInput>>;
  upsert?: InputMaybe<Array<ActionUpsertWithWhereUniqueWithoutEthereumEventsInput>>;
};

export type ActionUpdateManyWithoutPlayersInput = {
  connect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActionCreateOrConnectWithoutPlayersInput>>;
  create?: InputMaybe<Array<ActionCreateWithoutPlayersInput>>;
  delete?: InputMaybe<Array<ActionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActionWhereUniqueInput>>;
  set?: InputMaybe<Array<ActionWhereUniqueInput>>;
  update?: InputMaybe<Array<ActionUpdateWithWhereUniqueWithoutPlayersInput>>;
  updateMany?: InputMaybe<Array<ActionUpdateManyWithWhereWithoutPlayersInput>>;
  upsert?: InputMaybe<Array<ActionUpsertWithWhereUniqueWithoutPlayersInput>>;
};

export type ActionUpdateWithWhereUniqueWithoutClubsInput = {
  data: ActionUpdateWithoutClubsInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpdateWithWhereUniqueWithoutEthereumEventsInput = {
  data: ActionUpdateWithoutEthereumEventsInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpdateWithWhereUniqueWithoutPlayersInput = {
  data: ActionUpdateWithoutPlayersInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpdateWithoutClubsInput = {
  data?: InputMaybe<Scalars['JSON']>;
  ethereumEvents?: InputMaybe<EthereumEventUpdateManyWithoutActionsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutActionsInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateWithoutEthereumEventsInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutActionsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutActionsInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpdateWithoutPlayersInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutActionsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  ethereumEvents?: InputMaybe<EthereumEventUpdateManyWithoutActionsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActionUpsertWithWhereUniqueWithoutClubsInput = {
  create: ActionCreateWithoutClubsInput;
  update: ActionUpdateWithoutClubsInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpsertWithWhereUniqueWithoutEthereumEventsInput = {
  create: ActionCreateWithoutEthereumEventsInput;
  update: ActionUpdateWithoutEthereumEventsInput;
  where: ActionWhereUniqueInput;
};

export type ActionUpsertWithWhereUniqueWithoutPlayersInput = {
  create: ActionCreateWithoutPlayersInput;
  update: ActionUpdateWithoutPlayersInput;
  where: ActionWhereUniqueInput;
};

export type ActionWhereInput = {
  AND?: InputMaybe<Array<ActionWhereInput>>;
  NOT?: InputMaybe<Array<ActionWhereInput>>;
  OR?: InputMaybe<Array<ActionWhereInput>>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  data?: InputMaybe<JsonFilter>;
  ethereumEvents?: InputMaybe<EthereumEventListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  inGameTimestamp?: InputMaybe<FloatFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ActionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAcademy = {
  __typename?: 'AggregateAcademy';
  _avg?: Maybe<AcademyAvgAggregate>;
  _count?: Maybe<AcademyCountAggregate>;
  _max?: Maybe<AcademyMaxAggregate>;
  _min?: Maybe<AcademyMinAggregate>;
  _sum?: Maybe<AcademySumAggregate>;
};

export type AggregateAcademyMintFee = {
  __typename?: 'AggregateAcademyMintFee';
  _avg?: Maybe<AcademyMintFeeAvgAggregate>;
  _count?: Maybe<AcademyMintFeeCountAggregate>;
  _max?: Maybe<AcademyMintFeeMaxAggregate>;
  _min?: Maybe<AcademyMintFeeMinAggregate>;
  _sum?: Maybe<AcademyMintFeeSumAggregate>;
};

export type AggregateAction = {
  __typename?: 'AggregateAction';
  _avg?: Maybe<ActionAvgAggregate>;
  _count?: Maybe<ActionCountAggregate>;
  _max?: Maybe<ActionMaxAggregate>;
  _min?: Maybe<ActionMinAggregate>;
  _sum?: Maybe<ActionSumAggregate>;
};

export type AggregateAvailableHomeGameTime = {
  __typename?: 'AggregateAvailableHomeGameTime';
  _avg?: Maybe<AvailableHomeGameTimeAvgAggregate>;
  _count?: Maybe<AvailableHomeGameTimeCountAggregate>;
  _max?: Maybe<AvailableHomeGameTimeMaxAggregate>;
  _min?: Maybe<AvailableHomeGameTimeMinAggregate>;
  _sum?: Maybe<AvailableHomeGameTimeSumAggregate>;
};

export type AggregateClaim = {
  __typename?: 'AggregateClaim';
  _avg?: Maybe<ClaimAvgAggregate>;
  _count?: Maybe<ClaimCountAggregate>;
  _max?: Maybe<ClaimMaxAggregate>;
  _min?: Maybe<ClaimMinAggregate>;
  _sum?: Maybe<ClaimSumAggregate>;
};

export type AggregateClub = {
  __typename?: 'AggregateClub';
  _avg?: Maybe<ClubAvgAggregate>;
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
  _sum?: Maybe<ClubSumAggregate>;
};

export type AggregateClubBadge = {
  __typename?: 'AggregateClubBadge';
  _avg?: Maybe<ClubBadgeAvgAggregate>;
  _count?: Maybe<ClubBadgeCountAggregate>;
  _max?: Maybe<ClubBadgeMaxAggregate>;
  _min?: Maybe<ClubBadgeMinAggregate>;
  _sum?: Maybe<ClubBadgeSumAggregate>;
};

export type AggregateClubBalance = {
  __typename?: 'AggregateClubBalance';
  _avg?: Maybe<ClubBalanceAvgAggregate>;
  _count?: Maybe<ClubBalanceCountAggregate>;
  _max?: Maybe<ClubBalanceMaxAggregate>;
  _min?: Maybe<ClubBalanceMinAggregate>;
  _sum?: Maybe<ClubBalanceSumAggregate>;
};

export type AggregateClubFixture = {
  __typename?: 'AggregateClubFixture';
  _avg?: Maybe<ClubFixtureAvgAggregate>;
  _count?: Maybe<ClubFixtureCountAggregate>;
  _max?: Maybe<ClubFixtureMaxAggregate>;
  _min?: Maybe<ClubFixtureMinAggregate>;
  _sum?: Maybe<ClubFixtureSumAggregate>;
};

export type AggregateClubStats = {
  __typename?: 'AggregateClubStats';
  _avg?: Maybe<ClubStatsAvgAggregate>;
  _count?: Maybe<ClubStatsCountAggregate>;
  _max?: Maybe<ClubStatsMaxAggregate>;
  _min?: Maybe<ClubStatsMinAggregate>;
  _sum?: Maybe<ClubStatsSumAggregate>;
};

export type AggregateClubTournament = {
  __typename?: 'AggregateClubTournament';
  _avg?: Maybe<ClubTournamentAvgAggregate>;
  _count?: Maybe<ClubTournamentCountAggregate>;
  _max?: Maybe<ClubTournamentMaxAggregate>;
  _min?: Maybe<ClubTournamentMinAggregate>;
  _sum?: Maybe<ClubTournamentSumAggregate>;
};

export type AggregateCompetition = {
  __typename?: 'AggregateCompetition';
  _avg?: Maybe<CompetitionAvgAggregate>;
  _count?: Maybe<CompetitionCountAggregate>;
  _max?: Maybe<CompetitionMaxAggregate>;
  _min?: Maybe<CompetitionMinAggregate>;
  _sum?: Maybe<CompetitionSumAggregate>;
};

export type AggregateCompetitionPlayerStats = {
  __typename?: 'AggregateCompetitionPlayerStats';
  _avg?: Maybe<CompetitionPlayerStatsAvgAggregate>;
  _count?: Maybe<CompetitionPlayerStatsCountAggregate>;
  _max?: Maybe<CompetitionPlayerStatsMaxAggregate>;
  _min?: Maybe<CompetitionPlayerStatsMinAggregate>;
  _sum?: Maybe<CompetitionPlayerStatsSumAggregate>;
};

export type AggregateDivision = {
  __typename?: 'AggregateDivision';
  _avg?: Maybe<DivisionAvgAggregate>;
  _count?: Maybe<DivisionCountAggregate>;
  _max?: Maybe<DivisionMaxAggregate>;
  _min?: Maybe<DivisionMinAggregate>;
  _sum?: Maybe<DivisionSumAggregate>;
};

export type AggregateEthereumEvent = {
  __typename?: 'AggregateEthereumEvent';
  _avg?: Maybe<EthereumEventAvgAggregate>;
  _count?: Maybe<EthereumEventCountAggregate>;
  _max?: Maybe<EthereumEventMaxAggregate>;
  _min?: Maybe<EthereumEventMinAggregate>;
  _sum?: Maybe<EthereumEventSumAggregate>;
};

export type AggregateFixture = {
  __typename?: 'AggregateFixture';
  _avg?: Maybe<FixtureAvgAggregate>;
  _count?: Maybe<FixtureCountAggregate>;
  _max?: Maybe<FixtureMaxAggregate>;
  _min?: Maybe<FixtureMinAggregate>;
  _sum?: Maybe<FixtureSumAggregate>;
};

export type AggregateFormation = {
  __typename?: 'AggregateFormation';
  _avg?: Maybe<FormationAvgAggregate>;
  _count?: Maybe<FormationCountAggregate>;
  _max?: Maybe<FormationMaxAggregate>;
  _min?: Maybe<FormationMinAggregate>;
  _sum?: Maybe<FormationSumAggregate>;
};

export type AggregateFormationSlot = {
  __typename?: 'AggregateFormationSlot';
  _avg?: Maybe<FormationSlotAvgAggregate>;
  _count?: Maybe<FormationSlotCountAggregate>;
  _max?: Maybe<FormationSlotMaxAggregate>;
  _min?: Maybe<FormationSlotMinAggregate>;
  _sum?: Maybe<FormationSlotSumAggregate>;
};

export type AggregateKit = {
  __typename?: 'AggregateKit';
  _avg?: Maybe<KitAvgAggregate>;
  _count?: Maybe<KitCountAggregate>;
  _max?: Maybe<KitMaxAggregate>;
  _min?: Maybe<KitMinAggregate>;
  _sum?: Maybe<KitSumAggregate>;
};

export type AggregateLineup = {
  __typename?: 'AggregateLineup';
  _avg?: Maybe<LineupAvgAggregate>;
  _count?: Maybe<LineupCountAggregate>;
  _max?: Maybe<LineupMaxAggregate>;
  _min?: Maybe<LineupMinAggregate>;
  _sum?: Maybe<LineupSumAggregate>;
};

export type AggregateMatch = {
  __typename?: 'AggregateMatch';
  _avg?: Maybe<MatchAvgAggregate>;
  _count?: Maybe<MatchCountAggregate>;
  _max?: Maybe<MatchMaxAggregate>;
  _min?: Maybe<MatchMinAggregate>;
  _sum?: Maybe<MatchSumAggregate>;
};

export type AggregateMerkleRoot = {
  __typename?: 'AggregateMerkleRoot';
  _avg?: Maybe<MerkleRootAvgAggregate>;
  _count?: Maybe<MerkleRootCountAggregate>;
  _max?: Maybe<MerkleRootMaxAggregate>;
  _min?: Maybe<MerkleRootMinAggregate>;
  _sum?: Maybe<MerkleRootSumAggregate>;
};

export type AggregateMetadata = {
  __typename?: 'AggregateMetadata';
  _avg?: Maybe<MetadataAvgAggregate>;
  _count?: Maybe<MetadataCountAggregate>;
  _max?: Maybe<MetadataMaxAggregate>;
  _min?: Maybe<MetadataMinAggregate>;
  _sum?: Maybe<MetadataSumAggregate>;
};

export type AggregateMorale = {
  __typename?: 'AggregateMorale';
  _avg?: Maybe<MoraleAvgAggregate>;
  _count?: Maybe<MoraleCountAggregate>;
  _max?: Maybe<MoraleMaxAggregate>;
  _min?: Maybe<MoraleMinAggregate>;
  _sum?: Maybe<MoraleSumAggregate>;
};

export type AggregateNewsItem = {
  __typename?: 'AggregateNewsItem';
  _avg?: Maybe<NewsItemAvgAggregate>;
  _count?: Maybe<NewsItemCountAggregate>;
  _max?: Maybe<NewsItemMaxAggregate>;
  _min?: Maybe<NewsItemMinAggregate>;
  _sum?: Maybe<NewsItemSumAggregate>;
};

export type AggregateOwner = {
  __typename?: 'AggregateOwner';
  _avg?: Maybe<OwnerAvgAggregate>;
  _count?: Maybe<OwnerCountAggregate>;
  _max?: Maybe<OwnerMaxAggregate>;
  _min?: Maybe<OwnerMinAggregate>;
  _sum?: Maybe<OwnerSumAggregate>;
};

export type AggregatePlayer = {
  __typename?: 'AggregatePlayer';
  _avg?: Maybe<PlayerAvgAggregate>;
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
};

export type AggregatePlayerAttributes = {
  __typename?: 'AggregatePlayerAttributes';
  _avg?: Maybe<PlayerAttributesAvgAggregate>;
  _count?: Maybe<PlayerAttributesCountAggregate>;
  _max?: Maybe<PlayerAttributesMaxAggregate>;
  _min?: Maybe<PlayerAttributesMinAggregate>;
  _sum?: Maybe<PlayerAttributesSumAggregate>;
};

export type AggregatePlayerAttributesPositionalRating = {
  __typename?: 'AggregatePlayerAttributesPositionalRating';
  _avg?: Maybe<PlayerAttributesPositionalRatingAvgAggregate>;
  _count?: Maybe<PlayerAttributesPositionalRatingCountAggregate>;
  _max?: Maybe<PlayerAttributesPositionalRatingMaxAggregate>;
  _min?: Maybe<PlayerAttributesPositionalRatingMinAggregate>;
  _sum?: Maybe<PlayerAttributesPositionalRatingSumAggregate>;
};

export type AggregatePlayerLineup = {
  __typename?: 'AggregatePlayerLineup';
  _avg?: Maybe<PlayerLineupAvgAggregate>;
  _count?: Maybe<PlayerLineupCountAggregate>;
  _max?: Maybe<PlayerLineupMaxAggregate>;
  _min?: Maybe<PlayerLineupMinAggregate>;
  _sum?: Maybe<PlayerLineupSumAggregate>;
};

export type AggregatePlayerStatsRecord = {
  __typename?: 'AggregatePlayerStatsRecord';
  _avg?: Maybe<PlayerStatsRecordAvgAggregate>;
  _count?: Maybe<PlayerStatsRecordCountAggregate>;
  _max?: Maybe<PlayerStatsRecordMaxAggregate>;
  _min?: Maybe<PlayerStatsRecordMinAggregate>;
  _sum?: Maybe<PlayerStatsRecordSumAggregate>;
};

export type AggregatePool = {
  __typename?: 'AggregatePool';
  _avg?: Maybe<PoolAvgAggregate>;
  _count?: Maybe<PoolCountAggregate>;
  _max?: Maybe<PoolMaxAggregate>;
  _min?: Maybe<PoolMinAggregate>;
  _sum?: Maybe<PoolSumAggregate>;
};

export type AggregatePoolsOnValues = {
  __typename?: 'AggregatePoolsOnValues';
  _avg?: Maybe<PoolsOnValuesAvgAggregate>;
  _count?: Maybe<PoolsOnValuesCountAggregate>;
  _max?: Maybe<PoolsOnValuesMaxAggregate>;
  _min?: Maybe<PoolsOnValuesMinAggregate>;
  _sum?: Maybe<PoolsOnValuesSumAggregate>;
};

export type AggregatePrize = {
  __typename?: 'AggregatePrize';
  _avg?: Maybe<PrizeAvgAggregate>;
  _count?: Maybe<PrizeCountAggregate>;
  _max?: Maybe<PrizeMaxAggregate>;
  _min?: Maybe<PrizeMinAggregate>;
  _sum?: Maybe<PrizeSumAggregate>;
};

export type AggregatePromotionSelector = {
  __typename?: 'AggregatePromotionSelector';
  _avg?: Maybe<PromotionSelectorAvgAggregate>;
  _count?: Maybe<PromotionSelectorCountAggregate>;
  _max?: Maybe<PromotionSelectorMaxAggregate>;
  _min?: Maybe<PromotionSelectorMinAggregate>;
  _sum?: Maybe<PromotionSelectorSumAggregate>;
};

export type AggregateSeason = {
  __typename?: 'AggregateSeason';
  _avg?: Maybe<SeasonAvgAggregate>;
  _count?: Maybe<SeasonCountAggregate>;
  _max?: Maybe<SeasonMaxAggregate>;
  _min?: Maybe<SeasonMinAggregate>;
  _sum?: Maybe<SeasonSumAggregate>;
};

export type AggregateStadium = {
  __typename?: 'AggregateStadium';
  _avg?: Maybe<StadiumAvgAggregate>;
  _count?: Maybe<StadiumCountAggregate>;
  _max?: Maybe<StadiumMaxAggregate>;
  _min?: Maybe<StadiumMinAggregate>;
  _sum?: Maybe<StadiumSumAggregate>;
};

export type AggregateStadiumStand = {
  __typename?: 'AggregateStadiumStand';
  _avg?: Maybe<StadiumStandAvgAggregate>;
  _count?: Maybe<StadiumStandCountAggregate>;
  _max?: Maybe<StadiumStandMaxAggregate>;
  _min?: Maybe<StadiumStandMinAggregate>;
  _sum?: Maybe<StadiumStandSumAggregate>;
};

export type AggregateTactics = {
  __typename?: 'AggregateTactics';
  _avg?: Maybe<TacticsAvgAggregate>;
  _count?: Maybe<TacticsCountAggregate>;
  _max?: Maybe<TacticsMaxAggregate>;
  _min?: Maybe<TacticsMinAggregate>;
  _sum?: Maybe<TacticsSumAggregate>;
};

export type AggregateToken = {
  __typename?: 'AggregateToken';
  _avg?: Maybe<TokenAvgAggregate>;
  _count?: Maybe<TokenCountAggregate>;
  _max?: Maybe<TokenMaxAggregate>;
  _min?: Maybe<TokenMinAggregate>;
  _sum?: Maybe<TokenSumAggregate>;
};

export type AggregateTournament = {
  __typename?: 'AggregateTournament';
  _avg?: Maybe<TournamentAvgAggregate>;
  _count?: Maybe<TournamentCountAggregate>;
  _max?: Maybe<TournamentMaxAggregate>;
  _min?: Maybe<TournamentMinAggregate>;
  _sum?: Maybe<TournamentSumAggregate>;
};

export type AggregateTournamentPlayerStats = {
  __typename?: 'AggregateTournamentPlayerStats';
  _avg?: Maybe<TournamentPlayerStatsAvgAggregate>;
  _count?: Maybe<TournamentPlayerStatsCountAggregate>;
  _max?: Maybe<TournamentPlayerStatsMaxAggregate>;
  _min?: Maybe<TournamentPlayerStatsMinAggregate>;
  _sum?: Maybe<TournamentPlayerStatsSumAggregate>;
};

export type AggregateValue = {
  __typename?: 'AggregateValue';
  _avg?: Maybe<ValueAvgAggregate>;
  _count?: Maybe<ValueCountAggregate>;
  _max?: Maybe<ValueMaxAggregate>;
  _min?: Maybe<ValueMinAggregate>;
  _sum?: Maybe<ValueSumAggregate>;
};

export type AvailableHomeGameTime = {
  __typename?: 'AvailableHomeGameTime';
  Club: Array<Club>;
  _count?: Maybe<AvailableHomeGameTimeCount>;
  homeGameTime: Scalars['Float'];
  id: Scalars['Int'];
  realWorldGameTime: Scalars['String'];
};


export type AvailableHomeGameTimeClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};

export type AvailableHomeGameTimeAvgAggregate = {
  __typename?: 'AvailableHomeGameTimeAvgAggregate';
  homeGameTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type AvailableHomeGameTimeAvgOrderByAggregateInput = {
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AvailableHomeGameTimeCount = {
  __typename?: 'AvailableHomeGameTimeCount';
  Club: Scalars['Int'];
};

export type AvailableHomeGameTimeCountAggregate = {
  __typename?: 'AvailableHomeGameTimeCountAggregate';
  _all: Scalars['Int'];
  homeGameTime: Scalars['Int'];
  id: Scalars['Int'];
  realWorldGameTime: Scalars['Int'];
};

export type AvailableHomeGameTimeCountOrderByAggregateInput = {
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  realWorldGameTime?: InputMaybe<SortOrder>;
};

export type AvailableHomeGameTimeCreateInput = {
  Club?: InputMaybe<ClubCreateNestedManyWithoutHomeGameTimeInput>;
  homeGameTime: Scalars['Float'];
  realWorldGameTime: Scalars['String'];
};

export type AvailableHomeGameTimeCreateManyInput = {
  homeGameTime: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  realWorldGameTime: Scalars['String'];
};

export type AvailableHomeGameTimeCreateNestedOneWithoutClubInput = {
  connect?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AvailableHomeGameTimeCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<AvailableHomeGameTimeCreateWithoutClubInput>;
};

export type AvailableHomeGameTimeCreateOrConnectWithoutClubInput = {
  create: AvailableHomeGameTimeCreateWithoutClubInput;
  where: AvailableHomeGameTimeWhereUniqueInput;
};

export type AvailableHomeGameTimeCreateWithoutClubInput = {
  homeGameTime: Scalars['Float'];
  realWorldGameTime: Scalars['String'];
};

export type AvailableHomeGameTimeGroupBy = {
  __typename?: 'AvailableHomeGameTimeGroupBy';
  _avg?: Maybe<AvailableHomeGameTimeAvgAggregate>;
  _count?: Maybe<AvailableHomeGameTimeCountAggregate>;
  _max?: Maybe<AvailableHomeGameTimeMaxAggregate>;
  _min?: Maybe<AvailableHomeGameTimeMinAggregate>;
  _sum?: Maybe<AvailableHomeGameTimeSumAggregate>;
  homeGameTime: Scalars['Float'];
  id: Scalars['Int'];
  realWorldGameTime: Scalars['String'];
};

export type AvailableHomeGameTimeMaxAggregate = {
  __typename?: 'AvailableHomeGameTimeMaxAggregate';
  homeGameTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  realWorldGameTime?: Maybe<Scalars['String']>;
};

export type AvailableHomeGameTimeMaxOrderByAggregateInput = {
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  realWorldGameTime?: InputMaybe<SortOrder>;
};

export type AvailableHomeGameTimeMinAggregate = {
  __typename?: 'AvailableHomeGameTimeMinAggregate';
  homeGameTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  realWorldGameTime?: Maybe<Scalars['String']>;
};

export type AvailableHomeGameTimeMinOrderByAggregateInput = {
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  realWorldGameTime?: InputMaybe<SortOrder>;
};

export type AvailableHomeGameTimeOrderByWithAggregationInput = {
  _avg?: InputMaybe<AvailableHomeGameTimeAvgOrderByAggregateInput>;
  _count?: InputMaybe<AvailableHomeGameTimeCountOrderByAggregateInput>;
  _max?: InputMaybe<AvailableHomeGameTimeMaxOrderByAggregateInput>;
  _min?: InputMaybe<AvailableHomeGameTimeMinOrderByAggregateInput>;
  _sum?: InputMaybe<AvailableHomeGameTimeSumOrderByAggregateInput>;
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  realWorldGameTime?: InputMaybe<SortOrder>;
};

export type AvailableHomeGameTimeOrderByWithRelationInput = {
  Club?: InputMaybe<ClubOrderByRelationAggregateInput>;
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  realWorldGameTime?: InputMaybe<SortOrder>;
};

export type AvailableHomeGameTimeRelationFilter = {
  is?: InputMaybe<AvailableHomeGameTimeWhereInput>;
  isNot?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};

export enum AvailableHomeGameTimeScalarFieldEnum {
  HomeGameTime = 'homeGameTime',
  Id = 'id',
  RealWorldGameTime = 'realWorldGameTime'
}

export type AvailableHomeGameTimeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AvailableHomeGameTimeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AvailableHomeGameTimeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AvailableHomeGameTimeScalarWhereWithAggregatesInput>>;
  homeGameTime?: InputMaybe<FloatWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  realWorldGameTime?: InputMaybe<StringWithAggregatesFilter>;
};

export type AvailableHomeGameTimeSumAggregate = {
  __typename?: 'AvailableHomeGameTimeSumAggregate';
  homeGameTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
};

export type AvailableHomeGameTimeSumOrderByAggregateInput = {
  homeGameTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AvailableHomeGameTimeUpdateInput = {
  Club?: InputMaybe<ClubUpdateManyWithoutHomeGameTimeInput>;
  homeGameTime?: InputMaybe<FloatFieldUpdateOperationsInput>;
  realWorldGameTime?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AvailableHomeGameTimeUpdateManyMutationInput = {
  homeGameTime?: InputMaybe<FloatFieldUpdateOperationsInput>;
  realWorldGameTime?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AvailableHomeGameTimeUpdateOneWithoutClubInput = {
  connect?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AvailableHomeGameTimeCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<AvailableHomeGameTimeCreateWithoutClubInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AvailableHomeGameTimeUpdateWithoutClubInput>;
  upsert?: InputMaybe<AvailableHomeGameTimeUpsertWithoutClubInput>;
};

export type AvailableHomeGameTimeUpdateWithoutClubInput = {
  homeGameTime?: InputMaybe<FloatFieldUpdateOperationsInput>;
  realWorldGameTime?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AvailableHomeGameTimeUpsertWithoutClubInput = {
  create: AvailableHomeGameTimeCreateWithoutClubInput;
  update: AvailableHomeGameTimeUpdateWithoutClubInput;
};

export type AvailableHomeGameTimeWhereInput = {
  AND?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  Club?: InputMaybe<ClubListRelationFilter>;
  NOT?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  OR?: InputMaybe<Array<AvailableHomeGameTimeWhereInput>>;
  homeGameTime?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IntFilter>;
  realWorldGameTime?: InputMaybe<StringFilter>;
};

export type AvailableHomeGameTimeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Claim = {
  __typename?: 'Claim';
  address: Scalars['String'];
  id: Scalars['Int'];
  value: Value;
  valueId: Scalars['Int'];
};

export type ClaimAvgAggregate = {
  __typename?: 'ClaimAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  valueId?: Maybe<Scalars['Float']>;
};

export type ClaimAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClaimCountAggregate = {
  __typename?: 'ClaimCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  id: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type ClaimCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClaimCreateInput = {
  address: Scalars['String'];
  value: ValueCreateNestedOneWithoutClaimInput;
};

export type ClaimCreateManyInput = {
  address: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  valueId: Scalars['Int'];
};

export type ClaimCreateManyValueInput = {
  address: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
};

export type ClaimCreateManyValueInputEnvelope = {
  data: Array<ClaimCreateManyValueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClaimCreateNestedManyWithoutValueInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutValueInput>>;
  createMany?: InputMaybe<ClaimCreateManyValueInputEnvelope>;
};

export type ClaimCreateOrConnectWithoutValueInput = {
  create: ClaimCreateWithoutValueInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimCreateWithoutValueInput = {
  address: Scalars['String'];
};

export type ClaimGroupBy = {
  __typename?: 'ClaimGroupBy';
  _avg?: Maybe<ClaimAvgAggregate>;
  _count?: Maybe<ClaimCountAggregate>;
  _max?: Maybe<ClaimMaxAggregate>;
  _min?: Maybe<ClaimMinAggregate>;
  _sum?: Maybe<ClaimSumAggregate>;
  address: Scalars['String'];
  id: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type ClaimListRelationFilter = {
  every?: InputMaybe<ClaimWhereInput>;
  none?: InputMaybe<ClaimWhereInput>;
  some?: InputMaybe<ClaimWhereInput>;
};

export type ClaimMaxAggregate = {
  __typename?: 'ClaimMaxAggregate';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type ClaimMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClaimMinAggregate = {
  __typename?: 'ClaimMinAggregate';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type ClaimMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClaimOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClaimOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClaimAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClaimCountOrderByAggregateInput>;
  _max?: InputMaybe<ClaimMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClaimMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClaimSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClaimOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<ValueOrderByWithRelationInput>;
  valueId?: InputMaybe<SortOrder>;
};

export enum ClaimScalarFieldEnum {
  Address = 'address',
  Id = 'id',
  ValueId = 'valueId'
}

export type ClaimScalarWhereInput = {
  AND?: InputMaybe<Array<ClaimScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClaimScalarWhereInput>>;
  OR?: InputMaybe<Array<ClaimScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type ClaimScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClaimScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClaimScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClaimScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  valueId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClaimSumAggregate = {
  __typename?: 'ClaimSumAggregate';
  id?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type ClaimSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClaimUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutClaimInput>;
};

export type ClaimUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ClaimUpdateManyWithWhereWithoutValueInput = {
  data: ClaimUpdateManyMutationInput;
  where: ClaimScalarWhereInput;
};

export type ClaimUpdateManyWithoutValueInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutValueInput>>;
  createMany?: InputMaybe<ClaimCreateManyValueInputEnvelope>;
  delete?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClaimScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  set?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  update?: InputMaybe<Array<ClaimUpdateWithWhereUniqueWithoutValueInput>>;
  updateMany?: InputMaybe<Array<ClaimUpdateManyWithWhereWithoutValueInput>>;
  upsert?: InputMaybe<Array<ClaimUpsertWithWhereUniqueWithoutValueInput>>;
};

export type ClaimUpdateWithWhereUniqueWithoutValueInput = {
  data: ClaimUpdateWithoutValueInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimUpdateWithoutValueInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ClaimUpsertWithWhereUniqueWithoutValueInput = {
  create: ClaimCreateWithoutValueInput;
  update: ClaimUpdateWithoutValueInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimWhereInput = {
  AND?: InputMaybe<Array<ClaimWhereInput>>;
  NOT?: InputMaybe<Array<ClaimWhereInput>>;
  OR?: InputMaybe<Array<ClaimWhereInput>>;
  address?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  value?: InputMaybe<ValueRelationFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type ClaimWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  valueId?: InputMaybe<Scalars['Int']>;
};

export type Club = {
  __typename?: 'Club';
  _count?: Maybe<ClubCount>;
  abbreviation: Scalars['String'];
  academies: Array<Academy>;
  actions: Array<Action>;
  balances: Array<ClubBalance>;
  city: Scalars['String'];
  clubBadge: ClubBadge;
  clubBadgeId: Scalars['Int'];
  clubFixtures: Array<ClubFixture>;
  clubTournaments: Array<ClubTournament>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: Division;
  divisionId: Scalars['Int'];
  divisionMerkleProof: Array<Scalars['String']>;
  escrow?: Maybe<Scalars['String']>;
  homeGameTime?: Maybe<AvailableHomeGameTime>;
  homeGameTimeId: Scalars['Int'];
  id: Scalars['Int'];
  kits: Array<Kit>;
  lineups: Array<Lineup>;
  name: Scalars['String'];
  newsItems: Array<NewsItem>;
  originPlayers: Array<Player>;
  owner: Owner;
  ownerId: Scalars['Int'];
  pattern: Scalars['String'];
  playerAttributes: Array<PlayerAttributes>;
  players: Array<Player>;
  seed: Scalars['String'];
  stadium: Stadium;
  stadiumId: Scalars['Int'];
  stats: Array<ClubStats>;
};


export type ClubAcademiesArgs = {
  cursor?: InputMaybe<AcademyWhereUniqueInput>;
  distinct?: InputMaybe<Array<AcademyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AcademyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyWhereInput>;
};


export type ClubActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type ClubBalancesArgs = {
  cursor?: InputMaybe<ClubBalanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBalanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBalanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type ClubClubFixturesArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type ClubClubTournamentsArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type ClubKitsArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  distinct?: InputMaybe<Array<KitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KitWhereInput>;
};


export type ClubLineupsArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<LineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type ClubNewsItemsArgs = {
  cursor?: InputMaybe<NewsItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<NewsItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NewsItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsItemWhereInput>;
};


export type ClubOriginPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type ClubPlayerAttributesArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type ClubPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type ClubStatsArgs = {
  cursor?: InputMaybe<ClubStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};

export type ClubAvgAggregate = {
  __typename?: 'ClubAvgAggregate';
  clubBadgeId?: Maybe<Scalars['Float']>;
  divisionId?: Maybe<Scalars['Float']>;
  homeGameTimeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
  stadiumId?: Maybe<Scalars['Float']>;
};

export type ClubAvgOrderByAggregateInput = {
  clubBadgeId?: InputMaybe<SortOrder>;
  divisionId?: InputMaybe<SortOrder>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
};

export type ClubBadge = {
  __typename?: 'ClubBadge';
  club?: Maybe<Club>;
  data: Scalars['JSON'];
  id: Scalars['Int'];
};

export type ClubBadgeAvgAggregate = {
  __typename?: 'ClubBadgeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ClubBadgeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeCountAggregate = {
  __typename?: 'ClubBadgeCountAggregate';
  _all: Scalars['Int'];
  data: Scalars['Int'];
  id: Scalars['Int'];
};

export type ClubBadgeCountOrderByAggregateInput = {
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeCreateInput = {
  club?: InputMaybe<ClubCreateNestedOneWithoutClubBadgeInput>;
  data: Scalars['JSON'];
};

export type ClubBadgeCreateManyInput = {
  data: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubBadgeCreateNestedOneWithoutClubInput = {
  connect?: InputMaybe<ClubBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubBadgeCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubBadgeCreateWithoutClubInput>;
};

export type ClubBadgeCreateOrConnectWithoutClubInput = {
  create: ClubBadgeCreateWithoutClubInput;
  where: ClubBadgeWhereUniqueInput;
};

export type ClubBadgeCreateWithoutClubInput = {
  data: Scalars['JSON'];
};

export type ClubBadgeGroupBy = {
  __typename?: 'ClubBadgeGroupBy';
  _avg?: Maybe<ClubBadgeAvgAggregate>;
  _count?: Maybe<ClubBadgeCountAggregate>;
  _max?: Maybe<ClubBadgeMaxAggregate>;
  _min?: Maybe<ClubBadgeMinAggregate>;
  _sum?: Maybe<ClubBadgeSumAggregate>;
  data: Scalars['JSON'];
  id: Scalars['Int'];
};

export type ClubBadgeMaxAggregate = {
  __typename?: 'ClubBadgeMaxAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ClubBadgeMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeMinAggregate = {
  __typename?: 'ClubBadgeMinAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ClubBadgeMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubBadgeAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubBadgeCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubBadgeMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubBadgeMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubBadgeSumOrderByAggregateInput>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeRelationFilter = {
  is?: InputMaybe<ClubBadgeWhereInput>;
  isNot?: InputMaybe<ClubBadgeWhereInput>;
};

export enum ClubBadgeScalarFieldEnum {
  Data = 'data',
  Id = 'id'
}

export type ClubBadgeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubBadgeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubBadgeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubBadgeScalarWhereWithAggregatesInput>>;
  data?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubBadgeSumAggregate = {
  __typename?: 'ClubBadgeSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ClubBadgeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClubBadgeUpdateInput = {
  club?: InputMaybe<ClubUpdateOneWithoutClubBadgeInput>;
  data?: InputMaybe<Scalars['JSON']>;
};

export type ClubBadgeUpdateManyMutationInput = {
  data?: InputMaybe<Scalars['JSON']>;
};

export type ClubBadgeUpdateOneRequiredWithoutClubInput = {
  connect?: InputMaybe<ClubBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubBadgeCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubBadgeCreateWithoutClubInput>;
  update?: InputMaybe<ClubBadgeUpdateWithoutClubInput>;
  upsert?: InputMaybe<ClubBadgeUpsertWithoutClubInput>;
};

export type ClubBadgeUpdateWithoutClubInput = {
  data?: InputMaybe<Scalars['JSON']>;
};

export type ClubBadgeUpsertWithoutClubInput = {
  create: ClubBadgeCreateWithoutClubInput;
  update: ClubBadgeUpdateWithoutClubInput;
};

export type ClubBadgeWhereInput = {
  AND?: InputMaybe<Array<ClubBadgeWhereInput>>;
  NOT?: InputMaybe<Array<ClubBadgeWhereInput>>;
  OR?: InputMaybe<Array<ClubBadgeWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
};

export type ClubBadgeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubBalance = {
  __typename?: 'ClubBalance';
  club: Club;
  clubId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  token: Token;
  tokenId: Scalars['Int'];
  value: Value;
  valueId: Scalars['Int'];
};

export type ClubBalanceAvgAggregate = {
  __typename?: 'ClubBalanceAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tokenId?: Maybe<Scalars['Float']>;
  valueId?: Maybe<Scalars['Float']>;
};

export type ClubBalanceAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClubBalanceCountAggregate = {
  __typename?: 'ClubBalanceCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  dummy: Scalars['Int'];
  id: Scalars['Int'];
  tokenId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type ClubBalanceCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClubBalanceCreateInput = {
  club: ClubCreateNestedOneWithoutBalancesInput;
  dummy?: InputMaybe<Scalars['String']>;
  token: TokenCreateNestedOneWithoutClubBalanceInput;
  value: ValueCreateNestedOneWithoutClubBalanceInput;
};

export type ClubBalanceCreateManyClubInput = {
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  tokenId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type ClubBalanceCreateManyClubInputEnvelope = {
  data: Array<ClubBalanceCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubBalanceCreateManyInput = {
  clubId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  tokenId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type ClubBalanceCreateManyTokenInput = {
  clubId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  valueId: Scalars['Int'];
};

export type ClubBalanceCreateManyTokenInputEnvelope = {
  data: Array<ClubBalanceCreateManyTokenInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubBalanceCreateManyValueInput = {
  clubId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  tokenId: Scalars['Int'];
};

export type ClubBalanceCreateManyValueInputEnvelope = {
  data: Array<ClubBalanceCreateManyValueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubBalanceCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubBalanceCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubBalanceCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubBalanceCreateManyClubInputEnvelope>;
};

export type ClubBalanceCreateNestedManyWithoutTokenInput = {
  connect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubBalanceCreateOrConnectWithoutTokenInput>>;
  create?: InputMaybe<Array<ClubBalanceCreateWithoutTokenInput>>;
  createMany?: InputMaybe<ClubBalanceCreateManyTokenInputEnvelope>;
};

export type ClubBalanceCreateNestedManyWithoutValueInput = {
  connect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubBalanceCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<ClubBalanceCreateWithoutValueInput>>;
  createMany?: InputMaybe<ClubBalanceCreateManyValueInputEnvelope>;
};

export type ClubBalanceCreateOrConnectWithoutClubInput = {
  create: ClubBalanceCreateWithoutClubInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceCreateOrConnectWithoutTokenInput = {
  create: ClubBalanceCreateWithoutTokenInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceCreateOrConnectWithoutValueInput = {
  create: ClubBalanceCreateWithoutValueInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceCreateWithoutClubInput = {
  dummy?: InputMaybe<Scalars['String']>;
  token: TokenCreateNestedOneWithoutClubBalanceInput;
  value: ValueCreateNestedOneWithoutClubBalanceInput;
};

export type ClubBalanceCreateWithoutTokenInput = {
  club: ClubCreateNestedOneWithoutBalancesInput;
  dummy?: InputMaybe<Scalars['String']>;
  value: ValueCreateNestedOneWithoutClubBalanceInput;
};

export type ClubBalanceCreateWithoutValueInput = {
  club: ClubCreateNestedOneWithoutBalancesInput;
  dummy?: InputMaybe<Scalars['String']>;
  token: TokenCreateNestedOneWithoutClubBalanceInput;
};

export type ClubBalanceGroupBy = {
  __typename?: 'ClubBalanceGroupBy';
  _avg?: Maybe<ClubBalanceAvgAggregate>;
  _count?: Maybe<ClubBalanceCountAggregate>;
  _max?: Maybe<ClubBalanceMaxAggregate>;
  _min?: Maybe<ClubBalanceMinAggregate>;
  _sum?: Maybe<ClubBalanceSumAggregate>;
  clubId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  tokenId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type ClubBalanceListRelationFilter = {
  every?: InputMaybe<ClubBalanceWhereInput>;
  none?: InputMaybe<ClubBalanceWhereInput>;
  some?: InputMaybe<ClubBalanceWhereInput>;
};

export type ClubBalanceMaxAggregate = {
  __typename?: 'ClubBalanceMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type ClubBalanceMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClubBalanceMinAggregate = {
  __typename?: 'ClubBalanceMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type ClubBalanceMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClubBalanceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubBalanceOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubBalanceAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubBalanceCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubBalanceMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubBalanceMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubBalanceSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClubBalanceOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<TokenOrderByWithRelationInput>;
  tokenId?: InputMaybe<SortOrder>;
  value?: InputMaybe<ValueOrderByWithRelationInput>;
  valueId?: InputMaybe<SortOrder>;
};

export enum ClubBalanceScalarFieldEnum {
  ClubId = 'clubId',
  Dummy = 'dummy',
  Id = 'id',
  TokenId = 'tokenId',
  ValueId = 'valueId'
}

export type ClubBalanceScalarWhereInput = {
  AND?: InputMaybe<Array<ClubBalanceScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubBalanceScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubBalanceScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  tokenId?: InputMaybe<IntFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type ClubBalanceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubBalanceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubBalanceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubBalanceScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  tokenId?: InputMaybe<IntWithAggregatesFilter>;
  valueId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubBalanceSumAggregate = {
  __typename?: 'ClubBalanceSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type ClubBalanceSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type ClubBalanceUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutBalancesInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutClubBalanceInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutClubBalanceInput>;
};

export type ClubBalanceUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ClubBalanceUpdateManyWithWhereWithoutClubInput = {
  data: ClubBalanceUpdateManyMutationInput;
  where: ClubBalanceScalarWhereInput;
};

export type ClubBalanceUpdateManyWithWhereWithoutTokenInput = {
  data: ClubBalanceUpdateManyMutationInput;
  where: ClubBalanceScalarWhereInput;
};

export type ClubBalanceUpdateManyWithWhereWithoutValueInput = {
  data: ClubBalanceUpdateManyMutationInput;
  where: ClubBalanceScalarWhereInput;
};

export type ClubBalanceUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubBalanceCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubBalanceCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubBalanceCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubBalanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubBalanceUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubBalanceUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubBalanceUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubBalanceUpdateManyWithoutTokenInput = {
  connect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubBalanceCreateOrConnectWithoutTokenInput>>;
  create?: InputMaybe<Array<ClubBalanceCreateWithoutTokenInput>>;
  createMany?: InputMaybe<ClubBalanceCreateManyTokenInputEnvelope>;
  delete?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubBalanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubBalanceUpdateWithWhereUniqueWithoutTokenInput>>;
  updateMany?: InputMaybe<Array<ClubBalanceUpdateManyWithWhereWithoutTokenInput>>;
  upsert?: InputMaybe<Array<ClubBalanceUpsertWithWhereUniqueWithoutTokenInput>>;
};

export type ClubBalanceUpdateManyWithoutValueInput = {
  connect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubBalanceCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<ClubBalanceCreateWithoutValueInput>>;
  createMany?: InputMaybe<ClubBalanceCreateManyValueInputEnvelope>;
  delete?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubBalanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubBalanceWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubBalanceUpdateWithWhereUniqueWithoutValueInput>>;
  updateMany?: InputMaybe<Array<ClubBalanceUpdateManyWithWhereWithoutValueInput>>;
  upsert?: InputMaybe<Array<ClubBalanceUpsertWithWhereUniqueWithoutValueInput>>;
};

export type ClubBalanceUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubBalanceUpdateWithoutClubInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceUpdateWithWhereUniqueWithoutTokenInput = {
  data: ClubBalanceUpdateWithoutTokenInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceUpdateWithWhereUniqueWithoutValueInput = {
  data: ClubBalanceUpdateWithoutValueInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceUpdateWithoutClubInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutClubBalanceInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutClubBalanceInput>;
};

export type ClubBalanceUpdateWithoutTokenInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutBalancesInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutClubBalanceInput>;
};

export type ClubBalanceUpdateWithoutValueInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutBalancesInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutClubBalanceInput>;
};

export type ClubBalanceUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubBalanceCreateWithoutClubInput;
  update: ClubBalanceUpdateWithoutClubInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceUpsertWithWhereUniqueWithoutTokenInput = {
  create: ClubBalanceCreateWithoutTokenInput;
  update: ClubBalanceUpdateWithoutTokenInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceUpsertWithWhereUniqueWithoutValueInput = {
  create: ClubBalanceCreateWithoutValueInput;
  update: ClubBalanceUpdateWithoutValueInput;
  where: ClubBalanceWhereUniqueInput;
};

export type ClubBalanceWhereInput = {
  AND?: InputMaybe<Array<ClubBalanceWhereInput>>;
  NOT?: InputMaybe<Array<ClubBalanceWhereInput>>;
  OR?: InputMaybe<Array<ClubBalanceWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<TokenRelationFilter>;
  tokenId?: InputMaybe<IntFilter>;
  value?: InputMaybe<ValueRelationFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type ClubBalanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubCount = {
  __typename?: 'ClubCount';
  academies: Scalars['Int'];
  actions: Scalars['Int'];
  balances: Scalars['Int'];
  clubFixtures: Scalars['Int'];
  clubTournaments: Scalars['Int'];
  kits: Scalars['Int'];
  lineups: Scalars['Int'];
  newsItems: Scalars['Int'];
  originPlayers: Scalars['Int'];
  playerAttributes: Scalars['Int'];
  players: Scalars['Int'];
  stats: Scalars['Int'];
};

export type ClubCountAggregate = {
  __typename?: 'ClubCountAggregate';
  _all: Scalars['Int'];
  abbreviation: Scalars['Int'];
  city: Scalars['Int'];
  clubBadgeId: Scalars['Int'];
  colours: Scalars['Int'];
  description: Scalars['Int'];
  divisionId: Scalars['Int'];
  escrow: Scalars['Int'];
  homeGameTimeId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  ownerId: Scalars['Int'];
  pattern: Scalars['Int'];
  seed: Scalars['Int'];
  stadiumId: Scalars['Int'];
};

export type ClubCountOrderByAggregateInput = {
  abbreviation?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  clubBadgeId?: InputMaybe<SortOrder>;
  colours?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  divisionId?: InputMaybe<SortOrder>;
  escrow?: InputMaybe<SortOrder>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  pattern?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
};

export type ClubCreateInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateManyDivisionInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  clubBadgeId: Scalars['Int'];
  colours: Scalars['JSON'];
  description: Scalars['String'];
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTimeId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  pattern: Scalars['String'];
  seed: Scalars['String'];
  stadiumId: Scalars['Int'];
};

export type ClubCreateManyDivisionInputEnvelope = {
  data: Array<ClubCreateManyDivisionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubCreateManyHomeGameTimeInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  clubBadgeId: Scalars['Int'];
  colours: Scalars['JSON'];
  description: Scalars['String'];
  divisionId: Scalars['Int'];
  escrow?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  pattern: Scalars['String'];
  seed: Scalars['String'];
  stadiumId: Scalars['Int'];
};

export type ClubCreateManyHomeGameTimeInputEnvelope = {
  data: Array<ClubCreateManyHomeGameTimeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubCreateManyInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  clubBadgeId: Scalars['Int'];
  colours: Scalars['JSON'];
  description: Scalars['String'];
  divisionId: Scalars['Int'];
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTimeId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  pattern: Scalars['String'];
  seed: Scalars['String'];
  stadiumId: Scalars['Int'];
};

export type ClubCreateManyOwnerInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  clubBadgeId: Scalars['Int'];
  colours: Scalars['JSON'];
  description: Scalars['String'];
  divisionId: Scalars['Int'];
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTimeId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  pattern: Scalars['String'];
  seed: Scalars['String'];
  stadiumId: Scalars['Int'];
};

export type ClubCreateManyOwnerInputEnvelope = {
  data: Array<ClubCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubCreateManyStadiumInput = {
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  clubBadgeId: Scalars['Int'];
  colours: Scalars['JSON'];
  description: Scalars['String'];
  divisionId: Scalars['Int'];
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTimeId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  pattern: Scalars['String'];
  seed: Scalars['String'];
};

export type ClubCreateManyStadiumInputEnvelope = {
  data: Array<ClubCreateManyStadiumInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubCreateNestedManyWithoutActionsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutActionsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutActionsInput>>;
};

export type ClubCreateNestedManyWithoutDivisionInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutDivisionInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutDivisionInput>>;
  createMany?: InputMaybe<ClubCreateManyDivisionInputEnvelope>;
};

export type ClubCreateNestedManyWithoutHomeGameTimeInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutHomeGameTimeInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutHomeGameTimeInput>>;
  createMany?: InputMaybe<ClubCreateManyHomeGameTimeInputEnvelope>;
};

export type ClubCreateNestedManyWithoutNewsItemsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutNewsItemsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutNewsItemsInput>>;
};

export type ClubCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ClubCreateManyOwnerInputEnvelope>;
};

export type ClubCreateNestedManyWithoutStadiumInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutStadiumInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutStadiumInput>>;
  createMany?: InputMaybe<ClubCreateManyStadiumInputEnvelope>;
};

export type ClubCreateNestedOneWithoutAcademiesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutAcademiesInput>;
  create?: InputMaybe<ClubCreateWithoutAcademiesInput>;
};

export type ClubCreateNestedOneWithoutBalancesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutBalancesInput>;
  create?: InputMaybe<ClubCreateWithoutBalancesInput>;
};

export type ClubCreateNestedOneWithoutClubBadgeInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubBadgeInput>;
  create?: InputMaybe<ClubCreateWithoutClubBadgeInput>;
};

export type ClubCreateNestedOneWithoutClubFixturesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubFixturesInput>;
  create?: InputMaybe<ClubCreateWithoutClubFixturesInput>;
};

export type ClubCreateNestedOneWithoutClubTournamentsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubTournamentsInput>;
  create?: InputMaybe<ClubCreateWithoutClubTournamentsInput>;
};

export type ClubCreateNestedOneWithoutKitsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutKitsInput>;
  create?: InputMaybe<ClubCreateWithoutKitsInput>;
};

export type ClubCreateNestedOneWithoutLineupsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutLineupsInput>;
  create?: InputMaybe<ClubCreateWithoutLineupsInput>;
};

export type ClubCreateNestedOneWithoutOriginPlayersInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutOriginPlayersInput>;
  create?: InputMaybe<ClubCreateWithoutOriginPlayersInput>;
};

export type ClubCreateNestedOneWithoutPlayerAttributesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutPlayerAttributesInput>;
  create?: InputMaybe<ClubCreateWithoutPlayerAttributesInput>;
};

export type ClubCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<ClubCreateWithoutPlayersInput>;
};

export type ClubCreateNestedOneWithoutStatsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutStatsInput>;
  create?: InputMaybe<ClubCreateWithoutStatsInput>;
};

export type ClubCreateOrConnectWithoutAcademiesInput = {
  create: ClubCreateWithoutAcademiesInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutActionsInput = {
  create: ClubCreateWithoutActionsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutBalancesInput = {
  create: ClubCreateWithoutBalancesInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubBadgeInput = {
  create: ClubCreateWithoutClubBadgeInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubFixturesInput = {
  create: ClubCreateWithoutClubFixturesInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubTournamentsInput = {
  create: ClubCreateWithoutClubTournamentsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutDivisionInput = {
  create: ClubCreateWithoutDivisionInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutHomeGameTimeInput = {
  create: ClubCreateWithoutHomeGameTimeInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutKitsInput = {
  create: ClubCreateWithoutKitsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutLineupsInput = {
  create: ClubCreateWithoutLineupsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutNewsItemsInput = {
  create: ClubCreateWithoutNewsItemsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutOriginPlayersInput = {
  create: ClubCreateWithoutOriginPlayersInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutOwnerInput = {
  create: ClubCreateWithoutOwnerInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutPlayerAttributesInput = {
  create: ClubCreateWithoutPlayerAttributesInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutPlayersInput = {
  create: ClubCreateWithoutPlayersInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutStadiumInput = {
  create: ClubCreateWithoutStadiumInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutStatsInput = {
  create: ClubCreateWithoutStatsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateWithoutAcademiesInput = {
  abbreviation: Scalars['String'];
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutActionsInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutBalancesInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutClubBadgeInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutClubFixturesInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutClubTournamentsInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutDivisionInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutHomeGameTimeInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutKitsInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutLineupsInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutNewsItemsInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutOriginPlayersInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutOwnerInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutPlayerAttributesInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutPlayersInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutStadiumInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stats?: InputMaybe<ClubStatsCreateNestedManyWithoutClubInput>;
};

export type ClubCreateWithoutStatsInput = {
  abbreviation: Scalars['String'];
  academies?: InputMaybe<AcademyCreateNestedManyWithoutClubInput>;
  actions?: InputMaybe<ActionCreateNestedManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceCreateNestedManyWithoutClubInput>;
  city: Scalars['String'];
  clubBadge: ClubBadgeCreateNestedOneWithoutClubInput;
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutClubInput>;
  colours: Scalars['JSON'];
  description: Scalars['String'];
  division: DivisionCreateNestedOneWithoutClubsInput;
  escrow?: InputMaybe<Scalars['String']>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeCreateNestedOneWithoutClubInput>;
  kits?: InputMaybe<KitCreateNestedManyWithoutClubInput>;
  lineups?: InputMaybe<LineupCreateNestedManyWithoutClubInput>;
  name: Scalars['String'];
  newsItems?: InputMaybe<NewsItemCreateNestedManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerCreateNestedManyWithoutOriginClubInput>;
  owner: OwnerCreateNestedOneWithoutClubsInput;
  pattern: Scalars['String'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutClubInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutClubInput>;
  seed: Scalars['String'];
  stadium: StadiumCreateNestedOneWithoutClubInput;
};

export type ClubFixture = {
  __typename?: 'ClubFixture';
  club: Club;
  clubId: Scalars['Int'];
  clubStats: ClubStats;
  clubStatsId: Scalars['Int'];
  date: Scalars['Float'];
  dummy?: Maybe<Scalars['String']>;
  fixture: Fixture;
  fixtureId: Scalars['Int'];
  id: Scalars['Int'];
  isHome: Scalars['Boolean'];
};

export type ClubFixtureAvgAggregate = {
  __typename?: 'ClubFixtureAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  clubStatsId?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Float']>;
  fixtureId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type ClubFixtureAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubFixtureCountAggregate = {
  __typename?: 'ClubFixtureCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  date: Scalars['Int'];
  dummy: Scalars['Int'];
  fixtureId: Scalars['Int'];
  id: Scalars['Int'];
  isHome: Scalars['Int'];
};

export type ClubFixtureCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHome?: InputMaybe<SortOrder>;
};

export type ClubFixtureCreateInput = {
  club: ClubCreateNestedOneWithoutClubFixturesInput;
  clubStats: ClubStatsCreateNestedOneWithoutClubFixtureInput;
  date: Scalars['Float'];
  dummy?: InputMaybe<Scalars['String']>;
  fixture: FixtureCreateNestedOneWithoutClubFixturesInput;
  isHome: Scalars['Boolean'];
};

export type ClubFixtureCreateManyClubInput = {
  clubStatsId: Scalars['Int'];
  date: Scalars['Float'];
  dummy?: InputMaybe<Scalars['String']>;
  fixtureId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  isHome: Scalars['Boolean'];
};

export type ClubFixtureCreateManyClubInputEnvelope = {
  data: Array<ClubFixtureCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubFixtureCreateManyFixtureInput = {
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  date: Scalars['Float'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isHome: Scalars['Boolean'];
};

export type ClubFixtureCreateManyFixtureInputEnvelope = {
  data: Array<ClubFixtureCreateManyFixtureInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubFixtureCreateManyInput = {
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  date: Scalars['Float'];
  dummy?: InputMaybe<Scalars['String']>;
  fixtureId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  isHome: Scalars['Boolean'];
};

export type ClubFixtureCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubFixtureCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubFixtureCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubFixtureCreateManyClubInputEnvelope>;
};

export type ClubFixtureCreateNestedManyWithoutFixtureInput = {
  connect?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubFixtureCreateOrConnectWithoutFixtureInput>>;
  create?: InputMaybe<Array<ClubFixtureCreateWithoutFixtureInput>>;
  createMany?: InputMaybe<ClubFixtureCreateManyFixtureInputEnvelope>;
};

export type ClubFixtureCreateNestedOneWithoutClubStatsInput = {
  connect?: InputMaybe<ClubFixtureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFixtureCreateOrConnectWithoutClubStatsInput>;
  create?: InputMaybe<ClubFixtureCreateWithoutClubStatsInput>;
};

export type ClubFixtureCreateOrConnectWithoutClubInput = {
  create: ClubFixtureCreateWithoutClubInput;
  where: ClubFixtureWhereUniqueInput;
};

export type ClubFixtureCreateOrConnectWithoutClubStatsInput = {
  create: ClubFixtureCreateWithoutClubStatsInput;
  where: ClubFixtureWhereUniqueInput;
};

export type ClubFixtureCreateOrConnectWithoutFixtureInput = {
  create: ClubFixtureCreateWithoutFixtureInput;
  where: ClubFixtureWhereUniqueInput;
};

export type ClubFixtureCreateWithoutClubInput = {
  clubStats: ClubStatsCreateNestedOneWithoutClubFixtureInput;
  date: Scalars['Float'];
  dummy?: InputMaybe<Scalars['String']>;
  fixture: FixtureCreateNestedOneWithoutClubFixturesInput;
  isHome: Scalars['Boolean'];
};

export type ClubFixtureCreateWithoutClubStatsInput = {
  club: ClubCreateNestedOneWithoutClubFixturesInput;
  date: Scalars['Float'];
  dummy?: InputMaybe<Scalars['String']>;
  fixture: FixtureCreateNestedOneWithoutClubFixturesInput;
  isHome: Scalars['Boolean'];
};

export type ClubFixtureCreateWithoutFixtureInput = {
  club: ClubCreateNestedOneWithoutClubFixturesInput;
  clubStats: ClubStatsCreateNestedOneWithoutClubFixtureInput;
  date: Scalars['Float'];
  dummy?: InputMaybe<Scalars['String']>;
  isHome: Scalars['Boolean'];
};

export type ClubFixtureGroupBy = {
  __typename?: 'ClubFixtureGroupBy';
  _avg?: Maybe<ClubFixtureAvgAggregate>;
  _count?: Maybe<ClubFixtureCountAggregate>;
  _max?: Maybe<ClubFixtureMaxAggregate>;
  _min?: Maybe<ClubFixtureMinAggregate>;
  _sum?: Maybe<ClubFixtureSumAggregate>;
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  date: Scalars['Float'];
  dummy?: Maybe<Scalars['String']>;
  fixtureId: Scalars['Int'];
  id: Scalars['Int'];
  isHome: Scalars['Boolean'];
};

export type ClubFixtureListRelationFilter = {
  every?: InputMaybe<ClubFixtureWhereInput>;
  none?: InputMaybe<ClubFixtureWhereInput>;
  some?: InputMaybe<ClubFixtureWhereInput>;
};

export type ClubFixtureMaxAggregate = {
  __typename?: 'ClubFixtureMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  clubStatsId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Float']>;
  dummy?: Maybe<Scalars['String']>;
  fixtureId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isHome?: Maybe<Scalars['Boolean']>;
};

export type ClubFixtureMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHome?: InputMaybe<SortOrder>;
};

export type ClubFixtureMinAggregate = {
  __typename?: 'ClubFixtureMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  clubStatsId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Float']>;
  dummy?: Maybe<Scalars['String']>;
  fixtureId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isHome?: Maybe<Scalars['Boolean']>;
};

export type ClubFixtureMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHome?: InputMaybe<SortOrder>;
};

export type ClubFixtureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubFixtureOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubFixtureAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubFixtureCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubFixtureMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubFixtureMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubFixtureSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHome?: InputMaybe<SortOrder>;
};

export type ClubFixtureOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  clubStats?: InputMaybe<ClubStatsOrderByWithRelationInput>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  fixture?: InputMaybe<FixtureOrderByWithRelationInput>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isHome?: InputMaybe<SortOrder>;
};

export type ClubFixtureRelationFilter = {
  is?: InputMaybe<ClubFixtureWhereInput>;
  isNot?: InputMaybe<ClubFixtureWhereInput>;
};

export enum ClubFixtureScalarFieldEnum {
  ClubId = 'clubId',
  ClubStatsId = 'clubStatsId',
  Date = 'date',
  Dummy = 'dummy',
  FixtureId = 'fixtureId',
  Id = 'id',
  IsHome = 'isHome'
}

export type ClubFixtureScalarWhereInput = {
  AND?: InputMaybe<Array<ClubFixtureScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubFixtureScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubFixtureScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  clubStatsId?: InputMaybe<IntFilter>;
  date?: InputMaybe<FloatFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  fixtureId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isHome?: InputMaybe<BoolFilter>;
};

export type ClubFixtureScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubFixtureScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubFixtureScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubFixtureScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  clubStatsId?: InputMaybe<IntWithAggregatesFilter>;
  date?: InputMaybe<FloatWithAggregatesFilter>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  fixtureId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isHome?: InputMaybe<BoolWithAggregatesFilter>;
};

export type ClubFixtureSumAggregate = {
  __typename?: 'ClubFixtureSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  clubStatsId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Float']>;
  fixtureId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type ClubFixtureSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  fixtureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubFixtureUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubFixturesInput>;
  clubStats?: InputMaybe<ClubStatsUpdateOneRequiredWithoutClubFixtureInput>;
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fixture?: InputMaybe<FixtureUpdateOneRequiredWithoutClubFixturesInput>;
  isHome?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ClubFixtureUpdateManyMutationInput = {
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isHome?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ClubFixtureUpdateManyWithWhereWithoutClubInput = {
  data: ClubFixtureUpdateManyMutationInput;
  where: ClubFixtureScalarWhereInput;
};

export type ClubFixtureUpdateManyWithWhereWithoutFixtureInput = {
  data: ClubFixtureUpdateManyMutationInput;
  where: ClubFixtureScalarWhereInput;
};

export type ClubFixtureUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubFixtureCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubFixtureCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubFixtureCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubFixtureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubFixtureUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubFixtureUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubFixtureUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubFixtureUpdateManyWithoutFixtureInput = {
  connect?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubFixtureCreateOrConnectWithoutFixtureInput>>;
  create?: InputMaybe<Array<ClubFixtureCreateWithoutFixtureInput>>;
  createMany?: InputMaybe<ClubFixtureCreateManyFixtureInputEnvelope>;
  delete?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubFixtureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubFixtureWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubFixtureUpdateWithWhereUniqueWithoutFixtureInput>>;
  updateMany?: InputMaybe<Array<ClubFixtureUpdateManyWithWhereWithoutFixtureInput>>;
  upsert?: InputMaybe<Array<ClubFixtureUpsertWithWhereUniqueWithoutFixtureInput>>;
};

export type ClubFixtureUpdateOneWithoutClubStatsInput = {
  connect?: InputMaybe<ClubFixtureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubFixtureCreateOrConnectWithoutClubStatsInput>;
  create?: InputMaybe<ClubFixtureCreateWithoutClubStatsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ClubFixtureUpdateWithoutClubStatsInput>;
  upsert?: InputMaybe<ClubFixtureUpsertWithoutClubStatsInput>;
};

export type ClubFixtureUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubFixtureUpdateWithoutClubInput;
  where: ClubFixtureWhereUniqueInput;
};

export type ClubFixtureUpdateWithWhereUniqueWithoutFixtureInput = {
  data: ClubFixtureUpdateWithoutFixtureInput;
  where: ClubFixtureWhereUniqueInput;
};

export type ClubFixtureUpdateWithoutClubInput = {
  clubStats?: InputMaybe<ClubStatsUpdateOneRequiredWithoutClubFixtureInput>;
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fixture?: InputMaybe<FixtureUpdateOneRequiredWithoutClubFixturesInput>;
  isHome?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ClubFixtureUpdateWithoutClubStatsInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubFixturesInput>;
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fixture?: InputMaybe<FixtureUpdateOneRequiredWithoutClubFixturesInput>;
  isHome?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ClubFixtureUpdateWithoutFixtureInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubFixturesInput>;
  clubStats?: InputMaybe<ClubStatsUpdateOneRequiredWithoutClubFixtureInput>;
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isHome?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ClubFixtureUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubFixtureCreateWithoutClubInput;
  update: ClubFixtureUpdateWithoutClubInput;
  where: ClubFixtureWhereUniqueInput;
};

export type ClubFixtureUpsertWithWhereUniqueWithoutFixtureInput = {
  create: ClubFixtureCreateWithoutFixtureInput;
  update: ClubFixtureUpdateWithoutFixtureInput;
  where: ClubFixtureWhereUniqueInput;
};

export type ClubFixtureUpsertWithoutClubStatsInput = {
  create: ClubFixtureCreateWithoutClubStatsInput;
  update: ClubFixtureUpdateWithoutClubStatsInput;
};

export type ClubFixtureWhereInput = {
  AND?: InputMaybe<Array<ClubFixtureWhereInput>>;
  NOT?: InputMaybe<Array<ClubFixtureWhereInput>>;
  OR?: InputMaybe<Array<ClubFixtureWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubStats?: InputMaybe<ClubStatsRelationFilter>;
  clubStatsId?: InputMaybe<IntFilter>;
  date?: InputMaybe<FloatFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  fixture?: InputMaybe<FixtureRelationFilter>;
  fixtureId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isHome?: InputMaybe<BoolFilter>;
};

export type ClubFixtureWhereUniqueInput = {
  clubStatsId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubGroupBy = {
  __typename?: 'ClubGroupBy';
  _avg?: Maybe<ClubAvgAggregate>;
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
  _sum?: Maybe<ClubSumAggregate>;
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  clubBadgeId: Scalars['Int'];
  colours: Scalars['JSON'];
  description: Scalars['String'];
  divisionId: Scalars['Int'];
  escrow?: Maybe<Scalars['String']>;
  homeGameTimeId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  pattern: Scalars['String'];
  seed: Scalars['String'];
  stadiumId: Scalars['Int'];
};

export type ClubListRelationFilter = {
  every?: InputMaybe<ClubWhereInput>;
  none?: InputMaybe<ClubWhereInput>;
  some?: InputMaybe<ClubWhereInput>;
};

export type ClubMaxAggregate = {
  __typename?: 'ClubMaxAggregate';
  abbreviation?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  clubBadgeId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  divisionId?: Maybe<Scalars['Int']>;
  escrow?: Maybe<Scalars['String']>;
  homeGameTimeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Int']>;
  pattern?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  stadiumId?: Maybe<Scalars['Int']>;
};

export type ClubMaxOrderByAggregateInput = {
  abbreviation?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  clubBadgeId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  divisionId?: InputMaybe<SortOrder>;
  escrow?: InputMaybe<SortOrder>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  pattern?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
};

export type ClubMinAggregate = {
  __typename?: 'ClubMinAggregate';
  abbreviation?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  clubBadgeId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  divisionId?: Maybe<Scalars['Int']>;
  escrow?: Maybe<Scalars['String']>;
  homeGameTimeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['Int']>;
  pattern?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  stadiumId?: Maybe<Scalars['Int']>;
};

export type ClubMinOrderByAggregateInput = {
  abbreviation?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  clubBadgeId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  divisionId?: InputMaybe<SortOrder>;
  escrow?: InputMaybe<SortOrder>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  pattern?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
};

export type ClubOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubSumOrderByAggregateInput>;
  abbreviation?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  clubBadgeId?: InputMaybe<SortOrder>;
  colours?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  divisionId?: InputMaybe<SortOrder>;
  escrow?: InputMaybe<SortOrder>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  pattern?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
};

export type ClubOrderByWithRelationInput = {
  abbreviation?: InputMaybe<SortOrder>;
  academies?: InputMaybe<AcademyOrderByRelationAggregateInput>;
  actions?: InputMaybe<ActionOrderByRelationAggregateInput>;
  balances?: InputMaybe<ClubBalanceOrderByRelationAggregateInput>;
  city?: InputMaybe<SortOrder>;
  clubBadge?: InputMaybe<ClubBadgeOrderByWithRelationInput>;
  clubBadgeId?: InputMaybe<SortOrder>;
  clubFixtures?: InputMaybe<ClubFixtureOrderByRelationAggregateInput>;
  clubTournaments?: InputMaybe<ClubTournamentOrderByRelationAggregateInput>;
  colours?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  division?: InputMaybe<DivisionOrderByWithRelationInput>;
  divisionId?: InputMaybe<SortOrder>;
  escrow?: InputMaybe<SortOrder>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeOrderByWithRelationInput>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kits?: InputMaybe<KitOrderByRelationAggregateInput>;
  lineups?: InputMaybe<LineupOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  newsItems?: InputMaybe<NewsItemOrderByRelationAggregateInput>;
  originPlayers?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  owner?: InputMaybe<OwnerOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  pattern?: InputMaybe<SortOrder>;
  playerAttributes?: InputMaybe<PlayerAttributesOrderByRelationAggregateInput>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  seed?: InputMaybe<SortOrder>;
  stadium?: InputMaybe<StadiumOrderByWithRelationInput>;
  stadiumId?: InputMaybe<SortOrder>;
  stats?: InputMaybe<ClubStatsOrderByRelationAggregateInput>;
};

export type ClubRelationFilter = {
  is?: InputMaybe<ClubWhereInput>;
  isNot?: InputMaybe<ClubWhereInput>;
};

export enum ClubScalarFieldEnum {
  Abbreviation = 'abbreviation',
  City = 'city',
  ClubBadgeId = 'clubBadgeId',
  Colours = 'colours',
  Description = 'description',
  DivisionId = 'divisionId',
  Escrow = 'escrow',
  HomeGameTimeId = 'homeGameTimeId',
  Id = 'id',
  Name = 'name',
  OwnerId = 'ownerId',
  Pattern = 'pattern',
  Seed = 'seed',
  StadiumId = 'stadiumId'
}

export type ClubScalarWhereInput = {
  AND?: InputMaybe<Array<ClubScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubScalarWhereInput>>;
  abbreviation?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  clubBadgeId?: InputMaybe<IntFilter>;
  colours?: InputMaybe<JsonFilter>;
  description?: InputMaybe<StringFilter>;
  divisionId?: InputMaybe<IntFilter>;
  escrow?: InputMaybe<StringNullableFilter>;
  homeGameTimeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<IntFilter>;
  pattern?: InputMaybe<StringFilter>;
  seed?: InputMaybe<StringFilter>;
  stadiumId?: InputMaybe<IntFilter>;
};

export type ClubScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  abbreviation?: InputMaybe<StringWithAggregatesFilter>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  clubBadgeId?: InputMaybe<IntWithAggregatesFilter>;
  colours?: InputMaybe<JsonWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  divisionId?: InputMaybe<IntWithAggregatesFilter>;
  escrow?: InputMaybe<StringNullableWithAggregatesFilter>;
  homeGameTimeId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  ownerId?: InputMaybe<IntWithAggregatesFilter>;
  pattern?: InputMaybe<StringWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  stadiumId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubStats = {
  __typename?: 'ClubStats';
  assists: Scalars['Int'];
  attemptedDribbles: Scalars['Int'];
  attemptedPasses: Scalars['Int'];
  backHeelShots: Scalars['Int'];
  blocks: Scalars['Int'];
  carries: Scalars['Int'];
  clearances: Scalars['Int'];
  club: Club;
  clubFixture?: Maybe<ClubFixture>;
  clubId: Scalars['Int'];
  clubTournament?: Maybe<ClubTournament>;
  completedDribbles: Scalars['Int'];
  completedPasses: Scalars['Int'];
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots: Scalars['Int'];
  draws: Scalars['Int'];
  dribbleSuccessRate?: Maybe<Scalars['Float']>;
  duelsLost: Scalars['Int'];
  duelsWon: Scalars['Int'];
  failedInterceptions: Scalars['Int'];
  fiftyFiftiesLost: Scalars['Int'];
  fiftyFiftiesWon: Scalars['Int'];
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses: Scalars['Int'];
  halfVolleyShots: Scalars['Int'];
  id: Scalars['Int'];
  interceptedPasses: Scalars['Int'];
  interceptions: Scalars['Int'];
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots: Scalars['Int'];
  losses: Scalars['Int'];
  normalShots: Scalars['Int'];
  offsidePasses: Scalars['Int'];
  offsides: Scalars['Int'];
  overheadKickShots: Scalars['Int'];
  passAccuracy?: Maybe<Scalars['Float']>;
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo: Scalars['JSON'];
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotAccuracy?: Maybe<Scalars['Float']>;
  shotsBlocked: Scalars['Int'];
  shotsFromInsideTheBox: Scalars['Int'];
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted: Scalars['Int'];
  tacklesReceived: Scalars['Int'];
  volleyShots: Scalars['Int'];
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsAvgAggregate = {
  __typename?: 'ClubStatsAvgAggregate';
  assists?: Maybe<Scalars['Float']>;
  attemptedDribbles?: Maybe<Scalars['Float']>;
  attemptedPasses?: Maybe<Scalars['Float']>;
  backHeelShots?: Maybe<Scalars['Float']>;
  blocks?: Maybe<Scalars['Float']>;
  carries?: Maybe<Scalars['Float']>;
  clearances?: Maybe<Scalars['Float']>;
  clubId?: Maybe<Scalars['Float']>;
  completedDribbles?: Maybe<Scalars['Float']>;
  completedPasses?: Maybe<Scalars['Float']>;
  consecutiveInGameLineupSet?: Maybe<Scalars['Float']>;
  consecutiveNotMakingInGameLineupSet?: Maybe<Scalars['Float']>;
  consecutiveNotMakingPreGameLineupSet?: Maybe<Scalars['Float']>;
  consecutivePreGameLineupSet?: Maybe<Scalars['Float']>;
  corners?: Maybe<Scalars['Float']>;
  crosses?: Maybe<Scalars['Float']>;
  divingHeaderShots?: Maybe<Scalars['Float']>;
  draws?: Maybe<Scalars['Float']>;
  duelsLost?: Maybe<Scalars['Float']>;
  duelsWon?: Maybe<Scalars['Float']>;
  failedInterceptions?: Maybe<Scalars['Float']>;
  fiftyFiftiesLost?: Maybe<Scalars['Float']>;
  fiftyFiftiesWon?: Maybe<Scalars['Float']>;
  fouls?: Maybe<Scalars['Float']>;
  freeKicks?: Maybe<Scalars['Float']>;
  freeKicksScored?: Maybe<Scalars['Float']>;
  games?: Maybe<Scalars['Float']>;
  gkSaves?: Maybe<Scalars['Float']>;
  goals?: Maybe<Scalars['Float']>;
  goalsAgainst?: Maybe<Scalars['Float']>;
  groundPasses?: Maybe<Scalars['Float']>;
  halfVolleyShots?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interceptedPasses?: Maybe<Scalars['Float']>;
  interceptions?: Maybe<Scalars['Float']>;
  lastInGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lastPreGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lobShots?: Maybe<Scalars['Float']>;
  losses?: Maybe<Scalars['Float']>;
  normalShots?: Maybe<Scalars['Float']>;
  offsidePasses?: Maybe<Scalars['Float']>;
  offsides?: Maybe<Scalars['Float']>;
  overheadKickShots?: Maybe<Scalars['Float']>;
  passes?: Maybe<Scalars['Float']>;
  penalties?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  possession?: Maybe<Scalars['Float']>;
  possessionWon?: Maybe<Scalars['Float']>;
  redCards?: Maybe<Scalars['Float']>;
  shotsBlocked?: Maybe<Scalars['Float']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Float']>;
  shotsOffTarget?: Maybe<Scalars['Float']>;
  shotsOnTarget?: Maybe<Scalars['Float']>;
  tacklesExecuted?: Maybe<Scalars['Float']>;
  tacklesReceived?: Maybe<Scalars['Float']>;
  volleyShots?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
  yellowCards?: Maybe<Scalars['Float']>;
};

export type ClubStatsAvgOrderByAggregateInput = {
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penalties?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsCountAggregate = {
  __typename?: 'ClubStatsCountAggregate';
  _all: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles: Scalars['Int'];
  attemptedPasses: Scalars['Int'];
  backHeelShots: Scalars['Int'];
  blocks: Scalars['Int'];
  carries: Scalars['Int'];
  clearances: Scalars['Int'];
  clubId: Scalars['Int'];
  completedDribbles: Scalars['Int'];
  completedPasses: Scalars['Int'];
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots: Scalars['Int'];
  draws: Scalars['Int'];
  duelsLost: Scalars['Int'];
  duelsWon: Scalars['Int'];
  failedInterceptions: Scalars['Int'];
  fiftyFiftiesLost: Scalars['Int'];
  fiftyFiftiesWon: Scalars['Int'];
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses: Scalars['Int'];
  halfVolleyShots: Scalars['Int'];
  id: Scalars['Int'];
  interceptedPasses: Scalars['Int'];
  interceptions: Scalars['Int'];
  lastInGameLineupSetTimestamp: Scalars['Int'];
  lastPreGameLineupSetTimestamp: Scalars['Int'];
  lobShots: Scalars['Int'];
  losses: Scalars['Int'];
  normalShots: Scalars['Int'];
  offsidePasses: Scalars['Int'];
  offsides: Scalars['Int'];
  overheadKickShots: Scalars['Int'];
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Int'];
  possessionInfo: Scalars['Int'];
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked: Scalars['Int'];
  shotsFromInsideTheBox: Scalars['Int'];
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted: Scalars['Int'];
  tacklesReceived: Scalars['Int'];
  volleyShots: Scalars['Int'];
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsCountOrderByAggregateInput = {
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penalties?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionInfo?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsCreateInput = {
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses?: InputMaybe<Scalars['Int']>;
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutStatsInput;
  clubFixture?: InputMaybe<ClubFixtureCreateNestedOneWithoutClubStatsInput>;
  clubTournament?: InputMaybe<ClubTournamentCreateNestedOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  draws: Scalars['Int'];
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots?: InputMaybe<Scalars['Int']>;
  losses: Scalars['Int'];
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsCreateManyClubInput = {
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses?: InputMaybe<Scalars['Int']>;
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  draws: Scalars['Int'];
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots?: InputMaybe<Scalars['Int']>;
  losses: Scalars['Int'];
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsCreateManyClubInputEnvelope = {
  data: Array<ClubStatsCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubStatsCreateManyInput = {
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses?: InputMaybe<Scalars['Int']>;
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  draws: Scalars['Int'];
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots?: InputMaybe<Scalars['Int']>;
  losses: Scalars['Int'];
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubStatsCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubStatsCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubStatsCreateManyClubInputEnvelope>;
};

export type ClubStatsCreateNestedOneWithoutClubFixtureInput = {
  connect?: InputMaybe<ClubStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubStatsCreateOrConnectWithoutClubFixtureInput>;
  create?: InputMaybe<ClubStatsCreateWithoutClubFixtureInput>;
};

export type ClubStatsCreateNestedOneWithoutClubTournamentInput = {
  connect?: InputMaybe<ClubStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubStatsCreateOrConnectWithoutClubTournamentInput>;
  create?: InputMaybe<ClubStatsCreateWithoutClubTournamentInput>;
};

export type ClubStatsCreateOrConnectWithoutClubFixtureInput = {
  create: ClubStatsCreateWithoutClubFixtureInput;
  where: ClubStatsWhereUniqueInput;
};

export type ClubStatsCreateOrConnectWithoutClubInput = {
  create: ClubStatsCreateWithoutClubInput;
  where: ClubStatsWhereUniqueInput;
};

export type ClubStatsCreateOrConnectWithoutClubTournamentInput = {
  create: ClubStatsCreateWithoutClubTournamentInput;
  where: ClubStatsWhereUniqueInput;
};

export type ClubStatsCreateWithoutClubFixtureInput = {
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses?: InputMaybe<Scalars['Int']>;
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutStatsInput;
  clubTournament?: InputMaybe<ClubTournamentCreateNestedOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  draws: Scalars['Int'];
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots?: InputMaybe<Scalars['Int']>;
  losses: Scalars['Int'];
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsCreateWithoutClubInput = {
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses?: InputMaybe<Scalars['Int']>;
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  clubFixture?: InputMaybe<ClubFixtureCreateNestedOneWithoutClubStatsInput>;
  clubTournament?: InputMaybe<ClubTournamentCreateNestedOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  draws: Scalars['Int'];
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots?: InputMaybe<Scalars['Int']>;
  losses: Scalars['Int'];
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsCreateWithoutClubTournamentInput = {
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses?: InputMaybe<Scalars['Int']>;
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutStatsInput;
  clubFixture?: InputMaybe<ClubFixtureCreateNestedOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  draws: Scalars['Int'];
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots?: InputMaybe<Scalars['Int']>;
  losses: Scalars['Int'];
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsGroupBy = {
  __typename?: 'ClubStatsGroupBy';
  _avg?: Maybe<ClubStatsAvgAggregate>;
  _count?: Maybe<ClubStatsCountAggregate>;
  _max?: Maybe<ClubStatsMaxAggregate>;
  _min?: Maybe<ClubStatsMinAggregate>;
  _sum?: Maybe<ClubStatsSumAggregate>;
  assists: Scalars['Int'];
  attemptedDribbles: Scalars['Int'];
  attemptedPasses: Scalars['Int'];
  backHeelShots: Scalars['Int'];
  blocks: Scalars['Int'];
  carries: Scalars['Int'];
  clearances: Scalars['Int'];
  clubId: Scalars['Int'];
  completedDribbles: Scalars['Int'];
  completedPasses: Scalars['Int'];
  consecutiveInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingInGameLineupSet: Scalars['Int'];
  consecutiveNotMakingPreGameLineupSet: Scalars['Int'];
  consecutivePreGameLineupSet: Scalars['Int'];
  corners: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots: Scalars['Int'];
  draws: Scalars['Int'];
  duelsLost: Scalars['Int'];
  duelsWon: Scalars['Int'];
  failedInterceptions: Scalars['Int'];
  fiftyFiftiesLost: Scalars['Int'];
  fiftyFiftiesWon: Scalars['Int'];
  fouls: Scalars['Int'];
  freeKicks: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  games: Scalars['Int'];
  gkSaves: Scalars['Int'];
  goals: Scalars['Int'];
  goalsAgainst: Scalars['Int'];
  groundPasses: Scalars['Int'];
  halfVolleyShots: Scalars['Int'];
  id: Scalars['Int'];
  interceptedPasses: Scalars['Int'];
  interceptions: Scalars['Int'];
  lastInGameLineupSetTimestamp: Scalars['Float'];
  lastPreGameLineupSetTimestamp: Scalars['Float'];
  lobShots: Scalars['Int'];
  losses: Scalars['Int'];
  normalShots: Scalars['Int'];
  offsidePasses: Scalars['Int'];
  offsides: Scalars['Int'];
  overheadKickShots: Scalars['Int'];
  passes: Scalars['Int'];
  penalties: Scalars['Int'];
  points: Scalars['Int'];
  possession: Scalars['Float'];
  possessionInfo: Scalars['JSON'];
  possessionWon: Scalars['Int'];
  redCards: Scalars['Int'];
  shotsBlocked: Scalars['Int'];
  shotsFromInsideTheBox: Scalars['Int'];
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted: Scalars['Int'];
  tacklesReceived: Scalars['Int'];
  volleyShots: Scalars['Int'];
  wins: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type ClubStatsListRelationFilter = {
  every?: InputMaybe<ClubStatsWhereInput>;
  none?: InputMaybe<ClubStatsWhereInput>;
  some?: InputMaybe<ClubStatsWhereInput>;
};

export type ClubStatsMaxAggregate = {
  __typename?: 'ClubStatsMaxAggregate';
  assists?: Maybe<Scalars['Int']>;
  attemptedDribbles?: Maybe<Scalars['Int']>;
  attemptedPasses?: Maybe<Scalars['Int']>;
  backHeelShots?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  carries?: Maybe<Scalars['Int']>;
  clearances?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  completedDribbles?: Maybe<Scalars['Int']>;
  completedPasses?: Maybe<Scalars['Int']>;
  consecutiveInGameLineupSet?: Maybe<Scalars['Int']>;
  consecutiveNotMakingInGameLineupSet?: Maybe<Scalars['Int']>;
  consecutiveNotMakingPreGameLineupSet?: Maybe<Scalars['Int']>;
  consecutivePreGameLineupSet?: Maybe<Scalars['Int']>;
  corners?: Maybe<Scalars['Int']>;
  crosses?: Maybe<Scalars['Int']>;
  divingHeaderShots?: Maybe<Scalars['Int']>;
  draws?: Maybe<Scalars['Int']>;
  duelsLost?: Maybe<Scalars['Int']>;
  duelsWon?: Maybe<Scalars['Int']>;
  failedInterceptions?: Maybe<Scalars['Int']>;
  fiftyFiftiesLost?: Maybe<Scalars['Int']>;
  fiftyFiftiesWon?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  freeKicks?: Maybe<Scalars['Int']>;
  freeKicksScored?: Maybe<Scalars['Int']>;
  games?: Maybe<Scalars['Int']>;
  gkSaves?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsAgainst?: Maybe<Scalars['Int']>;
  groundPasses?: Maybe<Scalars['Int']>;
  halfVolleyShots?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interceptedPasses?: Maybe<Scalars['Int']>;
  interceptions?: Maybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lastPreGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lobShots?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  normalShots?: Maybe<Scalars['Int']>;
  offsidePasses?: Maybe<Scalars['Int']>;
  offsides?: Maybe<Scalars['Int']>;
  overheadKickShots?: Maybe<Scalars['Int']>;
  passes?: Maybe<Scalars['Int']>;
  penalties?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  possession?: Maybe<Scalars['Float']>;
  possessionWon?: Maybe<Scalars['Int']>;
  redCards?: Maybe<Scalars['Int']>;
  shotsBlocked?: Maybe<Scalars['Int']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Int']>;
  shotsOffTarget?: Maybe<Scalars['Int']>;
  shotsOnTarget?: Maybe<Scalars['Int']>;
  tacklesExecuted?: Maybe<Scalars['Int']>;
  tacklesReceived?: Maybe<Scalars['Int']>;
  volleyShots?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
  yellowCards?: Maybe<Scalars['Int']>;
};

export type ClubStatsMaxOrderByAggregateInput = {
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penalties?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsMinAggregate = {
  __typename?: 'ClubStatsMinAggregate';
  assists?: Maybe<Scalars['Int']>;
  attemptedDribbles?: Maybe<Scalars['Int']>;
  attemptedPasses?: Maybe<Scalars['Int']>;
  backHeelShots?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  carries?: Maybe<Scalars['Int']>;
  clearances?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  completedDribbles?: Maybe<Scalars['Int']>;
  completedPasses?: Maybe<Scalars['Int']>;
  consecutiveInGameLineupSet?: Maybe<Scalars['Int']>;
  consecutiveNotMakingInGameLineupSet?: Maybe<Scalars['Int']>;
  consecutiveNotMakingPreGameLineupSet?: Maybe<Scalars['Int']>;
  consecutivePreGameLineupSet?: Maybe<Scalars['Int']>;
  corners?: Maybe<Scalars['Int']>;
  crosses?: Maybe<Scalars['Int']>;
  divingHeaderShots?: Maybe<Scalars['Int']>;
  draws?: Maybe<Scalars['Int']>;
  duelsLost?: Maybe<Scalars['Int']>;
  duelsWon?: Maybe<Scalars['Int']>;
  failedInterceptions?: Maybe<Scalars['Int']>;
  fiftyFiftiesLost?: Maybe<Scalars['Int']>;
  fiftyFiftiesWon?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  freeKicks?: Maybe<Scalars['Int']>;
  freeKicksScored?: Maybe<Scalars['Int']>;
  games?: Maybe<Scalars['Int']>;
  gkSaves?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsAgainst?: Maybe<Scalars['Int']>;
  groundPasses?: Maybe<Scalars['Int']>;
  halfVolleyShots?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interceptedPasses?: Maybe<Scalars['Int']>;
  interceptions?: Maybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lastPreGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lobShots?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  normalShots?: Maybe<Scalars['Int']>;
  offsidePasses?: Maybe<Scalars['Int']>;
  offsides?: Maybe<Scalars['Int']>;
  overheadKickShots?: Maybe<Scalars['Int']>;
  passes?: Maybe<Scalars['Int']>;
  penalties?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  possession?: Maybe<Scalars['Float']>;
  possessionWon?: Maybe<Scalars['Int']>;
  redCards?: Maybe<Scalars['Int']>;
  shotsBlocked?: Maybe<Scalars['Int']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Int']>;
  shotsOffTarget?: Maybe<Scalars['Int']>;
  shotsOnTarget?: Maybe<Scalars['Int']>;
  tacklesExecuted?: Maybe<Scalars['Int']>;
  tacklesReceived?: Maybe<Scalars['Int']>;
  volleyShots?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
  yellowCards?: Maybe<Scalars['Int']>;
};

export type ClubStatsMinOrderByAggregateInput = {
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penalties?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubStatsOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubStatsAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubStatsCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubStatsMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubStatsMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubStatsSumOrderByAggregateInput>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penalties?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionInfo?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsOrderByWithRelationInput = {
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubFixture?: InputMaybe<ClubFixtureOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  clubTournament?: InputMaybe<ClubTournamentOrderByWithRelationInput>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penalties?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionInfo?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsRelationFilter = {
  is?: InputMaybe<ClubStatsWhereInput>;
  isNot?: InputMaybe<ClubStatsWhereInput>;
};

export enum ClubStatsScalarFieldEnum {
  Assists = 'assists',
  AttemptedDribbles = 'attemptedDribbles',
  AttemptedPasses = 'attemptedPasses',
  BackHeelShots = 'backHeelShots',
  Blocks = 'blocks',
  Carries = 'carries',
  Clearances = 'clearances',
  ClubId = 'clubId',
  CompletedDribbles = 'completedDribbles',
  CompletedPasses = 'completedPasses',
  ConsecutiveInGameLineupSet = 'consecutiveInGameLineupSet',
  ConsecutiveNotMakingInGameLineupSet = 'consecutiveNotMakingInGameLineupSet',
  ConsecutiveNotMakingPreGameLineupSet = 'consecutiveNotMakingPreGameLineupSet',
  ConsecutivePreGameLineupSet = 'consecutivePreGameLineupSet',
  Corners = 'corners',
  Crosses = 'crosses',
  DivingHeaderShots = 'divingHeaderShots',
  Draws = 'draws',
  DuelsLost = 'duelsLost',
  DuelsWon = 'duelsWon',
  FailedInterceptions = 'failedInterceptions',
  FiftyFiftiesLost = 'fiftyFiftiesLost',
  FiftyFiftiesWon = 'fiftyFiftiesWon',
  Fouls = 'fouls',
  FreeKicks = 'freeKicks',
  FreeKicksScored = 'freeKicksScored',
  Games = 'games',
  GkSaves = 'gkSaves',
  Goals = 'goals',
  GoalsAgainst = 'goalsAgainst',
  GroundPasses = 'groundPasses',
  HalfVolleyShots = 'halfVolleyShots',
  Id = 'id',
  InterceptedPasses = 'interceptedPasses',
  Interceptions = 'interceptions',
  LastInGameLineupSetTimestamp = 'lastInGameLineupSetTimestamp',
  LastPreGameLineupSetTimestamp = 'lastPreGameLineupSetTimestamp',
  LobShots = 'lobShots',
  Losses = 'losses',
  NormalShots = 'normalShots',
  OffsidePasses = 'offsidePasses',
  Offsides = 'offsides',
  OverheadKickShots = 'overheadKickShots',
  Passes = 'passes',
  Penalties = 'penalties',
  Points = 'points',
  Possession = 'possession',
  PossessionInfo = 'possessionInfo',
  PossessionWon = 'possessionWon',
  RedCards = 'redCards',
  ShotsBlocked = 'shotsBlocked',
  ShotsFromInsideTheBox = 'shotsFromInsideTheBox',
  ShotsOffTarget = 'shotsOffTarget',
  ShotsOnTarget = 'shotsOnTarget',
  TacklesExecuted = 'tacklesExecuted',
  TacklesReceived = 'tacklesReceived',
  VolleyShots = 'volleyShots',
  Wins = 'wins',
  YellowCards = 'yellowCards'
}

export type ClubStatsScalarWhereInput = {
  AND?: InputMaybe<Array<ClubStatsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubStatsScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubStatsScalarWhereInput>>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  clubId?: InputMaybe<IntFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  consecutiveInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFilter>;
  consecutivePreGameLineupSet?: InputMaybe<IntFilter>;
  corners?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  draws?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicks?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  games?: InputMaybe<IntFilter>;
  gkSaves?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsAgainst?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lobShots?: InputMaybe<IntFilter>;
  losses?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  passes?: InputMaybe<IntFilter>;
  penalties?: InputMaybe<IntFilter>;
  points?: InputMaybe<IntFilter>;
  possession?: InputMaybe<FloatFilter>;
  possessionInfo?: InputMaybe<JsonFilter>;
  possessionWon?: InputMaybe<IntFilter>;
  redCards?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  wins?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type ClubStatsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubStatsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubStatsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubStatsScalarWhereWithAggregatesInput>>;
  assists?: InputMaybe<IntWithAggregatesFilter>;
  attemptedDribbles?: InputMaybe<IntWithAggregatesFilter>;
  attemptedPasses?: InputMaybe<IntWithAggregatesFilter>;
  backHeelShots?: InputMaybe<IntWithAggregatesFilter>;
  blocks?: InputMaybe<IntWithAggregatesFilter>;
  carries?: InputMaybe<IntWithAggregatesFilter>;
  clearances?: InputMaybe<IntWithAggregatesFilter>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  completedDribbles?: InputMaybe<IntWithAggregatesFilter>;
  completedPasses?: InputMaybe<IntWithAggregatesFilter>;
  consecutiveInGameLineupSet?: InputMaybe<IntWithAggregatesFilter>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntWithAggregatesFilter>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntWithAggregatesFilter>;
  consecutivePreGameLineupSet?: InputMaybe<IntWithAggregatesFilter>;
  corners?: InputMaybe<IntWithAggregatesFilter>;
  crosses?: InputMaybe<IntWithAggregatesFilter>;
  divingHeaderShots?: InputMaybe<IntWithAggregatesFilter>;
  draws?: InputMaybe<IntWithAggregatesFilter>;
  duelsLost?: InputMaybe<IntWithAggregatesFilter>;
  duelsWon?: InputMaybe<IntWithAggregatesFilter>;
  failedInterceptions?: InputMaybe<IntWithAggregatesFilter>;
  fiftyFiftiesLost?: InputMaybe<IntWithAggregatesFilter>;
  fiftyFiftiesWon?: InputMaybe<IntWithAggregatesFilter>;
  fouls?: InputMaybe<IntWithAggregatesFilter>;
  freeKicks?: InputMaybe<IntWithAggregatesFilter>;
  freeKicksScored?: InputMaybe<IntWithAggregatesFilter>;
  games?: InputMaybe<IntWithAggregatesFilter>;
  gkSaves?: InputMaybe<IntWithAggregatesFilter>;
  goals?: InputMaybe<IntWithAggregatesFilter>;
  goalsAgainst?: InputMaybe<IntWithAggregatesFilter>;
  groundPasses?: InputMaybe<IntWithAggregatesFilter>;
  halfVolleyShots?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  interceptedPasses?: InputMaybe<IntWithAggregatesFilter>;
  interceptions?: InputMaybe<IntWithAggregatesFilter>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  lobShots?: InputMaybe<IntWithAggregatesFilter>;
  losses?: InputMaybe<IntWithAggregatesFilter>;
  normalShots?: InputMaybe<IntWithAggregatesFilter>;
  offsidePasses?: InputMaybe<IntWithAggregatesFilter>;
  offsides?: InputMaybe<IntWithAggregatesFilter>;
  overheadKickShots?: InputMaybe<IntWithAggregatesFilter>;
  passes?: InputMaybe<IntWithAggregatesFilter>;
  penalties?: InputMaybe<IntWithAggregatesFilter>;
  points?: InputMaybe<IntWithAggregatesFilter>;
  possession?: InputMaybe<FloatWithAggregatesFilter>;
  possessionInfo?: InputMaybe<JsonWithAggregatesFilter>;
  possessionWon?: InputMaybe<IntWithAggregatesFilter>;
  redCards?: InputMaybe<IntWithAggregatesFilter>;
  shotsBlocked?: InputMaybe<IntWithAggregatesFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntWithAggregatesFilter>;
  shotsOffTarget?: InputMaybe<IntWithAggregatesFilter>;
  shotsOnTarget?: InputMaybe<IntWithAggregatesFilter>;
  tacklesExecuted?: InputMaybe<IntWithAggregatesFilter>;
  tacklesReceived?: InputMaybe<IntWithAggregatesFilter>;
  volleyShots?: InputMaybe<IntWithAggregatesFilter>;
  wins?: InputMaybe<IntWithAggregatesFilter>;
  yellowCards?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubStatsSumAggregate = {
  __typename?: 'ClubStatsSumAggregate';
  assists?: Maybe<Scalars['Int']>;
  attemptedDribbles?: Maybe<Scalars['Int']>;
  attemptedPasses?: Maybe<Scalars['Int']>;
  backHeelShots?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  carries?: Maybe<Scalars['Int']>;
  clearances?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  completedDribbles?: Maybe<Scalars['Int']>;
  completedPasses?: Maybe<Scalars['Int']>;
  consecutiveInGameLineupSet?: Maybe<Scalars['Int']>;
  consecutiveNotMakingInGameLineupSet?: Maybe<Scalars['Int']>;
  consecutiveNotMakingPreGameLineupSet?: Maybe<Scalars['Int']>;
  consecutivePreGameLineupSet?: Maybe<Scalars['Int']>;
  corners?: Maybe<Scalars['Int']>;
  crosses?: Maybe<Scalars['Int']>;
  divingHeaderShots?: Maybe<Scalars['Int']>;
  draws?: Maybe<Scalars['Int']>;
  duelsLost?: Maybe<Scalars['Int']>;
  duelsWon?: Maybe<Scalars['Int']>;
  failedInterceptions?: Maybe<Scalars['Int']>;
  fiftyFiftiesLost?: Maybe<Scalars['Int']>;
  fiftyFiftiesWon?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  freeKicks?: Maybe<Scalars['Int']>;
  freeKicksScored?: Maybe<Scalars['Int']>;
  games?: Maybe<Scalars['Int']>;
  gkSaves?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsAgainst?: Maybe<Scalars['Int']>;
  groundPasses?: Maybe<Scalars['Int']>;
  halfVolleyShots?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interceptedPasses?: Maybe<Scalars['Int']>;
  interceptions?: Maybe<Scalars['Int']>;
  lastInGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lastPreGameLineupSetTimestamp?: Maybe<Scalars['Float']>;
  lobShots?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  normalShots?: Maybe<Scalars['Int']>;
  offsidePasses?: Maybe<Scalars['Int']>;
  offsides?: Maybe<Scalars['Int']>;
  overheadKickShots?: Maybe<Scalars['Int']>;
  passes?: Maybe<Scalars['Int']>;
  penalties?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  possession?: Maybe<Scalars['Float']>;
  possessionWon?: Maybe<Scalars['Int']>;
  redCards?: Maybe<Scalars['Int']>;
  shotsBlocked?: Maybe<Scalars['Int']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Int']>;
  shotsOffTarget?: Maybe<Scalars['Int']>;
  shotsOnTarget?: Maybe<Scalars['Int']>;
  tacklesExecuted?: Maybe<Scalars['Int']>;
  tacklesReceived?: Maybe<Scalars['Int']>;
  volleyShots?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
  yellowCards?: Maybe<Scalars['Int']>;
};

export type ClubStatsSumOrderByAggregateInput = {
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  consecutiveInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<SortOrder>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<SortOrder>;
  consecutivePreGameLineupSet?: InputMaybe<SortOrder>;
  corners?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  draws?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicks?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  gkSaves?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsAgainst?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lastInGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lastPreGameLineupSetTimestamp?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  losses?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  passes?: InputMaybe<SortOrder>;
  penalties?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  possession?: InputMaybe<SortOrder>;
  possessionWon?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  wins?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type ClubStatsUpdateInput = {
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutStatsInput>;
  clubFixture?: InputMaybe<ClubFixtureUpdateOneWithoutClubStatsInput>;
  clubTournament?: InputMaybe<ClubTournamentUpdateOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutivePreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  corners?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  draws?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  games?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkSaves?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsAgainst?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  losses?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  passes?: InputMaybe<IntFieldUpdateOperationsInput>;
  penalties?: InputMaybe<IntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  possession?: InputMaybe<FloatFieldUpdateOperationsInput>;
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  wins?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubStatsUpdateManyMutationInput = {
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutivePreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  corners?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  draws?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  games?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkSaves?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsAgainst?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  losses?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  passes?: InputMaybe<IntFieldUpdateOperationsInput>;
  penalties?: InputMaybe<IntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  possession?: InputMaybe<FloatFieldUpdateOperationsInput>;
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  wins?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubStatsUpdateManyWithWhereWithoutClubInput = {
  data: ClubStatsUpdateManyMutationInput;
  where: ClubStatsScalarWhereInput;
};

export type ClubStatsUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubStatsCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubStatsCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubStatsCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubStatsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubStatsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubStatsWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubStatsWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubStatsUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubStatsUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubStatsUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubStatsUpdateOneRequiredWithoutClubFixtureInput = {
  connect?: InputMaybe<ClubStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubStatsCreateOrConnectWithoutClubFixtureInput>;
  create?: InputMaybe<ClubStatsCreateWithoutClubFixtureInput>;
  update?: InputMaybe<ClubStatsUpdateWithoutClubFixtureInput>;
  upsert?: InputMaybe<ClubStatsUpsertWithoutClubFixtureInput>;
};

export type ClubStatsUpdateOneRequiredWithoutClubTournamentInput = {
  connect?: InputMaybe<ClubStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubStatsCreateOrConnectWithoutClubTournamentInput>;
  create?: InputMaybe<ClubStatsCreateWithoutClubTournamentInput>;
  update?: InputMaybe<ClubStatsUpdateWithoutClubTournamentInput>;
  upsert?: InputMaybe<ClubStatsUpsertWithoutClubTournamentInput>;
};

export type ClubStatsUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubStatsUpdateWithoutClubInput;
  where: ClubStatsWhereUniqueInput;
};

export type ClubStatsUpdateWithoutClubFixtureInput = {
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutStatsInput>;
  clubTournament?: InputMaybe<ClubTournamentUpdateOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutivePreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  corners?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  draws?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  games?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkSaves?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsAgainst?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  losses?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  passes?: InputMaybe<IntFieldUpdateOperationsInput>;
  penalties?: InputMaybe<IntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  possession?: InputMaybe<FloatFieldUpdateOperationsInput>;
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  wins?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubStatsUpdateWithoutClubInput = {
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  clubFixture?: InputMaybe<ClubFixtureUpdateOneWithoutClubStatsInput>;
  clubTournament?: InputMaybe<ClubTournamentUpdateOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutivePreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  corners?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  draws?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  games?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkSaves?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsAgainst?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  losses?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  passes?: InputMaybe<IntFieldUpdateOperationsInput>;
  penalties?: InputMaybe<IntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  possession?: InputMaybe<FloatFieldUpdateOperationsInput>;
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  wins?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubStatsUpdateWithoutClubTournamentInput = {
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutStatsInput>;
  clubFixture?: InputMaybe<ClubFixtureUpdateOneWithoutClubStatsInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  consecutivePreGameLineupSet?: InputMaybe<IntFieldUpdateOperationsInput>;
  corners?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  draws?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  games?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkSaves?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsAgainst?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  losses?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  passes?: InputMaybe<IntFieldUpdateOperationsInput>;
  penalties?: InputMaybe<IntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  possession?: InputMaybe<FloatFieldUpdateOperationsInput>;
  possessionInfo?: InputMaybe<Scalars['JSON']>;
  possessionWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  wins?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubStatsUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubStatsCreateWithoutClubInput;
  update: ClubStatsUpdateWithoutClubInput;
  where: ClubStatsWhereUniqueInput;
};

export type ClubStatsUpsertWithoutClubFixtureInput = {
  create: ClubStatsCreateWithoutClubFixtureInput;
  update: ClubStatsUpdateWithoutClubFixtureInput;
};

export type ClubStatsUpsertWithoutClubTournamentInput = {
  create: ClubStatsCreateWithoutClubTournamentInput;
  update: ClubStatsUpdateWithoutClubTournamentInput;
};

export type ClubStatsWhereInput = {
  AND?: InputMaybe<Array<ClubStatsWhereInput>>;
  NOT?: InputMaybe<Array<ClubStatsWhereInput>>;
  OR?: InputMaybe<Array<ClubStatsWhereInput>>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubFixture?: InputMaybe<ClubFixtureRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubTournament?: InputMaybe<ClubTournamentRelationFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  consecutiveInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingInGameLineupSet?: InputMaybe<IntFilter>;
  consecutiveNotMakingPreGameLineupSet?: InputMaybe<IntFilter>;
  consecutivePreGameLineupSet?: InputMaybe<IntFilter>;
  corners?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  draws?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicks?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  games?: InputMaybe<IntFilter>;
  gkSaves?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsAgainst?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  lastInGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lastPreGameLineupSetTimestamp?: InputMaybe<FloatFilter>;
  lobShots?: InputMaybe<IntFilter>;
  losses?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  passes?: InputMaybe<IntFilter>;
  penalties?: InputMaybe<IntFilter>;
  points?: InputMaybe<IntFilter>;
  possession?: InputMaybe<FloatFilter>;
  possessionInfo?: InputMaybe<JsonFilter>;
  possessionWon?: InputMaybe<IntFilter>;
  redCards?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  wins?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type ClubStatsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubSumAggregate = {
  __typename?: 'ClubSumAggregate';
  clubBadgeId?: Maybe<Scalars['Int']>;
  divisionId?: Maybe<Scalars['Int']>;
  homeGameTimeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  stadiumId?: Maybe<Scalars['Int']>;
};

export type ClubSumOrderByAggregateInput = {
  clubBadgeId?: InputMaybe<SortOrder>;
  divisionId?: InputMaybe<SortOrder>;
  homeGameTimeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
};

export type ClubTournament = {
  __typename?: 'ClubTournament';
  club: Club;
  clubId: Scalars['Int'];
  clubStats: ClubStats;
  clubStatsId: Scalars['Int'];
  id: Scalars['Int'];
  position: Scalars['Int'];
  tournament: Tournament;
  tournamentId: Scalars['Int'];
};

export type ClubTournamentAvgAggregate = {
  __typename?: 'ClubTournamentAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  clubStatsId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  tournamentId?: Maybe<Scalars['Float']>;
};

export type ClubTournamentAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type ClubTournamentCountAggregate = {
  __typename?: 'ClubTournamentCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  id: Scalars['Int'];
  position: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type ClubTournamentCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type ClubTournamentCreateInput = {
  club: ClubCreateNestedOneWithoutClubTournamentsInput;
  clubStats: ClubStatsCreateNestedOneWithoutClubTournamentInput;
  position: Scalars['Int'];
  tournament: TournamentCreateNestedOneWithoutClubTournamentsInput;
};

export type ClubTournamentCreateManyClubInput = {
  clubStatsId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  position: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type ClubTournamentCreateManyClubInputEnvelope = {
  data: Array<ClubTournamentCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubTournamentCreateManyInput = {
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  position: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type ClubTournamentCreateManyTournamentInput = {
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  position: Scalars['Int'];
};

export type ClubTournamentCreateManyTournamentInputEnvelope = {
  data: Array<ClubTournamentCreateManyTournamentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubTournamentCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTournamentCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubTournamentCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubTournamentCreateManyClubInputEnvelope>;
};

export type ClubTournamentCreateNestedManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTournamentCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<ClubTournamentCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<ClubTournamentCreateManyTournamentInputEnvelope>;
};

export type ClubTournamentCreateNestedOneWithoutClubStatsInput = {
  connect?: InputMaybe<ClubTournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubTournamentCreateOrConnectWithoutClubStatsInput>;
  create?: InputMaybe<ClubTournamentCreateWithoutClubStatsInput>;
};

export type ClubTournamentCreateOrConnectWithoutClubInput = {
  create: ClubTournamentCreateWithoutClubInput;
  where: ClubTournamentWhereUniqueInput;
};

export type ClubTournamentCreateOrConnectWithoutClubStatsInput = {
  create: ClubTournamentCreateWithoutClubStatsInput;
  where: ClubTournamentWhereUniqueInput;
};

export type ClubTournamentCreateOrConnectWithoutTournamentInput = {
  create: ClubTournamentCreateWithoutTournamentInput;
  where: ClubTournamentWhereUniqueInput;
};

export type ClubTournamentCreateWithoutClubInput = {
  clubStats: ClubStatsCreateNestedOneWithoutClubTournamentInput;
  position: Scalars['Int'];
  tournament: TournamentCreateNestedOneWithoutClubTournamentsInput;
};

export type ClubTournamentCreateWithoutClubStatsInput = {
  club: ClubCreateNestedOneWithoutClubTournamentsInput;
  position: Scalars['Int'];
  tournament: TournamentCreateNestedOneWithoutClubTournamentsInput;
};

export type ClubTournamentCreateWithoutTournamentInput = {
  club: ClubCreateNestedOneWithoutClubTournamentsInput;
  clubStats: ClubStatsCreateNestedOneWithoutClubTournamentInput;
  position: Scalars['Int'];
};

export type ClubTournamentGroupBy = {
  __typename?: 'ClubTournamentGroupBy';
  _avg?: Maybe<ClubTournamentAvgAggregate>;
  _count?: Maybe<ClubTournamentCountAggregate>;
  _max?: Maybe<ClubTournamentMaxAggregate>;
  _min?: Maybe<ClubTournamentMinAggregate>;
  _sum?: Maybe<ClubTournamentSumAggregate>;
  clubId: Scalars['Int'];
  clubStatsId: Scalars['Int'];
  id: Scalars['Int'];
  position: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type ClubTournamentListRelationFilter = {
  every?: InputMaybe<ClubTournamentWhereInput>;
  none?: InputMaybe<ClubTournamentWhereInput>;
  some?: InputMaybe<ClubTournamentWhereInput>;
};

export type ClubTournamentMaxAggregate = {
  __typename?: 'ClubTournamentMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  clubStatsId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type ClubTournamentMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type ClubTournamentMinAggregate = {
  __typename?: 'ClubTournamentMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  clubStatsId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type ClubTournamentMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type ClubTournamentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubTournamentOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubTournamentAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubTournamentCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubTournamentMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubTournamentMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubTournamentSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type ClubTournamentOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  clubStats?: InputMaybe<ClubStatsOrderByWithRelationInput>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type ClubTournamentRelationFilter = {
  is?: InputMaybe<ClubTournamentWhereInput>;
  isNot?: InputMaybe<ClubTournamentWhereInput>;
};

export enum ClubTournamentScalarFieldEnum {
  ClubId = 'clubId',
  ClubStatsId = 'clubStatsId',
  Id = 'id',
  Position = 'position',
  TournamentId = 'tournamentId'
}

export type ClubTournamentScalarWhereInput = {
  AND?: InputMaybe<Array<ClubTournamentScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubTournamentScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubTournamentScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  clubStatsId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  position?: InputMaybe<IntFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type ClubTournamentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubTournamentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubTournamentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubTournamentScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  clubStatsId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  position?: InputMaybe<IntWithAggregatesFilter>;
  tournamentId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubTournamentSumAggregate = {
  __typename?: 'ClubTournamentSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  clubStatsId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type ClubTournamentSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  clubStatsId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type ClubTournamentUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubTournamentsInput>;
  clubStats?: InputMaybe<ClubStatsUpdateOneRequiredWithoutClubTournamentInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutClubTournamentsInput>;
};

export type ClubTournamentUpdateManyMutationInput = {
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubTournamentUpdateManyWithWhereWithoutClubInput = {
  data: ClubTournamentUpdateManyMutationInput;
  where: ClubTournamentScalarWhereInput;
};

export type ClubTournamentUpdateManyWithWhereWithoutTournamentInput = {
  data: ClubTournamentUpdateManyMutationInput;
  where: ClubTournamentScalarWhereInput;
};

export type ClubTournamentUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTournamentCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubTournamentCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubTournamentCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubTournamentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubTournamentUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubTournamentUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubTournamentUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubTournamentUpdateManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTournamentCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<ClubTournamentCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<ClubTournamentCreateManyTournamentInputEnvelope>;
  delete?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubTournamentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubTournamentWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubTournamentUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: InputMaybe<Array<ClubTournamentUpdateManyWithWhereWithoutTournamentInput>>;
  upsert?: InputMaybe<Array<ClubTournamentUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type ClubTournamentUpdateOneWithoutClubStatsInput = {
  connect?: InputMaybe<ClubTournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubTournamentCreateOrConnectWithoutClubStatsInput>;
  create?: InputMaybe<ClubTournamentCreateWithoutClubStatsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ClubTournamentUpdateWithoutClubStatsInput>;
  upsert?: InputMaybe<ClubTournamentUpsertWithoutClubStatsInput>;
};

export type ClubTournamentUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubTournamentUpdateWithoutClubInput;
  where: ClubTournamentWhereUniqueInput;
};

export type ClubTournamentUpdateWithWhereUniqueWithoutTournamentInput = {
  data: ClubTournamentUpdateWithoutTournamentInput;
  where: ClubTournamentWhereUniqueInput;
};

export type ClubTournamentUpdateWithoutClubInput = {
  clubStats?: InputMaybe<ClubStatsUpdateOneRequiredWithoutClubTournamentInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutClubTournamentsInput>;
};

export type ClubTournamentUpdateWithoutClubStatsInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubTournamentsInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutClubTournamentsInput>;
};

export type ClubTournamentUpdateWithoutTournamentInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubTournamentsInput>;
  clubStats?: InputMaybe<ClubStatsUpdateOneRequiredWithoutClubTournamentInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubTournamentUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubTournamentCreateWithoutClubInput;
  update: ClubTournamentUpdateWithoutClubInput;
  where: ClubTournamentWhereUniqueInput;
};

export type ClubTournamentUpsertWithWhereUniqueWithoutTournamentInput = {
  create: ClubTournamentCreateWithoutTournamentInput;
  update: ClubTournamentUpdateWithoutTournamentInput;
  where: ClubTournamentWhereUniqueInput;
};

export type ClubTournamentUpsertWithoutClubStatsInput = {
  create: ClubTournamentCreateWithoutClubStatsInput;
  update: ClubTournamentUpdateWithoutClubStatsInput;
};

export type ClubTournamentWhereInput = {
  AND?: InputMaybe<Array<ClubTournamentWhereInput>>;
  NOT?: InputMaybe<Array<ClubTournamentWhereInput>>;
  OR?: InputMaybe<Array<ClubTournamentWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  clubStats?: InputMaybe<ClubStatsRelationFilter>;
  clubStatsId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  position?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type ClubTournamentWhereUniqueInput = {
  clubStatsId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubUpdateInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateManyMutationInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ClubUpdateManyWithWhereWithoutActionsInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithWhereWithoutDivisionInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithWhereWithoutHomeGameTimeInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithWhereWithoutNewsItemsInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithWhereWithoutOwnerInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithWhereWithoutStadiumInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithoutActionsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutActionsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutActionsInput>>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutActionsInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutActionsInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutActionsInput>>;
};

export type ClubUpdateManyWithoutDivisionInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutDivisionInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutDivisionInput>>;
  createMany?: InputMaybe<ClubCreateManyDivisionInputEnvelope>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutDivisionInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutDivisionInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutDivisionInput>>;
};

export type ClubUpdateManyWithoutHomeGameTimeInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutHomeGameTimeInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutHomeGameTimeInput>>;
  createMany?: InputMaybe<ClubCreateManyHomeGameTimeInputEnvelope>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutHomeGameTimeInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutHomeGameTimeInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutHomeGameTimeInput>>;
};

export type ClubUpdateManyWithoutNewsItemsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutNewsItemsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutNewsItemsInput>>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutNewsItemsInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutNewsItemsInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutNewsItemsInput>>;
};

export type ClubUpdateManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ClubCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ClubUpdateManyWithoutStadiumInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutStadiumInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutStadiumInput>>;
  createMany?: InputMaybe<ClubCreateManyStadiumInputEnvelope>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutStadiumInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutStadiumInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutStadiumInput>>;
};

export type ClubUpdateOneRequiredWithoutAcademiesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutAcademiesInput>;
  create?: InputMaybe<ClubCreateWithoutAcademiesInput>;
  update?: InputMaybe<ClubUpdateWithoutAcademiesInput>;
  upsert?: InputMaybe<ClubUpsertWithoutAcademiesInput>;
};

export type ClubUpdateOneRequiredWithoutBalancesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutBalancesInput>;
  create?: InputMaybe<ClubCreateWithoutBalancesInput>;
  update?: InputMaybe<ClubUpdateWithoutBalancesInput>;
  upsert?: InputMaybe<ClubUpsertWithoutBalancesInput>;
};

export type ClubUpdateOneRequiredWithoutClubFixturesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubFixturesInput>;
  create?: InputMaybe<ClubCreateWithoutClubFixturesInput>;
  update?: InputMaybe<ClubUpdateWithoutClubFixturesInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubFixturesInput>;
};

export type ClubUpdateOneRequiredWithoutClubTournamentsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubTournamentsInput>;
  create?: InputMaybe<ClubCreateWithoutClubTournamentsInput>;
  update?: InputMaybe<ClubUpdateWithoutClubTournamentsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubTournamentsInput>;
};

export type ClubUpdateOneRequiredWithoutKitsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutKitsInput>;
  create?: InputMaybe<ClubCreateWithoutKitsInput>;
  update?: InputMaybe<ClubUpdateWithoutKitsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutKitsInput>;
};

export type ClubUpdateOneRequiredWithoutLineupsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutLineupsInput>;
  create?: InputMaybe<ClubCreateWithoutLineupsInput>;
  update?: InputMaybe<ClubUpdateWithoutLineupsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutLineupsInput>;
};

export type ClubUpdateOneRequiredWithoutOriginPlayersInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutOriginPlayersInput>;
  create?: InputMaybe<ClubCreateWithoutOriginPlayersInput>;
  update?: InputMaybe<ClubUpdateWithoutOriginPlayersInput>;
  upsert?: InputMaybe<ClubUpsertWithoutOriginPlayersInput>;
};

export type ClubUpdateOneRequiredWithoutPlayerAttributesInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutPlayerAttributesInput>;
  create?: InputMaybe<ClubCreateWithoutPlayerAttributesInput>;
  update?: InputMaybe<ClubUpdateWithoutPlayerAttributesInput>;
  upsert?: InputMaybe<ClubUpsertWithoutPlayerAttributesInput>;
};

export type ClubUpdateOneRequiredWithoutPlayersInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<ClubCreateWithoutPlayersInput>;
  update?: InputMaybe<ClubUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<ClubUpsertWithoutPlayersInput>;
};

export type ClubUpdateOneRequiredWithoutStatsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutStatsInput>;
  create?: InputMaybe<ClubCreateWithoutStatsInput>;
  update?: InputMaybe<ClubUpdateWithoutStatsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutStatsInput>;
};

export type ClubUpdateOneWithoutClubBadgeInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubBadgeInput>;
  create?: InputMaybe<ClubCreateWithoutClubBadgeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ClubUpdateWithoutClubBadgeInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubBadgeInput>;
};

export type ClubUpdateWithWhereUniqueWithoutActionsInput = {
  data: ClubUpdateWithoutActionsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithWhereUniqueWithoutDivisionInput = {
  data: ClubUpdateWithoutDivisionInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithWhereUniqueWithoutHomeGameTimeInput = {
  data: ClubUpdateWithoutHomeGameTimeInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithWhereUniqueWithoutNewsItemsInput = {
  data: ClubUpdateWithoutNewsItemsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ClubUpdateWithoutOwnerInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithWhereUniqueWithoutStadiumInput = {
  data: ClubUpdateWithoutStadiumInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithoutAcademiesInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutActionsInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutBalancesInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutClubBadgeInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutClubFixturesInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutClubTournamentsInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutDivisionInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutHomeGameTimeInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutKitsInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutLineupsInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutNewsItemsInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutOriginPlayersInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutOwnerInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutPlayerAttributesInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutPlayersInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutStadiumInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<ClubStatsUpdateManyWithoutClubInput>;
};

export type ClubUpdateWithoutStatsInput = {
  abbreviation?: InputMaybe<StringFieldUpdateOperationsInput>;
  academies?: InputMaybe<AcademyUpdateManyWithoutClubInput>;
  actions?: InputMaybe<ActionUpdateManyWithoutClubsInput>;
  balances?: InputMaybe<ClubBalanceUpdateManyWithoutClubInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBadge?: InputMaybe<ClubBadgeUpdateOneRequiredWithoutClubInput>;
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutClubInput>;
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutClubInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutClubsInput>;
  escrow?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeUpdateOneWithoutClubInput>;
  kits?: InputMaybe<KitUpdateManyWithoutClubInput>;
  lineups?: InputMaybe<LineupUpdateManyWithoutClubInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsItems?: InputMaybe<NewsItemUpdateManyWithoutClubsInput>;
  originPlayers?: InputMaybe<PlayerUpdateManyWithoutOriginClubInput>;
  owner?: InputMaybe<OwnerUpdateOneRequiredWithoutClubsInput>;
  pattern?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutClubInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutClubInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutClubInput>;
};

export type ClubUpsertWithWhereUniqueWithoutActionsInput = {
  create: ClubCreateWithoutActionsInput;
  update: ClubUpdateWithoutActionsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithWhereUniqueWithoutDivisionInput = {
  create: ClubCreateWithoutDivisionInput;
  update: ClubUpdateWithoutDivisionInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithWhereUniqueWithoutHomeGameTimeInput = {
  create: ClubCreateWithoutHomeGameTimeInput;
  update: ClubUpdateWithoutHomeGameTimeInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithWhereUniqueWithoutNewsItemsInput = {
  create: ClubCreateWithoutNewsItemsInput;
  update: ClubUpdateWithoutNewsItemsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ClubCreateWithoutOwnerInput;
  update: ClubUpdateWithoutOwnerInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithWhereUniqueWithoutStadiumInput = {
  create: ClubCreateWithoutStadiumInput;
  update: ClubUpdateWithoutStadiumInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithoutAcademiesInput = {
  create: ClubCreateWithoutAcademiesInput;
  update: ClubUpdateWithoutAcademiesInput;
};

export type ClubUpsertWithoutBalancesInput = {
  create: ClubCreateWithoutBalancesInput;
  update: ClubUpdateWithoutBalancesInput;
};

export type ClubUpsertWithoutClubBadgeInput = {
  create: ClubCreateWithoutClubBadgeInput;
  update: ClubUpdateWithoutClubBadgeInput;
};

export type ClubUpsertWithoutClubFixturesInput = {
  create: ClubCreateWithoutClubFixturesInput;
  update: ClubUpdateWithoutClubFixturesInput;
};

export type ClubUpsertWithoutClubTournamentsInput = {
  create: ClubCreateWithoutClubTournamentsInput;
  update: ClubUpdateWithoutClubTournamentsInput;
};

export type ClubUpsertWithoutKitsInput = {
  create: ClubCreateWithoutKitsInput;
  update: ClubUpdateWithoutKitsInput;
};

export type ClubUpsertWithoutLineupsInput = {
  create: ClubCreateWithoutLineupsInput;
  update: ClubUpdateWithoutLineupsInput;
};

export type ClubUpsertWithoutOriginPlayersInput = {
  create: ClubCreateWithoutOriginPlayersInput;
  update: ClubUpdateWithoutOriginPlayersInput;
};

export type ClubUpsertWithoutPlayerAttributesInput = {
  create: ClubCreateWithoutPlayerAttributesInput;
  update: ClubUpdateWithoutPlayerAttributesInput;
};

export type ClubUpsertWithoutPlayersInput = {
  create: ClubCreateWithoutPlayersInput;
  update: ClubUpdateWithoutPlayersInput;
};

export type ClubUpsertWithoutStatsInput = {
  create: ClubCreateWithoutStatsInput;
  update: ClubUpdateWithoutStatsInput;
};

export type ClubWhereInput = {
  AND?: InputMaybe<Array<ClubWhereInput>>;
  NOT?: InputMaybe<Array<ClubWhereInput>>;
  OR?: InputMaybe<Array<ClubWhereInput>>;
  abbreviation?: InputMaybe<StringFilter>;
  academies?: InputMaybe<AcademyListRelationFilter>;
  actions?: InputMaybe<ActionListRelationFilter>;
  balances?: InputMaybe<ClubBalanceListRelationFilter>;
  city?: InputMaybe<StringFilter>;
  clubBadge?: InputMaybe<ClubBadgeRelationFilter>;
  clubBadgeId?: InputMaybe<IntFilter>;
  clubFixtures?: InputMaybe<ClubFixtureListRelationFilter>;
  clubTournaments?: InputMaybe<ClubTournamentListRelationFilter>;
  colours?: InputMaybe<JsonFilter>;
  description?: InputMaybe<StringFilter>;
  division?: InputMaybe<DivisionRelationFilter>;
  divisionId?: InputMaybe<IntFilter>;
  escrow?: InputMaybe<StringNullableFilter>;
  homeGameTime?: InputMaybe<AvailableHomeGameTimeRelationFilter>;
  homeGameTimeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  kits?: InputMaybe<KitListRelationFilter>;
  lineups?: InputMaybe<LineupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  newsItems?: InputMaybe<NewsItemListRelationFilter>;
  originPlayers?: InputMaybe<PlayerListRelationFilter>;
  owner?: InputMaybe<OwnerRelationFilter>;
  ownerId?: InputMaybe<IntFilter>;
  pattern?: InputMaybe<StringFilter>;
  playerAttributes?: InputMaybe<PlayerAttributesListRelationFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  seed?: InputMaybe<StringFilter>;
  stadium?: InputMaybe<StadiumRelationFilter>;
  stadiumId?: InputMaybe<IntFilter>;
  stats?: InputMaybe<ClubStatsListRelationFilter>;
};

export type ClubWhereUniqueInput = {
  clubBadgeId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Competition = {
  __typename?: 'Competition';
  _count?: Maybe<CompetitionCount>;
  division: Division;
  divisionId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  playerStats: Array<CompetitionPlayerStats>;
  prizePools: Array<Pool>;
  promotionSelectorsFrom: Array<PromotionSelector>;
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  tournaments: Array<Tournament>;
  type: Scalars['String'];
};


export type CompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type CompetitionPrizePoolsArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type CompetitionPromotionSelectorsFromArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromotionSelectorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type CompetitionTournamentsArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentWhereInput>;
};

export type CompetitionAvgAggregate = {
  __typename?: 'CompetitionAvgAggregate';
  divisionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CompetitionAvgOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type CompetitionCount = {
  __typename?: 'CompetitionCount';
  playerStats: Scalars['Int'];
  prizePools: Scalars['Int'];
  promotionSelectorsFrom: Scalars['Int'];
  tournaments: Scalars['Int'];
};

export type CompetitionCountAggregate = {
  __typename?: 'CompetitionCountAggregate';
  _all: Scalars['Int'];
  divisionId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  scheduler: Scalars['Int'];
  seed: Scalars['Int'];
  type: Scalars['Int'];
};

export type CompetitionCountOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  scheduler?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CompetitionCreateInput = {
  division: DivisionCreateNestedOneWithoutCompetitionsInput;
  id: Scalars['Int'];
  name: Scalars['String'];
  playerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolCreateNestedManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorCreateNestedManyWithoutCompetitionFromInput>;
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  tournaments?: InputMaybe<TournamentCreateNestedManyWithoutCompetitionInput>;
  type: Scalars['String'];
};

export type CompetitionCreateManyDivisionInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  type: Scalars['String'];
};

export type CompetitionCreateManyDivisionInputEnvelope = {
  data: Array<CompetitionCreateManyDivisionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CompetitionCreateManyInput = {
  divisionId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  type: Scalars['String'];
};

export type CompetitionCreateNestedManyWithoutDivisionInput = {
  connect?: InputMaybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionCreateOrConnectWithoutDivisionInput>>;
  create?: InputMaybe<Array<CompetitionCreateWithoutDivisionInput>>;
  createMany?: InputMaybe<CompetitionCreateManyDivisionInputEnvelope>;
};

export type CompetitionCreateNestedOneWithoutPlayerStatsInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutPlayerStatsInput>;
  create?: InputMaybe<CompetitionCreateWithoutPlayerStatsInput>;
};

export type CompetitionCreateNestedOneWithoutPrizePoolsInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutPrizePoolsInput>;
  create?: InputMaybe<CompetitionCreateWithoutPrizePoolsInput>;
};

export type CompetitionCreateNestedOneWithoutPromotionSelectorsFromInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutPromotionSelectorsFromInput>;
  create?: InputMaybe<CompetitionCreateWithoutPromotionSelectorsFromInput>;
};

export type CompetitionCreateNestedOneWithoutTournamentsInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutTournamentsInput>;
  create?: InputMaybe<CompetitionCreateWithoutTournamentsInput>;
};

export type CompetitionCreateOrConnectWithoutDivisionInput = {
  create: CompetitionCreateWithoutDivisionInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutPlayerStatsInput = {
  create: CompetitionCreateWithoutPlayerStatsInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutPrizePoolsInput = {
  create: CompetitionCreateWithoutPrizePoolsInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutPromotionSelectorsFromInput = {
  create: CompetitionCreateWithoutPromotionSelectorsFromInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutTournamentsInput = {
  create: CompetitionCreateWithoutTournamentsInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateWithoutDivisionInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  playerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolCreateNestedManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorCreateNestedManyWithoutCompetitionFromInput>;
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  tournaments?: InputMaybe<TournamentCreateNestedManyWithoutCompetitionInput>;
  type: Scalars['String'];
};

export type CompetitionCreateWithoutPlayerStatsInput = {
  division: DivisionCreateNestedOneWithoutCompetitionsInput;
  id: Scalars['Int'];
  name: Scalars['String'];
  prizePools?: InputMaybe<PoolCreateNestedManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorCreateNestedManyWithoutCompetitionFromInput>;
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  tournaments?: InputMaybe<TournamentCreateNestedManyWithoutCompetitionInput>;
  type: Scalars['String'];
};

export type CompetitionCreateWithoutPrizePoolsInput = {
  division: DivisionCreateNestedOneWithoutCompetitionsInput;
  id: Scalars['Int'];
  name: Scalars['String'];
  playerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorCreateNestedManyWithoutCompetitionFromInput>;
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  tournaments?: InputMaybe<TournamentCreateNestedManyWithoutCompetitionInput>;
  type: Scalars['String'];
};

export type CompetitionCreateWithoutPromotionSelectorsFromInput = {
  division: DivisionCreateNestedOneWithoutCompetitionsInput;
  id: Scalars['Int'];
  name: Scalars['String'];
  playerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolCreateNestedManyWithoutCompetitionInput>;
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  tournaments?: InputMaybe<TournamentCreateNestedManyWithoutCompetitionInput>;
  type: Scalars['String'];
};

export type CompetitionCreateWithoutTournamentsInput = {
  division: DivisionCreateNestedOneWithoutCompetitionsInput;
  id: Scalars['Int'];
  name: Scalars['String'];
  playerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolCreateNestedManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorCreateNestedManyWithoutCompetitionFromInput>;
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  type: Scalars['String'];
};

export type CompetitionGroupBy = {
  __typename?: 'CompetitionGroupBy';
  _avg?: Maybe<CompetitionAvgAggregate>;
  _count?: Maybe<CompetitionCountAggregate>;
  _max?: Maybe<CompetitionMaxAggregate>;
  _min?: Maybe<CompetitionMinAggregate>;
  _sum?: Maybe<CompetitionSumAggregate>;
  divisionId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  scheduler: Scalars['JSON'];
  seed: Scalars['String'];
  type: Scalars['String'];
};

export type CompetitionListRelationFilter = {
  every?: InputMaybe<CompetitionWhereInput>;
  none?: InputMaybe<CompetitionWhereInput>;
  some?: InputMaybe<CompetitionWhereInput>;
};

export type CompetitionMaxAggregate = {
  __typename?: 'CompetitionMaxAggregate';
  divisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CompetitionMaxOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CompetitionMinAggregate = {
  __typename?: 'CompetitionMinAggregate';
  divisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CompetitionMinOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CompetitionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompetitionOrderByWithAggregationInput = {
  _avg?: InputMaybe<CompetitionAvgOrderByAggregateInput>;
  _count?: InputMaybe<CompetitionCountOrderByAggregateInput>;
  _max?: InputMaybe<CompetitionMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompetitionMinOrderByAggregateInput>;
  _sum?: InputMaybe<CompetitionSumOrderByAggregateInput>;
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  scheduler?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CompetitionOrderByWithRelationInput = {
  division?: InputMaybe<DivisionOrderByWithRelationInput>;
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerStats?: InputMaybe<CompetitionPlayerStatsOrderByRelationAggregateInput>;
  prizePools?: InputMaybe<PoolOrderByRelationAggregateInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorOrderByRelationAggregateInput>;
  scheduler?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  tournaments?: InputMaybe<TournamentOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStats = {
  __typename?: 'CompetitionPlayerStats';
  competition: Competition;
  competitionId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  playerStatRecord: PlayerStatsRecord;
  playerStatRecordId: Scalars['Int'];
};

export type CompetitionPlayerStatsAvgAggregate = {
  __typename?: 'CompetitionPlayerStatsAvgAggregate';
  competitionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerStatRecordId?: Maybe<Scalars['Float']>;
};

export type CompetitionPlayerStatsAvgOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsCompetitionIdPlayerStatRecordIdCompoundUniqueInput = {
  competitionId: Scalars['Int'];
  playerStatRecordId: Scalars['Int'];
};

export type CompetitionPlayerStatsCountAggregate = {
  __typename?: 'CompetitionPlayerStatsCountAggregate';
  _all: Scalars['Int'];
  competitionId: Scalars['Int'];
  dummy: Scalars['Int'];
  id: Scalars['Int'];
  playerStatRecordId: Scalars['Int'];
};

export type CompetitionPlayerStatsCountOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsCreateInput = {
  competition: CompetitionCreateNestedOneWithoutPlayerStatsInput;
  dummy?: InputMaybe<Scalars['String']>;
  playerStatRecord: PlayerStatsRecordCreateNestedOneWithoutCompetitionPlayerStatsInput;
};

export type CompetitionPlayerStatsCreateManyCompetitionInput = {
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  playerStatRecordId: Scalars['Int'];
};

export type CompetitionPlayerStatsCreateManyCompetitionInputEnvelope = {
  data: Array<CompetitionPlayerStatsCreateManyCompetitionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CompetitionPlayerStatsCreateManyInput = {
  competitionId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  playerStatRecordId: Scalars['Int'];
};

export type CompetitionPlayerStatsCreateManyPlayerStatRecordInput = {
  competitionId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CompetitionPlayerStatsCreateManyPlayerStatRecordInputEnvelope = {
  data: Array<CompetitionPlayerStatsCreateManyPlayerStatRecordInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CompetitionPlayerStatsCreateNestedManyWithoutCompetitionInput = {
  connect?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionPlayerStatsCreateOrConnectWithoutCompetitionInput>>;
  create?: InputMaybe<Array<CompetitionPlayerStatsCreateWithoutCompetitionInput>>;
  createMany?: InputMaybe<CompetitionPlayerStatsCreateManyCompetitionInputEnvelope>;
};

export type CompetitionPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput = {
  connect?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionPlayerStatsCreateOrConnectWithoutPlayerStatRecordInput>>;
  create?: InputMaybe<Array<CompetitionPlayerStatsCreateWithoutPlayerStatRecordInput>>;
  createMany?: InputMaybe<CompetitionPlayerStatsCreateManyPlayerStatRecordInputEnvelope>;
};

export type CompetitionPlayerStatsCreateOrConnectWithoutCompetitionInput = {
  create: CompetitionPlayerStatsCreateWithoutCompetitionInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};

export type CompetitionPlayerStatsCreateOrConnectWithoutPlayerStatRecordInput = {
  create: CompetitionPlayerStatsCreateWithoutPlayerStatRecordInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};

export type CompetitionPlayerStatsCreateWithoutCompetitionInput = {
  dummy?: InputMaybe<Scalars['String']>;
  playerStatRecord: PlayerStatsRecordCreateNestedOneWithoutCompetitionPlayerStatsInput;
};

export type CompetitionPlayerStatsCreateWithoutPlayerStatRecordInput = {
  competition: CompetitionCreateNestedOneWithoutPlayerStatsInput;
  dummy?: InputMaybe<Scalars['String']>;
};

export type CompetitionPlayerStatsGroupBy = {
  __typename?: 'CompetitionPlayerStatsGroupBy';
  _avg?: Maybe<CompetitionPlayerStatsAvgAggregate>;
  _count?: Maybe<CompetitionPlayerStatsCountAggregate>;
  _max?: Maybe<CompetitionPlayerStatsMaxAggregate>;
  _min?: Maybe<CompetitionPlayerStatsMinAggregate>;
  _sum?: Maybe<CompetitionPlayerStatsSumAggregate>;
  competitionId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  playerStatRecordId: Scalars['Int'];
};

export type CompetitionPlayerStatsListRelationFilter = {
  every?: InputMaybe<CompetitionPlayerStatsWhereInput>;
  none?: InputMaybe<CompetitionPlayerStatsWhereInput>;
  some?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};

export type CompetitionPlayerStatsMaxAggregate = {
  __typename?: 'CompetitionPlayerStatsMaxAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  playerStatRecordId?: Maybe<Scalars['Int']>;
};

export type CompetitionPlayerStatsMaxOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsMinAggregate = {
  __typename?: 'CompetitionPlayerStatsMinAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  playerStatRecordId?: Maybe<Scalars['Int']>;
};

export type CompetitionPlayerStatsMinOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsOrderByWithAggregationInput = {
  _avg?: InputMaybe<CompetitionPlayerStatsAvgOrderByAggregateInput>;
  _count?: InputMaybe<CompetitionPlayerStatsCountOrderByAggregateInput>;
  _max?: InputMaybe<CompetitionPlayerStatsMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompetitionPlayerStatsMinOrderByAggregateInput>;
  _sum?: InputMaybe<CompetitionPlayerStatsSumOrderByAggregateInput>;
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsOrderByWithRelationInput = {
  competition?: InputMaybe<CompetitionOrderByWithRelationInput>;
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordOrderByWithRelationInput>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export enum CompetitionPlayerStatsScalarFieldEnum {
  CompetitionId = 'competitionId',
  Dummy = 'dummy',
  Id = 'id',
  PlayerStatRecordId = 'playerStatRecordId'
}

export type CompetitionPlayerStatsScalarWhereInput = {
  AND?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereInput>>;
  OR?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereInput>>;
  competitionId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
};

export type CompetitionPlayerStatsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereWithAggregatesInput>>;
  competitionId?: InputMaybe<IntWithAggregatesFilter>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  playerStatRecordId?: InputMaybe<IntWithAggregatesFilter>;
};

export type CompetitionPlayerStatsSumAggregate = {
  __typename?: 'CompetitionPlayerStatsSumAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerStatRecordId?: Maybe<Scalars['Int']>;
};

export type CompetitionPlayerStatsSumOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
};

export type CompetitionPlayerStatsUpdateInput = {
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutPlayerStatsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordUpdateOneRequiredWithoutCompetitionPlayerStatsInput>;
};

export type CompetitionPlayerStatsUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CompetitionPlayerStatsUpdateManyWithWhereWithoutCompetitionInput = {
  data: CompetitionPlayerStatsUpdateManyMutationInput;
  where: CompetitionPlayerStatsScalarWhereInput;
};

export type CompetitionPlayerStatsUpdateManyWithWhereWithoutPlayerStatRecordInput = {
  data: CompetitionPlayerStatsUpdateManyMutationInput;
  where: CompetitionPlayerStatsScalarWhereInput;
};

export type CompetitionPlayerStatsUpdateManyWithoutCompetitionInput = {
  connect?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionPlayerStatsCreateOrConnectWithoutCompetitionInput>>;
  create?: InputMaybe<Array<CompetitionPlayerStatsCreateWithoutCompetitionInput>>;
  createMany?: InputMaybe<CompetitionPlayerStatsCreateManyCompetitionInputEnvelope>;
  delete?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  set?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  update?: InputMaybe<Array<CompetitionPlayerStatsUpdateWithWhereUniqueWithoutCompetitionInput>>;
  updateMany?: InputMaybe<Array<CompetitionPlayerStatsUpdateManyWithWhereWithoutCompetitionInput>>;
  upsert?: InputMaybe<Array<CompetitionPlayerStatsUpsertWithWhereUniqueWithoutCompetitionInput>>;
};

export type CompetitionPlayerStatsUpdateManyWithoutPlayerStatRecordInput = {
  connect?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionPlayerStatsCreateOrConnectWithoutPlayerStatRecordInput>>;
  create?: InputMaybe<Array<CompetitionPlayerStatsCreateWithoutPlayerStatRecordInput>>;
  createMany?: InputMaybe<CompetitionPlayerStatsCreateManyPlayerStatRecordInputEnvelope>;
  delete?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompetitionPlayerStatsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  set?: InputMaybe<Array<CompetitionPlayerStatsWhereUniqueInput>>;
  update?: InputMaybe<Array<CompetitionPlayerStatsUpdateWithWhereUniqueWithoutPlayerStatRecordInput>>;
  updateMany?: InputMaybe<Array<CompetitionPlayerStatsUpdateManyWithWhereWithoutPlayerStatRecordInput>>;
  upsert?: InputMaybe<Array<CompetitionPlayerStatsUpsertWithWhereUniqueWithoutPlayerStatRecordInput>>;
};

export type CompetitionPlayerStatsUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: CompetitionPlayerStatsUpdateWithoutCompetitionInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};

export type CompetitionPlayerStatsUpdateWithWhereUniqueWithoutPlayerStatRecordInput = {
  data: CompetitionPlayerStatsUpdateWithoutPlayerStatRecordInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};

export type CompetitionPlayerStatsUpdateWithoutCompetitionInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordUpdateOneRequiredWithoutCompetitionPlayerStatsInput>;
};

export type CompetitionPlayerStatsUpdateWithoutPlayerStatRecordInput = {
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutPlayerStatsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CompetitionPlayerStatsUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: CompetitionPlayerStatsCreateWithoutCompetitionInput;
  update: CompetitionPlayerStatsUpdateWithoutCompetitionInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};

export type CompetitionPlayerStatsUpsertWithWhereUniqueWithoutPlayerStatRecordInput = {
  create: CompetitionPlayerStatsCreateWithoutPlayerStatRecordInput;
  update: CompetitionPlayerStatsUpdateWithoutPlayerStatRecordInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};

export type CompetitionPlayerStatsWhereInput = {
  AND?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  OR?: InputMaybe<Array<CompetitionPlayerStatsWhereInput>>;
  competition?: InputMaybe<CompetitionRelationFilter>;
  competitionId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordRelationFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
};

export type CompetitionPlayerStatsWhereUniqueInput = {
  competitionId_playerStatRecordId?: InputMaybe<CompetitionPlayerStatsCompetitionIdPlayerStatRecordIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CompetitionRelationFilter = {
  is?: InputMaybe<CompetitionWhereInput>;
  isNot?: InputMaybe<CompetitionWhereInput>;
};

export enum CompetitionScalarFieldEnum {
  DivisionId = 'divisionId',
  Id = 'id',
  Name = 'name',
  Scheduler = 'scheduler',
  Seed = 'seed',
  Type = 'type'
}

export type CompetitionScalarWhereInput = {
  AND?: InputMaybe<Array<CompetitionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionScalarWhereInput>>;
  OR?: InputMaybe<Array<CompetitionScalarWhereInput>>;
  divisionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  scheduler?: InputMaybe<JsonFilter>;
  seed?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type CompetitionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompetitionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompetitionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompetitionScalarWhereWithAggregatesInput>>;
  divisionId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  scheduler?: InputMaybe<JsonWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
};

export type CompetitionSumAggregate = {
  __typename?: 'CompetitionSumAggregate';
  divisionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type CompetitionSumOrderByAggregateInput = {
  divisionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type CompetitionUpdateInput = {
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutCompetitionsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolUpdateManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorUpdateManyWithoutCompetitionFromInput>;
  scheduler?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournaments?: InputMaybe<TournamentUpdateManyWithoutCompetitionInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduler?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionUpdateManyWithWhereWithoutDivisionInput = {
  data: CompetitionUpdateManyMutationInput;
  where: CompetitionScalarWhereInput;
};

export type CompetitionUpdateManyWithoutDivisionInput = {
  connect?: InputMaybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompetitionCreateOrConnectWithoutDivisionInput>>;
  create?: InputMaybe<Array<CompetitionCreateWithoutDivisionInput>>;
  createMany?: InputMaybe<CompetitionCreateManyDivisionInputEnvelope>;
  delete?: InputMaybe<Array<CompetitionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompetitionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompetitionWhereUniqueInput>>;
  set?: InputMaybe<Array<CompetitionWhereUniqueInput>>;
  update?: InputMaybe<Array<CompetitionUpdateWithWhereUniqueWithoutDivisionInput>>;
  updateMany?: InputMaybe<Array<CompetitionUpdateManyWithWhereWithoutDivisionInput>>;
  upsert?: InputMaybe<Array<CompetitionUpsertWithWhereUniqueWithoutDivisionInput>>;
};

export type CompetitionUpdateOneRequiredWithoutPlayerStatsInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutPlayerStatsInput>;
  create?: InputMaybe<CompetitionCreateWithoutPlayerStatsInput>;
  update?: InputMaybe<CompetitionUpdateWithoutPlayerStatsInput>;
  upsert?: InputMaybe<CompetitionUpsertWithoutPlayerStatsInput>;
};

export type CompetitionUpdateOneRequiredWithoutPrizePoolsInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutPrizePoolsInput>;
  create?: InputMaybe<CompetitionCreateWithoutPrizePoolsInput>;
  update?: InputMaybe<CompetitionUpdateWithoutPrizePoolsInput>;
  upsert?: InputMaybe<CompetitionUpsertWithoutPrizePoolsInput>;
};

export type CompetitionUpdateOneRequiredWithoutPromotionSelectorsFromInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutPromotionSelectorsFromInput>;
  create?: InputMaybe<CompetitionCreateWithoutPromotionSelectorsFromInput>;
  update?: InputMaybe<CompetitionUpdateWithoutPromotionSelectorsFromInput>;
  upsert?: InputMaybe<CompetitionUpsertWithoutPromotionSelectorsFromInput>;
};

export type CompetitionUpdateOneRequiredWithoutTournamentsInput = {
  connect?: InputMaybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompetitionCreateOrConnectWithoutTournamentsInput>;
  create?: InputMaybe<CompetitionCreateWithoutTournamentsInput>;
  update?: InputMaybe<CompetitionUpdateWithoutTournamentsInput>;
  upsert?: InputMaybe<CompetitionUpsertWithoutTournamentsInput>;
};

export type CompetitionUpdateWithWhereUniqueWithoutDivisionInput = {
  data: CompetitionUpdateWithoutDivisionInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpdateWithoutDivisionInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolUpdateManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorUpdateManyWithoutCompetitionFromInput>;
  scheduler?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournaments?: InputMaybe<TournamentUpdateManyWithoutCompetitionInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutPlayerStatsInput = {
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutCompetitionsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prizePools?: InputMaybe<PoolUpdateManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorUpdateManyWithoutCompetitionFromInput>;
  scheduler?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournaments?: InputMaybe<TournamentUpdateManyWithoutCompetitionInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutPrizePoolsInput = {
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutCompetitionsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorUpdateManyWithoutCompetitionFromInput>;
  scheduler?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournaments?: InputMaybe<TournamentUpdateManyWithoutCompetitionInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutPromotionSelectorsFromInput = {
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutCompetitionsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolUpdateManyWithoutCompetitionInput>;
  scheduler?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournaments?: InputMaybe<TournamentUpdateManyWithoutCompetitionInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutTournamentsInput = {
  division?: InputMaybe<DivisionUpdateOneRequiredWithoutCompetitionsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutCompetitionInput>;
  prizePools?: InputMaybe<PoolUpdateManyWithoutCompetitionInput>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorUpdateManyWithoutCompetitionFromInput>;
  scheduler?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionUpsertWithWhereUniqueWithoutDivisionInput = {
  create: CompetitionCreateWithoutDivisionInput;
  update: CompetitionUpdateWithoutDivisionInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpsertWithoutPlayerStatsInput = {
  create: CompetitionCreateWithoutPlayerStatsInput;
  update: CompetitionUpdateWithoutPlayerStatsInput;
};

export type CompetitionUpsertWithoutPrizePoolsInput = {
  create: CompetitionCreateWithoutPrizePoolsInput;
  update: CompetitionUpdateWithoutPrizePoolsInput;
};

export type CompetitionUpsertWithoutPromotionSelectorsFromInput = {
  create: CompetitionCreateWithoutPromotionSelectorsFromInput;
  update: CompetitionUpdateWithoutPromotionSelectorsFromInput;
};

export type CompetitionUpsertWithoutTournamentsInput = {
  create: CompetitionCreateWithoutTournamentsInput;
  update: CompetitionUpdateWithoutTournamentsInput;
};

export type CompetitionWhereInput = {
  AND?: InputMaybe<Array<CompetitionWhereInput>>;
  NOT?: InputMaybe<Array<CompetitionWhereInput>>;
  OR?: InputMaybe<Array<CompetitionWhereInput>>;
  division?: InputMaybe<DivisionRelationFilter>;
  divisionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  playerStats?: InputMaybe<CompetitionPlayerStatsListRelationFilter>;
  prizePools?: InputMaybe<PoolListRelationFilter>;
  promotionSelectorsFrom?: InputMaybe<PromotionSelectorListRelationFilter>;
  scheduler?: InputMaybe<JsonFilter>;
  seed?: InputMaybe<StringFilter>;
  tournaments?: InputMaybe<TournamentListRelationFilter>;
  type?: InputMaybe<StringFilter>;
};

export type CompetitionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Division = {
  __typename?: 'Division';
  _count?: Maybe<DivisionCount>;
  academyMintFees: Array<AcademyMintFee>;
  clubs: Array<Club>;
  competitions: Array<Competition>;
  id: Scalars['Int'];
  name: Scalars['String'];
  tier: Scalars['Int'];
};


export type DivisionAcademyMintFeesArgs = {
  cursor?: InputMaybe<AcademyMintFeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AcademyMintFeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AcademyMintFeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type DivisionClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type DivisionCompetitionsArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionWhereInput>;
};

export type DivisionAvgAggregate = {
  __typename?: 'DivisionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

export type DivisionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionCount = {
  __typename?: 'DivisionCount';
  academyMintFees: Scalars['Int'];
  clubs: Scalars['Int'];
  competitions: Scalars['Int'];
};

export type DivisionCountAggregate = {
  __typename?: 'DivisionCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  tier: Scalars['Int'];
};

export type DivisionCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionCreateInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutDivisionInput>;
  clubs?: InputMaybe<ClubCreateNestedManyWithoutDivisionInput>;
  competitions?: InputMaybe<CompetitionCreateNestedManyWithoutDivisionInput>;
  name: Scalars['String'];
  tier: Scalars['Int'];
};

export type DivisionCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  tier: Scalars['Int'];
};

export type DivisionCreateNestedOneWithoutAcademyMintFeesInput = {
  connect?: InputMaybe<DivisionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DivisionCreateOrConnectWithoutAcademyMintFeesInput>;
  create?: InputMaybe<DivisionCreateWithoutAcademyMintFeesInput>;
};

export type DivisionCreateNestedOneWithoutClubsInput = {
  connect?: InputMaybe<DivisionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DivisionCreateOrConnectWithoutClubsInput>;
  create?: InputMaybe<DivisionCreateWithoutClubsInput>;
};

export type DivisionCreateNestedOneWithoutCompetitionsInput = {
  connect?: InputMaybe<DivisionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DivisionCreateOrConnectWithoutCompetitionsInput>;
  create?: InputMaybe<DivisionCreateWithoutCompetitionsInput>;
};

export type DivisionCreateOrConnectWithoutAcademyMintFeesInput = {
  create: DivisionCreateWithoutAcademyMintFeesInput;
  where: DivisionWhereUniqueInput;
};

export type DivisionCreateOrConnectWithoutClubsInput = {
  create: DivisionCreateWithoutClubsInput;
  where: DivisionWhereUniqueInput;
};

export type DivisionCreateOrConnectWithoutCompetitionsInput = {
  create: DivisionCreateWithoutCompetitionsInput;
  where: DivisionWhereUniqueInput;
};

export type DivisionCreateWithoutAcademyMintFeesInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutDivisionInput>;
  competitions?: InputMaybe<CompetitionCreateNestedManyWithoutDivisionInput>;
  name: Scalars['String'];
  tier: Scalars['Int'];
};

export type DivisionCreateWithoutClubsInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutDivisionInput>;
  competitions?: InputMaybe<CompetitionCreateNestedManyWithoutDivisionInput>;
  name: Scalars['String'];
  tier: Scalars['Int'];
};

export type DivisionCreateWithoutCompetitionsInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutDivisionInput>;
  clubs?: InputMaybe<ClubCreateNestedManyWithoutDivisionInput>;
  name: Scalars['String'];
  tier: Scalars['Int'];
};

export type DivisionGroupBy = {
  __typename?: 'DivisionGroupBy';
  _avg?: Maybe<DivisionAvgAggregate>;
  _count?: Maybe<DivisionCountAggregate>;
  _max?: Maybe<DivisionMaxAggregate>;
  _min?: Maybe<DivisionMinAggregate>;
  _sum?: Maybe<DivisionSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
  tier: Scalars['Int'];
};

export type DivisionMaxAggregate = {
  __typename?: 'DivisionMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
};

export type DivisionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionMerkleRoot = {
  __typename?: 'DivisionMerkleRoot';
  root: Scalars['DivisionRoot'];
};

export type DivisionMinAggregate = {
  __typename?: 'DivisionMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
};

export type DivisionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionOrderByWithAggregationInput = {
  _avg?: InputMaybe<DivisionAvgOrderByAggregateInput>;
  _count?: InputMaybe<DivisionCountOrderByAggregateInput>;
  _max?: InputMaybe<DivisionMaxOrderByAggregateInput>;
  _min?: InputMaybe<DivisionMinOrderByAggregateInput>;
  _sum?: InputMaybe<DivisionSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionOrderByWithRelationInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeOrderByRelationAggregateInput>;
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  competitions?: InputMaybe<CompetitionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionRelationFilter = {
  is?: InputMaybe<DivisionWhereInput>;
  isNot?: InputMaybe<DivisionWhereInput>;
};

export enum DivisionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Tier = 'tier'
}

export type DivisionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DivisionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DivisionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DivisionScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  tier?: InputMaybe<IntWithAggregatesFilter>;
};

export type DivisionSumAggregate = {
  __typename?: 'DivisionSumAggregate';
  id?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['Int']>;
};

export type DivisionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tier?: InputMaybe<SortOrder>;
};

export type DivisionUpdateInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutDivisionInput>;
  clubs?: InputMaybe<ClubUpdateManyWithoutDivisionInput>;
  competitions?: InputMaybe<CompetitionUpdateManyWithoutDivisionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tier?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type DivisionUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tier?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type DivisionUpdateOneRequiredWithoutAcademyMintFeesInput = {
  connect?: InputMaybe<DivisionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DivisionCreateOrConnectWithoutAcademyMintFeesInput>;
  create?: InputMaybe<DivisionCreateWithoutAcademyMintFeesInput>;
  update?: InputMaybe<DivisionUpdateWithoutAcademyMintFeesInput>;
  upsert?: InputMaybe<DivisionUpsertWithoutAcademyMintFeesInput>;
};

export type DivisionUpdateOneRequiredWithoutClubsInput = {
  connect?: InputMaybe<DivisionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DivisionCreateOrConnectWithoutClubsInput>;
  create?: InputMaybe<DivisionCreateWithoutClubsInput>;
  update?: InputMaybe<DivisionUpdateWithoutClubsInput>;
  upsert?: InputMaybe<DivisionUpsertWithoutClubsInput>;
};

export type DivisionUpdateOneRequiredWithoutCompetitionsInput = {
  connect?: InputMaybe<DivisionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DivisionCreateOrConnectWithoutCompetitionsInput>;
  create?: InputMaybe<DivisionCreateWithoutCompetitionsInput>;
  update?: InputMaybe<DivisionUpdateWithoutCompetitionsInput>;
  upsert?: InputMaybe<DivisionUpsertWithoutCompetitionsInput>;
};

export type DivisionUpdateWithoutAcademyMintFeesInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutDivisionInput>;
  competitions?: InputMaybe<CompetitionUpdateManyWithoutDivisionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tier?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type DivisionUpdateWithoutClubsInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutDivisionInput>;
  competitions?: InputMaybe<CompetitionUpdateManyWithoutDivisionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tier?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type DivisionUpdateWithoutCompetitionsInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutDivisionInput>;
  clubs?: InputMaybe<ClubUpdateManyWithoutDivisionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tier?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type DivisionUpsertWithoutAcademyMintFeesInput = {
  create: DivisionCreateWithoutAcademyMintFeesInput;
  update: DivisionUpdateWithoutAcademyMintFeesInput;
};

export type DivisionUpsertWithoutClubsInput = {
  create: DivisionCreateWithoutClubsInput;
  update: DivisionUpdateWithoutClubsInput;
};

export type DivisionUpsertWithoutCompetitionsInput = {
  create: DivisionCreateWithoutCompetitionsInput;
  update: DivisionUpdateWithoutCompetitionsInput;
};

export type DivisionWhereInput = {
  AND?: InputMaybe<Array<DivisionWhereInput>>;
  NOT?: InputMaybe<Array<DivisionWhereInput>>;
  OR?: InputMaybe<Array<DivisionWhereInput>>;
  academyMintFees?: InputMaybe<AcademyMintFeeListRelationFilter>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  competitions?: InputMaybe<CompetitionListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  tier?: InputMaybe<IntFilter>;
};

export type DivisionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type EnumSeasonStateFieldUpdateOperationsInput = {
  set?: InputMaybe<SeasonState>;
};

export type EnumSeasonStateFilter = {
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type EnumSeasonStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSeasonStateFilter>;
  _min?: InputMaybe<NestedEnumSeasonStateFilter>;
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type EnumStadiumStandSideFieldUpdateOperationsInput = {
  set?: InputMaybe<StadiumStandSide>;
};

export type EnumStadiumStandSideFilter = {
  equals?: InputMaybe<StadiumStandSide>;
  in?: InputMaybe<Array<StadiumStandSide>>;
  not?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  notIn?: InputMaybe<Array<StadiumStandSide>>;
};

export type EnumStadiumStandSideWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  _min?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  equals?: InputMaybe<StadiumStandSide>;
  in?: InputMaybe<Array<StadiumStandSide>>;
  not?: InputMaybe<NestedEnumStadiumStandSideWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StadiumStandSide>>;
};

export type EnumStadiumStandSizeFieldUpdateOperationsInput = {
  set?: InputMaybe<StadiumStandSize>;
};

export type EnumStadiumStandSizeFilter = {
  equals?: InputMaybe<StadiumStandSize>;
  in?: InputMaybe<Array<StadiumStandSize>>;
  not?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  notIn?: InputMaybe<Array<StadiumStandSize>>;
};

export type EnumStadiumStandSizeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  _min?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  equals?: InputMaybe<StadiumStandSize>;
  in?: InputMaybe<Array<StadiumStandSize>>;
  not?: InputMaybe<NestedEnumStadiumStandSizeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StadiumStandSize>>;
};

export type EnumStadiumStandStyleFieldUpdateOperationsInput = {
  set?: InputMaybe<StadiumStandStyle>;
};

export type EnumStadiumStandStyleFilter = {
  equals?: InputMaybe<StadiumStandStyle>;
  in?: InputMaybe<Array<StadiumStandStyle>>;
  not?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  notIn?: InputMaybe<Array<StadiumStandStyle>>;
};

export type EnumStadiumStandStyleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  _min?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  equals?: InputMaybe<StadiumStandStyle>;
  in?: InputMaybe<Array<StadiumStandStyle>>;
  not?: InputMaybe<NestedEnumStadiumStandStyleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StadiumStandStyle>>;
};

export type EthereumEvent = {
  __typename?: 'EthereumEvent';
  _count?: Maybe<EthereumEventCount>;
  actions: Array<Action>;
  blockNumber: Scalars['Int'];
  event: Scalars['JSON'];
  id: Scalars['Int'];
  transactionHash: Scalars['String'];
};


export type EthereumEventActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};

export type EthereumEventAvgAggregate = {
  __typename?: 'EthereumEventAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type EthereumEventAvgOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type EthereumEventCount = {
  __typename?: 'EthereumEventCount';
  actions: Scalars['Int'];
};

export type EthereumEventCountAggregate = {
  __typename?: 'EthereumEventCountAggregate';
  _all: Scalars['Int'];
  blockNumber: Scalars['Int'];
  event: Scalars['Int'];
  id: Scalars['Int'];
  transactionHash: Scalars['Int'];
};

export type EthereumEventCountOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  event?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
};

export type EthereumEventCreateInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutEthereumEventsInput>;
  blockNumber: Scalars['Int'];
  event: Scalars['JSON'];
  transactionHash: Scalars['String'];
};

export type EthereumEventCreateManyInput = {
  blockNumber: Scalars['Int'];
  event: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  transactionHash: Scalars['String'];
};

export type EthereumEventCreateNestedManyWithoutActionsInput = {
  connect?: InputMaybe<Array<EthereumEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EthereumEventCreateOrConnectWithoutActionsInput>>;
  create?: InputMaybe<Array<EthereumEventCreateWithoutActionsInput>>;
};

export type EthereumEventCreateOrConnectWithoutActionsInput = {
  create: EthereumEventCreateWithoutActionsInput;
  where: EthereumEventWhereUniqueInput;
};

export type EthereumEventCreateWithoutActionsInput = {
  blockNumber: Scalars['Int'];
  event: Scalars['JSON'];
  transactionHash: Scalars['String'];
};

export type EthereumEventGroupBy = {
  __typename?: 'EthereumEventGroupBy';
  _avg?: Maybe<EthereumEventAvgAggregate>;
  _count?: Maybe<EthereumEventCountAggregate>;
  _max?: Maybe<EthereumEventMaxAggregate>;
  _min?: Maybe<EthereumEventMinAggregate>;
  _sum?: Maybe<EthereumEventSumAggregate>;
  blockNumber: Scalars['Int'];
  event: Scalars['JSON'];
  id: Scalars['Int'];
  transactionHash: Scalars['String'];
};

export type EthereumEventListRelationFilter = {
  every?: InputMaybe<EthereumEventWhereInput>;
  none?: InputMaybe<EthereumEventWhereInput>;
  some?: InputMaybe<EthereumEventWhereInput>;
};

export type EthereumEventMaxAggregate = {
  __typename?: 'EthereumEventMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  transactionHash?: Maybe<Scalars['String']>;
};

export type EthereumEventMaxOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
};

export type EthereumEventMinAggregate = {
  __typename?: 'EthereumEventMinAggregate';
  blockNumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  transactionHash?: Maybe<Scalars['String']>;
};

export type EthereumEventMinOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
};

export type EthereumEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EthereumEventOrderByWithAggregationInput = {
  _avg?: InputMaybe<EthereumEventAvgOrderByAggregateInput>;
  _count?: InputMaybe<EthereumEventCountOrderByAggregateInput>;
  _max?: InputMaybe<EthereumEventMaxOrderByAggregateInput>;
  _min?: InputMaybe<EthereumEventMinOrderByAggregateInput>;
  _sum?: InputMaybe<EthereumEventSumOrderByAggregateInput>;
  blockNumber?: InputMaybe<SortOrder>;
  event?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
};

export type EthereumEventOrderByWithRelationInput = {
  actions?: InputMaybe<ActionOrderByRelationAggregateInput>;
  blockNumber?: InputMaybe<SortOrder>;
  event?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
};

export enum EthereumEventScalarFieldEnum {
  BlockNumber = 'blockNumber',
  Event = 'event',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type EthereumEventScalarWhereInput = {
  AND?: InputMaybe<Array<EthereumEventScalarWhereInput>>;
  NOT?: InputMaybe<Array<EthereumEventScalarWhereInput>>;
  OR?: InputMaybe<Array<EthereumEventScalarWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  event?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  transactionHash?: InputMaybe<StringFilter>;
};

export type EthereumEventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EthereumEventScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EthereumEventScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EthereumEventScalarWhereWithAggregatesInput>>;
  blockNumber?: InputMaybe<IntWithAggregatesFilter>;
  event?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  transactionHash?: InputMaybe<StringWithAggregatesFilter>;
};

export type EthereumEventSumAggregate = {
  __typename?: 'EthereumEventSumAggregate';
  blockNumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type EthereumEventSumOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type EthereumEventUpdateInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutEthereumEventsInput>;
  blockNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  event?: InputMaybe<Scalars['JSON']>;
  transactionHash?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EthereumEventUpdateManyMutationInput = {
  blockNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  event?: InputMaybe<Scalars['JSON']>;
  transactionHash?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EthereumEventUpdateManyWithWhereWithoutActionsInput = {
  data: EthereumEventUpdateManyMutationInput;
  where: EthereumEventScalarWhereInput;
};

export type EthereumEventUpdateManyWithoutActionsInput = {
  connect?: InputMaybe<Array<EthereumEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EthereumEventCreateOrConnectWithoutActionsInput>>;
  create?: InputMaybe<Array<EthereumEventCreateWithoutActionsInput>>;
  delete?: InputMaybe<Array<EthereumEventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EthereumEventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EthereumEventWhereUniqueInput>>;
  set?: InputMaybe<Array<EthereumEventWhereUniqueInput>>;
  update?: InputMaybe<Array<EthereumEventUpdateWithWhereUniqueWithoutActionsInput>>;
  updateMany?: InputMaybe<Array<EthereumEventUpdateManyWithWhereWithoutActionsInput>>;
  upsert?: InputMaybe<Array<EthereumEventUpsertWithWhereUniqueWithoutActionsInput>>;
};

export type EthereumEventUpdateWithWhereUniqueWithoutActionsInput = {
  data: EthereumEventUpdateWithoutActionsInput;
  where: EthereumEventWhereUniqueInput;
};

export type EthereumEventUpdateWithoutActionsInput = {
  blockNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  event?: InputMaybe<Scalars['JSON']>;
  transactionHash?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EthereumEventUpsertWithWhereUniqueWithoutActionsInput = {
  create: EthereumEventCreateWithoutActionsInput;
  update: EthereumEventUpdateWithoutActionsInput;
  where: EthereumEventWhereUniqueInput;
};

export type EthereumEventWhereInput = {
  AND?: InputMaybe<Array<EthereumEventWhereInput>>;
  NOT?: InputMaybe<Array<EthereumEventWhereInput>>;
  OR?: InputMaybe<Array<EthereumEventWhereInput>>;
  actions?: InputMaybe<ActionListRelationFilter>;
  blockNumber?: InputMaybe<IntFilter>;
  event?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  transactionHash?: InputMaybe<StringFilter>;
};

export type EthereumEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Fixture = {
  __typename?: 'Fixture';
  _count?: Maybe<FixtureCount>;
  clubFixtures: Array<ClubFixture>;
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  id: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  match?: Maybe<Match>;
  matchId?: Maybe<Scalars['String']>;
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
  tournament: Tournament;
  tournamentId: Scalars['Int'];
};


export type FixtureClubFixturesArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};

export type FixtureAvgAggregate = {
  __typename?: 'FixtureAvgAggregate';
  date?: Maybe<Scalars['Float']>;
  fixtureIndex?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  roundIndex?: Maybe<Scalars['Float']>;
  tournamentId?: Maybe<Scalars['Float']>;
};

export type FixtureAvgOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureCount = {
  __typename?: 'FixtureCount';
  clubFixtures: Scalars['Int'];
};

export type FixtureCountAggregate = {
  __typename?: 'FixtureCountAggregate';
  _all: Scalars['Int'];
  date: Scalars['Int'];
  fixtureIndex: Scalars['Int'];
  id: Scalars['Int'];
  inGameTimestamp: Scalars['Int'];
  isNeutralVenue: Scalars['Int'];
  matchId: Scalars['Int'];
  realWorldTimestamp: Scalars['Int'];
  roundIndex: Scalars['Int'];
  seed: Scalars['Int'];
  state: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type FixtureCountOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  isNeutralVenue?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureCreateInput = {
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutFixtureInput>;
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  match?: InputMaybe<MatchCreateNestedOneWithoutFixtureInput>;
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
  tournament: TournamentCreateNestedOneWithoutFixturesInput;
};

export type FixtureCreateManyInput = {
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  matchId?: InputMaybe<Scalars['String']>;
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
  tournamentId: Scalars['Int'];
};

export type FixtureCreateManyTournamentInput = {
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  matchId?: InputMaybe<Scalars['String']>;
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
};

export type FixtureCreateManyTournamentInputEnvelope = {
  data: Array<FixtureCreateManyTournamentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FixtureCreateNestedManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<FixtureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FixtureCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<FixtureCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<FixtureCreateManyTournamentInputEnvelope>;
};

export type FixtureCreateNestedOneWithoutClubFixturesInput = {
  connect?: InputMaybe<FixtureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FixtureCreateOrConnectWithoutClubFixturesInput>;
  create?: InputMaybe<FixtureCreateWithoutClubFixturesInput>;
};

export type FixtureCreateNestedOneWithoutMatchInput = {
  connect?: InputMaybe<FixtureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FixtureCreateOrConnectWithoutMatchInput>;
  create?: InputMaybe<FixtureCreateWithoutMatchInput>;
};

export type FixtureCreateOrConnectWithoutClubFixturesInput = {
  create: FixtureCreateWithoutClubFixturesInput;
  where: FixtureWhereUniqueInput;
};

export type FixtureCreateOrConnectWithoutMatchInput = {
  create: FixtureCreateWithoutMatchInput;
  where: FixtureWhereUniqueInput;
};

export type FixtureCreateOrConnectWithoutTournamentInput = {
  create: FixtureCreateWithoutTournamentInput;
  where: FixtureWhereUniqueInput;
};

export type FixtureCreateWithoutClubFixturesInput = {
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  match?: InputMaybe<MatchCreateNestedOneWithoutFixtureInput>;
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
  tournament: TournamentCreateNestedOneWithoutFixturesInput;
};

export type FixtureCreateWithoutMatchInput = {
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutFixtureInput>;
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
  tournament: TournamentCreateNestedOneWithoutFixturesInput;
};

export type FixtureCreateWithoutTournamentInput = {
  clubFixtures?: InputMaybe<ClubFixtureCreateNestedManyWithoutFixtureInput>;
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  match?: InputMaybe<MatchCreateNestedOneWithoutFixtureInput>;
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
};

export type FixtureGroupBy = {
  __typename?: 'FixtureGroupBy';
  _avg?: Maybe<FixtureAvgAggregate>;
  _count?: Maybe<FixtureCountAggregate>;
  _max?: Maybe<FixtureMaxAggregate>;
  _min?: Maybe<FixtureMinAggregate>;
  _sum?: Maybe<FixtureSumAggregate>;
  date: Scalars['Float'];
  fixtureIndex: Scalars['Int'];
  id: Scalars['Int'];
  inGameTimestamp: Scalars['Float'];
  isNeutralVenue: Scalars['Boolean'];
  matchId?: Maybe<Scalars['String']>;
  realWorldTimestamp: Scalars['Float'];
  roundIndex: Scalars['Int'];
  seed: Scalars['String'];
  state: Scalars['String'];
  tournamentId: Scalars['Int'];
};

export type FixtureListRelationFilter = {
  every?: InputMaybe<FixtureWhereInput>;
  none?: InputMaybe<FixtureWhereInput>;
  some?: InputMaybe<FixtureWhereInput>;
};

export type FixtureMaxAggregate = {
  __typename?: 'FixtureMaxAggregate';
  date?: Maybe<Scalars['Float']>;
  fixtureIndex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  isNeutralVenue?: Maybe<Scalars['Boolean']>;
  matchId?: Maybe<Scalars['String']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  roundIndex?: Maybe<Scalars['Int']>;
  seed?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type FixtureMaxOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  isNeutralVenue?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureMinAggregate = {
  __typename?: 'FixtureMinAggregate';
  date?: Maybe<Scalars['Float']>;
  fixtureIndex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  isNeutralVenue?: Maybe<Scalars['Boolean']>;
  matchId?: Maybe<Scalars['String']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  roundIndex?: Maybe<Scalars['Int']>;
  seed?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type FixtureMinOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  isNeutralVenue?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FixtureOrderByWithAggregationInput = {
  _avg?: InputMaybe<FixtureAvgOrderByAggregateInput>;
  _count?: InputMaybe<FixtureCountOrderByAggregateInput>;
  _max?: InputMaybe<FixtureMaxOrderByAggregateInput>;
  _min?: InputMaybe<FixtureMinOrderByAggregateInput>;
  _sum?: InputMaybe<FixtureSumOrderByAggregateInput>;
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  isNeutralVenue?: InputMaybe<SortOrder>;
  matchId?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureOrderByWithRelationInput = {
  clubFixtures?: InputMaybe<ClubFixtureOrderByRelationAggregateInput>;
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  isNeutralVenue?: InputMaybe<SortOrder>;
  match?: InputMaybe<MatchOrderByWithRelationInput>;
  matchId?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureRelationFilter = {
  is?: InputMaybe<FixtureWhereInput>;
  isNot?: InputMaybe<FixtureWhereInput>;
};

export enum FixtureScalarFieldEnum {
  Date = 'date',
  FixtureIndex = 'fixtureIndex',
  Id = 'id',
  InGameTimestamp = 'inGameTimestamp',
  IsNeutralVenue = 'isNeutralVenue',
  MatchId = 'matchId',
  RealWorldTimestamp = 'realWorldTimestamp',
  RoundIndex = 'roundIndex',
  Seed = 'seed',
  State = 'state',
  TournamentId = 'tournamentId'
}

export type FixtureScalarWhereInput = {
  AND?: InputMaybe<Array<FixtureScalarWhereInput>>;
  NOT?: InputMaybe<Array<FixtureScalarWhereInput>>;
  OR?: InputMaybe<Array<FixtureScalarWhereInput>>;
  date?: InputMaybe<FloatFilter>;
  fixtureIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  inGameTimestamp?: InputMaybe<FloatFilter>;
  isNeutralVenue?: InputMaybe<BoolFilter>;
  matchId?: InputMaybe<StringNullableFilter>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  roundIndex?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type FixtureScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FixtureScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FixtureScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FixtureScalarWhereWithAggregatesInput>>;
  date?: InputMaybe<FloatWithAggregatesFilter>;
  fixtureIndex?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  inGameTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  isNeutralVenue?: InputMaybe<BoolWithAggregatesFilter>;
  matchId?: InputMaybe<StringNullableWithAggregatesFilter>;
  realWorldTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  roundIndex?: InputMaybe<IntWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  state?: InputMaybe<StringWithAggregatesFilter>;
  tournamentId?: InputMaybe<IntWithAggregatesFilter>;
};

export type FixtureSumAggregate = {
  __typename?: 'FixtureSumAggregate';
  date?: Maybe<Scalars['Float']>;
  fixtureIndex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inGameTimestamp?: Maybe<Scalars['Float']>;
  realWorldTimestamp?: Maybe<Scalars['Float']>;
  roundIndex?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type FixtureSumOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  fixtureIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inGameTimestamp?: InputMaybe<SortOrder>;
  realWorldTimestamp?: InputMaybe<SortOrder>;
  roundIndex?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type FixtureUpdateInput = {
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutFixtureInput>;
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtureIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  isNeutralVenue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  match?: InputMaybe<MatchUpdateOneWithoutFixtureInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  roundIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutFixturesInput>;
};

export type FixtureUpdateManyMutationInput = {
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtureIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  isNeutralVenue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  roundIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FixtureUpdateManyWithWhereWithoutTournamentInput = {
  data: FixtureUpdateManyMutationInput;
  where: FixtureScalarWhereInput;
};

export type FixtureUpdateManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<FixtureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FixtureCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<FixtureCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<FixtureCreateManyTournamentInputEnvelope>;
  delete?: InputMaybe<Array<FixtureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FixtureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FixtureWhereUniqueInput>>;
  set?: InputMaybe<Array<FixtureWhereUniqueInput>>;
  update?: InputMaybe<Array<FixtureUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: InputMaybe<Array<FixtureUpdateManyWithWhereWithoutTournamentInput>>;
  upsert?: InputMaybe<Array<FixtureUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type FixtureUpdateOneRequiredWithoutClubFixturesInput = {
  connect?: InputMaybe<FixtureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FixtureCreateOrConnectWithoutClubFixturesInput>;
  create?: InputMaybe<FixtureCreateWithoutClubFixturesInput>;
  update?: InputMaybe<FixtureUpdateWithoutClubFixturesInput>;
  upsert?: InputMaybe<FixtureUpsertWithoutClubFixturesInput>;
};

export type FixtureUpdateOneWithoutMatchInput = {
  connect?: InputMaybe<FixtureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FixtureCreateOrConnectWithoutMatchInput>;
  create?: InputMaybe<FixtureCreateWithoutMatchInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FixtureUpdateWithoutMatchInput>;
  upsert?: InputMaybe<FixtureUpsertWithoutMatchInput>;
};

export type FixtureUpdateWithWhereUniqueWithoutTournamentInput = {
  data: FixtureUpdateWithoutTournamentInput;
  where: FixtureWhereUniqueInput;
};

export type FixtureUpdateWithoutClubFixturesInput = {
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtureIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  isNeutralVenue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  match?: InputMaybe<MatchUpdateOneWithoutFixtureInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  roundIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutFixturesInput>;
};

export type FixtureUpdateWithoutMatchInput = {
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutFixtureInput>;
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtureIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  isNeutralVenue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  roundIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutFixturesInput>;
};

export type FixtureUpdateWithoutTournamentInput = {
  clubFixtures?: InputMaybe<ClubFixtureUpdateManyWithoutFixtureInput>;
  date?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtureIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  inGameTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  isNeutralVenue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  match?: InputMaybe<MatchUpdateOneWithoutFixtureInput>;
  realWorldTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  roundIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FixtureUpsertWithWhereUniqueWithoutTournamentInput = {
  create: FixtureCreateWithoutTournamentInput;
  update: FixtureUpdateWithoutTournamentInput;
  where: FixtureWhereUniqueInput;
};

export type FixtureUpsertWithoutClubFixturesInput = {
  create: FixtureCreateWithoutClubFixturesInput;
  update: FixtureUpdateWithoutClubFixturesInput;
};

export type FixtureUpsertWithoutMatchInput = {
  create: FixtureCreateWithoutMatchInput;
  update: FixtureUpdateWithoutMatchInput;
};

export type FixtureWhereInput = {
  AND?: InputMaybe<Array<FixtureWhereInput>>;
  NOT?: InputMaybe<Array<FixtureWhereInput>>;
  OR?: InputMaybe<Array<FixtureWhereInput>>;
  clubFixtures?: InputMaybe<ClubFixtureListRelationFilter>;
  date?: InputMaybe<FloatFilter>;
  fixtureIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  inGameTimestamp?: InputMaybe<FloatFilter>;
  isNeutralVenue?: InputMaybe<BoolFilter>;
  match?: InputMaybe<MatchRelationFilter>;
  matchId?: InputMaybe<StringNullableFilter>;
  realWorldTimestamp?: InputMaybe<FloatFilter>;
  roundIndex?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type FixtureWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  matchId?: InputMaybe<Scalars['String']>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Formation = {
  __typename?: 'Formation';
  _count?: Maybe<FormationCount>;
  id: Scalars['Int'];
  name: Scalars['String'];
  slots: Array<FormationSlot>;
  tactics: Array<Tactics>;
};


export type FormationSlotsArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type FormationTacticsArgs = {
  cursor?: InputMaybe<TacticsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TacticsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TacticsWhereInput>;
};

export type FormationAvgAggregate = {
  __typename?: 'FormationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FormationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FormationCount = {
  __typename?: 'FormationCount';
  slots: Scalars['Int'];
  tactics: Scalars['Int'];
};

export type FormationCountAggregate = {
  __typename?: 'FormationCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type FormationCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FormationCreateInput = {
  name: Scalars['String'];
  slots?: InputMaybe<FormationSlotCreateNestedManyWithoutFormationInput>;
  tactics?: InputMaybe<TacticsCreateNestedManyWithoutFormationInput>;
};

export type FormationCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type FormationCreateNestedOneWithoutSlotsInput = {
  connect?: InputMaybe<FormationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormationCreateOrConnectWithoutSlotsInput>;
  create?: InputMaybe<FormationCreateWithoutSlotsInput>;
};

export type FormationCreateNestedOneWithoutTacticsInput = {
  connect?: InputMaybe<FormationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormationCreateOrConnectWithoutTacticsInput>;
  create?: InputMaybe<FormationCreateWithoutTacticsInput>;
};

export type FormationCreateOrConnectWithoutSlotsInput = {
  create: FormationCreateWithoutSlotsInput;
  where: FormationWhereUniqueInput;
};

export type FormationCreateOrConnectWithoutTacticsInput = {
  create: FormationCreateWithoutTacticsInput;
  where: FormationWhereUniqueInput;
};

export type FormationCreateWithoutSlotsInput = {
  name: Scalars['String'];
  tactics?: InputMaybe<TacticsCreateNestedManyWithoutFormationInput>;
};

export type FormationCreateWithoutTacticsInput = {
  name: Scalars['String'];
  slots?: InputMaybe<FormationSlotCreateNestedManyWithoutFormationInput>;
};

export type FormationGroupBy = {
  __typename?: 'FormationGroupBy';
  _avg?: Maybe<FormationAvgAggregate>;
  _count?: Maybe<FormationCountAggregate>;
  _max?: Maybe<FormationMaxAggregate>;
  _min?: Maybe<FormationMinAggregate>;
  _sum?: Maybe<FormationSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type FormationMaxAggregate = {
  __typename?: 'FormationMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type FormationMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FormationMinAggregate = {
  __typename?: 'FormationMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type FormationMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FormationOrderByWithAggregationInput = {
  _avg?: InputMaybe<FormationAvgOrderByAggregateInput>;
  _count?: InputMaybe<FormationCountOrderByAggregateInput>;
  _max?: InputMaybe<FormationMaxOrderByAggregateInput>;
  _min?: InputMaybe<FormationMinOrderByAggregateInput>;
  _sum?: InputMaybe<FormationSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FormationOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slots?: InputMaybe<FormationSlotOrderByRelationAggregateInput>;
  tactics?: InputMaybe<TacticsOrderByRelationAggregateInput>;
};

export type FormationRelationFilter = {
  is?: InputMaybe<FormationWhereInput>;
  isNot?: InputMaybe<FormationWhereInput>;
};

export enum FormationScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type FormationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FormationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FormationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FormationScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type FormationSlot = {
  __typename?: 'FormationSlot';
  coords: Scalars['JSON'];
  formation: Formation;
  formationId: Scalars['Int'];
  id: Scalars['Int'];
  position: Scalars['String'];
  slotIndex: Scalars['Int'];
};

export type FormationSlotAvgAggregate = {
  __typename?: 'FormationSlotAvgAggregate';
  formationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  slotIndex?: Maybe<Scalars['Float']>;
};

export type FormationSlotAvgOrderByAggregateInput = {
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export type FormationSlotCountAggregate = {
  __typename?: 'FormationSlotCountAggregate';
  _all: Scalars['Int'];
  coords: Scalars['Int'];
  formationId: Scalars['Int'];
  id: Scalars['Int'];
  position: Scalars['Int'];
  slotIndex: Scalars['Int'];
};

export type FormationSlotCountOrderByAggregateInput = {
  coords?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export type FormationSlotCreateInput = {
  coords: Scalars['JSON'];
  formation: FormationCreateNestedOneWithoutSlotsInput;
  position: Scalars['String'];
  slotIndex: Scalars['Int'];
};

export type FormationSlotCreateManyFormationInput = {
  coords: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  slotIndex: Scalars['Int'];
};

export type FormationSlotCreateManyFormationInputEnvelope = {
  data: Array<FormationSlotCreateManyFormationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FormationSlotCreateManyInput = {
  coords: Scalars['JSON'];
  formationId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  slotIndex: Scalars['Int'];
};

export type FormationSlotCreateNestedManyWithoutFormationInput = {
  connect?: InputMaybe<Array<FormationSlotWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FormationSlotCreateOrConnectWithoutFormationInput>>;
  create?: InputMaybe<Array<FormationSlotCreateWithoutFormationInput>>;
  createMany?: InputMaybe<FormationSlotCreateManyFormationInputEnvelope>;
};

export type FormationSlotCreateOrConnectWithoutFormationInput = {
  create: FormationSlotCreateWithoutFormationInput;
  where: FormationSlotWhereUniqueInput;
};

export type FormationSlotCreateWithoutFormationInput = {
  coords: Scalars['JSON'];
  position: Scalars['String'];
  slotIndex: Scalars['Int'];
};

export type FormationSlotGroupBy = {
  __typename?: 'FormationSlotGroupBy';
  _avg?: Maybe<FormationSlotAvgAggregate>;
  _count?: Maybe<FormationSlotCountAggregate>;
  _max?: Maybe<FormationSlotMaxAggregate>;
  _min?: Maybe<FormationSlotMinAggregate>;
  _sum?: Maybe<FormationSlotSumAggregate>;
  coords: Scalars['JSON'];
  formationId: Scalars['Int'];
  id: Scalars['Int'];
  position: Scalars['String'];
  slotIndex: Scalars['Int'];
};

export type FormationSlotListRelationFilter = {
  every?: InputMaybe<FormationSlotWhereInput>;
  none?: InputMaybe<FormationSlotWhereInput>;
  some?: InputMaybe<FormationSlotWhereInput>;
};

export type FormationSlotMaxAggregate = {
  __typename?: 'FormationSlotMaxAggregate';
  formationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  slotIndex?: Maybe<Scalars['Int']>;
};

export type FormationSlotMaxOrderByAggregateInput = {
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export type FormationSlotMinAggregate = {
  __typename?: 'FormationSlotMinAggregate';
  formationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  slotIndex?: Maybe<Scalars['Int']>;
};

export type FormationSlotMinOrderByAggregateInput = {
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export type FormationSlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FormationSlotOrderByWithAggregationInput = {
  _avg?: InputMaybe<FormationSlotAvgOrderByAggregateInput>;
  _count?: InputMaybe<FormationSlotCountOrderByAggregateInput>;
  _max?: InputMaybe<FormationSlotMaxOrderByAggregateInput>;
  _min?: InputMaybe<FormationSlotMinOrderByAggregateInput>;
  _sum?: InputMaybe<FormationSlotSumOrderByAggregateInput>;
  coords?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export type FormationSlotOrderByWithRelationInput = {
  coords?: InputMaybe<SortOrder>;
  formation?: InputMaybe<FormationOrderByWithRelationInput>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export enum FormationSlotScalarFieldEnum {
  Coords = 'coords',
  FormationId = 'formationId',
  Id = 'id',
  Position = 'position',
  SlotIndex = 'slotIndex'
}

export type FormationSlotScalarWhereInput = {
  AND?: InputMaybe<Array<FormationSlotScalarWhereInput>>;
  NOT?: InputMaybe<Array<FormationSlotScalarWhereInput>>;
  OR?: InputMaybe<Array<FormationSlotScalarWhereInput>>;
  coords?: InputMaybe<JsonFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  position?: InputMaybe<StringFilter>;
  slotIndex?: InputMaybe<IntFilter>;
};

export type FormationSlotScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FormationSlotScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FormationSlotScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FormationSlotScalarWhereWithAggregatesInput>>;
  coords?: InputMaybe<JsonWithAggregatesFilter>;
  formationId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  position?: InputMaybe<StringWithAggregatesFilter>;
  slotIndex?: InputMaybe<IntWithAggregatesFilter>;
};

export type FormationSlotSumAggregate = {
  __typename?: 'FormationSlotSumAggregate';
  formationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  slotIndex?: Maybe<Scalars['Int']>;
};

export type FormationSlotSumOrderByAggregateInput = {
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  slotIndex?: InputMaybe<SortOrder>;
};

export type FormationSlotUpdateInput = {
  coords?: InputMaybe<Scalars['JSON']>;
  formation?: InputMaybe<FormationUpdateOneRequiredWithoutSlotsInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  slotIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FormationSlotUpdateManyMutationInput = {
  coords?: InputMaybe<Scalars['JSON']>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  slotIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FormationSlotUpdateManyWithWhereWithoutFormationInput = {
  data: FormationSlotUpdateManyMutationInput;
  where: FormationSlotScalarWhereInput;
};

export type FormationSlotUpdateManyWithoutFormationInput = {
  connect?: InputMaybe<Array<FormationSlotWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FormationSlotCreateOrConnectWithoutFormationInput>>;
  create?: InputMaybe<Array<FormationSlotCreateWithoutFormationInput>>;
  createMany?: InputMaybe<FormationSlotCreateManyFormationInputEnvelope>;
  delete?: InputMaybe<Array<FormationSlotWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FormationSlotScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FormationSlotWhereUniqueInput>>;
  set?: InputMaybe<Array<FormationSlotWhereUniqueInput>>;
  update?: InputMaybe<Array<FormationSlotUpdateWithWhereUniqueWithoutFormationInput>>;
  updateMany?: InputMaybe<Array<FormationSlotUpdateManyWithWhereWithoutFormationInput>>;
  upsert?: InputMaybe<Array<FormationSlotUpsertWithWhereUniqueWithoutFormationInput>>;
};

export type FormationSlotUpdateWithWhereUniqueWithoutFormationInput = {
  data: FormationSlotUpdateWithoutFormationInput;
  where: FormationSlotWhereUniqueInput;
};

export type FormationSlotUpdateWithoutFormationInput = {
  coords?: InputMaybe<Scalars['JSON']>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  slotIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FormationSlotUpsertWithWhereUniqueWithoutFormationInput = {
  create: FormationSlotCreateWithoutFormationInput;
  update: FormationSlotUpdateWithoutFormationInput;
  where: FormationSlotWhereUniqueInput;
};

export type FormationSlotWhereInput = {
  AND?: InputMaybe<Array<FormationSlotWhereInput>>;
  NOT?: InputMaybe<Array<FormationSlotWhereInput>>;
  OR?: InputMaybe<Array<FormationSlotWhereInput>>;
  coords?: InputMaybe<JsonFilter>;
  formation?: InputMaybe<FormationRelationFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  position?: InputMaybe<StringFilter>;
  slotIndex?: InputMaybe<IntFilter>;
};

export type FormationSlotWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type FormationSumAggregate = {
  __typename?: 'FormationSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type FormationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FormationUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slots?: InputMaybe<FormationSlotUpdateManyWithoutFormationInput>;
  tactics?: InputMaybe<TacticsUpdateManyWithoutFormationInput>;
};

export type FormationUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FormationUpdateOneRequiredWithoutSlotsInput = {
  connect?: InputMaybe<FormationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormationCreateOrConnectWithoutSlotsInput>;
  create?: InputMaybe<FormationCreateWithoutSlotsInput>;
  update?: InputMaybe<FormationUpdateWithoutSlotsInput>;
  upsert?: InputMaybe<FormationUpsertWithoutSlotsInput>;
};

export type FormationUpdateOneRequiredWithoutTacticsInput = {
  connect?: InputMaybe<FormationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FormationCreateOrConnectWithoutTacticsInput>;
  create?: InputMaybe<FormationCreateWithoutTacticsInput>;
  update?: InputMaybe<FormationUpdateWithoutTacticsInput>;
  upsert?: InputMaybe<FormationUpsertWithoutTacticsInput>;
};

export type FormationUpdateWithoutSlotsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tactics?: InputMaybe<TacticsUpdateManyWithoutFormationInput>;
};

export type FormationUpdateWithoutTacticsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slots?: InputMaybe<FormationSlotUpdateManyWithoutFormationInput>;
};

export type FormationUpsertWithoutSlotsInput = {
  create: FormationCreateWithoutSlotsInput;
  update: FormationUpdateWithoutSlotsInput;
};

export type FormationUpsertWithoutTacticsInput = {
  create: FormationCreateWithoutTacticsInput;
  update: FormationUpdateWithoutTacticsInput;
};

export type FormationWhereInput = {
  AND?: InputMaybe<Array<FormationWhereInput>>;
  NOT?: InputMaybe<Array<FormationWhereInput>>;
  OR?: InputMaybe<Array<FormationWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slots?: InputMaybe<FormationSlotListRelationFilter>;
  tactics?: InputMaybe<TacticsListRelationFilter>;
};

export type FormationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type Kit = {
  __typename?: 'Kit';
  club: Club;
  clubId: Scalars['Int'];
  data: Scalars['JSON'];
  id: Scalars['Int'];
  kitType: Scalars['String'];
};

export type KitAvgAggregate = {
  __typename?: 'KitAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type KitAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type KitCountAggregate = {
  __typename?: 'KitCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  data: Scalars['Int'];
  id: Scalars['Int'];
  kitType: Scalars['Int'];
};

export type KitCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kitType?: InputMaybe<SortOrder>;
};

export type KitCreateInput = {
  club: ClubCreateNestedOneWithoutKitsInput;
  data: Scalars['JSON'];
  kitType: Scalars['String'];
};

export type KitCreateManyClubInput = {
  data: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  kitType: Scalars['String'];
};

export type KitCreateManyClubInputEnvelope = {
  data: Array<KitCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type KitCreateManyInput = {
  clubId: Scalars['Int'];
  data: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  kitType: Scalars['String'];
};

export type KitCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<KitWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<KitCreateWithoutClubInput>>;
  createMany?: InputMaybe<KitCreateManyClubInputEnvelope>;
};

export type KitCreateOrConnectWithoutClubInput = {
  create: KitCreateWithoutClubInput;
  where: KitWhereUniqueInput;
};

export type KitCreateWithoutClubInput = {
  data: Scalars['JSON'];
  kitType: Scalars['String'];
};

export type KitGroupBy = {
  __typename?: 'KitGroupBy';
  _avg?: Maybe<KitAvgAggregate>;
  _count?: Maybe<KitCountAggregate>;
  _max?: Maybe<KitMaxAggregate>;
  _min?: Maybe<KitMinAggregate>;
  _sum?: Maybe<KitSumAggregate>;
  clubId: Scalars['Int'];
  data: Scalars['JSON'];
  id: Scalars['Int'];
  kitType: Scalars['String'];
};

export type KitListRelationFilter = {
  every?: InputMaybe<KitWhereInput>;
  none?: InputMaybe<KitWhereInput>;
  some?: InputMaybe<KitWhereInput>;
};

export type KitMaxAggregate = {
  __typename?: 'KitMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  kitType?: Maybe<Scalars['String']>;
};

export type KitMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kitType?: InputMaybe<SortOrder>;
};

export type KitMinAggregate = {
  __typename?: 'KitMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  kitType?: Maybe<Scalars['String']>;
};

export type KitMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kitType?: InputMaybe<SortOrder>;
};

export type KitOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type KitOrderByWithAggregationInput = {
  _avg?: InputMaybe<KitAvgOrderByAggregateInput>;
  _count?: InputMaybe<KitCountOrderByAggregateInput>;
  _max?: InputMaybe<KitMaxOrderByAggregateInput>;
  _min?: InputMaybe<KitMinOrderByAggregateInput>;
  _sum?: InputMaybe<KitSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kitType?: InputMaybe<SortOrder>;
};

export type KitOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kitType?: InputMaybe<SortOrder>;
};

export enum KitScalarFieldEnum {
  ClubId = 'clubId',
  Data = 'data',
  Id = 'id',
  KitType = 'kitType'
}

export type KitScalarWhereInput = {
  AND?: InputMaybe<Array<KitScalarWhereInput>>;
  NOT?: InputMaybe<Array<KitScalarWhereInput>>;
  OR?: InputMaybe<Array<KitScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  kitType?: InputMaybe<StringFilter>;
};

export type KitScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<KitScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<KitScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<KitScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  data?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  kitType?: InputMaybe<StringWithAggregatesFilter>;
};

export type KitSumAggregate = {
  __typename?: 'KitSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type KitSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type KitUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutKitsInput>;
  data?: InputMaybe<Scalars['JSON']>;
  kitType?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KitUpdateManyMutationInput = {
  data?: InputMaybe<Scalars['JSON']>;
  kitType?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KitUpdateManyWithWhereWithoutClubInput = {
  data: KitUpdateManyMutationInput;
  where: KitScalarWhereInput;
};

export type KitUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<KitWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<KitCreateWithoutClubInput>>;
  createMany?: InputMaybe<KitCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<KitWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<KitScalarWhereInput>>;
  disconnect?: InputMaybe<Array<KitWhereUniqueInput>>;
  set?: InputMaybe<Array<KitWhereUniqueInput>>;
  update?: InputMaybe<Array<KitUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<KitUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<KitUpsertWithWhereUniqueWithoutClubInput>>;
};

export type KitUpdateWithWhereUniqueWithoutClubInput = {
  data: KitUpdateWithoutClubInput;
  where: KitWhereUniqueInput;
};

export type KitUpdateWithoutClubInput = {
  data?: InputMaybe<Scalars['JSON']>;
  kitType?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KitUpsertWithWhereUniqueWithoutClubInput = {
  create: KitCreateWithoutClubInput;
  update: KitUpdateWithoutClubInput;
  where: KitWhereUniqueInput;
};

export type KitWhereInput = {
  AND?: InputMaybe<Array<KitWhereInput>>;
  NOT?: InputMaybe<Array<KitWhereInput>>;
  OR?: InputMaybe<Array<KitWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  data?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  kitType?: InputMaybe<StringFilter>;
};

export type KitWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Lineup = {
  __typename?: 'Lineup';
  _count?: Maybe<LineupCount>;
  club: Club;
  clubId: Scalars['Int'];
  id: Scalars['Int'];
  isSelected: Scalars['Boolean'];
  playerLineups: Array<PlayerLineup>;
  tactics: Tactics;
  tacticsId: Scalars['Int'];
};


export type LineupPlayerLineupsArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};

export type LineupAvgAggregate = {
  __typename?: 'LineupAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tacticsId?: Maybe<Scalars['Float']>;
};

export type LineupAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupCount = {
  __typename?: 'LineupCount';
  playerLineups: Scalars['Int'];
};

export type LineupCountAggregate = {
  __typename?: 'LineupCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  id: Scalars['Int'];
  isSelected: Scalars['Int'];
  tacticsId: Scalars['Int'];
};

export type LineupCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isSelected?: InputMaybe<SortOrder>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupCreateInput = {
  club: ClubCreateNestedOneWithoutLineupsInput;
  isSelected: Scalars['Boolean'];
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutLineupInput>;
  tactics: TacticsCreateNestedOneWithoutLineupInput;
};

export type LineupCreateManyClubInput = {
  id?: InputMaybe<Scalars['Int']>;
  isSelected: Scalars['Boolean'];
  tacticsId: Scalars['Int'];
};

export type LineupCreateManyClubInputEnvelope = {
  data: Array<LineupCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LineupCreateManyInput = {
  clubId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  isSelected: Scalars['Boolean'];
  tacticsId: Scalars['Int'];
};

export type LineupCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<LineupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LineupCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<LineupCreateWithoutClubInput>>;
  createMany?: InputMaybe<LineupCreateManyClubInputEnvelope>;
};

export type LineupCreateNestedOneWithoutPlayerLineupsInput = {
  connect?: InputMaybe<LineupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LineupCreateOrConnectWithoutPlayerLineupsInput>;
  create?: InputMaybe<LineupCreateWithoutPlayerLineupsInput>;
};

export type LineupCreateNestedOneWithoutTacticsInput = {
  connect?: InputMaybe<LineupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LineupCreateOrConnectWithoutTacticsInput>;
  create?: InputMaybe<LineupCreateWithoutTacticsInput>;
};

export type LineupCreateOrConnectWithoutClubInput = {
  create: LineupCreateWithoutClubInput;
  where: LineupWhereUniqueInput;
};

export type LineupCreateOrConnectWithoutPlayerLineupsInput = {
  create: LineupCreateWithoutPlayerLineupsInput;
  where: LineupWhereUniqueInput;
};

export type LineupCreateOrConnectWithoutTacticsInput = {
  create: LineupCreateWithoutTacticsInput;
  where: LineupWhereUniqueInput;
};

export type LineupCreateWithoutClubInput = {
  isSelected: Scalars['Boolean'];
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutLineupInput>;
  tactics: TacticsCreateNestedOneWithoutLineupInput;
};

export type LineupCreateWithoutPlayerLineupsInput = {
  club: ClubCreateNestedOneWithoutLineupsInput;
  isSelected: Scalars['Boolean'];
  tactics: TacticsCreateNestedOneWithoutLineupInput;
};

export type LineupCreateWithoutTacticsInput = {
  club: ClubCreateNestedOneWithoutLineupsInput;
  isSelected: Scalars['Boolean'];
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutLineupInput>;
};

export type LineupGroupBy = {
  __typename?: 'LineupGroupBy';
  _avg?: Maybe<LineupAvgAggregate>;
  _count?: Maybe<LineupCountAggregate>;
  _max?: Maybe<LineupMaxAggregate>;
  _min?: Maybe<LineupMinAggregate>;
  _sum?: Maybe<LineupSumAggregate>;
  clubId: Scalars['Int'];
  id: Scalars['Int'];
  isSelected: Scalars['Boolean'];
  tacticsId: Scalars['Int'];
};

export type LineupListRelationFilter = {
  every?: InputMaybe<LineupWhereInput>;
  none?: InputMaybe<LineupWhereInput>;
  some?: InputMaybe<LineupWhereInput>;
};

export type LineupMaxAggregate = {
  __typename?: 'LineupMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isSelected?: Maybe<Scalars['Boolean']>;
  tacticsId?: Maybe<Scalars['Int']>;
};

export type LineupMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isSelected?: InputMaybe<SortOrder>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupMinAggregate = {
  __typename?: 'LineupMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isSelected?: Maybe<Scalars['Boolean']>;
  tacticsId?: Maybe<Scalars['Int']>;
};

export type LineupMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isSelected?: InputMaybe<SortOrder>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LineupOrderByWithAggregationInput = {
  _avg?: InputMaybe<LineupAvgOrderByAggregateInput>;
  _count?: InputMaybe<LineupCountOrderByAggregateInput>;
  _max?: InputMaybe<LineupMaxOrderByAggregateInput>;
  _min?: InputMaybe<LineupMinOrderByAggregateInput>;
  _sum?: InputMaybe<LineupSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isSelected?: InputMaybe<SortOrder>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isSelected?: InputMaybe<SortOrder>;
  playerLineups?: InputMaybe<PlayerLineupOrderByRelationAggregateInput>;
  tactics?: InputMaybe<TacticsOrderByWithRelationInput>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupRelationFilter = {
  is?: InputMaybe<LineupWhereInput>;
  isNot?: InputMaybe<LineupWhereInput>;
};

export enum LineupScalarFieldEnum {
  ClubId = 'clubId',
  Id = 'id',
  IsSelected = 'isSelected',
  TacticsId = 'tacticsId'
}

export type LineupScalarWhereInput = {
  AND?: InputMaybe<Array<LineupScalarWhereInput>>;
  NOT?: InputMaybe<Array<LineupScalarWhereInput>>;
  OR?: InputMaybe<Array<LineupScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isSelected?: InputMaybe<BoolFilter>;
  tacticsId?: InputMaybe<IntFilter>;
};

export type LineupScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LineupScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LineupScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LineupScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isSelected?: InputMaybe<BoolWithAggregatesFilter>;
  tacticsId?: InputMaybe<IntWithAggregatesFilter>;
};

export type LineupSumAggregate = {
  __typename?: 'LineupSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tacticsId?: Maybe<Scalars['Int']>;
};

export type LineupSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tacticsId?: InputMaybe<SortOrder>;
};

export type LineupUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutLineupsInput>;
  isSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutLineupInput>;
  tactics?: InputMaybe<TacticsUpdateOneRequiredWithoutLineupInput>;
};

export type LineupUpdateManyMutationInput = {
  isSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type LineupUpdateManyWithWhereWithoutClubInput = {
  data: LineupUpdateManyMutationInput;
  where: LineupScalarWhereInput;
};

export type LineupUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<LineupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LineupCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<LineupCreateWithoutClubInput>>;
  createMany?: InputMaybe<LineupCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<LineupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LineupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LineupWhereUniqueInput>>;
  set?: InputMaybe<Array<LineupWhereUniqueInput>>;
  update?: InputMaybe<Array<LineupUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<LineupUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<LineupUpsertWithWhereUniqueWithoutClubInput>>;
};

export type LineupUpdateOneRequiredWithoutPlayerLineupsInput = {
  connect?: InputMaybe<LineupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LineupCreateOrConnectWithoutPlayerLineupsInput>;
  create?: InputMaybe<LineupCreateWithoutPlayerLineupsInput>;
  update?: InputMaybe<LineupUpdateWithoutPlayerLineupsInput>;
  upsert?: InputMaybe<LineupUpsertWithoutPlayerLineupsInput>;
};

export type LineupUpdateOneWithoutTacticsInput = {
  connect?: InputMaybe<LineupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LineupCreateOrConnectWithoutTacticsInput>;
  create?: InputMaybe<LineupCreateWithoutTacticsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LineupUpdateWithoutTacticsInput>;
  upsert?: InputMaybe<LineupUpsertWithoutTacticsInput>;
};

export type LineupUpdateWithWhereUniqueWithoutClubInput = {
  data: LineupUpdateWithoutClubInput;
  where: LineupWhereUniqueInput;
};

export type LineupUpdateWithoutClubInput = {
  isSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutLineupInput>;
  tactics?: InputMaybe<TacticsUpdateOneRequiredWithoutLineupInput>;
};

export type LineupUpdateWithoutPlayerLineupsInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutLineupsInput>;
  isSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tactics?: InputMaybe<TacticsUpdateOneRequiredWithoutLineupInput>;
};

export type LineupUpdateWithoutTacticsInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutLineupsInput>;
  isSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutLineupInput>;
};

export type LineupUpsertWithWhereUniqueWithoutClubInput = {
  create: LineupCreateWithoutClubInput;
  update: LineupUpdateWithoutClubInput;
  where: LineupWhereUniqueInput;
};

export type LineupUpsertWithoutPlayerLineupsInput = {
  create: LineupCreateWithoutPlayerLineupsInput;
  update: LineupUpdateWithoutPlayerLineupsInput;
};

export type LineupUpsertWithoutTacticsInput = {
  create: LineupCreateWithoutTacticsInput;
  update: LineupUpdateWithoutTacticsInput;
};

export type LineupWhereInput = {
  AND?: InputMaybe<Array<LineupWhereInput>>;
  NOT?: InputMaybe<Array<LineupWhereInput>>;
  OR?: InputMaybe<Array<LineupWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isSelected?: InputMaybe<BoolFilter>;
  playerLineups?: InputMaybe<PlayerLineupListRelationFilter>;
  tactics?: InputMaybe<TacticsRelationFilter>;
  tacticsId?: InputMaybe<IntFilter>;
};

export type LineupWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  tacticsId?: InputMaybe<Scalars['Int']>;
};

export type Match = {
  __typename?: 'Match';
  activeEvents: Scalars['JSON'];
  awayTeam: Scalars['JSON'];
  ballLocation: Scalars['JSON'];
  fixture?: Maybe<Fixture>;
  frames: Scalars['JSON'];
  homeTeam: Scalars['JSON'];
  id: Scalars['String'];
  initialParams: Scalars['JSON'];
  isResultProcessed: Scalars['Boolean'];
  keyEvents: Scalars['JSON'];
  penaltyShootoutState: Scalars['JSON'];
  pendingTacticalChanges: Scalars['JSON'];
  periodStates: Scalars['JSON'];
  players: Scalars['JSON'];
  positionGrid: Scalars['JSON'];
  possessionClubId: Scalars['Int'];
  possessionPlayerId?: Maybe<Scalars['String']>;
  referee: Scalars['JSON'];
  seed: Scalars['String'];
  settings: Scalars['JSON'];
  startTimestamp: Scalars['Float'];
  state: Scalars['Int'];
  timestamp: Scalars['Float'];
  underPressure: Scalars['Boolean'];
};

export type MatchAvgAggregate = {
  __typename?: 'MatchAvgAggregate';
  possessionClubId?: Maybe<Scalars['Float']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MatchAvgOrderByAggregateInput = {
  possessionClubId?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MatchCountAggregate = {
  __typename?: 'MatchCountAggregate';
  _all: Scalars['Int'];
  activeEvents: Scalars['Int'];
  awayTeam: Scalars['Int'];
  ballLocation: Scalars['Int'];
  frames: Scalars['Int'];
  homeTeam: Scalars['Int'];
  id: Scalars['Int'];
  initialParams: Scalars['Int'];
  isResultProcessed: Scalars['Int'];
  keyEvents: Scalars['Int'];
  penaltyShootoutState: Scalars['Int'];
  pendingTacticalChanges: Scalars['Int'];
  periodStates: Scalars['Int'];
  players: Scalars['Int'];
  positionGrid: Scalars['Int'];
  possessionClubId: Scalars['Int'];
  possessionPlayerId: Scalars['Int'];
  referee: Scalars['Int'];
  seed: Scalars['Int'];
  settings: Scalars['Int'];
  startTimestamp: Scalars['Int'];
  state: Scalars['Int'];
  timestamp: Scalars['Int'];
  underPressure: Scalars['Int'];
};

export type MatchCountOrderByAggregateInput = {
  activeEvents?: InputMaybe<SortOrder>;
  awayTeam?: InputMaybe<SortOrder>;
  ballLocation?: InputMaybe<SortOrder>;
  frames?: InputMaybe<SortOrder>;
  homeTeam?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  initialParams?: InputMaybe<SortOrder>;
  isResultProcessed?: InputMaybe<SortOrder>;
  keyEvents?: InputMaybe<SortOrder>;
  penaltyShootoutState?: InputMaybe<SortOrder>;
  pendingTacticalChanges?: InputMaybe<SortOrder>;
  periodStates?: InputMaybe<SortOrder>;
  players?: InputMaybe<SortOrder>;
  positionGrid?: InputMaybe<SortOrder>;
  possessionClubId?: InputMaybe<SortOrder>;
  possessionPlayerId?: InputMaybe<SortOrder>;
  referee?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  settings?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  underPressure?: InputMaybe<SortOrder>;
};

export type MatchCreateInput = {
  activeEvents: Scalars['JSON'];
  awayTeam: Scalars['JSON'];
  ballLocation: Scalars['JSON'];
  fixture?: InputMaybe<FixtureCreateNestedOneWithoutMatchInput>;
  frames: Scalars['JSON'];
  homeTeam: Scalars['JSON'];
  id: Scalars['String'];
  initialParams: Scalars['JSON'];
  isResultProcessed: Scalars['Boolean'];
  keyEvents: Scalars['JSON'];
  penaltyShootoutState: Scalars['JSON'];
  pendingTacticalChanges: Scalars['JSON'];
  periodStates: Scalars['JSON'];
  players: Scalars['JSON'];
  positionGrid: Scalars['JSON'];
  possessionClubId: Scalars['Int'];
  possessionPlayerId?: InputMaybe<Scalars['String']>;
  referee: Scalars['JSON'];
  seed: Scalars['String'];
  settings: Scalars['JSON'];
  startTimestamp: Scalars['Float'];
  state: Scalars['Int'];
  timestamp: Scalars['Float'];
  underPressure: Scalars['Boolean'];
};

export type MatchCreateManyInput = {
  activeEvents: Scalars['JSON'];
  awayTeam: Scalars['JSON'];
  ballLocation: Scalars['JSON'];
  frames: Scalars['JSON'];
  homeTeam: Scalars['JSON'];
  id: Scalars['String'];
  initialParams: Scalars['JSON'];
  isResultProcessed: Scalars['Boolean'];
  keyEvents: Scalars['JSON'];
  penaltyShootoutState: Scalars['JSON'];
  pendingTacticalChanges: Scalars['JSON'];
  periodStates: Scalars['JSON'];
  players: Scalars['JSON'];
  positionGrid: Scalars['JSON'];
  possessionClubId: Scalars['Int'];
  possessionPlayerId?: InputMaybe<Scalars['String']>;
  referee: Scalars['JSON'];
  seed: Scalars['String'];
  settings: Scalars['JSON'];
  startTimestamp: Scalars['Float'];
  state: Scalars['Int'];
  timestamp: Scalars['Float'];
  underPressure: Scalars['Boolean'];
};

export type MatchCreateNestedOneWithoutFixtureInput = {
  connect?: InputMaybe<MatchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MatchCreateOrConnectWithoutFixtureInput>;
  create?: InputMaybe<MatchCreateWithoutFixtureInput>;
};

export type MatchCreateOrConnectWithoutFixtureInput = {
  create: MatchCreateWithoutFixtureInput;
  where: MatchWhereUniqueInput;
};

export type MatchCreateWithoutFixtureInput = {
  activeEvents: Scalars['JSON'];
  awayTeam: Scalars['JSON'];
  ballLocation: Scalars['JSON'];
  frames: Scalars['JSON'];
  homeTeam: Scalars['JSON'];
  id: Scalars['String'];
  initialParams: Scalars['JSON'];
  isResultProcessed: Scalars['Boolean'];
  keyEvents: Scalars['JSON'];
  penaltyShootoutState: Scalars['JSON'];
  pendingTacticalChanges: Scalars['JSON'];
  periodStates: Scalars['JSON'];
  players: Scalars['JSON'];
  positionGrid: Scalars['JSON'];
  possessionClubId: Scalars['Int'];
  possessionPlayerId?: InputMaybe<Scalars['String']>;
  referee: Scalars['JSON'];
  seed: Scalars['String'];
  settings: Scalars['JSON'];
  startTimestamp: Scalars['Float'];
  state: Scalars['Int'];
  timestamp: Scalars['Float'];
  underPressure: Scalars['Boolean'];
};

export type MatchGroupBy = {
  __typename?: 'MatchGroupBy';
  _avg?: Maybe<MatchAvgAggregate>;
  _count?: Maybe<MatchCountAggregate>;
  _max?: Maybe<MatchMaxAggregate>;
  _min?: Maybe<MatchMinAggregate>;
  _sum?: Maybe<MatchSumAggregate>;
  activeEvents: Scalars['JSON'];
  awayTeam: Scalars['JSON'];
  ballLocation: Scalars['JSON'];
  frames: Scalars['JSON'];
  homeTeam: Scalars['JSON'];
  id: Scalars['String'];
  initialParams: Scalars['JSON'];
  isResultProcessed: Scalars['Boolean'];
  keyEvents: Scalars['JSON'];
  penaltyShootoutState: Scalars['JSON'];
  pendingTacticalChanges: Scalars['JSON'];
  periodStates: Scalars['JSON'];
  players: Scalars['JSON'];
  positionGrid: Scalars['JSON'];
  possessionClubId: Scalars['Int'];
  possessionPlayerId?: Maybe<Scalars['String']>;
  referee: Scalars['JSON'];
  seed: Scalars['String'];
  settings: Scalars['JSON'];
  startTimestamp: Scalars['Float'];
  state: Scalars['Int'];
  timestamp: Scalars['Float'];
  underPressure: Scalars['Boolean'];
};

export type MatchMaxAggregate = {
  __typename?: 'MatchMaxAggregate';
  id?: Maybe<Scalars['String']>;
  isResultProcessed?: Maybe<Scalars['Boolean']>;
  possessionClubId?: Maybe<Scalars['Int']>;
  possessionPlayerId?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Float']>;
  underPressure?: Maybe<Scalars['Boolean']>;
};

export type MatchMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  isResultProcessed?: InputMaybe<SortOrder>;
  possessionClubId?: InputMaybe<SortOrder>;
  possessionPlayerId?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  underPressure?: InputMaybe<SortOrder>;
};

export type MatchMinAggregate = {
  __typename?: 'MatchMinAggregate';
  id?: Maybe<Scalars['String']>;
  isResultProcessed?: Maybe<Scalars['Boolean']>;
  possessionClubId?: Maybe<Scalars['Int']>;
  possessionPlayerId?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Float']>;
  underPressure?: Maybe<Scalars['Boolean']>;
};

export type MatchMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  isResultProcessed?: InputMaybe<SortOrder>;
  possessionClubId?: InputMaybe<SortOrder>;
  possessionPlayerId?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  underPressure?: InputMaybe<SortOrder>;
};

export type MatchOrderByWithAggregationInput = {
  _avg?: InputMaybe<MatchAvgOrderByAggregateInput>;
  _count?: InputMaybe<MatchCountOrderByAggregateInput>;
  _max?: InputMaybe<MatchMaxOrderByAggregateInput>;
  _min?: InputMaybe<MatchMinOrderByAggregateInput>;
  _sum?: InputMaybe<MatchSumOrderByAggregateInput>;
  activeEvents?: InputMaybe<SortOrder>;
  awayTeam?: InputMaybe<SortOrder>;
  ballLocation?: InputMaybe<SortOrder>;
  frames?: InputMaybe<SortOrder>;
  homeTeam?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  initialParams?: InputMaybe<SortOrder>;
  isResultProcessed?: InputMaybe<SortOrder>;
  keyEvents?: InputMaybe<SortOrder>;
  penaltyShootoutState?: InputMaybe<SortOrder>;
  pendingTacticalChanges?: InputMaybe<SortOrder>;
  periodStates?: InputMaybe<SortOrder>;
  players?: InputMaybe<SortOrder>;
  positionGrid?: InputMaybe<SortOrder>;
  possessionClubId?: InputMaybe<SortOrder>;
  possessionPlayerId?: InputMaybe<SortOrder>;
  referee?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  settings?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  underPressure?: InputMaybe<SortOrder>;
};

export type MatchOrderByWithRelationInput = {
  activeEvents?: InputMaybe<SortOrder>;
  awayTeam?: InputMaybe<SortOrder>;
  ballLocation?: InputMaybe<SortOrder>;
  fixture?: InputMaybe<FixtureOrderByWithRelationInput>;
  frames?: InputMaybe<SortOrder>;
  homeTeam?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  initialParams?: InputMaybe<SortOrder>;
  isResultProcessed?: InputMaybe<SortOrder>;
  keyEvents?: InputMaybe<SortOrder>;
  penaltyShootoutState?: InputMaybe<SortOrder>;
  pendingTacticalChanges?: InputMaybe<SortOrder>;
  periodStates?: InputMaybe<SortOrder>;
  players?: InputMaybe<SortOrder>;
  positionGrid?: InputMaybe<SortOrder>;
  possessionClubId?: InputMaybe<SortOrder>;
  possessionPlayerId?: InputMaybe<SortOrder>;
  referee?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  settings?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  underPressure?: InputMaybe<SortOrder>;
};

export type MatchRelationFilter = {
  is?: InputMaybe<MatchWhereInput>;
  isNot?: InputMaybe<MatchWhereInput>;
};

export enum MatchScalarFieldEnum {
  ActiveEvents = 'activeEvents',
  AwayTeam = 'awayTeam',
  BallLocation = 'ballLocation',
  Frames = 'frames',
  HomeTeam = 'homeTeam',
  Id = 'id',
  InitialParams = 'initialParams',
  IsResultProcessed = 'isResultProcessed',
  KeyEvents = 'keyEvents',
  PenaltyShootoutState = 'penaltyShootoutState',
  PendingTacticalChanges = 'pendingTacticalChanges',
  PeriodStates = 'periodStates',
  Players = 'players',
  PositionGrid = 'positionGrid',
  PossessionClubId = 'possessionClubId',
  PossessionPlayerId = 'possessionPlayerId',
  Referee = 'referee',
  Seed = 'seed',
  Settings = 'settings',
  StartTimestamp = 'startTimestamp',
  State = 'state',
  Timestamp = 'timestamp',
  UnderPressure = 'underPressure'
}

export type MatchScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MatchScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MatchScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MatchScalarWhereWithAggregatesInput>>;
  activeEvents?: InputMaybe<JsonWithAggregatesFilter>;
  awayTeam?: InputMaybe<JsonWithAggregatesFilter>;
  ballLocation?: InputMaybe<JsonWithAggregatesFilter>;
  frames?: InputMaybe<JsonWithAggregatesFilter>;
  homeTeam?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  initialParams?: InputMaybe<JsonWithAggregatesFilter>;
  isResultProcessed?: InputMaybe<BoolWithAggregatesFilter>;
  keyEvents?: InputMaybe<JsonWithAggregatesFilter>;
  penaltyShootoutState?: InputMaybe<JsonWithAggregatesFilter>;
  pendingTacticalChanges?: InputMaybe<JsonWithAggregatesFilter>;
  periodStates?: InputMaybe<JsonWithAggregatesFilter>;
  players?: InputMaybe<JsonWithAggregatesFilter>;
  positionGrid?: InputMaybe<JsonWithAggregatesFilter>;
  possessionClubId?: InputMaybe<IntWithAggregatesFilter>;
  possessionPlayerId?: InputMaybe<StringNullableWithAggregatesFilter>;
  referee?: InputMaybe<JsonWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  settings?: InputMaybe<JsonWithAggregatesFilter>;
  startTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  state?: InputMaybe<IntWithAggregatesFilter>;
  timestamp?: InputMaybe<FloatWithAggregatesFilter>;
  underPressure?: InputMaybe<BoolWithAggregatesFilter>;
};

export type MatchSumAggregate = {
  __typename?: 'MatchSumAggregate';
  possessionClubId?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MatchSumOrderByAggregateInput = {
  possessionClubId?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MatchUpdateInput = {
  activeEvents?: InputMaybe<Scalars['JSON']>;
  awayTeam?: InputMaybe<Scalars['JSON']>;
  ballLocation?: InputMaybe<Scalars['JSON']>;
  fixture?: InputMaybe<FixtureUpdateOneWithoutMatchInput>;
  frames?: InputMaybe<Scalars['JSON']>;
  homeTeam?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialParams?: InputMaybe<Scalars['JSON']>;
  isResultProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  keyEvents?: InputMaybe<Scalars['JSON']>;
  penaltyShootoutState?: InputMaybe<Scalars['JSON']>;
  pendingTacticalChanges?: InputMaybe<Scalars['JSON']>;
  periodStates?: InputMaybe<Scalars['JSON']>;
  players?: InputMaybe<Scalars['JSON']>;
  positionGrid?: InputMaybe<Scalars['JSON']>;
  possessionClubId?: InputMaybe<IntFieldUpdateOperationsInput>;
  possessionPlayerId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referee?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  settings?: InputMaybe<Scalars['JSON']>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<IntFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  underPressure?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type MatchUpdateManyMutationInput = {
  activeEvents?: InputMaybe<Scalars['JSON']>;
  awayTeam?: InputMaybe<Scalars['JSON']>;
  ballLocation?: InputMaybe<Scalars['JSON']>;
  frames?: InputMaybe<Scalars['JSON']>;
  homeTeam?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialParams?: InputMaybe<Scalars['JSON']>;
  isResultProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  keyEvents?: InputMaybe<Scalars['JSON']>;
  penaltyShootoutState?: InputMaybe<Scalars['JSON']>;
  pendingTacticalChanges?: InputMaybe<Scalars['JSON']>;
  periodStates?: InputMaybe<Scalars['JSON']>;
  players?: InputMaybe<Scalars['JSON']>;
  positionGrid?: InputMaybe<Scalars['JSON']>;
  possessionClubId?: InputMaybe<IntFieldUpdateOperationsInput>;
  possessionPlayerId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referee?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  settings?: InputMaybe<Scalars['JSON']>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<IntFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  underPressure?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type MatchUpdateOneWithoutFixtureInput = {
  connect?: InputMaybe<MatchWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MatchCreateOrConnectWithoutFixtureInput>;
  create?: InputMaybe<MatchCreateWithoutFixtureInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MatchUpdateWithoutFixtureInput>;
  upsert?: InputMaybe<MatchUpsertWithoutFixtureInput>;
};

export type MatchUpdateWithoutFixtureInput = {
  activeEvents?: InputMaybe<Scalars['JSON']>;
  awayTeam?: InputMaybe<Scalars['JSON']>;
  ballLocation?: InputMaybe<Scalars['JSON']>;
  frames?: InputMaybe<Scalars['JSON']>;
  homeTeam?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  initialParams?: InputMaybe<Scalars['JSON']>;
  isResultProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  keyEvents?: InputMaybe<Scalars['JSON']>;
  penaltyShootoutState?: InputMaybe<Scalars['JSON']>;
  pendingTacticalChanges?: InputMaybe<Scalars['JSON']>;
  periodStates?: InputMaybe<Scalars['JSON']>;
  players?: InputMaybe<Scalars['JSON']>;
  positionGrid?: InputMaybe<Scalars['JSON']>;
  possessionClubId?: InputMaybe<IntFieldUpdateOperationsInput>;
  possessionPlayerId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referee?: InputMaybe<Scalars['JSON']>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  settings?: InputMaybe<Scalars['JSON']>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<IntFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  underPressure?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type MatchUpsertWithoutFixtureInput = {
  create: MatchCreateWithoutFixtureInput;
  update: MatchUpdateWithoutFixtureInput;
};

export type MatchWhereInput = {
  AND?: InputMaybe<Array<MatchWhereInput>>;
  NOT?: InputMaybe<Array<MatchWhereInput>>;
  OR?: InputMaybe<Array<MatchWhereInput>>;
  activeEvents?: InputMaybe<JsonFilter>;
  awayTeam?: InputMaybe<JsonFilter>;
  ballLocation?: InputMaybe<JsonFilter>;
  fixture?: InputMaybe<FixtureRelationFilter>;
  frames?: InputMaybe<JsonFilter>;
  homeTeam?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  initialParams?: InputMaybe<JsonFilter>;
  isResultProcessed?: InputMaybe<BoolFilter>;
  keyEvents?: InputMaybe<JsonFilter>;
  penaltyShootoutState?: InputMaybe<JsonFilter>;
  pendingTacticalChanges?: InputMaybe<JsonFilter>;
  periodStates?: InputMaybe<JsonFilter>;
  players?: InputMaybe<JsonFilter>;
  positionGrid?: InputMaybe<JsonFilter>;
  possessionClubId?: InputMaybe<IntFilter>;
  possessionPlayerId?: InputMaybe<StringNullableFilter>;
  referee?: InputMaybe<JsonFilter>;
  seed?: InputMaybe<StringFilter>;
  settings?: InputMaybe<JsonFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
  state?: InputMaybe<IntFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  underPressure?: InputMaybe<BoolFilter>;
};

export type MatchWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type MerkleRoot = {
  __typename?: 'MerkleRoot';
  id: Scalars['Int'];
  root: Scalars['String'];
  timestamp: Scalars['Float'];
};

export type MerkleRootAvgAggregate = {
  __typename?: 'MerkleRootAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MerkleRootAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MerkleRootCountAggregate = {
  __typename?: 'MerkleRootCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  root: Scalars['Int'];
  timestamp: Scalars['Int'];
};

export type MerkleRootCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  root?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MerkleRootCreateInput = {
  root: Scalars['String'];
  timestamp: Scalars['Float'];
};

export type MerkleRootCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  root: Scalars['String'];
  timestamp: Scalars['Float'];
};

export type MerkleRootGroupBy = {
  __typename?: 'MerkleRootGroupBy';
  _avg?: Maybe<MerkleRootAvgAggregate>;
  _count?: Maybe<MerkleRootCountAggregate>;
  _max?: Maybe<MerkleRootMaxAggregate>;
  _min?: Maybe<MerkleRootMinAggregate>;
  _sum?: Maybe<MerkleRootSumAggregate>;
  id: Scalars['Int'];
  root: Scalars['String'];
  timestamp: Scalars['Float'];
};

export type MerkleRootMaxAggregate = {
  __typename?: 'MerkleRootMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  root?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MerkleRootMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  root?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MerkleRootMinAggregate = {
  __typename?: 'MerkleRootMinAggregate';
  id?: Maybe<Scalars['Int']>;
  root?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MerkleRootMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  root?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MerkleRootOrderByWithAggregationInput = {
  _avg?: InputMaybe<MerkleRootAvgOrderByAggregateInput>;
  _count?: InputMaybe<MerkleRootCountOrderByAggregateInput>;
  _max?: InputMaybe<MerkleRootMaxOrderByAggregateInput>;
  _min?: InputMaybe<MerkleRootMinOrderByAggregateInput>;
  _sum?: InputMaybe<MerkleRootSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  root?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MerkleRootOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  root?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export enum MerkleRootScalarFieldEnum {
  Id = 'id',
  Root = 'root',
  Timestamp = 'timestamp'
}

export type MerkleRootScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MerkleRootScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MerkleRootScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MerkleRootScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  root?: InputMaybe<StringWithAggregatesFilter>;
  timestamp?: InputMaybe<FloatWithAggregatesFilter>;
};

export type MerkleRootSumAggregate = {
  __typename?: 'MerkleRootSumAggregate';
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MerkleRootSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MerkleRootUpdateInput = {
  root?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MerkleRootUpdateManyMutationInput = {
  root?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MerkleRootWhereInput = {
  AND?: InputMaybe<Array<MerkleRootWhereInput>>;
  NOT?: InputMaybe<Array<MerkleRootWhereInput>>;
  OR?: InputMaybe<Array<MerkleRootWhereInput>>;
  id?: InputMaybe<IntFilter>;
  root?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<FloatFilter>;
};

export type MerkleRootWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  id: Scalars['Int'];
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type MetadataAvgAggregate = {
  __typename?: 'MetadataAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MetadataAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MetadataCountAggregate = {
  __typename?: 'MetadataCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  seed: Scalars['Int'];
  startTimestamp: Scalars['Int'];
  timestamp: Scalars['Int'];
};

export type MetadataCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MetadataCreateInput = {
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type MetadataCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type MetadataGroupBy = {
  __typename?: 'MetadataGroupBy';
  _avg?: Maybe<MetadataAvgAggregate>;
  _count?: Maybe<MetadataCountAggregate>;
  _max?: Maybe<MetadataMaxAggregate>;
  _min?: Maybe<MetadataMinAggregate>;
  _sum?: Maybe<MetadataSumAggregate>;
  id: Scalars['Int'];
  seed: Scalars['String'];
  startTimestamp: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type MetadataMaxAggregate = {
  __typename?: 'MetadataMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  seed?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MetadataMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MetadataMinAggregate = {
  __typename?: 'MetadataMinAggregate';
  id?: Maybe<Scalars['Int']>;
  seed?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MetadataMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MetadataOrderByWithAggregationInput = {
  _avg?: InputMaybe<MetadataAvgOrderByAggregateInput>;
  _count?: InputMaybe<MetadataCountOrderByAggregateInput>;
  _max?: InputMaybe<MetadataMaxOrderByAggregateInput>;
  _min?: InputMaybe<MetadataMinOrderByAggregateInput>;
  _sum?: InputMaybe<MetadataSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MetadataOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export enum MetadataScalarFieldEnum {
  Id = 'id',
  Seed = 'seed',
  StartTimestamp = 'startTimestamp',
  Timestamp = 'timestamp'
}

export type MetadataScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MetadataScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MetadataScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MetadataScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  startTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  timestamp?: InputMaybe<FloatWithAggregatesFilter>;
};

export type MetadataSumAggregate = {
  __typename?: 'MetadataSumAggregate';
  id?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type MetadataSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type MetadataUpdateInput = {
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MetadataUpdateManyMutationInput = {
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MetadataWhereInput = {
  AND?: InputMaybe<Array<MetadataWhereInput>>;
  NOT?: InputMaybe<Array<MetadataWhereInput>>;
  OR?: InputMaybe<Array<MetadataWhereInput>>;
  id?: InputMaybe<IntFilter>;
  seed?: InputMaybe<StringFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
  timestamp?: InputMaybe<FloatFilter>;
};

export type MetadataWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Morale = {
  __typename?: 'Morale';
  contributors: Scalars['JSON'];
  id: Scalars['Int'];
  morale: Scalars['Float'];
  moraleBase: Scalars['Float'];
  netMorale: Scalars['Float'];
  player: Player;
  playerId: Scalars['String'];
};

export type MoraleAvgAggregate = {
  __typename?: 'MoraleAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  morale?: Maybe<Scalars['Float']>;
  moraleBase?: Maybe<Scalars['Float']>;
  netMorale?: Maybe<Scalars['Float']>;
};

export type MoraleAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  moraleBase?: InputMaybe<SortOrder>;
  netMorale?: InputMaybe<SortOrder>;
};

export type MoraleCountAggregate = {
  __typename?: 'MoraleCountAggregate';
  _all: Scalars['Int'];
  contributors: Scalars['Int'];
  id: Scalars['Int'];
  morale: Scalars['Int'];
  moraleBase: Scalars['Int'];
  netMorale: Scalars['Int'];
  playerId: Scalars['Int'];
};

export type MoraleCountOrderByAggregateInput = {
  contributors?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  moraleBase?: InputMaybe<SortOrder>;
  netMorale?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type MoraleCreateInput = {
  contributors: Scalars['JSON'];
  morale: Scalars['Float'];
  moraleBase: Scalars['Float'];
  netMorale: Scalars['Float'];
  player: PlayerCreateNestedOneWithoutMoraleInput;
};

export type MoraleCreateManyInput = {
  contributors: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  morale: Scalars['Float'];
  moraleBase: Scalars['Float'];
  netMorale: Scalars['Float'];
  playerId: Scalars['String'];
};

export type MoraleCreateNestedOneWithoutPlayerInput = {
  connect?: InputMaybe<MoraleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MoraleCreateOrConnectWithoutPlayerInput>;
  create?: InputMaybe<MoraleCreateWithoutPlayerInput>;
};

export type MoraleCreateOrConnectWithoutPlayerInput = {
  create: MoraleCreateWithoutPlayerInput;
  where: MoraleWhereUniqueInput;
};

export type MoraleCreateWithoutPlayerInput = {
  contributors: Scalars['JSON'];
  morale: Scalars['Float'];
  moraleBase: Scalars['Float'];
  netMorale: Scalars['Float'];
};

export type MoraleGroupBy = {
  __typename?: 'MoraleGroupBy';
  _avg?: Maybe<MoraleAvgAggregate>;
  _count?: Maybe<MoraleCountAggregate>;
  _max?: Maybe<MoraleMaxAggregate>;
  _min?: Maybe<MoraleMinAggregate>;
  _sum?: Maybe<MoraleSumAggregate>;
  contributors: Scalars['JSON'];
  id: Scalars['Int'];
  morale: Scalars['Float'];
  moraleBase: Scalars['Float'];
  netMorale: Scalars['Float'];
  playerId: Scalars['String'];
};

export type MoraleMaxAggregate = {
  __typename?: 'MoraleMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  morale?: Maybe<Scalars['Float']>;
  moraleBase?: Maybe<Scalars['Float']>;
  netMorale?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['String']>;
};

export type MoraleMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  moraleBase?: InputMaybe<SortOrder>;
  netMorale?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type MoraleMinAggregate = {
  __typename?: 'MoraleMinAggregate';
  id?: Maybe<Scalars['Int']>;
  morale?: Maybe<Scalars['Float']>;
  moraleBase?: Maybe<Scalars['Float']>;
  netMorale?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['String']>;
};

export type MoraleMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  moraleBase?: InputMaybe<SortOrder>;
  netMorale?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type MoraleOrderByWithAggregationInput = {
  _avg?: InputMaybe<MoraleAvgOrderByAggregateInput>;
  _count?: InputMaybe<MoraleCountOrderByAggregateInput>;
  _max?: InputMaybe<MoraleMaxOrderByAggregateInput>;
  _min?: InputMaybe<MoraleMinOrderByAggregateInput>;
  _sum?: InputMaybe<MoraleSumOrderByAggregateInput>;
  contributors?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  moraleBase?: InputMaybe<SortOrder>;
  netMorale?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type MoraleOrderByWithRelationInput = {
  contributors?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  moraleBase?: InputMaybe<SortOrder>;
  netMorale?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
};

export type MoraleRelationFilter = {
  is?: InputMaybe<MoraleWhereInput>;
  isNot?: InputMaybe<MoraleWhereInput>;
};

export enum MoraleScalarFieldEnum {
  Contributors = 'contributors',
  Id = 'id',
  Morale = 'morale',
  MoraleBase = 'moraleBase',
  NetMorale = 'netMorale',
  PlayerId = 'playerId'
}

export type MoraleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MoraleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MoraleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MoraleScalarWhereWithAggregatesInput>>;
  contributors?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  morale?: InputMaybe<FloatWithAggregatesFilter>;
  moraleBase?: InputMaybe<FloatWithAggregatesFilter>;
  netMorale?: InputMaybe<FloatWithAggregatesFilter>;
  playerId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MoraleSumAggregate = {
  __typename?: 'MoraleSumAggregate';
  id?: Maybe<Scalars['Int']>;
  morale?: Maybe<Scalars['Float']>;
  moraleBase?: Maybe<Scalars['Float']>;
  netMorale?: Maybe<Scalars['Float']>;
};

export type MoraleSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  moraleBase?: InputMaybe<SortOrder>;
  netMorale?: InputMaybe<SortOrder>;
};

export type MoraleUpdateInput = {
  contributors?: InputMaybe<Scalars['JSON']>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  moraleBase?: InputMaybe<FloatFieldUpdateOperationsInput>;
  netMorale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutMoraleInput>;
};

export type MoraleUpdateManyMutationInput = {
  contributors?: InputMaybe<Scalars['JSON']>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  moraleBase?: InputMaybe<FloatFieldUpdateOperationsInput>;
  netMorale?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MoraleUpdateOneWithoutPlayerInput = {
  connect?: InputMaybe<MoraleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MoraleCreateOrConnectWithoutPlayerInput>;
  create?: InputMaybe<MoraleCreateWithoutPlayerInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MoraleUpdateWithoutPlayerInput>;
  upsert?: InputMaybe<MoraleUpsertWithoutPlayerInput>;
};

export type MoraleUpdateWithoutPlayerInput = {
  contributors?: InputMaybe<Scalars['JSON']>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  moraleBase?: InputMaybe<FloatFieldUpdateOperationsInput>;
  netMorale?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type MoraleUpsertWithoutPlayerInput = {
  create: MoraleCreateWithoutPlayerInput;
  update: MoraleUpdateWithoutPlayerInput;
};

export type MoraleWhereInput = {
  AND?: InputMaybe<Array<MoraleWhereInput>>;
  NOT?: InputMaybe<Array<MoraleWhereInput>>;
  OR?: InputMaybe<Array<MoraleWhereInput>>;
  contributors?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  morale?: InputMaybe<FloatFilter>;
  moraleBase?: InputMaybe<FloatFilter>;
  netMorale?: InputMaybe<FloatFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
};

export type MoraleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  playerId?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAcademy: Academy;
  createAcademyMintFee: AcademyMintFee;
  createAction: Array<Action>;
  createAvailableHomeGameTime: AvailableHomeGameTime;
  createClaim: Claim;
  createClub: Club;
  createClubBadge: ClubBadge;
  createClubBalance: ClubBalance;
  createClubFixture: ClubFixture;
  createClubStats: ClubStats;
  createClubTournament: ClubTournament;
  createCompetition: Competition;
  createCompetitionPlayerStats: CompetitionPlayerStats;
  createDivision: Division;
  createEthereumEvent: EthereumEvent;
  createFixture: Fixture;
  createFormation: Formation;
  createFormationSlot: FormationSlot;
  createKit: Kit;
  createLineup: Lineup;
  createManyAcademy: AffectedRowsOutput;
  createManyAcademyMintFee: AffectedRowsOutput;
  createManyAction: AffectedRowsOutput;
  createManyAvailableHomeGameTime: AffectedRowsOutput;
  createManyClaim: AffectedRowsOutput;
  createManyClub: AffectedRowsOutput;
  createManyClubBadge: AffectedRowsOutput;
  createManyClubBalance: AffectedRowsOutput;
  createManyClubFixture: AffectedRowsOutput;
  createManyClubStats: AffectedRowsOutput;
  createManyClubTournament: AffectedRowsOutput;
  createManyCompetition: AffectedRowsOutput;
  createManyCompetitionPlayerStats: AffectedRowsOutput;
  createManyDivision: AffectedRowsOutput;
  createManyEthereumEvent: AffectedRowsOutput;
  createManyFixture: AffectedRowsOutput;
  createManyFormation: AffectedRowsOutput;
  createManyFormationSlot: AffectedRowsOutput;
  createManyKit: AffectedRowsOutput;
  createManyLineup: AffectedRowsOutput;
  createManyMatch: AffectedRowsOutput;
  createManyMerkleRoot: AffectedRowsOutput;
  createManyMetadata: AffectedRowsOutput;
  createManyMorale: AffectedRowsOutput;
  createManyNewsItem: AffectedRowsOutput;
  createManyOwner: AffectedRowsOutput;
  createManyPlayer: AffectedRowsOutput;
  createManyPlayerAttributes: AffectedRowsOutput;
  createManyPlayerAttributesPositionalRating: AffectedRowsOutput;
  createManyPlayerLineup: AffectedRowsOutput;
  createManyPlayerStatsRecord: AffectedRowsOutput;
  createManyPool: AffectedRowsOutput;
  createManyPoolsOnValues: AffectedRowsOutput;
  createManyPrize: AffectedRowsOutput;
  createManyPromotionSelector: AffectedRowsOutput;
  createManySeason: AffectedRowsOutput;
  createManyStadium: AffectedRowsOutput;
  createManyStadiumStand: AffectedRowsOutput;
  createManyTactics: AffectedRowsOutput;
  createManyToken: AffectedRowsOutput;
  createManyTournament: AffectedRowsOutput;
  createManyTournamentPlayerStats: AffectedRowsOutput;
  createManyValue: AffectedRowsOutput;
  createMatch: Match;
  createMerkleRoot: MerkleRoot;
  createMetadata: Metadata;
  createMorale: Morale;
  createNewsItem: NewsItem;
  createOwner: Owner;
  createPlayer: Player;
  createPlayerAttributes: PlayerAttributes;
  createPlayerAttributesPositionalRating: PlayerAttributesPositionalRating;
  createPlayerLineup: PlayerLineup;
  createPlayerStatsRecord: PlayerStatsRecord;
  createPool: Pool;
  createPoolsOnValues: PoolsOnValues;
  createPrize: Prize;
  createPromotionSelector: PromotionSelector;
  createSeason: Season;
  createStadium: Stadium;
  createStadiumStand: StadiumStand;
  createTactics: Tactics;
  createToken: Token;
  createTournament: Tournament;
  createTournamentPlayerStats: TournamentPlayerStats;
  createValue: Value;
  deleteAcademy?: Maybe<Academy>;
  deleteAcademyMintFee?: Maybe<AcademyMintFee>;
  deleteAction?: Maybe<Action>;
  deleteAvailableHomeGameTime?: Maybe<AvailableHomeGameTime>;
  deleteClaim?: Maybe<Claim>;
  deleteClub?: Maybe<Club>;
  deleteClubBadge?: Maybe<ClubBadge>;
  deleteClubBalance?: Maybe<ClubBalance>;
  deleteClubFixture?: Maybe<ClubFixture>;
  deleteClubStats?: Maybe<ClubStats>;
  deleteClubTournament?: Maybe<ClubTournament>;
  deleteCompetition?: Maybe<Competition>;
  deleteCompetitionPlayerStats?: Maybe<CompetitionPlayerStats>;
  deleteDivision?: Maybe<Division>;
  deleteEthereumEvent?: Maybe<EthereumEvent>;
  deleteFixture?: Maybe<Fixture>;
  deleteFormation?: Maybe<Formation>;
  deleteFormationSlot?: Maybe<FormationSlot>;
  deleteKit?: Maybe<Kit>;
  deleteLineup?: Maybe<Lineup>;
  deleteManyAcademy: AffectedRowsOutput;
  deleteManyAcademyMintFee: AffectedRowsOutput;
  deleteManyAction: AffectedRowsOutput;
  deleteManyAvailableHomeGameTime: AffectedRowsOutput;
  deleteManyClaim: AffectedRowsOutput;
  deleteManyClub: AffectedRowsOutput;
  deleteManyClubBadge: AffectedRowsOutput;
  deleteManyClubBalance: AffectedRowsOutput;
  deleteManyClubFixture: AffectedRowsOutput;
  deleteManyClubStats: AffectedRowsOutput;
  deleteManyClubTournament: AffectedRowsOutput;
  deleteManyCompetition: AffectedRowsOutput;
  deleteManyCompetitionPlayerStats: AffectedRowsOutput;
  deleteManyDivision: AffectedRowsOutput;
  deleteManyEthereumEvent: AffectedRowsOutput;
  deleteManyFixture: AffectedRowsOutput;
  deleteManyFormation: AffectedRowsOutput;
  deleteManyFormationSlot: AffectedRowsOutput;
  deleteManyKit: AffectedRowsOutput;
  deleteManyLineup: AffectedRowsOutput;
  deleteManyMatch: AffectedRowsOutput;
  deleteManyMerkleRoot: AffectedRowsOutput;
  deleteManyMetadata: AffectedRowsOutput;
  deleteManyMorale: AffectedRowsOutput;
  deleteManyNewsItem: AffectedRowsOutput;
  deleteManyOwner: AffectedRowsOutput;
  deleteManyPlayer: AffectedRowsOutput;
  deleteManyPlayerAttributes: AffectedRowsOutput;
  deleteManyPlayerAttributesPositionalRating: AffectedRowsOutput;
  deleteManyPlayerLineup: AffectedRowsOutput;
  deleteManyPlayerStatsRecord: AffectedRowsOutput;
  deleteManyPool: AffectedRowsOutput;
  deleteManyPoolsOnValues: AffectedRowsOutput;
  deleteManyPrize: AffectedRowsOutput;
  deleteManyPromotionSelector: AffectedRowsOutput;
  deleteManySeason: AffectedRowsOutput;
  deleteManyStadium: AffectedRowsOutput;
  deleteManyStadiumStand: AffectedRowsOutput;
  deleteManyTactics: AffectedRowsOutput;
  deleteManyToken: AffectedRowsOutput;
  deleteManyTournament: AffectedRowsOutput;
  deleteManyTournamentPlayerStats: AffectedRowsOutput;
  deleteManyValue: AffectedRowsOutput;
  deleteMatch?: Maybe<Match>;
  deleteMerkleRoot?: Maybe<MerkleRoot>;
  deleteMetadata?: Maybe<Metadata>;
  deleteMorale?: Maybe<Morale>;
  deleteNewsItem?: Maybe<NewsItem>;
  deleteOwner?: Maybe<Owner>;
  deletePlayer?: Maybe<Player>;
  deletePlayerAttributes?: Maybe<PlayerAttributes>;
  deletePlayerAttributesPositionalRating?: Maybe<PlayerAttributesPositionalRating>;
  deletePlayerLineup?: Maybe<PlayerLineup>;
  deletePlayerStatsRecord?: Maybe<PlayerStatsRecord>;
  deletePool?: Maybe<Pool>;
  deletePoolsOnValues?: Maybe<PoolsOnValues>;
  deletePrize?: Maybe<Prize>;
  deletePromotionSelector?: Maybe<PromotionSelector>;
  deleteSeason?: Maybe<Season>;
  deleteStadium?: Maybe<Stadium>;
  deleteStadiumStand?: Maybe<StadiumStand>;
  deleteTactics?: Maybe<Tactics>;
  deleteToken?: Maybe<Token>;
  deleteTournament?: Maybe<Tournament>;
  deleteTournamentPlayerStats?: Maybe<TournamentPlayerStats>;
  deleteValue?: Maybe<Value>;
  submitAction: SubmittedActionResponseType;
  updateAcademy?: Maybe<Academy>;
  updateAcademyMintFee?: Maybe<AcademyMintFee>;
  updateAction?: Maybe<Action>;
  updateAvailableHomeGameTime?: Maybe<AvailableHomeGameTime>;
  updateClaim?: Maybe<Claim>;
  updateClub?: Maybe<Club>;
  updateClubBadge?: Maybe<ClubBadge>;
  updateClubBalance?: Maybe<ClubBalance>;
  updateClubFixture?: Maybe<ClubFixture>;
  updateClubStats?: Maybe<ClubStats>;
  updateClubTournament?: Maybe<ClubTournament>;
  updateCompetition?: Maybe<Competition>;
  updateCompetitionPlayerStats?: Maybe<CompetitionPlayerStats>;
  updateDivision?: Maybe<Division>;
  updateEthereumEvent?: Maybe<EthereumEvent>;
  updateFixture?: Maybe<Fixture>;
  updateFormation?: Maybe<Formation>;
  updateFormationSlot?: Maybe<FormationSlot>;
  updateKit?: Maybe<Kit>;
  updateLineup?: Maybe<Lineup>;
  updateManyAcademy: AffectedRowsOutput;
  updateManyAcademyMintFee: AffectedRowsOutput;
  updateManyAction: AffectedRowsOutput;
  updateManyAvailableHomeGameTime: AffectedRowsOutput;
  updateManyClaim: AffectedRowsOutput;
  updateManyClub: AffectedRowsOutput;
  updateManyClubBadge: AffectedRowsOutput;
  updateManyClubBalance: AffectedRowsOutput;
  updateManyClubFixture: AffectedRowsOutput;
  updateManyClubStats: AffectedRowsOutput;
  updateManyClubTournament: AffectedRowsOutput;
  updateManyCompetition: AffectedRowsOutput;
  updateManyCompetitionPlayerStats: AffectedRowsOutput;
  updateManyDivision: AffectedRowsOutput;
  updateManyEthereumEvent: AffectedRowsOutput;
  updateManyFixture: AffectedRowsOutput;
  updateManyFormation: AffectedRowsOutput;
  updateManyFormationSlot: AffectedRowsOutput;
  updateManyKit: AffectedRowsOutput;
  updateManyLineup: AffectedRowsOutput;
  updateManyMatch: AffectedRowsOutput;
  updateManyMerkleRoot: AffectedRowsOutput;
  updateManyMetadata: AffectedRowsOutput;
  updateManyMorale: AffectedRowsOutput;
  updateManyNewsItem: AffectedRowsOutput;
  updateManyOwner: AffectedRowsOutput;
  updateManyPlayer: AffectedRowsOutput;
  updateManyPlayerAttributes: AffectedRowsOutput;
  updateManyPlayerAttributesPositionalRating: AffectedRowsOutput;
  updateManyPlayerLineup: AffectedRowsOutput;
  updateManyPlayerStatsRecord: AffectedRowsOutput;
  updateManyPool: AffectedRowsOutput;
  updateManyPoolsOnValues: AffectedRowsOutput;
  updateManyPrize: AffectedRowsOutput;
  updateManyPromotionSelector: AffectedRowsOutput;
  updateManySeason: AffectedRowsOutput;
  updateManyStadium: AffectedRowsOutput;
  updateManyStadiumStand: AffectedRowsOutput;
  updateManyTactics: AffectedRowsOutput;
  updateManyToken: AffectedRowsOutput;
  updateManyTournament: AffectedRowsOutput;
  updateManyTournamentPlayerStats: AffectedRowsOutput;
  updateManyValue: AffectedRowsOutput;
  updateMatch?: Maybe<Match>;
  updateMerkleRoot?: Maybe<MerkleRoot>;
  updateMetadata?: Maybe<Metadata>;
  updateMorale?: Maybe<Morale>;
  updateNewsItem?: Maybe<NewsItem>;
  updateOwner?: Maybe<Owner>;
  updatePlayer?: Maybe<Player>;
  updatePlayerAttributes?: Maybe<PlayerAttributes>;
  updatePlayerAttributesPositionalRating?: Maybe<PlayerAttributesPositionalRating>;
  updatePlayerLineup?: Maybe<PlayerLineup>;
  updatePlayerStatsRecord?: Maybe<PlayerStatsRecord>;
  updatePool?: Maybe<Pool>;
  updatePoolsOnValues?: Maybe<PoolsOnValues>;
  updatePrize?: Maybe<Prize>;
  updatePromotionSelector?: Maybe<PromotionSelector>;
  updateSeason?: Maybe<Season>;
  updateStadium?: Maybe<Stadium>;
  updateStadiumStand?: Maybe<StadiumStand>;
  updateTactics?: Maybe<Tactics>;
  updateToken?: Maybe<Token>;
  updateTournament?: Maybe<Tournament>;
  updateTournamentPlayerStats?: Maybe<TournamentPlayerStats>;
  updateValue?: Maybe<Value>;
  upsertAcademy: Academy;
  upsertAcademyMintFee: AcademyMintFee;
  upsertAction: Action;
  upsertAvailableHomeGameTime: AvailableHomeGameTime;
  upsertClaim: Claim;
  upsertClub: Club;
  upsertClubBadge: ClubBadge;
  upsertClubBalance: ClubBalance;
  upsertClubFixture: ClubFixture;
  upsertClubStats: ClubStats;
  upsertClubTournament: ClubTournament;
  upsertCompetition: Competition;
  upsertCompetitionPlayerStats: CompetitionPlayerStats;
  upsertDivision: Division;
  upsertEthereumEvent: EthereumEvent;
  upsertFixture: Fixture;
  upsertFormation: Formation;
  upsertFormationSlot: FormationSlot;
  upsertKit: Kit;
  upsertLineup: Lineup;
  upsertMatch: Match;
  upsertMerkleRoot: MerkleRoot;
  upsertMetadata: Metadata;
  upsertMorale: Morale;
  upsertNewsItem: NewsItem;
  upsertOwner: Owner;
  upsertPlayer: Player;
  upsertPlayerAttributes: PlayerAttributes;
  upsertPlayerAttributesPositionalRating: PlayerAttributesPositionalRating;
  upsertPlayerLineup: PlayerLineup;
  upsertPlayerStatsRecord: PlayerStatsRecord;
  upsertPool: Pool;
  upsertPoolsOnValues: PoolsOnValues;
  upsertPrize: Prize;
  upsertPromotionSelector: PromotionSelector;
  upsertSeason: Season;
  upsertStadium: Stadium;
  upsertStadiumStand: StadiumStand;
  upsertTactics: Tactics;
  upsertToken: Token;
  upsertTournament: Tournament;
  upsertTournamentPlayerStats: TournamentPlayerStats;
  upsertValue: Value;
};


export type MutationCreateAcademyArgs = {
  data: AcademyCreateInput;
};


export type MutationCreateAcademyMintFeeArgs = {
  data: AcademyMintFeeCreateInput;
};


export type MutationCreateActionArgs = {
  data: ActionCreateInput;
};


export type MutationCreateAvailableHomeGameTimeArgs = {
  data: AvailableHomeGameTimeCreateInput;
};


export type MutationCreateClaimArgs = {
  data: ClaimCreateInput;
};


export type MutationCreateClubArgs = {
  data: ClubCreateInput;
};


export type MutationCreateClubBadgeArgs = {
  data: ClubBadgeCreateInput;
};


export type MutationCreateClubBalanceArgs = {
  data: ClubBalanceCreateInput;
};


export type MutationCreateClubFixtureArgs = {
  data: ClubFixtureCreateInput;
};


export type MutationCreateClubStatsArgs = {
  data: ClubStatsCreateInput;
};


export type MutationCreateClubTournamentArgs = {
  data: ClubTournamentCreateInput;
};


export type MutationCreateCompetitionArgs = {
  data: CompetitionCreateInput;
};


export type MutationCreateCompetitionPlayerStatsArgs = {
  data: CompetitionPlayerStatsCreateInput;
};


export type MutationCreateDivisionArgs = {
  data: DivisionCreateInput;
};


export type MutationCreateEthereumEventArgs = {
  data: EthereumEventCreateInput;
};


export type MutationCreateFixtureArgs = {
  data: FixtureCreateInput;
};


export type MutationCreateFormationArgs = {
  data: FormationCreateInput;
};


export type MutationCreateFormationSlotArgs = {
  data: FormationSlotCreateInput;
};


export type MutationCreateKitArgs = {
  data: KitCreateInput;
};


export type MutationCreateLineupArgs = {
  data: LineupCreateInput;
};


export type MutationCreateManyAcademyArgs = {
  data: Array<AcademyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAcademyMintFeeArgs = {
  data: Array<AcademyMintFeeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyActionArgs = {
  data: Array<ActionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAvailableHomeGameTimeArgs = {
  data: Array<AvailableHomeGameTimeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClaimArgs = {
  data: Array<ClaimCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubArgs = {
  data: Array<ClubCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubBadgeArgs = {
  data: Array<ClubBadgeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubBalanceArgs = {
  data: Array<ClubBalanceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubFixtureArgs = {
  data: Array<ClubFixtureCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubStatsArgs = {
  data: Array<ClubStatsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubTournamentArgs = {
  data: Array<ClubTournamentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCompetitionArgs = {
  data: Array<CompetitionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCompetitionPlayerStatsArgs = {
  data: Array<CompetitionPlayerStatsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDivisionArgs = {
  data: Array<DivisionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyEthereumEventArgs = {
  data: Array<EthereumEventCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFixtureArgs = {
  data: Array<FixtureCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFormationArgs = {
  data: Array<FormationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFormationSlotArgs = {
  data: Array<FormationSlotCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyKitArgs = {
  data: Array<KitCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLineupArgs = {
  data: Array<LineupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMatchArgs = {
  data: Array<MatchCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMerkleRootArgs = {
  data: Array<MerkleRootCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMetadataArgs = {
  data: Array<MetadataCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMoraleArgs = {
  data: Array<MoraleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNewsItemArgs = {
  data: Array<NewsItemCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyOwnerArgs = {
  data: Array<OwnerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerArgs = {
  data: Array<PlayerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerAttributesArgs = {
  data: Array<PlayerAttributesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerAttributesPositionalRatingArgs = {
  data: Array<PlayerAttributesPositionalRatingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerLineupArgs = {
  data: Array<PlayerLineupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerStatsRecordArgs = {
  data: Array<PlayerStatsRecordCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPoolArgs = {
  data: Array<PoolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPoolsOnValuesArgs = {
  data: Array<PoolsOnValuesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPrizeArgs = {
  data: Array<PrizeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPromotionSelectorArgs = {
  data: Array<PromotionSelectorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySeasonArgs = {
  data: Array<SeasonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyStadiumArgs = {
  data: Array<StadiumCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyStadiumStandArgs = {
  data: Array<StadiumStandCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTacticsArgs = {
  data: Array<TacticsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTokenArgs = {
  data: Array<TokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTournamentArgs = {
  data: Array<TournamentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTournamentPlayerStatsArgs = {
  data: Array<TournamentPlayerStatsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyValueArgs = {
  data: Array<ValueCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMatchArgs = {
  data: MatchCreateInput;
};


export type MutationCreateMerkleRootArgs = {
  data: MerkleRootCreateInput;
};


export type MutationCreateMetadataArgs = {
  data: MetadataCreateInput;
};


export type MutationCreateMoraleArgs = {
  data: MoraleCreateInput;
};


export type MutationCreateNewsItemArgs = {
  data: NewsItemCreateInput;
};


export type MutationCreateOwnerArgs = {
  data: OwnerCreateInput;
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationCreatePlayerAttributesArgs = {
  data: PlayerAttributesCreateInput;
};


export type MutationCreatePlayerAttributesPositionalRatingArgs = {
  data: PlayerAttributesPositionalRatingCreateInput;
};


export type MutationCreatePlayerLineupArgs = {
  data: PlayerLineupCreateInput;
};


export type MutationCreatePlayerStatsRecordArgs = {
  data: PlayerStatsRecordCreateInput;
};


export type MutationCreatePoolArgs = {
  data: PoolCreateInput;
};


export type MutationCreatePoolsOnValuesArgs = {
  data: PoolsOnValuesCreateInput;
};


export type MutationCreatePrizeArgs = {
  data: PrizeCreateInput;
};


export type MutationCreatePromotionSelectorArgs = {
  data: PromotionSelectorCreateInput;
};


export type MutationCreateSeasonArgs = {
  data: SeasonCreateInput;
};


export type MutationCreateStadiumArgs = {
  data: StadiumCreateInput;
};


export type MutationCreateStadiumStandArgs = {
  data: StadiumStandCreateInput;
};


export type MutationCreateTacticsArgs = {
  data: TacticsCreateInput;
};


export type MutationCreateTokenArgs = {
  data: TokenCreateInput;
};


export type MutationCreateTournamentArgs = {
  data: TournamentCreateInput;
};


export type MutationCreateTournamentPlayerStatsArgs = {
  data: TournamentPlayerStatsCreateInput;
};


export type MutationCreateValueArgs = {
  data: ValueCreateInput;
};


export type MutationDeleteAcademyArgs = {
  where: AcademyWhereUniqueInput;
};


export type MutationDeleteAcademyMintFeeArgs = {
  where: AcademyMintFeeWhereUniqueInput;
};


export type MutationDeleteActionArgs = {
  where: ActionWhereUniqueInput;
};


export type MutationDeleteAvailableHomeGameTimeArgs = {
  where: AvailableHomeGameTimeWhereUniqueInput;
};


export type MutationDeleteClaimArgs = {
  where: ClaimWhereUniqueInput;
};


export type MutationDeleteClubArgs = {
  where: ClubWhereUniqueInput;
};


export type MutationDeleteClubBadgeArgs = {
  where: ClubBadgeWhereUniqueInput;
};


export type MutationDeleteClubBalanceArgs = {
  where: ClubBalanceWhereUniqueInput;
};


export type MutationDeleteClubFixtureArgs = {
  where: ClubFixtureWhereUniqueInput;
};


export type MutationDeleteClubStatsArgs = {
  where: ClubStatsWhereUniqueInput;
};


export type MutationDeleteClubTournamentArgs = {
  where: ClubTournamentWhereUniqueInput;
};


export type MutationDeleteCompetitionArgs = {
  where: CompetitionWhereUniqueInput;
};


export type MutationDeleteCompetitionPlayerStatsArgs = {
  where: CompetitionPlayerStatsWhereUniqueInput;
};


export type MutationDeleteDivisionArgs = {
  where: DivisionWhereUniqueInput;
};


export type MutationDeleteEthereumEventArgs = {
  where: EthereumEventWhereUniqueInput;
};


export type MutationDeleteFixtureArgs = {
  where: FixtureWhereUniqueInput;
};


export type MutationDeleteFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type MutationDeleteFormationSlotArgs = {
  where: FormationSlotWhereUniqueInput;
};


export type MutationDeleteKitArgs = {
  where: KitWhereUniqueInput;
};


export type MutationDeleteLineupArgs = {
  where: LineupWhereUniqueInput;
};


export type MutationDeleteManyAcademyArgs = {
  where?: InputMaybe<AcademyWhereInput>;
};


export type MutationDeleteManyAcademyMintFeeArgs = {
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type MutationDeleteManyActionArgs = {
  where?: InputMaybe<ActionWhereInput>;
};


export type MutationDeleteManyAvailableHomeGameTimeArgs = {
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type MutationDeleteManyClaimArgs = {
  where?: InputMaybe<ClaimWhereInput>;
};


export type MutationDeleteManyClubArgs = {
  where?: InputMaybe<ClubWhereInput>;
};


export type MutationDeleteManyClubBadgeArgs = {
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type MutationDeleteManyClubBalanceArgs = {
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type MutationDeleteManyClubFixtureArgs = {
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type MutationDeleteManyClubStatsArgs = {
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type MutationDeleteManyClubTournamentArgs = {
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type MutationDeleteManyCompetitionArgs = {
  where?: InputMaybe<CompetitionWhereInput>;
};


export type MutationDeleteManyCompetitionPlayerStatsArgs = {
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type MutationDeleteManyDivisionArgs = {
  where?: InputMaybe<DivisionWhereInput>;
};


export type MutationDeleteManyEthereumEventArgs = {
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type MutationDeleteManyFixtureArgs = {
  where?: InputMaybe<FixtureWhereInput>;
};


export type MutationDeleteManyFormationArgs = {
  where?: InputMaybe<FormationWhereInput>;
};


export type MutationDeleteManyFormationSlotArgs = {
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type MutationDeleteManyKitArgs = {
  where?: InputMaybe<KitWhereInput>;
};


export type MutationDeleteManyLineupArgs = {
  where?: InputMaybe<LineupWhereInput>;
};


export type MutationDeleteManyMatchArgs = {
  where?: InputMaybe<MatchWhereInput>;
};


export type MutationDeleteManyMerkleRootArgs = {
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type MutationDeleteManyMetadataArgs = {
  where?: InputMaybe<MetadataWhereInput>;
};


export type MutationDeleteManyMoraleArgs = {
  where?: InputMaybe<MoraleWhereInput>;
};


export type MutationDeleteManyNewsItemArgs = {
  where?: InputMaybe<NewsItemWhereInput>;
};


export type MutationDeleteManyOwnerArgs = {
  where?: InputMaybe<OwnerWhereInput>;
};


export type MutationDeleteManyPlayerArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};


export type MutationDeleteManyPlayerAttributesArgs = {
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type MutationDeleteManyPlayerAttributesPositionalRatingArgs = {
  where?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};


export type MutationDeleteManyPlayerLineupArgs = {
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type MutationDeleteManyPlayerStatsRecordArgs = {
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type MutationDeleteManyPoolArgs = {
  where?: InputMaybe<PoolWhereInput>;
};


export type MutationDeleteManyPoolsOnValuesArgs = {
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};


export type MutationDeleteManyPrizeArgs = {
  where?: InputMaybe<PrizeWhereInput>;
};


export type MutationDeleteManyPromotionSelectorArgs = {
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type MutationDeleteManySeasonArgs = {
  where?: InputMaybe<SeasonWhereInput>;
};


export type MutationDeleteManyStadiumArgs = {
  where?: InputMaybe<StadiumWhereInput>;
};


export type MutationDeleteManyStadiumStandArgs = {
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type MutationDeleteManyTacticsArgs = {
  where?: InputMaybe<TacticsWhereInput>;
};


export type MutationDeleteManyTokenArgs = {
  where?: InputMaybe<TokenWhereInput>;
};


export type MutationDeleteManyTournamentArgs = {
  where?: InputMaybe<TournamentWhereInput>;
};


export type MutationDeleteManyTournamentPlayerStatsArgs = {
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type MutationDeleteManyValueArgs = {
  where?: InputMaybe<ValueWhereInput>;
};


export type MutationDeleteMatchArgs = {
  where: MatchWhereUniqueInput;
};


export type MutationDeleteMerkleRootArgs = {
  where: MerkleRootWhereUniqueInput;
};


export type MutationDeleteMetadataArgs = {
  where: MetadataWhereUniqueInput;
};


export type MutationDeleteMoraleArgs = {
  where: MoraleWhereUniqueInput;
};


export type MutationDeleteNewsItemArgs = {
  where: NewsItemWhereUniqueInput;
};


export type MutationDeleteOwnerArgs = {
  where: OwnerWhereUniqueInput;
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationDeletePlayerAttributesArgs = {
  where: PlayerAttributesWhereUniqueInput;
};


export type MutationDeletePlayerAttributesPositionalRatingArgs = {
  where: PlayerAttributesPositionalRatingWhereUniqueInput;
};


export type MutationDeletePlayerLineupArgs = {
  where: PlayerLineupWhereUniqueInput;
};


export type MutationDeletePlayerStatsRecordArgs = {
  where: PlayerStatsRecordWhereUniqueInput;
};


export type MutationDeletePoolArgs = {
  where: PoolWhereUniqueInput;
};


export type MutationDeletePoolsOnValuesArgs = {
  where: PoolsOnValuesWhereUniqueInput;
};


export type MutationDeletePrizeArgs = {
  where: PrizeWhereUniqueInput;
};


export type MutationDeletePromotionSelectorArgs = {
  where: PromotionSelectorWhereUniqueInput;
};


export type MutationDeleteSeasonArgs = {
  where: SeasonWhereUniqueInput;
};


export type MutationDeleteStadiumArgs = {
  where: StadiumWhereUniqueInput;
};


export type MutationDeleteStadiumStandArgs = {
  where: StadiumStandWhereUniqueInput;
};


export type MutationDeleteTacticsArgs = {
  where: TacticsWhereUniqueInput;
};


export type MutationDeleteTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationDeleteTournamentArgs = {
  where: TournamentWhereUniqueInput;
};


export type MutationDeleteTournamentPlayerStatsArgs = {
  where: TournamentPlayerStatsWhereUniqueInput;
};


export type MutationDeleteValueArgs = {
  where: ValueWhereUniqueInput;
};


export type MutationSubmitActionArgs = {
  action: Scalars['String'];
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationUpdateAcademyArgs = {
  data: AcademyUpdateInput;
  where: AcademyWhereUniqueInput;
};


export type MutationUpdateAcademyMintFeeArgs = {
  data: AcademyMintFeeUpdateInput;
  where: AcademyMintFeeWhereUniqueInput;
};


export type MutationUpdateActionArgs = {
  data: ActionUpdateInput;
  where: ActionWhereUniqueInput;
};


export type MutationUpdateAvailableHomeGameTimeArgs = {
  data: AvailableHomeGameTimeUpdateInput;
  where: AvailableHomeGameTimeWhereUniqueInput;
};


export type MutationUpdateClaimArgs = {
  data: ClaimUpdateInput;
  where: ClaimWhereUniqueInput;
};


export type MutationUpdateClubArgs = {
  data: ClubUpdateInput;
  where: ClubWhereUniqueInput;
};


export type MutationUpdateClubBadgeArgs = {
  data: ClubBadgeUpdateInput;
  where: ClubBadgeWhereUniqueInput;
};


export type MutationUpdateClubBalanceArgs = {
  data: ClubBalanceUpdateInput;
  where: ClubBalanceWhereUniqueInput;
};


export type MutationUpdateClubFixtureArgs = {
  data: ClubFixtureUpdateInput;
  where: ClubFixtureWhereUniqueInput;
};


export type MutationUpdateClubStatsArgs = {
  data: ClubStatsUpdateInput;
  where: ClubStatsWhereUniqueInput;
};


export type MutationUpdateClubTournamentArgs = {
  data: ClubTournamentUpdateInput;
  where: ClubTournamentWhereUniqueInput;
};


export type MutationUpdateCompetitionArgs = {
  data: CompetitionUpdateInput;
  where: CompetitionWhereUniqueInput;
};


export type MutationUpdateCompetitionPlayerStatsArgs = {
  data: CompetitionPlayerStatsUpdateInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};


export type MutationUpdateDivisionArgs = {
  data: DivisionUpdateInput;
  where: DivisionWhereUniqueInput;
};


export type MutationUpdateEthereumEventArgs = {
  data: EthereumEventUpdateInput;
  where: EthereumEventWhereUniqueInput;
};


export type MutationUpdateFixtureArgs = {
  data: FixtureUpdateInput;
  where: FixtureWhereUniqueInput;
};


export type MutationUpdateFormationArgs = {
  data: FormationUpdateInput;
  where: FormationWhereUniqueInput;
};


export type MutationUpdateFormationSlotArgs = {
  data: FormationSlotUpdateInput;
  where: FormationSlotWhereUniqueInput;
};


export type MutationUpdateKitArgs = {
  data: KitUpdateInput;
  where: KitWhereUniqueInput;
};


export type MutationUpdateLineupArgs = {
  data: LineupUpdateInput;
  where: LineupWhereUniqueInput;
};


export type MutationUpdateManyAcademyArgs = {
  data: AcademyUpdateManyMutationInput;
  where?: InputMaybe<AcademyWhereInput>;
};


export type MutationUpdateManyAcademyMintFeeArgs = {
  data: AcademyMintFeeUpdateManyMutationInput;
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type MutationUpdateManyActionArgs = {
  data: ActionUpdateManyMutationInput;
  where?: InputMaybe<ActionWhereInput>;
};


export type MutationUpdateManyAvailableHomeGameTimeArgs = {
  data: AvailableHomeGameTimeUpdateManyMutationInput;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type MutationUpdateManyClaimArgs = {
  data: ClaimUpdateManyMutationInput;
  where?: InputMaybe<ClaimWhereInput>;
};


export type MutationUpdateManyClubArgs = {
  data: ClubUpdateManyMutationInput;
  where?: InputMaybe<ClubWhereInput>;
};


export type MutationUpdateManyClubBadgeArgs = {
  data: ClubBadgeUpdateManyMutationInput;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type MutationUpdateManyClubBalanceArgs = {
  data: ClubBalanceUpdateManyMutationInput;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type MutationUpdateManyClubFixtureArgs = {
  data: ClubFixtureUpdateManyMutationInput;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type MutationUpdateManyClubStatsArgs = {
  data: ClubStatsUpdateManyMutationInput;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type MutationUpdateManyClubTournamentArgs = {
  data: ClubTournamentUpdateManyMutationInput;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type MutationUpdateManyCompetitionArgs = {
  data: CompetitionUpdateManyMutationInput;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type MutationUpdateManyCompetitionPlayerStatsArgs = {
  data: CompetitionPlayerStatsUpdateManyMutationInput;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type MutationUpdateManyDivisionArgs = {
  data: DivisionUpdateManyMutationInput;
  where?: InputMaybe<DivisionWhereInput>;
};


export type MutationUpdateManyEthereumEventArgs = {
  data: EthereumEventUpdateManyMutationInput;
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type MutationUpdateManyFixtureArgs = {
  data: FixtureUpdateManyMutationInput;
  where?: InputMaybe<FixtureWhereInput>;
};


export type MutationUpdateManyFormationArgs = {
  data: FormationUpdateManyMutationInput;
  where?: InputMaybe<FormationWhereInput>;
};


export type MutationUpdateManyFormationSlotArgs = {
  data: FormationSlotUpdateManyMutationInput;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type MutationUpdateManyKitArgs = {
  data: KitUpdateManyMutationInput;
  where?: InputMaybe<KitWhereInput>;
};


export type MutationUpdateManyLineupArgs = {
  data: LineupUpdateManyMutationInput;
  where?: InputMaybe<LineupWhereInput>;
};


export type MutationUpdateManyMatchArgs = {
  data: MatchUpdateManyMutationInput;
  where?: InputMaybe<MatchWhereInput>;
};


export type MutationUpdateManyMerkleRootArgs = {
  data: MerkleRootUpdateManyMutationInput;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type MutationUpdateManyMetadataArgs = {
  data: MetadataUpdateManyMutationInput;
  where?: InputMaybe<MetadataWhereInput>;
};


export type MutationUpdateManyMoraleArgs = {
  data: MoraleUpdateManyMutationInput;
  where?: InputMaybe<MoraleWhereInput>;
};


export type MutationUpdateManyNewsItemArgs = {
  data: NewsItemUpdateManyMutationInput;
  where?: InputMaybe<NewsItemWhereInput>;
};


export type MutationUpdateManyOwnerArgs = {
  data: OwnerUpdateManyMutationInput;
  where?: InputMaybe<OwnerWhereInput>;
};


export type MutationUpdateManyPlayerArgs = {
  data: PlayerUpdateManyMutationInput;
  where?: InputMaybe<PlayerWhereInput>;
};


export type MutationUpdateManyPlayerAttributesArgs = {
  data: PlayerAttributesUpdateManyMutationInput;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type MutationUpdateManyPlayerAttributesPositionalRatingArgs = {
  data: PlayerAttributesPositionalRatingUpdateManyMutationInput;
  where?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};


export type MutationUpdateManyPlayerLineupArgs = {
  data: PlayerLineupUpdateManyMutationInput;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type MutationUpdateManyPlayerStatsRecordArgs = {
  data: PlayerStatsRecordUpdateManyMutationInput;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type MutationUpdateManyPoolArgs = {
  data: PoolUpdateManyMutationInput;
  where?: InputMaybe<PoolWhereInput>;
};


export type MutationUpdateManyPoolsOnValuesArgs = {
  data: PoolsOnValuesUpdateManyMutationInput;
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};


export type MutationUpdateManyPrizeArgs = {
  data: PrizeUpdateManyMutationInput;
  where?: InputMaybe<PrizeWhereInput>;
};


export type MutationUpdateManyPromotionSelectorArgs = {
  data: PromotionSelectorUpdateManyMutationInput;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type MutationUpdateManySeasonArgs = {
  data: SeasonUpdateManyMutationInput;
  where?: InputMaybe<SeasonWhereInput>;
};


export type MutationUpdateManyStadiumArgs = {
  data: StadiumUpdateManyMutationInput;
  where?: InputMaybe<StadiumWhereInput>;
};


export type MutationUpdateManyStadiumStandArgs = {
  data: StadiumStandUpdateManyMutationInput;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type MutationUpdateManyTacticsArgs = {
  data: TacticsUpdateManyMutationInput;
  where?: InputMaybe<TacticsWhereInput>;
};


export type MutationUpdateManyTokenArgs = {
  data: TokenUpdateManyMutationInput;
  where?: InputMaybe<TokenWhereInput>;
};


export type MutationUpdateManyTournamentArgs = {
  data: TournamentUpdateManyMutationInput;
  where?: InputMaybe<TournamentWhereInput>;
};


export type MutationUpdateManyTournamentPlayerStatsArgs = {
  data: TournamentPlayerStatsUpdateManyMutationInput;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type MutationUpdateManyValueArgs = {
  data: ValueUpdateManyMutationInput;
  where?: InputMaybe<ValueWhereInput>;
};


export type MutationUpdateMatchArgs = {
  data: MatchUpdateInput;
  where: MatchWhereUniqueInput;
};


export type MutationUpdateMerkleRootArgs = {
  data: MerkleRootUpdateInput;
  where: MerkleRootWhereUniqueInput;
};


export type MutationUpdateMetadataArgs = {
  data: MetadataUpdateInput;
  where: MetadataWhereUniqueInput;
};


export type MutationUpdateMoraleArgs = {
  data: MoraleUpdateInput;
  where: MoraleWhereUniqueInput;
};


export type MutationUpdateNewsItemArgs = {
  data: NewsItemUpdateInput;
  where: NewsItemWhereUniqueInput;
};


export type MutationUpdateOwnerArgs = {
  data: OwnerUpdateInput;
  where: OwnerWhereUniqueInput;
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpdatePlayerAttributesArgs = {
  data: PlayerAttributesUpdateInput;
  where: PlayerAttributesWhereUniqueInput;
};


export type MutationUpdatePlayerAttributesPositionalRatingArgs = {
  data: PlayerAttributesPositionalRatingUpdateInput;
  where: PlayerAttributesPositionalRatingWhereUniqueInput;
};


export type MutationUpdatePlayerLineupArgs = {
  data: PlayerLineupUpdateInput;
  where: PlayerLineupWhereUniqueInput;
};


export type MutationUpdatePlayerStatsRecordArgs = {
  data: PlayerStatsRecordUpdateInput;
  where: PlayerStatsRecordWhereUniqueInput;
};


export type MutationUpdatePoolArgs = {
  data: PoolUpdateInput;
  where: PoolWhereUniqueInput;
};


export type MutationUpdatePoolsOnValuesArgs = {
  data: PoolsOnValuesUpdateInput;
  where: PoolsOnValuesWhereUniqueInput;
};


export type MutationUpdatePrizeArgs = {
  data: PrizeUpdateInput;
  where: PrizeWhereUniqueInput;
};


export type MutationUpdatePromotionSelectorArgs = {
  data: PromotionSelectorUpdateInput;
  where: PromotionSelectorWhereUniqueInput;
};


export type MutationUpdateSeasonArgs = {
  data: SeasonUpdateInput;
  where: SeasonWhereUniqueInput;
};


export type MutationUpdateStadiumArgs = {
  data: StadiumUpdateInput;
  where: StadiumWhereUniqueInput;
};


export type MutationUpdateStadiumStandArgs = {
  data: StadiumStandUpdateInput;
  where: StadiumStandWhereUniqueInput;
};


export type MutationUpdateTacticsArgs = {
  data: TacticsUpdateInput;
  where: TacticsWhereUniqueInput;
};


export type MutationUpdateTokenArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationUpdateTournamentArgs = {
  data: TournamentUpdateInput;
  where: TournamentWhereUniqueInput;
};


export type MutationUpdateTournamentPlayerStatsArgs = {
  data: TournamentPlayerStatsUpdateInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};


export type MutationUpdateValueArgs = {
  data: ValueUpdateInput;
  where: ValueWhereUniqueInput;
};


export type MutationUpsertAcademyArgs = {
  create: AcademyCreateInput;
  update: AcademyUpdateInput;
  where: AcademyWhereUniqueInput;
};


export type MutationUpsertAcademyMintFeeArgs = {
  create: AcademyMintFeeCreateInput;
  update: AcademyMintFeeUpdateInput;
  where: AcademyMintFeeWhereUniqueInput;
};


export type MutationUpsertActionArgs = {
  create: ActionCreateInput;
  update: ActionUpdateInput;
  where: ActionWhereUniqueInput;
};


export type MutationUpsertAvailableHomeGameTimeArgs = {
  create: AvailableHomeGameTimeCreateInput;
  update: AvailableHomeGameTimeUpdateInput;
  where: AvailableHomeGameTimeWhereUniqueInput;
};


export type MutationUpsertClaimArgs = {
  create: ClaimCreateInput;
  update: ClaimUpdateInput;
  where: ClaimWhereUniqueInput;
};


export type MutationUpsertClubArgs = {
  create: ClubCreateInput;
  update: ClubUpdateInput;
  where: ClubWhereUniqueInput;
};


export type MutationUpsertClubBadgeArgs = {
  create: ClubBadgeCreateInput;
  update: ClubBadgeUpdateInput;
  where: ClubBadgeWhereUniqueInput;
};


export type MutationUpsertClubBalanceArgs = {
  create: ClubBalanceCreateInput;
  update: ClubBalanceUpdateInput;
  where: ClubBalanceWhereUniqueInput;
};


export type MutationUpsertClubFixtureArgs = {
  create: ClubFixtureCreateInput;
  update: ClubFixtureUpdateInput;
  where: ClubFixtureWhereUniqueInput;
};


export type MutationUpsertClubStatsArgs = {
  create: ClubStatsCreateInput;
  update: ClubStatsUpdateInput;
  where: ClubStatsWhereUniqueInput;
};


export type MutationUpsertClubTournamentArgs = {
  create: ClubTournamentCreateInput;
  update: ClubTournamentUpdateInput;
  where: ClubTournamentWhereUniqueInput;
};


export type MutationUpsertCompetitionArgs = {
  create: CompetitionCreateInput;
  update: CompetitionUpdateInput;
  where: CompetitionWhereUniqueInput;
};


export type MutationUpsertCompetitionPlayerStatsArgs = {
  create: CompetitionPlayerStatsCreateInput;
  update: CompetitionPlayerStatsUpdateInput;
  where: CompetitionPlayerStatsWhereUniqueInput;
};


export type MutationUpsertDivisionArgs = {
  create: DivisionCreateInput;
  update: DivisionUpdateInput;
  where: DivisionWhereUniqueInput;
};


export type MutationUpsertEthereumEventArgs = {
  create: EthereumEventCreateInput;
  update: EthereumEventUpdateInput;
  where: EthereumEventWhereUniqueInput;
};


export type MutationUpsertFixtureArgs = {
  create: FixtureCreateInput;
  update: FixtureUpdateInput;
  where: FixtureWhereUniqueInput;
};


export type MutationUpsertFormationArgs = {
  create: FormationCreateInput;
  update: FormationUpdateInput;
  where: FormationWhereUniqueInput;
};


export type MutationUpsertFormationSlotArgs = {
  create: FormationSlotCreateInput;
  update: FormationSlotUpdateInput;
  where: FormationSlotWhereUniqueInput;
};


export type MutationUpsertKitArgs = {
  create: KitCreateInput;
  update: KitUpdateInput;
  where: KitWhereUniqueInput;
};


export type MutationUpsertLineupArgs = {
  create: LineupCreateInput;
  update: LineupUpdateInput;
  where: LineupWhereUniqueInput;
};


export type MutationUpsertMatchArgs = {
  create: MatchCreateInput;
  update: MatchUpdateInput;
  where: MatchWhereUniqueInput;
};


export type MutationUpsertMerkleRootArgs = {
  create: MerkleRootCreateInput;
  update: MerkleRootUpdateInput;
  where: MerkleRootWhereUniqueInput;
};


export type MutationUpsertMetadataArgs = {
  create: MetadataCreateInput;
  update: MetadataUpdateInput;
  where: MetadataWhereUniqueInput;
};


export type MutationUpsertMoraleArgs = {
  create: MoraleCreateInput;
  update: MoraleUpdateInput;
  where: MoraleWhereUniqueInput;
};


export type MutationUpsertNewsItemArgs = {
  create: NewsItemCreateInput;
  update: NewsItemUpdateInput;
  where: NewsItemWhereUniqueInput;
};


export type MutationUpsertOwnerArgs = {
  create: OwnerCreateInput;
  update: OwnerUpdateInput;
  where: OwnerWhereUniqueInput;
};


export type MutationUpsertPlayerArgs = {
  create: PlayerCreateInput;
  update: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpsertPlayerAttributesArgs = {
  create: PlayerAttributesCreateInput;
  update: PlayerAttributesUpdateInput;
  where: PlayerAttributesWhereUniqueInput;
};


export type MutationUpsertPlayerAttributesPositionalRatingArgs = {
  create: PlayerAttributesPositionalRatingCreateInput;
  update: PlayerAttributesPositionalRatingUpdateInput;
  where: PlayerAttributesPositionalRatingWhereUniqueInput;
};


export type MutationUpsertPlayerLineupArgs = {
  create: PlayerLineupCreateInput;
  update: PlayerLineupUpdateInput;
  where: PlayerLineupWhereUniqueInput;
};


export type MutationUpsertPlayerStatsRecordArgs = {
  create: PlayerStatsRecordCreateInput;
  update: PlayerStatsRecordUpdateInput;
  where: PlayerStatsRecordWhereUniqueInput;
};


export type MutationUpsertPoolArgs = {
  create: PoolCreateInput;
  update: PoolUpdateInput;
  where: PoolWhereUniqueInput;
};


export type MutationUpsertPoolsOnValuesArgs = {
  create: PoolsOnValuesCreateInput;
  update: PoolsOnValuesUpdateInput;
  where: PoolsOnValuesWhereUniqueInput;
};


export type MutationUpsertPrizeArgs = {
  create: PrizeCreateInput;
  update: PrizeUpdateInput;
  where: PrizeWhereUniqueInput;
};


export type MutationUpsertPromotionSelectorArgs = {
  create: PromotionSelectorCreateInput;
  update: PromotionSelectorUpdateInput;
  where: PromotionSelectorWhereUniqueInput;
};


export type MutationUpsertSeasonArgs = {
  create: SeasonCreateInput;
  update: SeasonUpdateInput;
  where: SeasonWhereUniqueInput;
};


export type MutationUpsertStadiumArgs = {
  create: StadiumCreateInput;
  update: StadiumUpdateInput;
  where: StadiumWhereUniqueInput;
};


export type MutationUpsertStadiumStandArgs = {
  create: StadiumStandCreateInput;
  update: StadiumStandUpdateInput;
  where: StadiumStandWhereUniqueInput;
};


export type MutationUpsertTacticsArgs = {
  create: TacticsCreateInput;
  update: TacticsUpdateInput;
  where: TacticsWhereUniqueInput;
};


export type MutationUpsertTokenArgs = {
  create: TokenCreateInput;
  update: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationUpsertTournamentArgs = {
  create: TournamentCreateInput;
  update: TournamentUpdateInput;
  where: TournamentWhereUniqueInput;
};


export type MutationUpsertTournamentPlayerStatsArgs = {
  create: TournamentPlayerStatsCreateInput;
  update: TournamentPlayerStatsUpdateInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};


export type MutationUpsertValueArgs = {
  create: ValueCreateInput;
  update: ValueUpdateInput;
  where: ValueWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedEnumSeasonStateFilter = {
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type NestedEnumSeasonStateWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSeasonStateFilter>;
  _min?: InputMaybe<NestedEnumSeasonStateFilter>;
  equals?: InputMaybe<SeasonState>;
  in?: InputMaybe<Array<SeasonState>>;
  not?: InputMaybe<NestedEnumSeasonStateWithAggregatesFilter>;
  notIn?: InputMaybe<Array<SeasonState>>;
};

export type NestedEnumStadiumStandSideFilter = {
  equals?: InputMaybe<StadiumStandSide>;
  in?: InputMaybe<Array<StadiumStandSide>>;
  not?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  notIn?: InputMaybe<Array<StadiumStandSide>>;
};

export type NestedEnumStadiumStandSideWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  _min?: InputMaybe<NestedEnumStadiumStandSideFilter>;
  equals?: InputMaybe<StadiumStandSide>;
  in?: InputMaybe<Array<StadiumStandSide>>;
  not?: InputMaybe<NestedEnumStadiumStandSideWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StadiumStandSide>>;
};

export type NestedEnumStadiumStandSizeFilter = {
  equals?: InputMaybe<StadiumStandSize>;
  in?: InputMaybe<Array<StadiumStandSize>>;
  not?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  notIn?: InputMaybe<Array<StadiumStandSize>>;
};

export type NestedEnumStadiumStandSizeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  _min?: InputMaybe<NestedEnumStadiumStandSizeFilter>;
  equals?: InputMaybe<StadiumStandSize>;
  in?: InputMaybe<Array<StadiumStandSize>>;
  not?: InputMaybe<NestedEnumStadiumStandSizeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StadiumStandSize>>;
};

export type NestedEnumStadiumStandStyleFilter = {
  equals?: InputMaybe<StadiumStandStyle>;
  in?: InputMaybe<Array<StadiumStandStyle>>;
  not?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  notIn?: InputMaybe<Array<StadiumStandStyle>>;
};

export type NestedEnumStadiumStandStyleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  _min?: InputMaybe<NestedEnumStadiumStandStyleFilter>;
  equals?: InputMaybe<StadiumStandStyle>;
  in?: InputMaybe<Array<StadiumStandStyle>>;
  not?: InputMaybe<NestedEnumStadiumStandStyleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<StadiumStandStyle>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedJsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NewsItem = {
  __typename?: 'NewsItem';
  _count?: Maybe<NewsItemCount>;
  clubs: Array<Club>;
  date: Scalars['Int'];
  id: Scalars['Int'];
  players: Array<Player>;
  text: Scalars['String'];
};


export type NewsItemClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type NewsItemPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type NewsItemAvgAggregate = {
  __typename?: 'NewsItemAvgAggregate';
  date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type NewsItemAvgOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NewsItemCount = {
  __typename?: 'NewsItemCount';
  clubs: Scalars['Int'];
  players: Scalars['Int'];
};

export type NewsItemCountAggregate = {
  __typename?: 'NewsItemCountAggregate';
  _all: Scalars['Int'];
  date: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
};

export type NewsItemCountOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NewsItemCreateInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutNewsItemsInput>;
  date: Scalars['Int'];
  players?: InputMaybe<PlayerCreateNestedManyWithoutNewsFeedInput>;
  text: Scalars['String'];
};

export type NewsItemCreateManyInput = {
  date: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
};

export type NewsItemCreateNestedManyWithoutClubsInput = {
  connect?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NewsItemCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<NewsItemCreateWithoutClubsInput>>;
};

export type NewsItemCreateNestedManyWithoutPlayersInput = {
  connect?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NewsItemCreateOrConnectWithoutPlayersInput>>;
  create?: InputMaybe<Array<NewsItemCreateWithoutPlayersInput>>;
};

export type NewsItemCreateOrConnectWithoutClubsInput = {
  create: NewsItemCreateWithoutClubsInput;
  where: NewsItemWhereUniqueInput;
};

export type NewsItemCreateOrConnectWithoutPlayersInput = {
  create: NewsItemCreateWithoutPlayersInput;
  where: NewsItemWhereUniqueInput;
};

export type NewsItemCreateWithoutClubsInput = {
  date: Scalars['Int'];
  players?: InputMaybe<PlayerCreateNestedManyWithoutNewsFeedInput>;
  text: Scalars['String'];
};

export type NewsItemCreateWithoutPlayersInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutNewsItemsInput>;
  date: Scalars['Int'];
  text: Scalars['String'];
};

export type NewsItemGroupBy = {
  __typename?: 'NewsItemGroupBy';
  _avg?: Maybe<NewsItemAvgAggregate>;
  _count?: Maybe<NewsItemCountAggregate>;
  _max?: Maybe<NewsItemMaxAggregate>;
  _min?: Maybe<NewsItemMinAggregate>;
  _sum?: Maybe<NewsItemSumAggregate>;
  date: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type NewsItemListRelationFilter = {
  every?: InputMaybe<NewsItemWhereInput>;
  none?: InputMaybe<NewsItemWhereInput>;
  some?: InputMaybe<NewsItemWhereInput>;
};

export type NewsItemMaxAggregate = {
  __typename?: 'NewsItemMaxAggregate';
  date?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type NewsItemMaxOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NewsItemMinAggregate = {
  __typename?: 'NewsItemMinAggregate';
  date?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type NewsItemMinOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NewsItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NewsItemOrderByWithAggregationInput = {
  _avg?: InputMaybe<NewsItemAvgOrderByAggregateInput>;
  _count?: InputMaybe<NewsItemCountOrderByAggregateInput>;
  _max?: InputMaybe<NewsItemMaxOrderByAggregateInput>;
  _min?: InputMaybe<NewsItemMinOrderByAggregateInput>;
  _sum?: InputMaybe<NewsItemSumOrderByAggregateInput>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NewsItemOrderByWithRelationInput = {
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  text?: InputMaybe<SortOrder>;
};

export enum NewsItemScalarFieldEnum {
  Date = 'date',
  Id = 'id',
  Text = 'text'
}

export type NewsItemScalarWhereInput = {
  AND?: InputMaybe<Array<NewsItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<NewsItemScalarWhereInput>>;
  OR?: InputMaybe<Array<NewsItemScalarWhereInput>>;
  date?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type NewsItemScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NewsItemScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NewsItemScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NewsItemScalarWhereWithAggregatesInput>>;
  date?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type NewsItemSumAggregate = {
  __typename?: 'NewsItemSumAggregate';
  date?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NewsItemSumOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NewsItemUpdateInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutNewsItemsInput>;
  date?: InputMaybe<IntFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutNewsFeedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NewsItemUpdateManyMutationInput = {
  date?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NewsItemUpdateManyWithWhereWithoutClubsInput = {
  data: NewsItemUpdateManyMutationInput;
  where: NewsItemScalarWhereInput;
};

export type NewsItemUpdateManyWithWhereWithoutPlayersInput = {
  data: NewsItemUpdateManyMutationInput;
  where: NewsItemScalarWhereInput;
};

export type NewsItemUpdateManyWithoutClubsInput = {
  connect?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NewsItemCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<NewsItemCreateWithoutClubsInput>>;
  delete?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NewsItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  set?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  update?: InputMaybe<Array<NewsItemUpdateWithWhereUniqueWithoutClubsInput>>;
  updateMany?: InputMaybe<Array<NewsItemUpdateManyWithWhereWithoutClubsInput>>;
  upsert?: InputMaybe<Array<NewsItemUpsertWithWhereUniqueWithoutClubsInput>>;
};

export type NewsItemUpdateManyWithoutPlayersInput = {
  connect?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NewsItemCreateOrConnectWithoutPlayersInput>>;
  create?: InputMaybe<Array<NewsItemCreateWithoutPlayersInput>>;
  delete?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NewsItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  set?: InputMaybe<Array<NewsItemWhereUniqueInput>>;
  update?: InputMaybe<Array<NewsItemUpdateWithWhereUniqueWithoutPlayersInput>>;
  updateMany?: InputMaybe<Array<NewsItemUpdateManyWithWhereWithoutPlayersInput>>;
  upsert?: InputMaybe<Array<NewsItemUpsertWithWhereUniqueWithoutPlayersInput>>;
};

export type NewsItemUpdateWithWhereUniqueWithoutClubsInput = {
  data: NewsItemUpdateWithoutClubsInput;
  where: NewsItemWhereUniqueInput;
};

export type NewsItemUpdateWithWhereUniqueWithoutPlayersInput = {
  data: NewsItemUpdateWithoutPlayersInput;
  where: NewsItemWhereUniqueInput;
};

export type NewsItemUpdateWithoutClubsInput = {
  date?: InputMaybe<IntFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutNewsFeedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NewsItemUpdateWithoutPlayersInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutNewsItemsInput>;
  date?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NewsItemUpsertWithWhereUniqueWithoutClubsInput = {
  create: NewsItemCreateWithoutClubsInput;
  update: NewsItemUpdateWithoutClubsInput;
  where: NewsItemWhereUniqueInput;
};

export type NewsItemUpsertWithWhereUniqueWithoutPlayersInput = {
  create: NewsItemCreateWithoutPlayersInput;
  update: NewsItemUpdateWithoutPlayersInput;
  where: NewsItemWhereUniqueInput;
};

export type NewsItemWhereInput = {
  AND?: InputMaybe<Array<NewsItemWhereInput>>;
  NOT?: InputMaybe<Array<NewsItemWhereInput>>;
  OR?: InputMaybe<Array<NewsItemWhereInput>>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  date?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  text?: InputMaybe<StringFilter>;
};

export type NewsItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Owner = {
  __typename?: 'Owner';
  _count?: Maybe<OwnerCount>;
  address: Scalars['String'];
  clubs: Array<Club>;
  id: Scalars['Int'];
};


export type OwnerClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};

export type OwnerAvgAggregate = {
  __typename?: 'OwnerAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type OwnerAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type OwnerCount = {
  __typename?: 'OwnerCount';
  clubs: Scalars['Int'];
};

export type OwnerCountAggregate = {
  __typename?: 'OwnerCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  id: Scalars['Int'];
};

export type OwnerCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type OwnerCreateInput = {
  address: Scalars['String'];
  clubs?: InputMaybe<ClubCreateNestedManyWithoutOwnerInput>;
};

export type OwnerCreateManyInput = {
  address: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
};

export type OwnerCreateNestedOneWithoutClubsInput = {
  connect?: InputMaybe<OwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OwnerCreateOrConnectWithoutClubsInput>;
  create?: InputMaybe<OwnerCreateWithoutClubsInput>;
};

export type OwnerCreateOrConnectWithoutClubsInput = {
  create: OwnerCreateWithoutClubsInput;
  where: OwnerWhereUniqueInput;
};

export type OwnerCreateWithoutClubsInput = {
  address: Scalars['String'];
};

export type OwnerGroupBy = {
  __typename?: 'OwnerGroupBy';
  _avg?: Maybe<OwnerAvgAggregate>;
  _count?: Maybe<OwnerCountAggregate>;
  _max?: Maybe<OwnerMaxAggregate>;
  _min?: Maybe<OwnerMinAggregate>;
  _sum?: Maybe<OwnerSumAggregate>;
  address: Scalars['String'];
  id: Scalars['Int'];
};

export type OwnerMaxAggregate = {
  __typename?: 'OwnerMaxAggregate';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type OwnerMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type OwnerMinAggregate = {
  __typename?: 'OwnerMinAggregate';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type OwnerMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type OwnerOrderByWithAggregationInput = {
  _avg?: InputMaybe<OwnerAvgOrderByAggregateInput>;
  _count?: InputMaybe<OwnerCountOrderByAggregateInput>;
  _max?: InputMaybe<OwnerMaxOrderByAggregateInput>;
  _min?: InputMaybe<OwnerMinOrderByAggregateInput>;
  _sum?: InputMaybe<OwnerSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type OwnerOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
};

export type OwnerRelationFilter = {
  is?: InputMaybe<OwnerWhereInput>;
  isNot?: InputMaybe<OwnerWhereInput>;
};

export enum OwnerScalarFieldEnum {
  Address = 'address',
  Id = 'id'
}

export type OwnerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OwnerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OwnerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OwnerScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type OwnerSumAggregate = {
  __typename?: 'OwnerSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type OwnerSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type OwnerUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubs?: InputMaybe<ClubUpdateManyWithoutOwnerInput>;
};

export type OwnerUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type OwnerUpdateOneRequiredWithoutClubsInput = {
  connect?: InputMaybe<OwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OwnerCreateOrConnectWithoutClubsInput>;
  create?: InputMaybe<OwnerCreateWithoutClubsInput>;
  update?: InputMaybe<OwnerUpdateWithoutClubsInput>;
  upsert?: InputMaybe<OwnerUpsertWithoutClubsInput>;
};

export type OwnerUpdateWithoutClubsInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type OwnerUpsertWithoutClubsInput = {
  create: OwnerCreateWithoutClubsInput;
  update: OwnerUpdateWithoutClubsInput;
};

export type OwnerWhereInput = {
  AND?: InputMaybe<Array<OwnerWhereInput>>;
  NOT?: InputMaybe<Array<OwnerWhereInput>>;
  OR?: InputMaybe<Array<OwnerWhereInput>>;
  address?: InputMaybe<StringFilter>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  id?: InputMaybe<IntFilter>;
};

export type OwnerWhereUniqueInput = {
  address?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Player = {
  __typename?: 'Player';
  _count?: Maybe<PlayerCount>;
  actions: Array<Action>;
  assetId?: Maybe<Scalars['Int']>;
  club: Club;
  clubId: Scalars['Int'];
  firstName: Scalars['String'];
  firstSeason: Season;
  firstSeasonId: Scalars['Int'];
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: Maybe<Morale>;
  nationality: Scalars['String'];
  newsFeed: Array<NewsItem>;
  originClub: Club;
  originClubId: Scalars['Int'];
  overallRating: Scalars['Float'];
  playerAttributes: Array<PlayerAttributes>;
  playerLineups: Array<PlayerLineup>;
  playerStatsRecord: Array<PlayerStatsRecord>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};


export type PlayerActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type PlayerNewsFeedArgs = {
  cursor?: InputMaybe<NewsItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<NewsItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NewsItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsItemWhereInput>;
};


export type PlayerPlayerAttributesArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type PlayerPlayerLineupsArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type PlayerPlayerStatsRecordArgs = {
  cursor?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerStatsRecordScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};

export type PlayerAttributes = {
  __typename?: 'PlayerAttributes';
  _count?: Maybe<PlayerAttributesCount>;
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  club: Club;
  clubId: Scalars['Int'];
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  id: Scalars['Int'];
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  player: Player;
  playerAttributesPositionalRating: Array<PlayerAttributesPositionalRating>;
  playerId: Scalars['String'];
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};


export type PlayerAttributesPlayerAttributesPositionalRatingArgs = {
  cursor?: InputMaybe<PlayerAttributesPositionalRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesPositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};

export type PlayerAttributesAvgAggregate = {
  __typename?: 'PlayerAttributesAvgAggregate';
  age?: Maybe<Scalars['Float']>;
  clubId?: Maybe<Scalars['Float']>;
  condition?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  gamesSuspended?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  morale?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  workRate?: Maybe<Scalars['Float']>;
};

export type PlayerAttributesAvgOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  stamina?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  workRate?: InputMaybe<SortOrder>;
};

export type PlayerAttributesCount = {
  __typename?: 'PlayerAttributesCount';
  playerAttributesPositionalRating: Scalars['Int'];
};

export type PlayerAttributesCountAggregate = {
  __typename?: 'PlayerAttributesCountAggregate';
  _all: Scalars['Int'];
  age: Scalars['Int'];
  agility: Scalars['Int'];
  ballControl: Scalars['Int'];
  clubId: Scalars['Int'];
  condition: Scalars['Int'];
  crossing: Scalars['Int'];
  dribbling: Scalars['Int'];
  experience: Scalars['Int'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['Int'];
  gkDiving: Scalars['Int'];
  gkHandling: Scalars['Int'];
  gkPositioning: Scalars['Int'];
  gkReflexes: Scalars['Int'];
  gkSpeed: Scalars['Int'];
  heading: Scalars['Int'];
  id: Scalars['Int'];
  intelligence: Scalars['Int'];
  interceptions: Scalars['Int'];
  isLatest: Scalars['Int'];
  leadership: Scalars['Int'];
  morale: Scalars['Int'];
  pace: Scalars['Int'];
  passing: Scalars['Int'];
  physicality: Scalars['Int'];
  playerId: Scalars['Int'];
  positioning: Scalars['Int'];
  preferredPosition: Scalars['Int'];
  shooting: Scalars['Int'];
  stamina: Scalars['Int'];
  tackling: Scalars['Int'];
  timestamp: Scalars['Int'];
  workRate: Scalars['Int'];
};

export type PlayerAttributesCountOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  agility?: InputMaybe<SortOrder>;
  ballControl?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  crossing?: InputMaybe<SortOrder>;
  dribbling?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  gkDistribution?: InputMaybe<SortOrder>;
  gkDiving?: InputMaybe<SortOrder>;
  gkHandling?: InputMaybe<SortOrder>;
  gkPositioning?: InputMaybe<SortOrder>;
  gkReflexes?: InputMaybe<SortOrder>;
  gkSpeed?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  intelligence?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isLatest?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  pace?: InputMaybe<SortOrder>;
  passing?: InputMaybe<SortOrder>;
  physicality?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  positioning?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  shooting?: InputMaybe<SortOrder>;
  stamina?: InputMaybe<SortOrder>;
  tackling?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  workRate?: InputMaybe<SortOrder>;
};

export type PlayerAttributesCreateInput = {
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  club: ClubCreateNestedOneWithoutPlayerAttributesInput;
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  player: PlayerCreateNestedOneWithoutPlayerAttributesInput;
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingCreateNestedManyWithoutPlayerAttributesInput>;
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesCreateManyClubInput = {
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  playerId: Scalars['String'];
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesCreateManyClubInputEnvelope = {
  data: Array<PlayerAttributesCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerAttributesCreateManyInput = {
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  clubId: Scalars['Int'];
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  playerId: Scalars['String'];
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesCreateManyPlayerInput = {
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  clubId: Scalars['Int'];
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesCreateManyPlayerInputEnvelope = {
  data: Array<PlayerAttributesCreateManyPlayerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerAttributesCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttributesCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<PlayerAttributesCreateWithoutClubInput>>;
  createMany?: InputMaybe<PlayerAttributesCreateManyClubInputEnvelope>;
};

export type PlayerAttributesCreateNestedManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttributesCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerAttributesCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerAttributesCreateManyPlayerInputEnvelope>;
};

export type PlayerAttributesCreateNestedOneWithoutPlayerAttributesPositionalRatingInput = {
  connect?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerAttributesCreateOrConnectWithoutPlayerAttributesPositionalRatingInput>;
  create?: InputMaybe<PlayerAttributesCreateWithoutPlayerAttributesPositionalRatingInput>;
};

export type PlayerAttributesCreateOrConnectWithoutClubInput = {
  create: PlayerAttributesCreateWithoutClubInput;
  where: PlayerAttributesWhereUniqueInput;
};

export type PlayerAttributesCreateOrConnectWithoutPlayerAttributesPositionalRatingInput = {
  create: PlayerAttributesCreateWithoutPlayerAttributesPositionalRatingInput;
  where: PlayerAttributesWhereUniqueInput;
};

export type PlayerAttributesCreateOrConnectWithoutPlayerInput = {
  create: PlayerAttributesCreateWithoutPlayerInput;
  where: PlayerAttributesWhereUniqueInput;
};

export type PlayerAttributesCreateWithoutClubInput = {
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  player: PlayerCreateNestedOneWithoutPlayerAttributesInput;
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingCreateNestedManyWithoutPlayerAttributesInput>;
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesCreateWithoutPlayerAttributesPositionalRatingInput = {
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  club: ClubCreateNestedOneWithoutPlayerAttributesInput;
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  player: PlayerCreateNestedOneWithoutPlayerAttributesInput;
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesCreateWithoutPlayerInput = {
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  club: ClubCreateNestedOneWithoutPlayerAttributesInput;
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingCreateNestedManyWithoutPlayerAttributesInput>;
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesGroupBy = {
  __typename?: 'PlayerAttributesGroupBy';
  _avg?: Maybe<PlayerAttributesAvgAggregate>;
  _count?: Maybe<PlayerAttributesCountAggregate>;
  _max?: Maybe<PlayerAttributesMaxAggregate>;
  _min?: Maybe<PlayerAttributesMinAggregate>;
  _sum?: Maybe<PlayerAttributesSumAggregate>;
  age: Scalars['Int'];
  agility: Scalars['JSON'];
  ballControl: Scalars['JSON'];
  clubId: Scalars['Int'];
  condition: Scalars['Float'];
  crossing: Scalars['JSON'];
  dribbling: Scalars['JSON'];
  experience: Scalars['Float'];
  gamesSuspended: Scalars['Int'];
  gkDistribution: Scalars['JSON'];
  gkDiving: Scalars['JSON'];
  gkHandling: Scalars['JSON'];
  gkPositioning: Scalars['JSON'];
  gkReflexes: Scalars['JSON'];
  gkSpeed: Scalars['JSON'];
  heading: Scalars['JSON'];
  id: Scalars['Int'];
  intelligence: Scalars['JSON'];
  interceptions: Scalars['JSON'];
  isLatest: Scalars['Boolean'];
  leadership: Scalars['Float'];
  morale: Scalars['Float'];
  pace: Scalars['JSON'];
  passing: Scalars['JSON'];
  physicality: Scalars['JSON'];
  playerId: Scalars['String'];
  positioning: Scalars['JSON'];
  preferredPosition: Scalars['String'];
  shooting: Scalars['JSON'];
  stamina: Scalars['Float'];
  tackling: Scalars['JSON'];
  timestamp: Scalars['Float'];
  workRate: Scalars['Float'];
};

export type PlayerAttributesListRelationFilter = {
  every?: InputMaybe<PlayerAttributesWhereInput>;
  none?: InputMaybe<PlayerAttributesWhereInput>;
  some?: InputMaybe<PlayerAttributesWhereInput>;
};

export type PlayerAttributesMaxAggregate = {
  __typename?: 'PlayerAttributesMaxAggregate';
  age?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  gamesSuspended?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isLatest?: Maybe<Scalars['Boolean']>;
  leadership?: Maybe<Scalars['Float']>;
  morale?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['String']>;
  preferredPosition?: Maybe<Scalars['String']>;
  stamina?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  workRate?: Maybe<Scalars['Float']>;
};

export type PlayerAttributesMaxOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isLatest?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  stamina?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  workRate?: InputMaybe<SortOrder>;
};

export type PlayerAttributesMinAggregate = {
  __typename?: 'PlayerAttributesMinAggregate';
  age?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  gamesSuspended?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isLatest?: Maybe<Scalars['Boolean']>;
  leadership?: Maybe<Scalars['Float']>;
  morale?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['String']>;
  preferredPosition?: Maybe<Scalars['String']>;
  stamina?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  workRate?: Maybe<Scalars['Float']>;
};

export type PlayerAttributesMinOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isLatest?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  stamina?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  workRate?: InputMaybe<SortOrder>;
};

export type PlayerAttributesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerAttributesOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlayerAttributesAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlayerAttributesCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerAttributesMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerAttributesMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlayerAttributesSumOrderByAggregateInput>;
  age?: InputMaybe<SortOrder>;
  agility?: InputMaybe<SortOrder>;
  ballControl?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  crossing?: InputMaybe<SortOrder>;
  dribbling?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  gkDistribution?: InputMaybe<SortOrder>;
  gkDiving?: InputMaybe<SortOrder>;
  gkHandling?: InputMaybe<SortOrder>;
  gkPositioning?: InputMaybe<SortOrder>;
  gkReflexes?: InputMaybe<SortOrder>;
  gkSpeed?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  intelligence?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isLatest?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  pace?: InputMaybe<SortOrder>;
  passing?: InputMaybe<SortOrder>;
  physicality?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  positioning?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  shooting?: InputMaybe<SortOrder>;
  stamina?: InputMaybe<SortOrder>;
  tackling?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  workRate?: InputMaybe<SortOrder>;
};

export type PlayerAttributesOrderByWithRelationInput = {
  age?: InputMaybe<SortOrder>;
  agility?: InputMaybe<SortOrder>;
  ballControl?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  crossing?: InputMaybe<SortOrder>;
  dribbling?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  gkDistribution?: InputMaybe<SortOrder>;
  gkDiving?: InputMaybe<SortOrder>;
  gkHandling?: InputMaybe<SortOrder>;
  gkPositioning?: InputMaybe<SortOrder>;
  gkReflexes?: InputMaybe<SortOrder>;
  gkSpeed?: InputMaybe<SortOrder>;
  heading?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  intelligence?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isLatest?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  pace?: InputMaybe<SortOrder>;
  passing?: InputMaybe<SortOrder>;
  physicality?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingOrderByRelationAggregateInput>;
  playerId?: InputMaybe<SortOrder>;
  positioning?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  shooting?: InputMaybe<SortOrder>;
  stamina?: InputMaybe<SortOrder>;
  tackling?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  workRate?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRating = {
  __typename?: 'PlayerAttributesPositionalRating';
  id: Scalars['Int'];
  playerAttributes: PlayerAttributes;
  playerAttributesId: Scalars['Int'];
  position: Scalars['String'];
  positionalRating: Scalars['Float'];
  type: Scalars['Int'];
};

export type PlayerAttributesPositionalRatingAvgAggregate = {
  __typename?: 'PlayerAttributesPositionalRatingAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  playerAttributesId?: Maybe<Scalars['Float']>;
  positionalRating?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

export type PlayerAttributesPositionalRatingAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  playerAttributesId?: InputMaybe<SortOrder>;
  positionalRating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRatingCountAggregate = {
  __typename?: 'PlayerAttributesPositionalRatingCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  playerAttributesId: Scalars['Int'];
  position: Scalars['Int'];
  positionalRating: Scalars['Int'];
  type: Scalars['Int'];
};

export type PlayerAttributesPositionalRatingCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  playerAttributesId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  positionalRating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRatingCreateInput = {
  playerAttributes: PlayerAttributesCreateNestedOneWithoutPlayerAttributesPositionalRatingInput;
  position: Scalars['String'];
  positionalRating: Scalars['Float'];
  type: Scalars['Int'];
};

export type PlayerAttributesPositionalRatingCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  playerAttributesId: Scalars['Int'];
  position: Scalars['String'];
  positionalRating: Scalars['Float'];
  type: Scalars['Int'];
};

export type PlayerAttributesPositionalRatingCreateManyPlayerAttributesInput = {
  id?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  positionalRating: Scalars['Float'];
  type: Scalars['Int'];
};

export type PlayerAttributesPositionalRatingCreateManyPlayerAttributesInputEnvelope = {
  data: Array<PlayerAttributesPositionalRatingCreateManyPlayerAttributesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerAttributesPositionalRatingCreateNestedManyWithoutPlayerAttributesInput = {
  connect?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttributesPositionalRatingCreateOrConnectWithoutPlayerAttributesInput>>;
  create?: InputMaybe<Array<PlayerAttributesPositionalRatingCreateWithoutPlayerAttributesInput>>;
  createMany?: InputMaybe<PlayerAttributesPositionalRatingCreateManyPlayerAttributesInputEnvelope>;
};

export type PlayerAttributesPositionalRatingCreateOrConnectWithoutPlayerAttributesInput = {
  create: PlayerAttributesPositionalRatingCreateWithoutPlayerAttributesInput;
  where: PlayerAttributesPositionalRatingWhereUniqueInput;
};

export type PlayerAttributesPositionalRatingCreateWithoutPlayerAttributesInput = {
  position: Scalars['String'];
  positionalRating: Scalars['Float'];
  type: Scalars['Int'];
};

export type PlayerAttributesPositionalRatingGroupBy = {
  __typename?: 'PlayerAttributesPositionalRatingGroupBy';
  _avg?: Maybe<PlayerAttributesPositionalRatingAvgAggregate>;
  _count?: Maybe<PlayerAttributesPositionalRatingCountAggregate>;
  _max?: Maybe<PlayerAttributesPositionalRatingMaxAggregate>;
  _min?: Maybe<PlayerAttributesPositionalRatingMinAggregate>;
  _sum?: Maybe<PlayerAttributesPositionalRatingSumAggregate>;
  id: Scalars['Int'];
  playerAttributesId: Scalars['Int'];
  position: Scalars['String'];
  positionalRating: Scalars['Float'];
  type: Scalars['Int'];
};

export type PlayerAttributesPositionalRatingListRelationFilter = {
  every?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
  none?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
  some?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};

export type PlayerAttributesPositionalRatingMaxAggregate = {
  __typename?: 'PlayerAttributesPositionalRatingMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  playerAttributesId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  positionalRating?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Int']>;
};

export type PlayerAttributesPositionalRatingMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  playerAttributesId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  positionalRating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRatingMinAggregate = {
  __typename?: 'PlayerAttributesPositionalRatingMinAggregate';
  id?: Maybe<Scalars['Int']>;
  playerAttributesId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  positionalRating?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Int']>;
};

export type PlayerAttributesPositionalRatingMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  playerAttributesId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  positionalRating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRatingOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlayerAttributesPositionalRatingAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlayerAttributesPositionalRatingCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerAttributesPositionalRatingMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerAttributesPositionalRatingMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlayerAttributesPositionalRatingSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  playerAttributesId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  positionalRating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRatingOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  playerAttributes?: InputMaybe<PlayerAttributesOrderByWithRelationInput>;
  playerAttributesId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  positionalRating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum PlayerAttributesPositionalRatingScalarFieldEnum {
  Id = 'id',
  PlayerAttributesId = 'playerAttributesId',
  Position = 'position',
  PositionalRating = 'positionalRating',
  Type = 'type'
}

export type PlayerAttributesPositionalRatingScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  playerAttributesId?: InputMaybe<IntFilter>;
  position?: InputMaybe<StringFilter>;
  positionalRating?: InputMaybe<FloatFilter>;
  type?: InputMaybe<IntFilter>;
};

export type PlayerAttributesPositionalRatingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  playerAttributesId?: InputMaybe<IntWithAggregatesFilter>;
  position?: InputMaybe<StringWithAggregatesFilter>;
  positionalRating?: InputMaybe<FloatWithAggregatesFilter>;
  type?: InputMaybe<IntWithAggregatesFilter>;
};

export type PlayerAttributesPositionalRatingSumAggregate = {
  __typename?: 'PlayerAttributesPositionalRatingSumAggregate';
  id?: Maybe<Scalars['Int']>;
  playerAttributesId?: Maybe<Scalars['Int']>;
  positionalRating?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Int']>;
};

export type PlayerAttributesPositionalRatingSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  playerAttributesId?: InputMaybe<SortOrder>;
  positionalRating?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PlayerAttributesPositionalRatingUpdateInput = {
  playerAttributes?: InputMaybe<PlayerAttributesUpdateOneRequiredWithoutPlayerAttributesPositionalRatingInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  positionalRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerAttributesPositionalRatingUpdateManyMutationInput = {
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  positionalRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerAttributesPositionalRatingUpdateManyWithWhereWithoutPlayerAttributesInput = {
  data: PlayerAttributesPositionalRatingUpdateManyMutationInput;
  where: PlayerAttributesPositionalRatingScalarWhereInput;
};

export type PlayerAttributesPositionalRatingUpdateManyWithoutPlayerAttributesInput = {
  connect?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttributesPositionalRatingCreateOrConnectWithoutPlayerAttributesInput>>;
  create?: InputMaybe<Array<PlayerAttributesPositionalRatingCreateWithoutPlayerAttributesInput>>;
  createMany?: InputMaybe<PlayerAttributesPositionalRatingCreateManyPlayerAttributesInputEnvelope>;
  delete?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerAttributesPositionalRatingUpdateWithWhereUniqueWithoutPlayerAttributesInput>>;
  updateMany?: InputMaybe<Array<PlayerAttributesPositionalRatingUpdateManyWithWhereWithoutPlayerAttributesInput>>;
  upsert?: InputMaybe<Array<PlayerAttributesPositionalRatingUpsertWithWhereUniqueWithoutPlayerAttributesInput>>;
};

export type PlayerAttributesPositionalRatingUpdateWithWhereUniqueWithoutPlayerAttributesInput = {
  data: PlayerAttributesPositionalRatingUpdateWithoutPlayerAttributesInput;
  where: PlayerAttributesPositionalRatingWhereUniqueInput;
};

export type PlayerAttributesPositionalRatingUpdateWithoutPlayerAttributesInput = {
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  positionalRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerAttributesPositionalRatingUpsertWithWhereUniqueWithoutPlayerAttributesInput = {
  create: PlayerAttributesPositionalRatingCreateWithoutPlayerAttributesInput;
  update: PlayerAttributesPositionalRatingUpdateWithoutPlayerAttributesInput;
  where: PlayerAttributesPositionalRatingWhereUniqueInput;
};

export type PlayerAttributesPositionalRatingWhereInput = {
  AND?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttributesPositionalRatingWhereInput>>;
  id?: InputMaybe<IntFilter>;
  playerAttributes?: InputMaybe<PlayerAttributesRelationFilter>;
  playerAttributesId?: InputMaybe<IntFilter>;
  position?: InputMaybe<StringFilter>;
  positionalRating?: InputMaybe<FloatFilter>;
  type?: InputMaybe<IntFilter>;
};

export type PlayerAttributesPositionalRatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type PlayerAttributesRelationFilter = {
  is?: InputMaybe<PlayerAttributesWhereInput>;
  isNot?: InputMaybe<PlayerAttributesWhereInput>;
};

export enum PlayerAttributesScalarFieldEnum {
  Age = 'age',
  Agility = 'agility',
  BallControl = 'ballControl',
  ClubId = 'clubId',
  Condition = 'condition',
  Crossing = 'crossing',
  Dribbling = 'dribbling',
  Experience = 'experience',
  GamesSuspended = 'gamesSuspended',
  GkDistribution = 'gkDistribution',
  GkDiving = 'gkDiving',
  GkHandling = 'gkHandling',
  GkPositioning = 'gkPositioning',
  GkReflexes = 'gkReflexes',
  GkSpeed = 'gkSpeed',
  Heading = 'heading',
  Id = 'id',
  Intelligence = 'intelligence',
  Interceptions = 'interceptions',
  IsLatest = 'isLatest',
  Leadership = 'leadership',
  Morale = 'morale',
  Pace = 'pace',
  Passing = 'passing',
  Physicality = 'physicality',
  PlayerId = 'playerId',
  Positioning = 'positioning',
  PreferredPosition = 'preferredPosition',
  Shooting = 'shooting',
  Stamina = 'stamina',
  Tackling = 'tackling',
  Timestamp = 'timestamp',
  WorkRate = 'workRate'
}

export type PlayerAttributesScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerAttributesScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttributesScalarWhereInput>>;
  age?: InputMaybe<IntFilter>;
  agility?: InputMaybe<JsonFilter>;
  ballControl?: InputMaybe<JsonFilter>;
  clubId?: InputMaybe<IntFilter>;
  condition?: InputMaybe<FloatFilter>;
  crossing?: InputMaybe<JsonFilter>;
  dribbling?: InputMaybe<JsonFilter>;
  experience?: InputMaybe<FloatFilter>;
  gamesSuspended?: InputMaybe<IntFilter>;
  gkDistribution?: InputMaybe<JsonFilter>;
  gkDiving?: InputMaybe<JsonFilter>;
  gkHandling?: InputMaybe<JsonFilter>;
  gkPositioning?: InputMaybe<JsonFilter>;
  gkReflexes?: InputMaybe<JsonFilter>;
  gkSpeed?: InputMaybe<JsonFilter>;
  heading?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  intelligence?: InputMaybe<JsonFilter>;
  interceptions?: InputMaybe<JsonFilter>;
  isLatest?: InputMaybe<BoolFilter>;
  leadership?: InputMaybe<FloatFilter>;
  morale?: InputMaybe<FloatFilter>;
  pace?: InputMaybe<JsonFilter>;
  passing?: InputMaybe<JsonFilter>;
  physicality?: InputMaybe<JsonFilter>;
  playerId?: InputMaybe<StringFilter>;
  positioning?: InputMaybe<JsonFilter>;
  preferredPosition?: InputMaybe<StringFilter>;
  shooting?: InputMaybe<JsonFilter>;
  stamina?: InputMaybe<FloatFilter>;
  tackling?: InputMaybe<JsonFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  workRate?: InputMaybe<FloatFilter>;
};

export type PlayerAttributesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerAttributesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerAttributesScalarWhereWithAggregatesInput>>;
  age?: InputMaybe<IntWithAggregatesFilter>;
  agility?: InputMaybe<JsonWithAggregatesFilter>;
  ballControl?: InputMaybe<JsonWithAggregatesFilter>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  condition?: InputMaybe<FloatWithAggregatesFilter>;
  crossing?: InputMaybe<JsonWithAggregatesFilter>;
  dribbling?: InputMaybe<JsonWithAggregatesFilter>;
  experience?: InputMaybe<FloatWithAggregatesFilter>;
  gamesSuspended?: InputMaybe<IntWithAggregatesFilter>;
  gkDistribution?: InputMaybe<JsonWithAggregatesFilter>;
  gkDiving?: InputMaybe<JsonWithAggregatesFilter>;
  gkHandling?: InputMaybe<JsonWithAggregatesFilter>;
  gkPositioning?: InputMaybe<JsonWithAggregatesFilter>;
  gkReflexes?: InputMaybe<JsonWithAggregatesFilter>;
  gkSpeed?: InputMaybe<JsonWithAggregatesFilter>;
  heading?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  intelligence?: InputMaybe<JsonWithAggregatesFilter>;
  interceptions?: InputMaybe<JsonWithAggregatesFilter>;
  isLatest?: InputMaybe<BoolWithAggregatesFilter>;
  leadership?: InputMaybe<FloatWithAggregatesFilter>;
  morale?: InputMaybe<FloatWithAggregatesFilter>;
  pace?: InputMaybe<JsonWithAggregatesFilter>;
  passing?: InputMaybe<JsonWithAggregatesFilter>;
  physicality?: InputMaybe<JsonWithAggregatesFilter>;
  playerId?: InputMaybe<StringWithAggregatesFilter>;
  positioning?: InputMaybe<JsonWithAggregatesFilter>;
  preferredPosition?: InputMaybe<StringWithAggregatesFilter>;
  shooting?: InputMaybe<JsonWithAggregatesFilter>;
  stamina?: InputMaybe<FloatWithAggregatesFilter>;
  tackling?: InputMaybe<JsonWithAggregatesFilter>;
  timestamp?: InputMaybe<FloatWithAggregatesFilter>;
  workRate?: InputMaybe<FloatWithAggregatesFilter>;
};

export type PlayerAttributesSumAggregate = {
  __typename?: 'PlayerAttributesSumAggregate';
  age?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  gamesSuspended?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  leadership?: Maybe<Scalars['Float']>;
  morale?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  workRate?: Maybe<Scalars['Float']>;
};

export type PlayerAttributesSumOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  gamesSuspended?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  leadership?: InputMaybe<SortOrder>;
  morale?: InputMaybe<SortOrder>;
  stamina?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  workRate?: InputMaybe<SortOrder>;
};

export type PlayerAttributesUpdateInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  agility?: InputMaybe<Scalars['JSON']>;
  ballControl?: InputMaybe<Scalars['JSON']>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayerAttributesInput>;
  condition?: InputMaybe<FloatFieldUpdateOperationsInput>;
  crossing?: InputMaybe<Scalars['JSON']>;
  dribbling?: InputMaybe<Scalars['JSON']>;
  experience?: InputMaybe<FloatFieldUpdateOperationsInput>;
  gamesSuspended?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkDistribution?: InputMaybe<Scalars['JSON']>;
  gkDiving?: InputMaybe<Scalars['JSON']>;
  gkHandling?: InputMaybe<Scalars['JSON']>;
  gkPositioning?: InputMaybe<Scalars['JSON']>;
  gkReflexes?: InputMaybe<Scalars['JSON']>;
  gkSpeed?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['JSON']>;
  intelligence?: InputMaybe<Scalars['JSON']>;
  interceptions?: InputMaybe<Scalars['JSON']>;
  isLatest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  leadership?: InputMaybe<FloatFieldUpdateOperationsInput>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pace?: InputMaybe<Scalars['JSON']>;
  passing?: InputMaybe<Scalars['JSON']>;
  physicality?: InputMaybe<Scalars['JSON']>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerAttributesInput>;
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingUpdateManyWithoutPlayerAttributesInput>;
  positioning?: InputMaybe<Scalars['JSON']>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  shooting?: InputMaybe<Scalars['JSON']>;
  stamina?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tackling?: InputMaybe<Scalars['JSON']>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  workRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerAttributesUpdateManyMutationInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  agility?: InputMaybe<Scalars['JSON']>;
  ballControl?: InputMaybe<Scalars['JSON']>;
  condition?: InputMaybe<FloatFieldUpdateOperationsInput>;
  crossing?: InputMaybe<Scalars['JSON']>;
  dribbling?: InputMaybe<Scalars['JSON']>;
  experience?: InputMaybe<FloatFieldUpdateOperationsInput>;
  gamesSuspended?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkDistribution?: InputMaybe<Scalars['JSON']>;
  gkDiving?: InputMaybe<Scalars['JSON']>;
  gkHandling?: InputMaybe<Scalars['JSON']>;
  gkPositioning?: InputMaybe<Scalars['JSON']>;
  gkReflexes?: InputMaybe<Scalars['JSON']>;
  gkSpeed?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['JSON']>;
  intelligence?: InputMaybe<Scalars['JSON']>;
  interceptions?: InputMaybe<Scalars['JSON']>;
  isLatest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  leadership?: InputMaybe<FloatFieldUpdateOperationsInput>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pace?: InputMaybe<Scalars['JSON']>;
  passing?: InputMaybe<Scalars['JSON']>;
  physicality?: InputMaybe<Scalars['JSON']>;
  positioning?: InputMaybe<Scalars['JSON']>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  shooting?: InputMaybe<Scalars['JSON']>;
  stamina?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tackling?: InputMaybe<Scalars['JSON']>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  workRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerAttributesUpdateManyWithWhereWithoutClubInput = {
  data: PlayerAttributesUpdateManyMutationInput;
  where: PlayerAttributesScalarWhereInput;
};

export type PlayerAttributesUpdateManyWithWhereWithoutPlayerInput = {
  data: PlayerAttributesUpdateManyMutationInput;
  where: PlayerAttributesScalarWhereInput;
};

export type PlayerAttributesUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttributesCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<PlayerAttributesCreateWithoutClubInput>>;
  createMany?: InputMaybe<PlayerAttributesCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerAttributesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerAttributesUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<PlayerAttributesUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<PlayerAttributesUpsertWithWhereUniqueWithoutClubInput>>;
};

export type PlayerAttributesUpdateManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttributesCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerAttributesCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerAttributesCreateManyPlayerInputEnvelope>;
  delete?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerAttributesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerAttributesWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerAttributesUpdateWithWhereUniqueWithoutPlayerInput>>;
  updateMany?: InputMaybe<Array<PlayerAttributesUpdateManyWithWhereWithoutPlayerInput>>;
  upsert?: InputMaybe<Array<PlayerAttributesUpsertWithWhereUniqueWithoutPlayerInput>>;
};

export type PlayerAttributesUpdateOneRequiredWithoutPlayerAttributesPositionalRatingInput = {
  connect?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerAttributesCreateOrConnectWithoutPlayerAttributesPositionalRatingInput>;
  create?: InputMaybe<PlayerAttributesCreateWithoutPlayerAttributesPositionalRatingInput>;
  update?: InputMaybe<PlayerAttributesUpdateWithoutPlayerAttributesPositionalRatingInput>;
  upsert?: InputMaybe<PlayerAttributesUpsertWithoutPlayerAttributesPositionalRatingInput>;
};

export type PlayerAttributesUpdateWithWhereUniqueWithoutClubInput = {
  data: PlayerAttributesUpdateWithoutClubInput;
  where: PlayerAttributesWhereUniqueInput;
};

export type PlayerAttributesUpdateWithWhereUniqueWithoutPlayerInput = {
  data: PlayerAttributesUpdateWithoutPlayerInput;
  where: PlayerAttributesWhereUniqueInput;
};

export type PlayerAttributesUpdateWithoutClubInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  agility?: InputMaybe<Scalars['JSON']>;
  ballControl?: InputMaybe<Scalars['JSON']>;
  condition?: InputMaybe<FloatFieldUpdateOperationsInput>;
  crossing?: InputMaybe<Scalars['JSON']>;
  dribbling?: InputMaybe<Scalars['JSON']>;
  experience?: InputMaybe<FloatFieldUpdateOperationsInput>;
  gamesSuspended?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkDistribution?: InputMaybe<Scalars['JSON']>;
  gkDiving?: InputMaybe<Scalars['JSON']>;
  gkHandling?: InputMaybe<Scalars['JSON']>;
  gkPositioning?: InputMaybe<Scalars['JSON']>;
  gkReflexes?: InputMaybe<Scalars['JSON']>;
  gkSpeed?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['JSON']>;
  intelligence?: InputMaybe<Scalars['JSON']>;
  interceptions?: InputMaybe<Scalars['JSON']>;
  isLatest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  leadership?: InputMaybe<FloatFieldUpdateOperationsInput>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pace?: InputMaybe<Scalars['JSON']>;
  passing?: InputMaybe<Scalars['JSON']>;
  physicality?: InputMaybe<Scalars['JSON']>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerAttributesInput>;
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingUpdateManyWithoutPlayerAttributesInput>;
  positioning?: InputMaybe<Scalars['JSON']>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  shooting?: InputMaybe<Scalars['JSON']>;
  stamina?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tackling?: InputMaybe<Scalars['JSON']>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  workRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerAttributesUpdateWithoutPlayerAttributesPositionalRatingInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  agility?: InputMaybe<Scalars['JSON']>;
  ballControl?: InputMaybe<Scalars['JSON']>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayerAttributesInput>;
  condition?: InputMaybe<FloatFieldUpdateOperationsInput>;
  crossing?: InputMaybe<Scalars['JSON']>;
  dribbling?: InputMaybe<Scalars['JSON']>;
  experience?: InputMaybe<FloatFieldUpdateOperationsInput>;
  gamesSuspended?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkDistribution?: InputMaybe<Scalars['JSON']>;
  gkDiving?: InputMaybe<Scalars['JSON']>;
  gkHandling?: InputMaybe<Scalars['JSON']>;
  gkPositioning?: InputMaybe<Scalars['JSON']>;
  gkReflexes?: InputMaybe<Scalars['JSON']>;
  gkSpeed?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['JSON']>;
  intelligence?: InputMaybe<Scalars['JSON']>;
  interceptions?: InputMaybe<Scalars['JSON']>;
  isLatest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  leadership?: InputMaybe<FloatFieldUpdateOperationsInput>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pace?: InputMaybe<Scalars['JSON']>;
  passing?: InputMaybe<Scalars['JSON']>;
  physicality?: InputMaybe<Scalars['JSON']>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerAttributesInput>;
  positioning?: InputMaybe<Scalars['JSON']>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  shooting?: InputMaybe<Scalars['JSON']>;
  stamina?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tackling?: InputMaybe<Scalars['JSON']>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  workRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerAttributesUpdateWithoutPlayerInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  agility?: InputMaybe<Scalars['JSON']>;
  ballControl?: InputMaybe<Scalars['JSON']>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayerAttributesInput>;
  condition?: InputMaybe<FloatFieldUpdateOperationsInput>;
  crossing?: InputMaybe<Scalars['JSON']>;
  dribbling?: InputMaybe<Scalars['JSON']>;
  experience?: InputMaybe<FloatFieldUpdateOperationsInput>;
  gamesSuspended?: InputMaybe<IntFieldUpdateOperationsInput>;
  gkDistribution?: InputMaybe<Scalars['JSON']>;
  gkDiving?: InputMaybe<Scalars['JSON']>;
  gkHandling?: InputMaybe<Scalars['JSON']>;
  gkPositioning?: InputMaybe<Scalars['JSON']>;
  gkReflexes?: InputMaybe<Scalars['JSON']>;
  gkSpeed?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['JSON']>;
  intelligence?: InputMaybe<Scalars['JSON']>;
  interceptions?: InputMaybe<Scalars['JSON']>;
  isLatest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  leadership?: InputMaybe<FloatFieldUpdateOperationsInput>;
  morale?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pace?: InputMaybe<Scalars['JSON']>;
  passing?: InputMaybe<Scalars['JSON']>;
  physicality?: InputMaybe<Scalars['JSON']>;
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingUpdateManyWithoutPlayerAttributesInput>;
  positioning?: InputMaybe<Scalars['JSON']>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  shooting?: InputMaybe<Scalars['JSON']>;
  stamina?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tackling?: InputMaybe<Scalars['JSON']>;
  timestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  workRate?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerAttributesUpsertWithWhereUniqueWithoutClubInput = {
  create: PlayerAttributesCreateWithoutClubInput;
  update: PlayerAttributesUpdateWithoutClubInput;
  where: PlayerAttributesWhereUniqueInput;
};

export type PlayerAttributesUpsertWithWhereUniqueWithoutPlayerInput = {
  create: PlayerAttributesCreateWithoutPlayerInput;
  update: PlayerAttributesUpdateWithoutPlayerInput;
  where: PlayerAttributesWhereUniqueInput;
};

export type PlayerAttributesUpsertWithoutPlayerAttributesPositionalRatingInput = {
  create: PlayerAttributesCreateWithoutPlayerAttributesPositionalRatingInput;
  update: PlayerAttributesUpdateWithoutPlayerAttributesPositionalRatingInput;
};

export type PlayerAttributesWhereInput = {
  AND?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttributesWhereInput>>;
  age?: InputMaybe<IntFilter>;
  agility?: InputMaybe<JsonFilter>;
  ballControl?: InputMaybe<JsonFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  condition?: InputMaybe<FloatFilter>;
  crossing?: InputMaybe<JsonFilter>;
  dribbling?: InputMaybe<JsonFilter>;
  experience?: InputMaybe<FloatFilter>;
  gamesSuspended?: InputMaybe<IntFilter>;
  gkDistribution?: InputMaybe<JsonFilter>;
  gkDiving?: InputMaybe<JsonFilter>;
  gkHandling?: InputMaybe<JsonFilter>;
  gkPositioning?: InputMaybe<JsonFilter>;
  gkReflexes?: InputMaybe<JsonFilter>;
  gkSpeed?: InputMaybe<JsonFilter>;
  heading?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  intelligence?: InputMaybe<JsonFilter>;
  interceptions?: InputMaybe<JsonFilter>;
  isLatest?: InputMaybe<BoolFilter>;
  leadership?: InputMaybe<FloatFilter>;
  morale?: InputMaybe<FloatFilter>;
  pace?: InputMaybe<JsonFilter>;
  passing?: InputMaybe<JsonFilter>;
  physicality?: InputMaybe<JsonFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerAttributesPositionalRating?: InputMaybe<PlayerAttributesPositionalRatingListRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  positioning?: InputMaybe<JsonFilter>;
  preferredPosition?: InputMaybe<StringFilter>;
  shooting?: InputMaybe<JsonFilter>;
  stamina?: InputMaybe<FloatFilter>;
  tackling?: InputMaybe<JsonFilter>;
  timestamp?: InputMaybe<FloatFilter>;
  workRate?: InputMaybe<FloatFilter>;
};

export type PlayerAttributesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type PlayerAvgAggregate = {
  __typename?: 'PlayerAvgAggregate';
  assetId?: Maybe<Scalars['Float']>;
  clubId?: Maybe<Scalars['Float']>;
  firstSeasonId?: Maybe<Scalars['Float']>;
  generationId?: Maybe<Scalars['Float']>;
  heightMeters?: Maybe<Scalars['Float']>;
  originClubId?: Maybe<Scalars['Float']>;
  overallRating?: Maybe<Scalars['Float']>;
  potential?: Maybe<Scalars['Float']>;
  weakFootAbility?: Maybe<Scalars['Float']>;
};

export type PlayerAvgOrderByAggregateInput = {
  assetId?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  firstSeasonId?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  originClubId?: InputMaybe<SortOrder>;
  overallRating?: InputMaybe<SortOrder>;
  potential?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export type PlayerCount = {
  __typename?: 'PlayerCount';
  actions: Scalars['Int'];
  newsFeed: Scalars['Int'];
  playerAttributes: Scalars['Int'];
  playerLineups: Scalars['Int'];
  playerStatsRecord: Scalars['Int'];
};

export type PlayerCountAggregate = {
  __typename?: 'PlayerCountAggregate';
  _all: Scalars['Int'];
  assetId: Scalars['Int'];
  clubId: Scalars['Int'];
  firstName: Scalars['Int'];
  firstSeasonId: Scalars['Int'];
  footedness: Scalars['Int'];
  fullName: Scalars['Int'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Int'];
  id: Scalars['Int'];
  isAcademy: Scalars['Int'];
  isInitial: Scalars['Int'];
  isReserve: Scalars['Int'];
  isRevealed: Scalars['Int'];
  lastName: Scalars['Int'];
  nationality: Scalars['Int'];
  originClubId: Scalars['Int'];
  overallRating: Scalars['Int'];
  potential: Scalars['Int'];
  preferredPosition: Scalars['Int'];
  price: Scalars['Int'];
  rarity: Scalars['Int'];
  seed: Scalars['Int'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCountOrderByAggregateInput = {
  assetId?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  firstSeasonId?: InputMaybe<SortOrder>;
  footedness?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAcademy?: InputMaybe<SortOrder>;
  isInitial?: InputMaybe<SortOrder>;
  isReserve?: InputMaybe<SortOrder>;
  isRevealed?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  nationality?: InputMaybe<SortOrder>;
  originClubId?: InputMaybe<SortOrder>;
  overallRating?: InputMaybe<SortOrder>;
  potential?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  rarity?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export type PlayerCreateInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateManyClubInput = {
  assetId?: InputMaybe<Scalars['Int']>;
  firstName: Scalars['String'];
  firstSeasonId: Scalars['Int'];
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  originClubId: Scalars['Int'];
  overallRating: Scalars['Float'];
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateManyClubInputEnvelope = {
  data: Array<PlayerCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyFirstSeasonInput = {
  assetId?: InputMaybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  firstName: Scalars['String'];
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  originClubId: Scalars['Int'];
  overallRating: Scalars['Float'];
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateManyFirstSeasonInputEnvelope = {
  data: Array<PlayerCreateManyFirstSeasonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyInput = {
  assetId?: InputMaybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  firstName: Scalars['String'];
  firstSeasonId: Scalars['Int'];
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  originClubId: Scalars['Int'];
  overallRating: Scalars['Float'];
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateManyOriginClubInput = {
  assetId?: InputMaybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  firstName: Scalars['String'];
  firstSeasonId: Scalars['Int'];
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  overallRating: Scalars['Float'];
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateManyOriginClubInputEnvelope = {
  data: Array<PlayerCreateManyOriginClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateNestedManyWithoutActionsInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutActionsInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutActionsInput>>;
};

export type PlayerCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutClubInput>>;
  createMany?: InputMaybe<PlayerCreateManyClubInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutFirstSeasonInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutFirstSeasonInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutFirstSeasonInput>>;
  createMany?: InputMaybe<PlayerCreateManyFirstSeasonInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutNewsFeedInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutNewsFeedInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutNewsFeedInput>>;
};

export type PlayerCreateNestedManyWithoutOriginClubInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutOriginClubInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutOriginClubInput>>;
  createMany?: InputMaybe<PlayerCreateManyOriginClubInputEnvelope>;
};

export type PlayerCreateNestedOneWithoutMoraleInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutMoraleInput>;
  create?: InputMaybe<PlayerCreateWithoutMoraleInput>;
};

export type PlayerCreateNestedOneWithoutPlayerAttributesInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerAttributesInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerAttributesInput>;
};

export type PlayerCreateNestedOneWithoutPlayerLineupsInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerLineupsInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerLineupsInput>;
};

export type PlayerCreateNestedOneWithoutPlayerStatsRecordInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerStatsRecordInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerStatsRecordInput>;
};

export type PlayerCreateOrConnectWithoutActionsInput = {
  create: PlayerCreateWithoutActionsInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutClubInput = {
  create: PlayerCreateWithoutClubInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutFirstSeasonInput = {
  create: PlayerCreateWithoutFirstSeasonInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutMoraleInput = {
  create: PlayerCreateWithoutMoraleInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutNewsFeedInput = {
  create: PlayerCreateWithoutNewsFeedInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutOriginClubInput = {
  create: PlayerCreateWithoutOriginClubInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerAttributesInput = {
  create: PlayerCreateWithoutPlayerAttributesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerLineupsInput = {
  create: PlayerCreateWithoutPlayerLineupsInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerStatsRecordInput = {
  create: PlayerCreateWithoutPlayerStatsRecordInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateWithoutActionsInput = {
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutClubInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutFirstSeasonInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutMoraleInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutNewsFeedInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutOriginClubInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutPlayerAttributesInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutPlayerLineupsInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerCreateWithoutPlayerStatsRecordInput = {
  actions?: InputMaybe<ActionCreateNestedManyWithoutPlayersInput>;
  assetId?: InputMaybe<Scalars['Int']>;
  club: ClubCreateNestedOneWithoutPlayersInput;
  firstName: Scalars['String'];
  firstSeason: SeasonCreateNestedOneWithoutPlayersInput;
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  morale?: InputMaybe<MoraleCreateNestedOneWithoutPlayerInput>;
  nationality: Scalars['String'];
  newsFeed?: InputMaybe<NewsItemCreateNestedManyWithoutPlayersInput>;
  originClub: ClubCreateNestedOneWithoutOriginPlayersInput;
  overallRating: Scalars['Float'];
  playerAttributes?: InputMaybe<PlayerAttributesCreateNestedManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupCreateNestedManyWithoutPlayerInput>;
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: InputMaybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerGroupBy = {
  __typename?: 'PlayerGroupBy';
  _avg?: Maybe<PlayerAvgAggregate>;
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
  assetId?: Maybe<Scalars['Int']>;
  clubId: Scalars['Int'];
  firstName: Scalars['String'];
  firstSeasonId: Scalars['Int'];
  footedness: Scalars['String'];
  fullName: Scalars['String'];
  generationId: Scalars['Int'];
  heightMeters: Scalars['Float'];
  id: Scalars['String'];
  isAcademy: Scalars['Boolean'];
  isInitial: Scalars['Boolean'];
  isReserve: Scalars['Boolean'];
  isRevealed: Scalars['Boolean'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  originClubId: Scalars['Int'];
  overallRating: Scalars['Float'];
  potential: Scalars['Int'];
  preferredPosition: Scalars['String'];
  price?: Maybe<Scalars['String']>;
  rarity: Scalars['String'];
  seed: Scalars['String'];
  weakFootAbility: Scalars['Int'];
};

export type PlayerLineup = {
  __typename?: 'PlayerLineup';
  formationSlotIndex: Scalars['Int'];
  id: Scalars['Int'];
  isCaptain: Scalars['Boolean'];
  lineup: Lineup;
  lineupId: Scalars['Int'];
  player: Player;
  playerId: Scalars['String'];
};

export type PlayerLineupAvgAggregate = {
  __typename?: 'PlayerLineupAvgAggregate';
  formationSlotIndex?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lineupId?: Maybe<Scalars['Float']>;
};

export type PlayerLineupAvgOrderByAggregateInput = {
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lineupId?: InputMaybe<SortOrder>;
};

export type PlayerLineupCountAggregate = {
  __typename?: 'PlayerLineupCountAggregate';
  _all: Scalars['Int'];
  formationSlotIndex: Scalars['Int'];
  id: Scalars['Int'];
  isCaptain: Scalars['Int'];
  lineupId: Scalars['Int'];
  playerId: Scalars['Int'];
};

export type PlayerLineupCountOrderByAggregateInput = {
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCaptain?: InputMaybe<SortOrder>;
  lineupId?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type PlayerLineupCreateInput = {
  formationSlotIndex: Scalars['Int'];
  isCaptain: Scalars['Boolean'];
  lineup: LineupCreateNestedOneWithoutPlayerLineupsInput;
  player: PlayerCreateNestedOneWithoutPlayerLineupsInput;
};

export type PlayerLineupCreateManyInput = {
  formationSlotIndex: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  isCaptain: Scalars['Boolean'];
  lineupId: Scalars['Int'];
  playerId: Scalars['String'];
};

export type PlayerLineupCreateManyLineupInput = {
  formationSlotIndex: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  isCaptain: Scalars['Boolean'];
  playerId: Scalars['String'];
};

export type PlayerLineupCreateManyLineupInputEnvelope = {
  data: Array<PlayerLineupCreateManyLineupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerLineupCreateManyPlayerInput = {
  formationSlotIndex: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  isCaptain: Scalars['Boolean'];
  lineupId: Scalars['Int'];
};

export type PlayerLineupCreateManyPlayerInputEnvelope = {
  data: Array<PlayerLineupCreateManyPlayerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerLineupCreateNestedManyWithoutLineupInput = {
  connect?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerLineupCreateOrConnectWithoutLineupInput>>;
  create?: InputMaybe<Array<PlayerLineupCreateWithoutLineupInput>>;
  createMany?: InputMaybe<PlayerLineupCreateManyLineupInputEnvelope>;
};

export type PlayerLineupCreateNestedManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerLineupCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerLineupCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerLineupCreateManyPlayerInputEnvelope>;
};

export type PlayerLineupCreateOrConnectWithoutLineupInput = {
  create: PlayerLineupCreateWithoutLineupInput;
  where: PlayerLineupWhereUniqueInput;
};

export type PlayerLineupCreateOrConnectWithoutPlayerInput = {
  create: PlayerLineupCreateWithoutPlayerInput;
  where: PlayerLineupWhereUniqueInput;
};

export type PlayerLineupCreateWithoutLineupInput = {
  formationSlotIndex: Scalars['Int'];
  isCaptain: Scalars['Boolean'];
  player: PlayerCreateNestedOneWithoutPlayerLineupsInput;
};

export type PlayerLineupCreateWithoutPlayerInput = {
  formationSlotIndex: Scalars['Int'];
  isCaptain: Scalars['Boolean'];
  lineup: LineupCreateNestedOneWithoutPlayerLineupsInput;
};

export type PlayerLineupGroupBy = {
  __typename?: 'PlayerLineupGroupBy';
  _avg?: Maybe<PlayerLineupAvgAggregate>;
  _count?: Maybe<PlayerLineupCountAggregate>;
  _max?: Maybe<PlayerLineupMaxAggregate>;
  _min?: Maybe<PlayerLineupMinAggregate>;
  _sum?: Maybe<PlayerLineupSumAggregate>;
  formationSlotIndex: Scalars['Int'];
  id: Scalars['Int'];
  isCaptain: Scalars['Boolean'];
  lineupId: Scalars['Int'];
  playerId: Scalars['String'];
};

export type PlayerLineupListRelationFilter = {
  every?: InputMaybe<PlayerLineupWhereInput>;
  none?: InputMaybe<PlayerLineupWhereInput>;
  some?: InputMaybe<PlayerLineupWhereInput>;
};

export type PlayerLineupMaxAggregate = {
  __typename?: 'PlayerLineupMaxAggregate';
  formationSlotIndex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isCaptain?: Maybe<Scalars['Boolean']>;
  lineupId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['String']>;
};

export type PlayerLineupMaxOrderByAggregateInput = {
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCaptain?: InputMaybe<SortOrder>;
  lineupId?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type PlayerLineupMinAggregate = {
  __typename?: 'PlayerLineupMinAggregate';
  formationSlotIndex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isCaptain?: Maybe<Scalars['Boolean']>;
  lineupId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['String']>;
};

export type PlayerLineupMinOrderByAggregateInput = {
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCaptain?: InputMaybe<SortOrder>;
  lineupId?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type PlayerLineupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerLineupOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlayerLineupAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlayerLineupCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerLineupMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerLineupMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlayerLineupSumOrderByAggregateInput>;
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCaptain?: InputMaybe<SortOrder>;
  lineupId?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
};

export type PlayerLineupOrderByWithRelationInput = {
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCaptain?: InputMaybe<SortOrder>;
  lineup?: InputMaybe<LineupOrderByWithRelationInput>;
  lineupId?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
};

export enum PlayerLineupScalarFieldEnum {
  FormationSlotIndex = 'formationSlotIndex',
  Id = 'id',
  IsCaptain = 'isCaptain',
  LineupId = 'lineupId',
  PlayerId = 'playerId'
}

export type PlayerLineupScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerLineupScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlayerLineupScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerLineupScalarWhereInput>>;
  formationSlotIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isCaptain?: InputMaybe<BoolFilter>;
  lineupId?: InputMaybe<IntFilter>;
  playerId?: InputMaybe<StringFilter>;
};

export type PlayerLineupScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerLineupScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerLineupScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerLineupScalarWhereWithAggregatesInput>>;
  formationSlotIndex?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isCaptain?: InputMaybe<BoolWithAggregatesFilter>;
  lineupId?: InputMaybe<IntWithAggregatesFilter>;
  playerId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PlayerLineupSumAggregate = {
  __typename?: 'PlayerLineupSumAggregate';
  formationSlotIndex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lineupId?: Maybe<Scalars['Int']>;
};

export type PlayerLineupSumOrderByAggregateInput = {
  formationSlotIndex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lineupId?: InputMaybe<SortOrder>;
};

export type PlayerLineupUpdateInput = {
  formationSlotIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  isCaptain?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lineup?: InputMaybe<LineupUpdateOneRequiredWithoutPlayerLineupsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerLineupsInput>;
};

export type PlayerLineupUpdateManyMutationInput = {
  formationSlotIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  isCaptain?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type PlayerLineupUpdateManyWithWhereWithoutLineupInput = {
  data: PlayerLineupUpdateManyMutationInput;
  where: PlayerLineupScalarWhereInput;
};

export type PlayerLineupUpdateManyWithWhereWithoutPlayerInput = {
  data: PlayerLineupUpdateManyMutationInput;
  where: PlayerLineupScalarWhereInput;
};

export type PlayerLineupUpdateManyWithoutLineupInput = {
  connect?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerLineupCreateOrConnectWithoutLineupInput>>;
  create?: InputMaybe<Array<PlayerLineupCreateWithoutLineupInput>>;
  createMany?: InputMaybe<PlayerLineupCreateManyLineupInputEnvelope>;
  delete?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerLineupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerLineupUpdateWithWhereUniqueWithoutLineupInput>>;
  updateMany?: InputMaybe<Array<PlayerLineupUpdateManyWithWhereWithoutLineupInput>>;
  upsert?: InputMaybe<Array<PlayerLineupUpsertWithWhereUniqueWithoutLineupInput>>;
};

export type PlayerLineupUpdateManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerLineupCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerLineupCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerLineupCreateManyPlayerInputEnvelope>;
  delete?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerLineupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerLineupWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerLineupUpdateWithWhereUniqueWithoutPlayerInput>>;
  updateMany?: InputMaybe<Array<PlayerLineupUpdateManyWithWhereWithoutPlayerInput>>;
  upsert?: InputMaybe<Array<PlayerLineupUpsertWithWhereUniqueWithoutPlayerInput>>;
};

export type PlayerLineupUpdateWithWhereUniqueWithoutLineupInput = {
  data: PlayerLineupUpdateWithoutLineupInput;
  where: PlayerLineupWhereUniqueInput;
};

export type PlayerLineupUpdateWithWhereUniqueWithoutPlayerInput = {
  data: PlayerLineupUpdateWithoutPlayerInput;
  where: PlayerLineupWhereUniqueInput;
};

export type PlayerLineupUpdateWithoutLineupInput = {
  formationSlotIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  isCaptain?: InputMaybe<BoolFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerLineupsInput>;
};

export type PlayerLineupUpdateWithoutPlayerInput = {
  formationSlotIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  isCaptain?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lineup?: InputMaybe<LineupUpdateOneRequiredWithoutPlayerLineupsInput>;
};

export type PlayerLineupUpsertWithWhereUniqueWithoutLineupInput = {
  create: PlayerLineupCreateWithoutLineupInput;
  update: PlayerLineupUpdateWithoutLineupInput;
  where: PlayerLineupWhereUniqueInput;
};

export type PlayerLineupUpsertWithWhereUniqueWithoutPlayerInput = {
  create: PlayerLineupCreateWithoutPlayerInput;
  update: PlayerLineupUpdateWithoutPlayerInput;
  where: PlayerLineupWhereUniqueInput;
};

export type PlayerLineupWhereInput = {
  AND?: InputMaybe<Array<PlayerLineupWhereInput>>;
  NOT?: InputMaybe<Array<PlayerLineupWhereInput>>;
  OR?: InputMaybe<Array<PlayerLineupWhereInput>>;
  formationSlotIndex?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  isCaptain?: InputMaybe<BoolFilter>;
  lineup?: InputMaybe<LineupRelationFilter>;
  lineupId?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
};

export type PlayerLineupWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type PlayerListRelationFilter = {
  every?: InputMaybe<PlayerWhereInput>;
  none?: InputMaybe<PlayerWhereInput>;
  some?: InputMaybe<PlayerWhereInput>;
};

export type PlayerMaxAggregate = {
  __typename?: 'PlayerMaxAggregate';
  assetId?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeasonId?: Maybe<Scalars['Int']>;
  footedness?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  generationId?: Maybe<Scalars['Int']>;
  heightMeters?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isAcademy?: Maybe<Scalars['Boolean']>;
  isInitial?: Maybe<Scalars['Boolean']>;
  isReserve?: Maybe<Scalars['Boolean']>;
  isRevealed?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  originClubId?: Maybe<Scalars['Int']>;
  overallRating?: Maybe<Scalars['Float']>;
  potential?: Maybe<Scalars['Int']>;
  preferredPosition?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  rarity?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  weakFootAbility?: Maybe<Scalars['Int']>;
};

export type PlayerMaxOrderByAggregateInput = {
  assetId?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  firstSeasonId?: InputMaybe<SortOrder>;
  footedness?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAcademy?: InputMaybe<SortOrder>;
  isInitial?: InputMaybe<SortOrder>;
  isReserve?: InputMaybe<SortOrder>;
  isRevealed?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  nationality?: InputMaybe<SortOrder>;
  originClubId?: InputMaybe<SortOrder>;
  overallRating?: InputMaybe<SortOrder>;
  potential?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  rarity?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export type PlayerMinAggregate = {
  __typename?: 'PlayerMinAggregate';
  assetId?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeasonId?: Maybe<Scalars['Int']>;
  footedness?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  generationId?: Maybe<Scalars['Int']>;
  heightMeters?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isAcademy?: Maybe<Scalars['Boolean']>;
  isInitial?: Maybe<Scalars['Boolean']>;
  isReserve?: Maybe<Scalars['Boolean']>;
  isRevealed?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  originClubId?: Maybe<Scalars['Int']>;
  overallRating?: Maybe<Scalars['Float']>;
  potential?: Maybe<Scalars['Int']>;
  preferredPosition?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  rarity?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  weakFootAbility?: Maybe<Scalars['Int']>;
};

export type PlayerMinOrderByAggregateInput = {
  assetId?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  firstSeasonId?: InputMaybe<SortOrder>;
  footedness?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAcademy?: InputMaybe<SortOrder>;
  isInitial?: InputMaybe<SortOrder>;
  isReserve?: InputMaybe<SortOrder>;
  isRevealed?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  nationality?: InputMaybe<SortOrder>;
  originClubId?: InputMaybe<SortOrder>;
  overallRating?: InputMaybe<SortOrder>;
  potential?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  rarity?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export type PlayerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlayerAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlayerCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlayerSumOrderByAggregateInput>;
  assetId?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  firstSeasonId?: InputMaybe<SortOrder>;
  footedness?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAcademy?: InputMaybe<SortOrder>;
  isInitial?: InputMaybe<SortOrder>;
  isReserve?: InputMaybe<SortOrder>;
  isRevealed?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  nationality?: InputMaybe<SortOrder>;
  originClubId?: InputMaybe<SortOrder>;
  overallRating?: InputMaybe<SortOrder>;
  potential?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  rarity?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithRelationInput = {
  actions?: InputMaybe<ActionOrderByRelationAggregateInput>;
  assetId?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  firstSeason?: InputMaybe<SeasonOrderByWithRelationInput>;
  firstSeasonId?: InputMaybe<SortOrder>;
  footedness?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAcademy?: InputMaybe<SortOrder>;
  isInitial?: InputMaybe<SortOrder>;
  isReserve?: InputMaybe<SortOrder>;
  isRevealed?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  morale?: InputMaybe<MoraleOrderByWithRelationInput>;
  nationality?: InputMaybe<SortOrder>;
  newsFeed?: InputMaybe<NewsItemOrderByRelationAggregateInput>;
  originClub?: InputMaybe<ClubOrderByWithRelationInput>;
  originClubId?: InputMaybe<SortOrder>;
  overallRating?: InputMaybe<SortOrder>;
  playerAttributes?: InputMaybe<PlayerAttributesOrderByRelationAggregateInput>;
  playerLineups?: InputMaybe<PlayerLineupOrderByRelationAggregateInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordOrderByRelationAggregateInput>;
  potential?: InputMaybe<SortOrder>;
  preferredPosition?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  rarity?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export type PlayerRelationFilter = {
  is?: InputMaybe<PlayerWhereInput>;
  isNot?: InputMaybe<PlayerWhereInput>;
};

export enum PlayerScalarFieldEnum {
  AssetId = 'assetId',
  ClubId = 'clubId',
  FirstName = 'firstName',
  FirstSeasonId = 'firstSeasonId',
  Footedness = 'footedness',
  FullName = 'fullName',
  GenerationId = 'generationId',
  HeightMeters = 'heightMeters',
  Id = 'id',
  IsAcademy = 'isAcademy',
  IsInitial = 'isInitial',
  IsReserve = 'isReserve',
  IsRevealed = 'isRevealed',
  LastName = 'lastName',
  Nationality = 'nationality',
  OriginClubId = 'originClubId',
  OverallRating = 'overallRating',
  Potential = 'potential',
  PreferredPosition = 'preferredPosition',
  Price = 'price',
  Rarity = 'rarity',
  Seed = 'seed',
  WeakFootAbility = 'weakFootAbility'
}

export type PlayerScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlayerScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerScalarWhereInput>>;
  assetId?: InputMaybe<IntNullableFilter>;
  clubId?: InputMaybe<IntFilter>;
  firstName?: InputMaybe<StringFilter>;
  firstSeasonId?: InputMaybe<IntFilter>;
  footedness?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  generationId?: InputMaybe<IntFilter>;
  heightMeters?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  isAcademy?: InputMaybe<BoolFilter>;
  isInitial?: InputMaybe<BoolFilter>;
  isReserve?: InputMaybe<BoolFilter>;
  isRevealed?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  nationality?: InputMaybe<StringFilter>;
  originClubId?: InputMaybe<IntFilter>;
  overallRating?: InputMaybe<FloatFilter>;
  potential?: InputMaybe<IntFilter>;
  preferredPosition?: InputMaybe<StringFilter>;
  price?: InputMaybe<StringNullableFilter>;
  rarity?: InputMaybe<StringFilter>;
  seed?: InputMaybe<StringFilter>;
  weakFootAbility?: InputMaybe<IntFilter>;
};

export type PlayerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  assetId?: InputMaybe<IntNullableWithAggregatesFilter>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  firstSeasonId?: InputMaybe<IntWithAggregatesFilter>;
  footedness?: InputMaybe<StringWithAggregatesFilter>;
  fullName?: InputMaybe<StringWithAggregatesFilter>;
  generationId?: InputMaybe<IntWithAggregatesFilter>;
  heightMeters?: InputMaybe<FloatWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isAcademy?: InputMaybe<BoolWithAggregatesFilter>;
  isInitial?: InputMaybe<BoolWithAggregatesFilter>;
  isReserve?: InputMaybe<BoolWithAggregatesFilter>;
  isRevealed?: InputMaybe<BoolWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  nationality?: InputMaybe<StringWithAggregatesFilter>;
  originClubId?: InputMaybe<IntWithAggregatesFilter>;
  overallRating?: InputMaybe<FloatWithAggregatesFilter>;
  potential?: InputMaybe<IntWithAggregatesFilter>;
  preferredPosition?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<StringNullableWithAggregatesFilter>;
  rarity?: InputMaybe<StringWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  weakFootAbility?: InputMaybe<IntWithAggregatesFilter>;
};

export type PlayerStatsRecord = {
  __typename?: 'PlayerStatsRecord';
  _count?: Maybe<PlayerStatsRecordCount>;
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles: Scalars['Int'];
  attemptedPasses: Scalars['Int'];
  backHeelShots: Scalars['Int'];
  blocks: Scalars['Int'];
  carries: Scalars['Int'];
  clearances: Scalars['Int'];
  competitionPlayerStats: Array<CompetitionPlayerStats>;
  completedDribbles: Scalars['Int'];
  completedPasses: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots: Scalars['Int'];
  dribbleSuccessRate?: Maybe<Scalars['Float']>;
  duelsLost: Scalars['Int'];
  duelsWon: Scalars['Int'];
  failedInterceptions: Scalars['Int'];
  fiftyFiftiesLost: Scalars['Int'];
  fiftyFiftiesWon: Scalars['Int'];
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded: Scalars['Int'];
  groundPasses: Scalars['Int'];
  halfVolleyShots: Scalars['Int'];
  id: Scalars['Int'];
  interceptedPasses: Scalars['Int'];
  interceptions: Scalars['Int'];
  isGlobal: Scalars['Boolean'];
  lobShots: Scalars['Int'];
  normalShots: Scalars['Int'];
  offsidePasses: Scalars['Int'];
  offsides: Scalars['Int'];
  overheadKickShots: Scalars['Int'];
  passAccuracy?: Maybe<Scalars['Float']>;
  penaltiesScored: Scalars['Int'];
  player: Player;
  playerId: Scalars['String'];
  playerTimeInfo: Scalars['JSON'];
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotAccuracy?: Maybe<Scalars['Float']>;
  shotsBlocked: Scalars['Int'];
  shotsFromInsideTheBox: Scalars['Int'];
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted: Scalars['Int'];
  tacklesReceived: Scalars['Int'];
  timeInPossessionMilliseconds: Scalars['Float'];
  tournamentPlayerStats: Array<TournamentPlayerStats>;
  volleyShots: Scalars['Int'];
  yellowCards: Scalars['Int'];
};


export type PlayerStatsRecordCompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type PlayerStatsRecordTournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};

export type PlayerStatsRecordAvgAggregate = {
  __typename?: 'PlayerStatsRecordAvgAggregate';
  appearances?: Maybe<Scalars['Float']>;
  assists?: Maybe<Scalars['Float']>;
  attemptedDribbles?: Maybe<Scalars['Float']>;
  attemptedPasses?: Maybe<Scalars['Float']>;
  backHeelShots?: Maybe<Scalars['Float']>;
  blocks?: Maybe<Scalars['Float']>;
  carries?: Maybe<Scalars['Float']>;
  clearances?: Maybe<Scalars['Float']>;
  completedDribbles?: Maybe<Scalars['Float']>;
  completedPasses?: Maybe<Scalars['Float']>;
  crosses?: Maybe<Scalars['Float']>;
  divingHeaderShots?: Maybe<Scalars['Float']>;
  duelsLost?: Maybe<Scalars['Float']>;
  duelsWon?: Maybe<Scalars['Float']>;
  failedInterceptions?: Maybe<Scalars['Float']>;
  fiftyFiftiesLost?: Maybe<Scalars['Float']>;
  fiftyFiftiesWon?: Maybe<Scalars['Float']>;
  fouls?: Maybe<Scalars['Float']>;
  freeKicksScored?: Maybe<Scalars['Float']>;
  goals?: Maybe<Scalars['Float']>;
  goalsConceded?: Maybe<Scalars['Float']>;
  groundPasses?: Maybe<Scalars['Float']>;
  halfVolleyShots?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interceptedPasses?: Maybe<Scalars['Float']>;
  interceptions?: Maybe<Scalars['Float']>;
  lobShots?: Maybe<Scalars['Float']>;
  normalShots?: Maybe<Scalars['Float']>;
  offsidePasses?: Maybe<Scalars['Float']>;
  offsides?: Maybe<Scalars['Float']>;
  overheadKickShots?: Maybe<Scalars['Float']>;
  penaltiesScored?: Maybe<Scalars['Float']>;
  redCards?: Maybe<Scalars['Float']>;
  saves?: Maybe<Scalars['Float']>;
  shotsBlocked?: Maybe<Scalars['Float']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Float']>;
  shotsOffTarget?: Maybe<Scalars['Float']>;
  shotsOnTarget?: Maybe<Scalars['Float']>;
  tacklesExecuted?: Maybe<Scalars['Float']>;
  tacklesReceived?: Maybe<Scalars['Float']>;
  timeInPossessionMilliseconds?: Maybe<Scalars['Float']>;
  volleyShots?: Maybe<Scalars['Float']>;
  yellowCards?: Maybe<Scalars['Float']>;
};

export type PlayerStatsRecordAvgOrderByAggregateInput = {
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordCount = {
  __typename?: 'PlayerStatsRecordCount';
  competitionPlayerStats: Scalars['Int'];
  tournamentPlayerStats: Scalars['Int'];
};

export type PlayerStatsRecordCountAggregate = {
  __typename?: 'PlayerStatsRecordCountAggregate';
  _all: Scalars['Int'];
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles: Scalars['Int'];
  attemptedPasses: Scalars['Int'];
  backHeelShots: Scalars['Int'];
  blocks: Scalars['Int'];
  carries: Scalars['Int'];
  clearances: Scalars['Int'];
  completedDribbles: Scalars['Int'];
  completedPasses: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots: Scalars['Int'];
  duelsLost: Scalars['Int'];
  duelsWon: Scalars['Int'];
  failedInterceptions: Scalars['Int'];
  fiftyFiftiesLost: Scalars['Int'];
  fiftyFiftiesWon: Scalars['Int'];
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded: Scalars['Int'];
  groundPasses: Scalars['Int'];
  halfVolleyShots: Scalars['Int'];
  id: Scalars['Int'];
  interceptedPasses: Scalars['Int'];
  interceptions: Scalars['Int'];
  isGlobal: Scalars['Int'];
  lobShots: Scalars['Int'];
  normalShots: Scalars['Int'];
  offsidePasses: Scalars['Int'];
  offsides: Scalars['Int'];
  overheadKickShots: Scalars['Int'];
  penaltiesScored: Scalars['Int'];
  playerId: Scalars['Int'];
  playerTimeInfo: Scalars['Int'];
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked: Scalars['Int'];
  shotsFromInsideTheBox: Scalars['Int'];
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted: Scalars['Int'];
  tacklesReceived: Scalars['Int'];
  timeInPossessionMilliseconds: Scalars['Int'];
  volleyShots: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordCountOrderByAggregateInput = {
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isGlobal?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  playerTimeInfo?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordCreateInput = {
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses: Scalars['Int'];
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded?: InputMaybe<Scalars['Int']>;
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  isGlobal: Scalars['Boolean'];
  lobShots?: InputMaybe<Scalars['Int']>;
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  penaltiesScored: Scalars['Int'];
  player: PlayerCreateNestedOneWithoutPlayerStatsRecordInput;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: InputMaybe<Scalars['Float']>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordCreateManyInput = {
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses: Scalars['Int'];
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded?: InputMaybe<Scalars['Int']>;
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  isGlobal: Scalars['Boolean'];
  lobShots?: InputMaybe<Scalars['Int']>;
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  penaltiesScored: Scalars['Int'];
  playerId: Scalars['String'];
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: InputMaybe<Scalars['Float']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordCreateManyPlayerInput = {
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses: Scalars['Int'];
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded?: InputMaybe<Scalars['Int']>;
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  isGlobal: Scalars['Boolean'];
  lobShots?: InputMaybe<Scalars['Int']>;
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  penaltiesScored: Scalars['Int'];
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: InputMaybe<Scalars['Float']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordCreateManyPlayerInputEnvelope = {
  data: Array<PlayerStatsRecordCreateManyPlayerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerStatsRecordCreateNestedManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerStatsRecordWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerStatsRecordCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerStatsRecordCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerStatsRecordCreateManyPlayerInputEnvelope>;
};

export type PlayerStatsRecordCreateNestedOneWithoutCompetitionPlayerStatsInput = {
  connect?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerStatsRecordCreateOrConnectWithoutCompetitionPlayerStatsInput>;
  create?: InputMaybe<PlayerStatsRecordCreateWithoutCompetitionPlayerStatsInput>;
};

export type PlayerStatsRecordCreateNestedOneWithoutTournamentPlayerStatsInput = {
  connect?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerStatsRecordCreateOrConnectWithoutTournamentPlayerStatsInput>;
  create?: InputMaybe<PlayerStatsRecordCreateWithoutTournamentPlayerStatsInput>;
};

export type PlayerStatsRecordCreateOrConnectWithoutCompetitionPlayerStatsInput = {
  create: PlayerStatsRecordCreateWithoutCompetitionPlayerStatsInput;
  where: PlayerStatsRecordWhereUniqueInput;
};

export type PlayerStatsRecordCreateOrConnectWithoutPlayerInput = {
  create: PlayerStatsRecordCreateWithoutPlayerInput;
  where: PlayerStatsRecordWhereUniqueInput;
};

export type PlayerStatsRecordCreateOrConnectWithoutTournamentPlayerStatsInput = {
  create: PlayerStatsRecordCreateWithoutTournamentPlayerStatsInput;
  where: PlayerStatsRecordWhereUniqueInput;
};

export type PlayerStatsRecordCreateWithoutCompetitionPlayerStatsInput = {
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses: Scalars['Int'];
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded?: InputMaybe<Scalars['Int']>;
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  isGlobal: Scalars['Boolean'];
  lobShots?: InputMaybe<Scalars['Int']>;
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  penaltiesScored: Scalars['Int'];
  player: PlayerCreateNestedOneWithoutPlayerStatsRecordInput;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: InputMaybe<Scalars['Float']>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordCreateWithoutPlayerInput = {
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses: Scalars['Int'];
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded?: InputMaybe<Scalars['Int']>;
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  isGlobal: Scalars['Boolean'];
  lobShots?: InputMaybe<Scalars['Int']>;
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  penaltiesScored: Scalars['Int'];
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: InputMaybe<Scalars['Float']>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordCreateWithoutTournamentPlayerStatsInput = {
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles?: InputMaybe<Scalars['Int']>;
  attemptedPasses: Scalars['Int'];
  backHeelShots?: InputMaybe<Scalars['Int']>;
  blocks?: InputMaybe<Scalars['Int']>;
  carries?: InputMaybe<Scalars['Int']>;
  clearances?: InputMaybe<Scalars['Int']>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput>;
  completedDribbles?: InputMaybe<Scalars['Int']>;
  completedPasses?: InputMaybe<Scalars['Int']>;
  crosses: Scalars['Int'];
  divingHeaderShots?: InputMaybe<Scalars['Int']>;
  duelsLost?: InputMaybe<Scalars['Int']>;
  duelsWon?: InputMaybe<Scalars['Int']>;
  failedInterceptions?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesLost?: InputMaybe<Scalars['Int']>;
  fiftyFiftiesWon?: InputMaybe<Scalars['Int']>;
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded?: InputMaybe<Scalars['Int']>;
  groundPasses?: InputMaybe<Scalars['Int']>;
  halfVolleyShots?: InputMaybe<Scalars['Int']>;
  interceptedPasses?: InputMaybe<Scalars['Int']>;
  interceptions?: InputMaybe<Scalars['Int']>;
  isGlobal: Scalars['Boolean'];
  lobShots?: InputMaybe<Scalars['Int']>;
  normalShots?: InputMaybe<Scalars['Int']>;
  offsidePasses?: InputMaybe<Scalars['Int']>;
  offsides: Scalars['Int'];
  overheadKickShots?: InputMaybe<Scalars['Int']>;
  penaltiesScored: Scalars['Int'];
  player: PlayerCreateNestedOneWithoutPlayerStatsRecordInput;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked?: InputMaybe<Scalars['Int']>;
  shotsFromInsideTheBox?: InputMaybe<Scalars['Int']>;
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted?: InputMaybe<Scalars['Int']>;
  tacklesReceived?: InputMaybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: InputMaybe<Scalars['Float']>;
  volleyShots?: InputMaybe<Scalars['Int']>;
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordGroupBy = {
  __typename?: 'PlayerStatsRecordGroupBy';
  _avg?: Maybe<PlayerStatsRecordAvgAggregate>;
  _count?: Maybe<PlayerStatsRecordCountAggregate>;
  _max?: Maybe<PlayerStatsRecordMaxAggregate>;
  _min?: Maybe<PlayerStatsRecordMinAggregate>;
  _sum?: Maybe<PlayerStatsRecordSumAggregate>;
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  attemptedDribbles: Scalars['Int'];
  attemptedPasses: Scalars['Int'];
  backHeelShots: Scalars['Int'];
  blocks: Scalars['Int'];
  carries: Scalars['Int'];
  clearances: Scalars['Int'];
  completedDribbles: Scalars['Int'];
  completedPasses: Scalars['Int'];
  crosses: Scalars['Int'];
  divingHeaderShots: Scalars['Int'];
  duelsLost: Scalars['Int'];
  duelsWon: Scalars['Int'];
  failedInterceptions: Scalars['Int'];
  fiftyFiftiesLost: Scalars['Int'];
  fiftyFiftiesWon: Scalars['Int'];
  fouls: Scalars['Int'];
  freeKicksScored: Scalars['Int'];
  goals: Scalars['Int'];
  goalsConceded: Scalars['Int'];
  groundPasses: Scalars['Int'];
  halfVolleyShots: Scalars['Int'];
  id: Scalars['Int'];
  interceptedPasses: Scalars['Int'];
  interceptions: Scalars['Int'];
  isGlobal: Scalars['Boolean'];
  lobShots: Scalars['Int'];
  normalShots: Scalars['Int'];
  offsidePasses: Scalars['Int'];
  offsides: Scalars['Int'];
  overheadKickShots: Scalars['Int'];
  penaltiesScored: Scalars['Int'];
  playerId: Scalars['String'];
  playerTimeInfo: Scalars['JSON'];
  redCards: Scalars['Int'];
  saves: Scalars['Int'];
  shotsBlocked: Scalars['Int'];
  shotsFromInsideTheBox: Scalars['Int'];
  shotsOffTarget: Scalars['Int'];
  shotsOnTarget: Scalars['Int'];
  tacklesExecuted: Scalars['Int'];
  tacklesReceived: Scalars['Int'];
  timeInPossessionMilliseconds: Scalars['Float'];
  volleyShots: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

export type PlayerStatsRecordListRelationFilter = {
  every?: InputMaybe<PlayerStatsRecordWhereInput>;
  none?: InputMaybe<PlayerStatsRecordWhereInput>;
  some?: InputMaybe<PlayerStatsRecordWhereInput>;
};

export type PlayerStatsRecordMaxAggregate = {
  __typename?: 'PlayerStatsRecordMaxAggregate';
  appearances?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['Int']>;
  attemptedDribbles?: Maybe<Scalars['Int']>;
  attemptedPasses?: Maybe<Scalars['Int']>;
  backHeelShots?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  carries?: Maybe<Scalars['Int']>;
  clearances?: Maybe<Scalars['Int']>;
  completedDribbles?: Maybe<Scalars['Int']>;
  completedPasses?: Maybe<Scalars['Int']>;
  crosses?: Maybe<Scalars['Int']>;
  divingHeaderShots?: Maybe<Scalars['Int']>;
  duelsLost?: Maybe<Scalars['Int']>;
  duelsWon?: Maybe<Scalars['Int']>;
  failedInterceptions?: Maybe<Scalars['Int']>;
  fiftyFiftiesLost?: Maybe<Scalars['Int']>;
  fiftyFiftiesWon?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  freeKicksScored?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsConceded?: Maybe<Scalars['Int']>;
  groundPasses?: Maybe<Scalars['Int']>;
  halfVolleyShots?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interceptedPasses?: Maybe<Scalars['Int']>;
  interceptions?: Maybe<Scalars['Int']>;
  isGlobal?: Maybe<Scalars['Boolean']>;
  lobShots?: Maybe<Scalars['Int']>;
  normalShots?: Maybe<Scalars['Int']>;
  offsidePasses?: Maybe<Scalars['Int']>;
  offsides?: Maybe<Scalars['Int']>;
  overheadKickShots?: Maybe<Scalars['Int']>;
  penaltiesScored?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['String']>;
  redCards?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  shotsBlocked?: Maybe<Scalars['Int']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Int']>;
  shotsOffTarget?: Maybe<Scalars['Int']>;
  shotsOnTarget?: Maybe<Scalars['Int']>;
  tacklesExecuted?: Maybe<Scalars['Int']>;
  tacklesReceived?: Maybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: Maybe<Scalars['Float']>;
  volleyShots?: Maybe<Scalars['Int']>;
  yellowCards?: Maybe<Scalars['Int']>;
};

export type PlayerStatsRecordMaxOrderByAggregateInput = {
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isGlobal?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordMinAggregate = {
  __typename?: 'PlayerStatsRecordMinAggregate';
  appearances?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['Int']>;
  attemptedDribbles?: Maybe<Scalars['Int']>;
  attemptedPasses?: Maybe<Scalars['Int']>;
  backHeelShots?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  carries?: Maybe<Scalars['Int']>;
  clearances?: Maybe<Scalars['Int']>;
  completedDribbles?: Maybe<Scalars['Int']>;
  completedPasses?: Maybe<Scalars['Int']>;
  crosses?: Maybe<Scalars['Int']>;
  divingHeaderShots?: Maybe<Scalars['Int']>;
  duelsLost?: Maybe<Scalars['Int']>;
  duelsWon?: Maybe<Scalars['Int']>;
  failedInterceptions?: Maybe<Scalars['Int']>;
  fiftyFiftiesLost?: Maybe<Scalars['Int']>;
  fiftyFiftiesWon?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  freeKicksScored?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsConceded?: Maybe<Scalars['Int']>;
  groundPasses?: Maybe<Scalars['Int']>;
  halfVolleyShots?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interceptedPasses?: Maybe<Scalars['Int']>;
  interceptions?: Maybe<Scalars['Int']>;
  isGlobal?: Maybe<Scalars['Boolean']>;
  lobShots?: Maybe<Scalars['Int']>;
  normalShots?: Maybe<Scalars['Int']>;
  offsidePasses?: Maybe<Scalars['Int']>;
  offsides?: Maybe<Scalars['Int']>;
  overheadKickShots?: Maybe<Scalars['Int']>;
  penaltiesScored?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['String']>;
  redCards?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  shotsBlocked?: Maybe<Scalars['Int']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Int']>;
  shotsOffTarget?: Maybe<Scalars['Int']>;
  shotsOnTarget?: Maybe<Scalars['Int']>;
  tacklesExecuted?: Maybe<Scalars['Int']>;
  tacklesReceived?: Maybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: Maybe<Scalars['Float']>;
  volleyShots?: Maybe<Scalars['Int']>;
  yellowCards?: Maybe<Scalars['Int']>;
};

export type PlayerStatsRecordMinOrderByAggregateInput = {
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isGlobal?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlayerStatsRecordAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlayerStatsRecordCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerStatsRecordMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerStatsRecordMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlayerStatsRecordSumOrderByAggregateInput>;
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isGlobal?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  playerTimeInfo?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordOrderByWithRelationInput = {
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsOrderByRelationAggregateInput>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  isGlobal?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
  playerTimeInfo?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsOrderByRelationAggregateInput>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordRelationFilter = {
  is?: InputMaybe<PlayerStatsRecordWhereInput>;
  isNot?: InputMaybe<PlayerStatsRecordWhereInput>;
};

export enum PlayerStatsRecordScalarFieldEnum {
  Appearances = 'appearances',
  Assists = 'assists',
  AttemptedDribbles = 'attemptedDribbles',
  AttemptedPasses = 'attemptedPasses',
  BackHeelShots = 'backHeelShots',
  Blocks = 'blocks',
  Carries = 'carries',
  Clearances = 'clearances',
  CompletedDribbles = 'completedDribbles',
  CompletedPasses = 'completedPasses',
  Crosses = 'crosses',
  DivingHeaderShots = 'divingHeaderShots',
  DuelsLost = 'duelsLost',
  DuelsWon = 'duelsWon',
  FailedInterceptions = 'failedInterceptions',
  FiftyFiftiesLost = 'fiftyFiftiesLost',
  FiftyFiftiesWon = 'fiftyFiftiesWon',
  Fouls = 'fouls',
  FreeKicksScored = 'freeKicksScored',
  Goals = 'goals',
  GoalsConceded = 'goalsConceded',
  GroundPasses = 'groundPasses',
  HalfVolleyShots = 'halfVolleyShots',
  Id = 'id',
  InterceptedPasses = 'interceptedPasses',
  Interceptions = 'interceptions',
  IsGlobal = 'isGlobal',
  LobShots = 'lobShots',
  NormalShots = 'normalShots',
  OffsidePasses = 'offsidePasses',
  Offsides = 'offsides',
  OverheadKickShots = 'overheadKickShots',
  PenaltiesScored = 'penaltiesScored',
  PlayerId = 'playerId',
  PlayerTimeInfo = 'playerTimeInfo',
  RedCards = 'redCards',
  Saves = 'saves',
  ShotsBlocked = 'shotsBlocked',
  ShotsFromInsideTheBox = 'shotsFromInsideTheBox',
  ShotsOffTarget = 'shotsOffTarget',
  ShotsOnTarget = 'shotsOnTarget',
  TacklesExecuted = 'tacklesExecuted',
  TacklesReceived = 'tacklesReceived',
  TimeInPossessionMilliseconds = 'timeInPossessionMilliseconds',
  VolleyShots = 'volleyShots',
  YellowCards = 'yellowCards'
}

export type PlayerStatsRecordScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerStatsRecordScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlayerStatsRecordScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerStatsRecordScalarWhereInput>>;
  appearances?: InputMaybe<IntFilter>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsConceded?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  isGlobal?: InputMaybe<BoolFilter>;
  lobShots?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  penaltiesScored?: InputMaybe<IntFilter>;
  playerId?: InputMaybe<StringFilter>;
  playerTimeInfo?: InputMaybe<JsonFilter>;
  redCards?: InputMaybe<IntFilter>;
  saves?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type PlayerStatsRecordScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerStatsRecordScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerStatsRecordScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerStatsRecordScalarWhereWithAggregatesInput>>;
  appearances?: InputMaybe<IntWithAggregatesFilter>;
  assists?: InputMaybe<IntWithAggregatesFilter>;
  attemptedDribbles?: InputMaybe<IntWithAggregatesFilter>;
  attemptedPasses?: InputMaybe<IntWithAggregatesFilter>;
  backHeelShots?: InputMaybe<IntWithAggregatesFilter>;
  blocks?: InputMaybe<IntWithAggregatesFilter>;
  carries?: InputMaybe<IntWithAggregatesFilter>;
  clearances?: InputMaybe<IntWithAggregatesFilter>;
  completedDribbles?: InputMaybe<IntWithAggregatesFilter>;
  completedPasses?: InputMaybe<IntWithAggregatesFilter>;
  crosses?: InputMaybe<IntWithAggregatesFilter>;
  divingHeaderShots?: InputMaybe<IntWithAggregatesFilter>;
  duelsLost?: InputMaybe<IntWithAggregatesFilter>;
  duelsWon?: InputMaybe<IntWithAggregatesFilter>;
  failedInterceptions?: InputMaybe<IntWithAggregatesFilter>;
  fiftyFiftiesLost?: InputMaybe<IntWithAggregatesFilter>;
  fiftyFiftiesWon?: InputMaybe<IntWithAggregatesFilter>;
  fouls?: InputMaybe<IntWithAggregatesFilter>;
  freeKicksScored?: InputMaybe<IntWithAggregatesFilter>;
  goals?: InputMaybe<IntWithAggregatesFilter>;
  goalsConceded?: InputMaybe<IntWithAggregatesFilter>;
  groundPasses?: InputMaybe<IntWithAggregatesFilter>;
  halfVolleyShots?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  interceptedPasses?: InputMaybe<IntWithAggregatesFilter>;
  interceptions?: InputMaybe<IntWithAggregatesFilter>;
  isGlobal?: InputMaybe<BoolWithAggregatesFilter>;
  lobShots?: InputMaybe<IntWithAggregatesFilter>;
  normalShots?: InputMaybe<IntWithAggregatesFilter>;
  offsidePasses?: InputMaybe<IntWithAggregatesFilter>;
  offsides?: InputMaybe<IntWithAggregatesFilter>;
  overheadKickShots?: InputMaybe<IntWithAggregatesFilter>;
  penaltiesScored?: InputMaybe<IntWithAggregatesFilter>;
  playerId?: InputMaybe<StringWithAggregatesFilter>;
  playerTimeInfo?: InputMaybe<JsonWithAggregatesFilter>;
  redCards?: InputMaybe<IntWithAggregatesFilter>;
  saves?: InputMaybe<IntWithAggregatesFilter>;
  shotsBlocked?: InputMaybe<IntWithAggregatesFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntWithAggregatesFilter>;
  shotsOffTarget?: InputMaybe<IntWithAggregatesFilter>;
  shotsOnTarget?: InputMaybe<IntWithAggregatesFilter>;
  tacklesExecuted?: InputMaybe<IntWithAggregatesFilter>;
  tacklesReceived?: InputMaybe<IntWithAggregatesFilter>;
  timeInPossessionMilliseconds?: InputMaybe<FloatWithAggregatesFilter>;
  volleyShots?: InputMaybe<IntWithAggregatesFilter>;
  yellowCards?: InputMaybe<IntWithAggregatesFilter>;
};

export type PlayerStatsRecordSumAggregate = {
  __typename?: 'PlayerStatsRecordSumAggregate';
  appearances?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['Int']>;
  attemptedDribbles?: Maybe<Scalars['Int']>;
  attemptedPasses?: Maybe<Scalars['Int']>;
  backHeelShots?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  carries?: Maybe<Scalars['Int']>;
  clearances?: Maybe<Scalars['Int']>;
  completedDribbles?: Maybe<Scalars['Int']>;
  completedPasses?: Maybe<Scalars['Int']>;
  crosses?: Maybe<Scalars['Int']>;
  divingHeaderShots?: Maybe<Scalars['Int']>;
  duelsLost?: Maybe<Scalars['Int']>;
  duelsWon?: Maybe<Scalars['Int']>;
  failedInterceptions?: Maybe<Scalars['Int']>;
  fiftyFiftiesLost?: Maybe<Scalars['Int']>;
  fiftyFiftiesWon?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  freeKicksScored?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsConceded?: Maybe<Scalars['Int']>;
  groundPasses?: Maybe<Scalars['Int']>;
  halfVolleyShots?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interceptedPasses?: Maybe<Scalars['Int']>;
  interceptions?: Maybe<Scalars['Int']>;
  lobShots?: Maybe<Scalars['Int']>;
  normalShots?: Maybe<Scalars['Int']>;
  offsidePasses?: Maybe<Scalars['Int']>;
  offsides?: Maybe<Scalars['Int']>;
  overheadKickShots?: Maybe<Scalars['Int']>;
  penaltiesScored?: Maybe<Scalars['Int']>;
  redCards?: Maybe<Scalars['Int']>;
  saves?: Maybe<Scalars['Int']>;
  shotsBlocked?: Maybe<Scalars['Int']>;
  shotsFromInsideTheBox?: Maybe<Scalars['Int']>;
  shotsOffTarget?: Maybe<Scalars['Int']>;
  shotsOnTarget?: Maybe<Scalars['Int']>;
  tacklesExecuted?: Maybe<Scalars['Int']>;
  tacklesReceived?: Maybe<Scalars['Int']>;
  timeInPossessionMilliseconds?: Maybe<Scalars['Float']>;
  volleyShots?: Maybe<Scalars['Int']>;
  yellowCards?: Maybe<Scalars['Int']>;
};

export type PlayerStatsRecordSumOrderByAggregateInput = {
  appearances?: InputMaybe<SortOrder>;
  assists?: InputMaybe<SortOrder>;
  attemptedDribbles?: InputMaybe<SortOrder>;
  attemptedPasses?: InputMaybe<SortOrder>;
  backHeelShots?: InputMaybe<SortOrder>;
  blocks?: InputMaybe<SortOrder>;
  carries?: InputMaybe<SortOrder>;
  clearances?: InputMaybe<SortOrder>;
  completedDribbles?: InputMaybe<SortOrder>;
  completedPasses?: InputMaybe<SortOrder>;
  crosses?: InputMaybe<SortOrder>;
  divingHeaderShots?: InputMaybe<SortOrder>;
  duelsLost?: InputMaybe<SortOrder>;
  duelsWon?: InputMaybe<SortOrder>;
  failedInterceptions?: InputMaybe<SortOrder>;
  fiftyFiftiesLost?: InputMaybe<SortOrder>;
  fiftyFiftiesWon?: InputMaybe<SortOrder>;
  fouls?: InputMaybe<SortOrder>;
  freeKicksScored?: InputMaybe<SortOrder>;
  goals?: InputMaybe<SortOrder>;
  goalsConceded?: InputMaybe<SortOrder>;
  groundPasses?: InputMaybe<SortOrder>;
  halfVolleyShots?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interceptedPasses?: InputMaybe<SortOrder>;
  interceptions?: InputMaybe<SortOrder>;
  lobShots?: InputMaybe<SortOrder>;
  normalShots?: InputMaybe<SortOrder>;
  offsidePasses?: InputMaybe<SortOrder>;
  offsides?: InputMaybe<SortOrder>;
  overheadKickShots?: InputMaybe<SortOrder>;
  penaltiesScored?: InputMaybe<SortOrder>;
  redCards?: InputMaybe<SortOrder>;
  saves?: InputMaybe<SortOrder>;
  shotsBlocked?: InputMaybe<SortOrder>;
  shotsFromInsideTheBox?: InputMaybe<SortOrder>;
  shotsOffTarget?: InputMaybe<SortOrder>;
  shotsOnTarget?: InputMaybe<SortOrder>;
  tacklesExecuted?: InputMaybe<SortOrder>;
  tacklesReceived?: InputMaybe<SortOrder>;
  timeInPossessionMilliseconds?: InputMaybe<SortOrder>;
  volleyShots?: InputMaybe<SortOrder>;
  yellowCards?: InputMaybe<SortOrder>;
};

export type PlayerStatsRecordUpdateInput = {
  appearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutPlayerStatRecordInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsConceded?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  isGlobal?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  penaltiesScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerStatsRecordInput>;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  saves?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutPlayerStatRecordInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerStatsRecordUpdateManyMutationInput = {
  appearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsConceded?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  isGlobal?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  penaltiesScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  saves?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFieldUpdateOperationsInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerStatsRecordUpdateManyWithWhereWithoutPlayerInput = {
  data: PlayerStatsRecordUpdateManyMutationInput;
  where: PlayerStatsRecordScalarWhereInput;
};

export type PlayerStatsRecordUpdateManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerStatsRecordWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerStatsRecordCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerStatsRecordCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerStatsRecordCreateManyPlayerInputEnvelope>;
  delete?: InputMaybe<Array<PlayerStatsRecordWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerStatsRecordScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerStatsRecordWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerStatsRecordWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerStatsRecordUpdateWithWhereUniqueWithoutPlayerInput>>;
  updateMany?: InputMaybe<Array<PlayerStatsRecordUpdateManyWithWhereWithoutPlayerInput>>;
  upsert?: InputMaybe<Array<PlayerStatsRecordUpsertWithWhereUniqueWithoutPlayerInput>>;
};

export type PlayerStatsRecordUpdateOneRequiredWithoutCompetitionPlayerStatsInput = {
  connect?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerStatsRecordCreateOrConnectWithoutCompetitionPlayerStatsInput>;
  create?: InputMaybe<PlayerStatsRecordCreateWithoutCompetitionPlayerStatsInput>;
  update?: InputMaybe<PlayerStatsRecordUpdateWithoutCompetitionPlayerStatsInput>;
  upsert?: InputMaybe<PlayerStatsRecordUpsertWithoutCompetitionPlayerStatsInput>;
};

export type PlayerStatsRecordUpdateOneRequiredWithoutTournamentPlayerStatsInput = {
  connect?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerStatsRecordCreateOrConnectWithoutTournamentPlayerStatsInput>;
  create?: InputMaybe<PlayerStatsRecordCreateWithoutTournamentPlayerStatsInput>;
  update?: InputMaybe<PlayerStatsRecordUpdateWithoutTournamentPlayerStatsInput>;
  upsert?: InputMaybe<PlayerStatsRecordUpsertWithoutTournamentPlayerStatsInput>;
};

export type PlayerStatsRecordUpdateWithWhereUniqueWithoutPlayerInput = {
  data: PlayerStatsRecordUpdateWithoutPlayerInput;
  where: PlayerStatsRecordWhereUniqueInput;
};

export type PlayerStatsRecordUpdateWithoutCompetitionPlayerStatsInput = {
  appearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsConceded?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  isGlobal?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  penaltiesScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerStatsRecordInput>;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  saves?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutPlayerStatRecordInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerStatsRecordUpdateWithoutPlayerInput = {
  appearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutPlayerStatRecordInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsConceded?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  isGlobal?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  penaltiesScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  saves?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutPlayerStatRecordInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerStatsRecordUpdateWithoutTournamentPlayerStatsInput = {
  appearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  assists?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  attemptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  backHeelShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  blocks?: InputMaybe<IntFieldUpdateOperationsInput>;
  carries?: InputMaybe<IntFieldUpdateOperationsInput>;
  clearances?: InputMaybe<IntFieldUpdateOperationsInput>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsUpdateManyWithoutPlayerStatRecordInput>;
  completedDribbles?: InputMaybe<IntFieldUpdateOperationsInput>;
  completedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  crosses?: InputMaybe<IntFieldUpdateOperationsInput>;
  divingHeaderShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  duelsWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  failedInterceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesLost?: InputMaybe<IntFieldUpdateOperationsInput>;
  fiftyFiftiesWon?: InputMaybe<IntFieldUpdateOperationsInput>;
  fouls?: InputMaybe<IntFieldUpdateOperationsInput>;
  freeKicksScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  goals?: InputMaybe<IntFieldUpdateOperationsInput>;
  goalsConceded?: InputMaybe<IntFieldUpdateOperationsInput>;
  groundPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  halfVolleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptedPasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  interceptions?: InputMaybe<IntFieldUpdateOperationsInput>;
  isGlobal?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lobShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  normalShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsidePasses?: InputMaybe<IntFieldUpdateOperationsInput>;
  offsides?: InputMaybe<IntFieldUpdateOperationsInput>;
  overheadKickShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  penaltiesScored?: InputMaybe<IntFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerStatsRecordInput>;
  playerTimeInfo?: InputMaybe<Scalars['JSON']>;
  redCards?: InputMaybe<IntFieldUpdateOperationsInput>;
  saves?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsBlocked?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsFromInsideTheBox?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOffTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  shotsOnTarget?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesExecuted?: InputMaybe<IntFieldUpdateOperationsInput>;
  tacklesReceived?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFieldUpdateOperationsInput>;
  volleyShots?: InputMaybe<IntFieldUpdateOperationsInput>;
  yellowCards?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerStatsRecordUpsertWithWhereUniqueWithoutPlayerInput = {
  create: PlayerStatsRecordCreateWithoutPlayerInput;
  update: PlayerStatsRecordUpdateWithoutPlayerInput;
  where: PlayerStatsRecordWhereUniqueInput;
};

export type PlayerStatsRecordUpsertWithoutCompetitionPlayerStatsInput = {
  create: PlayerStatsRecordCreateWithoutCompetitionPlayerStatsInput;
  update: PlayerStatsRecordUpdateWithoutCompetitionPlayerStatsInput;
};

export type PlayerStatsRecordUpsertWithoutTournamentPlayerStatsInput = {
  create: PlayerStatsRecordCreateWithoutTournamentPlayerStatsInput;
  update: PlayerStatsRecordUpdateWithoutTournamentPlayerStatsInput;
};

export type PlayerStatsRecordWhereInput = {
  AND?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  NOT?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  OR?: InputMaybe<Array<PlayerStatsRecordWhereInput>>;
  appearances?: InputMaybe<IntFilter>;
  assists?: InputMaybe<IntFilter>;
  attemptedDribbles?: InputMaybe<IntFilter>;
  attemptedPasses?: InputMaybe<IntFilter>;
  backHeelShots?: InputMaybe<IntFilter>;
  blocks?: InputMaybe<IntFilter>;
  carries?: InputMaybe<IntFilter>;
  clearances?: InputMaybe<IntFilter>;
  competitionPlayerStats?: InputMaybe<CompetitionPlayerStatsListRelationFilter>;
  completedDribbles?: InputMaybe<IntFilter>;
  completedPasses?: InputMaybe<IntFilter>;
  crosses?: InputMaybe<IntFilter>;
  divingHeaderShots?: InputMaybe<IntFilter>;
  duelsLost?: InputMaybe<IntFilter>;
  duelsWon?: InputMaybe<IntFilter>;
  failedInterceptions?: InputMaybe<IntFilter>;
  fiftyFiftiesLost?: InputMaybe<IntFilter>;
  fiftyFiftiesWon?: InputMaybe<IntFilter>;
  fouls?: InputMaybe<IntFilter>;
  freeKicksScored?: InputMaybe<IntFilter>;
  goals?: InputMaybe<IntFilter>;
  goalsConceded?: InputMaybe<IntFilter>;
  groundPasses?: InputMaybe<IntFilter>;
  halfVolleyShots?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  interceptedPasses?: InputMaybe<IntFilter>;
  interceptions?: InputMaybe<IntFilter>;
  isGlobal?: InputMaybe<BoolFilter>;
  lobShots?: InputMaybe<IntFilter>;
  normalShots?: InputMaybe<IntFilter>;
  offsidePasses?: InputMaybe<IntFilter>;
  offsides?: InputMaybe<IntFilter>;
  overheadKickShots?: InputMaybe<IntFilter>;
  penaltiesScored?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  playerTimeInfo?: InputMaybe<JsonFilter>;
  redCards?: InputMaybe<IntFilter>;
  saves?: InputMaybe<IntFilter>;
  shotsBlocked?: InputMaybe<IntFilter>;
  shotsFromInsideTheBox?: InputMaybe<IntFilter>;
  shotsOffTarget?: InputMaybe<IntFilter>;
  shotsOnTarget?: InputMaybe<IntFilter>;
  tacklesExecuted?: InputMaybe<IntFilter>;
  tacklesReceived?: InputMaybe<IntFilter>;
  timeInPossessionMilliseconds?: InputMaybe<FloatFilter>;
  tournamentPlayerStats?: InputMaybe<TournamentPlayerStatsListRelationFilter>;
  volleyShots?: InputMaybe<IntFilter>;
  yellowCards?: InputMaybe<IntFilter>;
};

export type PlayerStatsRecordWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type PlayerSumAggregate = {
  __typename?: 'PlayerSumAggregate';
  assetId?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  firstSeasonId?: Maybe<Scalars['Int']>;
  generationId?: Maybe<Scalars['Int']>;
  heightMeters?: Maybe<Scalars['Float']>;
  originClubId?: Maybe<Scalars['Int']>;
  overallRating?: Maybe<Scalars['Float']>;
  potential?: Maybe<Scalars['Int']>;
  weakFootAbility?: Maybe<Scalars['Int']>;
};

export type PlayerSumOrderByAggregateInput = {
  assetId?: InputMaybe<SortOrder>;
  clubId?: InputMaybe<SortOrder>;
  firstSeasonId?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  heightMeters?: InputMaybe<SortOrder>;
  originClubId?: InputMaybe<SortOrder>;
  overallRating?: InputMaybe<SortOrder>;
  potential?: InputMaybe<SortOrder>;
  weakFootAbility?: InputMaybe<SortOrder>;
};

export type PlayerUpdateInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyMutationInput = {
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyWithWhereWithoutActionsInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutClubInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutFirstSeasonInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutNewsFeedInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutOriginClubInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithoutActionsInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutActionsInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutActionsInput>>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutActionsInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutActionsInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutActionsInput>>;
};

export type PlayerUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutClubInput>>;
  createMany?: InputMaybe<PlayerCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutClubInput>>;
};

export type PlayerUpdateManyWithoutFirstSeasonInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutFirstSeasonInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutFirstSeasonInput>>;
  createMany?: InputMaybe<PlayerCreateManyFirstSeasonInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutFirstSeasonInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutFirstSeasonInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutFirstSeasonInput>>;
};

export type PlayerUpdateManyWithoutNewsFeedInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutNewsFeedInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutNewsFeedInput>>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutNewsFeedInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutNewsFeedInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutNewsFeedInput>>;
};

export type PlayerUpdateManyWithoutOriginClubInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutOriginClubInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutOriginClubInput>>;
  createMany?: InputMaybe<PlayerCreateManyOriginClubInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutOriginClubInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutOriginClubInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutOriginClubInput>>;
};

export type PlayerUpdateOneRequiredWithoutMoraleInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutMoraleInput>;
  create?: InputMaybe<PlayerCreateWithoutMoraleInput>;
  update?: InputMaybe<PlayerUpdateWithoutMoraleInput>;
  upsert?: InputMaybe<PlayerUpsertWithoutMoraleInput>;
};

export type PlayerUpdateOneRequiredWithoutPlayerAttributesInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerAttributesInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerAttributesInput>;
  update?: InputMaybe<PlayerUpdateWithoutPlayerAttributesInput>;
  upsert?: InputMaybe<PlayerUpsertWithoutPlayerAttributesInput>;
};

export type PlayerUpdateOneRequiredWithoutPlayerLineupsInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerLineupsInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerLineupsInput>;
  update?: InputMaybe<PlayerUpdateWithoutPlayerLineupsInput>;
  upsert?: InputMaybe<PlayerUpsertWithoutPlayerLineupsInput>;
};

export type PlayerUpdateOneRequiredWithoutPlayerStatsRecordInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerStatsRecordInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerStatsRecordInput>;
  update?: InputMaybe<PlayerUpdateWithoutPlayerStatsRecordInput>;
  upsert?: InputMaybe<PlayerUpsertWithoutPlayerStatsRecordInput>;
};

export type PlayerUpdateWithWhereUniqueWithoutActionsInput = {
  data: PlayerUpdateWithoutActionsInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutClubInput = {
  data: PlayerUpdateWithoutClubInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutFirstSeasonInput = {
  data: PlayerUpdateWithoutFirstSeasonInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutNewsFeedInput = {
  data: PlayerUpdateWithoutNewsFeedInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutOriginClubInput = {
  data: PlayerUpdateWithoutOriginClubInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithoutActionsInput = {
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutClubInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutFirstSeasonInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutMoraleInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutNewsFeedInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutOriginClubInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutPlayerAttributesInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutPlayerLineupsInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpdateWithoutPlayerStatsRecordInput = {
  actions?: InputMaybe<ActionUpdateManyWithoutPlayersInput>;
  assetId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateOneRequiredWithoutPlayersInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstSeason?: InputMaybe<SeasonUpdateOneRequiredWithoutPlayersInput>;
  footedness?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  generationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  heightMeters?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAcademy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isInitial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isReserve?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRevealed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  morale?: InputMaybe<MoraleUpdateOneWithoutPlayerInput>;
  nationality?: InputMaybe<StringFieldUpdateOperationsInput>;
  newsFeed?: InputMaybe<NewsItemUpdateManyWithoutPlayersInput>;
  originClub?: InputMaybe<ClubUpdateOneRequiredWithoutOriginPlayersInput>;
  overallRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  playerAttributes?: InputMaybe<PlayerAttributesUpdateManyWithoutPlayerInput>;
  playerLineups?: InputMaybe<PlayerLineupUpdateManyWithoutPlayerInput>;
  potential?: InputMaybe<IntFieldUpdateOperationsInput>;
  preferredPosition?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  weakFootAbility?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PlayerUpsertWithWhereUniqueWithoutActionsInput = {
  create: PlayerCreateWithoutActionsInput;
  update: PlayerUpdateWithoutActionsInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutClubInput = {
  create: PlayerCreateWithoutClubInput;
  update: PlayerUpdateWithoutClubInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutFirstSeasonInput = {
  create: PlayerCreateWithoutFirstSeasonInput;
  update: PlayerUpdateWithoutFirstSeasonInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutNewsFeedInput = {
  create: PlayerCreateWithoutNewsFeedInput;
  update: PlayerUpdateWithoutNewsFeedInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutOriginClubInput = {
  create: PlayerCreateWithoutOriginClubInput;
  update: PlayerUpdateWithoutOriginClubInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithoutMoraleInput = {
  create: PlayerCreateWithoutMoraleInput;
  update: PlayerUpdateWithoutMoraleInput;
};

export type PlayerUpsertWithoutPlayerAttributesInput = {
  create: PlayerCreateWithoutPlayerAttributesInput;
  update: PlayerUpdateWithoutPlayerAttributesInput;
};

export type PlayerUpsertWithoutPlayerLineupsInput = {
  create: PlayerCreateWithoutPlayerLineupsInput;
  update: PlayerUpdateWithoutPlayerLineupsInput;
};

export type PlayerUpsertWithoutPlayerStatsRecordInput = {
  create: PlayerCreateWithoutPlayerStatsRecordInput;
  update: PlayerUpdateWithoutPlayerStatsRecordInput;
};

export type PlayerWhereInput = {
  AND?: InputMaybe<Array<PlayerWhereInput>>;
  NOT?: InputMaybe<Array<PlayerWhereInput>>;
  OR?: InputMaybe<Array<PlayerWhereInput>>;
  actions?: InputMaybe<ActionListRelationFilter>;
  assetId?: InputMaybe<IntNullableFilter>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  firstName?: InputMaybe<StringFilter>;
  firstSeason?: InputMaybe<SeasonRelationFilter>;
  firstSeasonId?: InputMaybe<IntFilter>;
  footedness?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  generationId?: InputMaybe<IntFilter>;
  heightMeters?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  isAcademy?: InputMaybe<BoolFilter>;
  isInitial?: InputMaybe<BoolFilter>;
  isReserve?: InputMaybe<BoolFilter>;
  isRevealed?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  morale?: InputMaybe<MoraleRelationFilter>;
  nationality?: InputMaybe<StringFilter>;
  newsFeed?: InputMaybe<NewsItemListRelationFilter>;
  originClub?: InputMaybe<ClubRelationFilter>;
  originClubId?: InputMaybe<IntFilter>;
  overallRating?: InputMaybe<FloatFilter>;
  playerAttributes?: InputMaybe<PlayerAttributesListRelationFilter>;
  playerLineups?: InputMaybe<PlayerLineupListRelationFilter>;
  playerStatsRecord?: InputMaybe<PlayerStatsRecordListRelationFilter>;
  potential?: InputMaybe<IntFilter>;
  preferredPosition?: InputMaybe<StringFilter>;
  price?: InputMaybe<StringNullableFilter>;
  rarity?: InputMaybe<StringFilter>;
  seed?: InputMaybe<StringFilter>;
  weakFootAbility?: InputMaybe<IntFilter>;
};

export type PlayerWhereUniqueInput = {
  assetId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
};

export type Pool = {
  __typename?: 'Pool';
  _count?: Maybe<PoolCount>;
  competition: Competition;
  competitionId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  values: Array<PoolsOnValues>;
};


export type PoolValuesArgs = {
  cursor?: InputMaybe<PoolsOnValuesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolsOnValuesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolsOnValuesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};

export type PoolAvgAggregate = {
  __typename?: 'PoolAvgAggregate';
  competitionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PoolAvgOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PoolCount = {
  __typename?: 'PoolCount';
  values: Scalars['Int'];
};

export type PoolCountAggregate = {
  __typename?: 'PoolCountAggregate';
  _all: Scalars['Int'];
  competitionId: Scalars['Int'];
  dummy: Scalars['Int'];
  id: Scalars['Int'];
};

export type PoolCountOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PoolCreateInput = {
  competition: CompetitionCreateNestedOneWithoutPrizePoolsInput;
  dummy?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutPoolInput>;
};

export type PoolCreateManyCompetitionInput = {
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type PoolCreateManyCompetitionInputEnvelope = {
  data: Array<PoolCreateManyCompetitionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PoolCreateManyInput = {
  competitionId: Scalars['Int'];
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type PoolCreateNestedManyWithoutCompetitionInput = {
  connect?: InputMaybe<Array<PoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolCreateOrConnectWithoutCompetitionInput>>;
  create?: InputMaybe<Array<PoolCreateWithoutCompetitionInput>>;
  createMany?: InputMaybe<PoolCreateManyCompetitionInputEnvelope>;
};

export type PoolCreateNestedOneWithoutValuesInput = {
  connect?: InputMaybe<PoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PoolCreateOrConnectWithoutValuesInput>;
  create?: InputMaybe<PoolCreateWithoutValuesInput>;
};

export type PoolCreateOrConnectWithoutCompetitionInput = {
  create: PoolCreateWithoutCompetitionInput;
  where: PoolWhereUniqueInput;
};

export type PoolCreateOrConnectWithoutValuesInput = {
  create: PoolCreateWithoutValuesInput;
  where: PoolWhereUniqueInput;
};

export type PoolCreateWithoutCompetitionInput = {
  dummy?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutPoolInput>;
};

export type PoolCreateWithoutValuesInput = {
  competition: CompetitionCreateNestedOneWithoutPrizePoolsInput;
  dummy?: InputMaybe<Scalars['String']>;
};

export type PoolGroupBy = {
  __typename?: 'PoolGroupBy';
  _avg?: Maybe<PoolAvgAggregate>;
  _count?: Maybe<PoolCountAggregate>;
  _max?: Maybe<PoolMaxAggregate>;
  _min?: Maybe<PoolMinAggregate>;
  _sum?: Maybe<PoolSumAggregate>;
  competitionId: Scalars['Int'];
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type PoolListRelationFilter = {
  every?: InputMaybe<PoolWhereInput>;
  none?: InputMaybe<PoolWhereInput>;
  some?: InputMaybe<PoolWhereInput>;
};

export type PoolMaxAggregate = {
  __typename?: 'PoolMaxAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type PoolMaxOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PoolMinAggregate = {
  __typename?: 'PoolMinAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type PoolMinOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PoolOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PoolOrderByWithAggregationInput = {
  _avg?: InputMaybe<PoolAvgOrderByAggregateInput>;
  _count?: InputMaybe<PoolCountOrderByAggregateInput>;
  _max?: InputMaybe<PoolMaxOrderByAggregateInput>;
  _min?: InputMaybe<PoolMinOrderByAggregateInput>;
  _sum?: InputMaybe<PoolSumOrderByAggregateInput>;
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PoolOrderByWithRelationInput = {
  competition?: InputMaybe<CompetitionOrderByWithRelationInput>;
  competitionId?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  values?: InputMaybe<PoolsOnValuesOrderByRelationAggregateInput>;
};

export type PoolRelationFilter = {
  is?: InputMaybe<PoolWhereInput>;
  isNot?: InputMaybe<PoolWhereInput>;
};

export enum PoolScalarFieldEnum {
  CompetitionId = 'competitionId',
  Dummy = 'dummy',
  Id = 'id'
}

export type PoolScalarWhereInput = {
  AND?: InputMaybe<Array<PoolScalarWhereInput>>;
  NOT?: InputMaybe<Array<PoolScalarWhereInput>>;
  OR?: InputMaybe<Array<PoolScalarWhereInput>>;
  competitionId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
};

export type PoolScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PoolScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PoolScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PoolScalarWhereWithAggregatesInput>>;
  competitionId?: InputMaybe<IntWithAggregatesFilter>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type PoolSumAggregate = {
  __typename?: 'PoolSumAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PoolSumOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PoolUpdateInput = {
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutPrizePoolsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  values?: InputMaybe<PoolsOnValuesUpdateManyWithoutPoolInput>;
};

export type PoolUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PoolUpdateManyWithWhereWithoutCompetitionInput = {
  data: PoolUpdateManyMutationInput;
  where: PoolScalarWhereInput;
};

export type PoolUpdateManyWithoutCompetitionInput = {
  connect?: InputMaybe<Array<PoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolCreateOrConnectWithoutCompetitionInput>>;
  create?: InputMaybe<Array<PoolCreateWithoutCompetitionInput>>;
  createMany?: InputMaybe<PoolCreateManyCompetitionInputEnvelope>;
  delete?: InputMaybe<Array<PoolWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PoolScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PoolWhereUniqueInput>>;
  set?: InputMaybe<Array<PoolWhereUniqueInput>>;
  update?: InputMaybe<Array<PoolUpdateWithWhereUniqueWithoutCompetitionInput>>;
  updateMany?: InputMaybe<Array<PoolUpdateManyWithWhereWithoutCompetitionInput>>;
  upsert?: InputMaybe<Array<PoolUpsertWithWhereUniqueWithoutCompetitionInput>>;
};

export type PoolUpdateOneRequiredWithoutValuesInput = {
  connect?: InputMaybe<PoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PoolCreateOrConnectWithoutValuesInput>;
  create?: InputMaybe<PoolCreateWithoutValuesInput>;
  update?: InputMaybe<PoolUpdateWithoutValuesInput>;
  upsert?: InputMaybe<PoolUpsertWithoutValuesInput>;
};

export type PoolUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: PoolUpdateWithoutCompetitionInput;
  where: PoolWhereUniqueInput;
};

export type PoolUpdateWithoutCompetitionInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  values?: InputMaybe<PoolsOnValuesUpdateManyWithoutPoolInput>;
};

export type PoolUpdateWithoutValuesInput = {
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutPrizePoolsInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PoolUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: PoolCreateWithoutCompetitionInput;
  update: PoolUpdateWithoutCompetitionInput;
  where: PoolWhereUniqueInput;
};

export type PoolUpsertWithoutValuesInput = {
  create: PoolCreateWithoutValuesInput;
  update: PoolUpdateWithoutValuesInput;
};

export type PoolWhereInput = {
  AND?: InputMaybe<Array<PoolWhereInput>>;
  NOT?: InputMaybe<Array<PoolWhereInput>>;
  OR?: InputMaybe<Array<PoolWhereInput>>;
  competition?: InputMaybe<CompetitionRelationFilter>;
  competitionId?: InputMaybe<IntFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  values?: InputMaybe<PoolsOnValuesListRelationFilter>;
};

export type PoolWhereUniqueInput = {
  competitionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type PoolsOnValues = {
  __typename?: 'PoolsOnValues';
  dummy?: Maybe<Scalars['String']>;
  pool: Pool;
  poolId: Scalars['Int'];
  value: Value;
  valueId: Scalars['Int'];
};

export type PoolsOnValuesAvgAggregate = {
  __typename?: 'PoolsOnValuesAvgAggregate';
  poolId?: Maybe<Scalars['Float']>;
  valueId?: Maybe<Scalars['Float']>;
};

export type PoolsOnValuesAvgOrderByAggregateInput = {
  poolId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PoolsOnValuesCountAggregate = {
  __typename?: 'PoolsOnValuesCountAggregate';
  _all: Scalars['Int'];
  dummy: Scalars['Int'];
  poolId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type PoolsOnValuesCountOrderByAggregateInput = {
  dummy?: InputMaybe<SortOrder>;
  poolId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PoolsOnValuesCreateInput = {
  dummy?: InputMaybe<Scalars['String']>;
  pool: PoolCreateNestedOneWithoutValuesInput;
  value: ValueCreateNestedOneWithoutPoolsOnValuesInput;
};

export type PoolsOnValuesCreateManyInput = {
  dummy?: InputMaybe<Scalars['String']>;
  poolId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type PoolsOnValuesCreateManyPoolInput = {
  dummy?: InputMaybe<Scalars['String']>;
  valueId: Scalars['Int'];
};

export type PoolsOnValuesCreateManyPoolInputEnvelope = {
  data: Array<PoolsOnValuesCreateManyPoolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PoolsOnValuesCreateManyValueInput = {
  dummy?: InputMaybe<Scalars['String']>;
  poolId: Scalars['Int'];
};

export type PoolsOnValuesCreateManyValueInputEnvelope = {
  data: Array<PoolsOnValuesCreateManyValueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PoolsOnValuesCreateNestedManyWithoutPoolInput = {
  connect?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolsOnValuesCreateOrConnectWithoutPoolInput>>;
  create?: InputMaybe<Array<PoolsOnValuesCreateWithoutPoolInput>>;
  createMany?: InputMaybe<PoolsOnValuesCreateManyPoolInputEnvelope>;
};

export type PoolsOnValuesCreateNestedManyWithoutValueInput = {
  connect?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolsOnValuesCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<PoolsOnValuesCreateWithoutValueInput>>;
  createMany?: InputMaybe<PoolsOnValuesCreateManyValueInputEnvelope>;
};

export type PoolsOnValuesCreateOrConnectWithoutPoolInput = {
  create: PoolsOnValuesCreateWithoutPoolInput;
  where: PoolsOnValuesWhereUniqueInput;
};

export type PoolsOnValuesCreateOrConnectWithoutValueInput = {
  create: PoolsOnValuesCreateWithoutValueInput;
  where: PoolsOnValuesWhereUniqueInput;
};

export type PoolsOnValuesCreateWithoutPoolInput = {
  dummy?: InputMaybe<Scalars['String']>;
  value: ValueCreateNestedOneWithoutPoolsOnValuesInput;
};

export type PoolsOnValuesCreateWithoutValueInput = {
  dummy?: InputMaybe<Scalars['String']>;
  pool: PoolCreateNestedOneWithoutValuesInput;
};

export type PoolsOnValuesGroupBy = {
  __typename?: 'PoolsOnValuesGroupBy';
  _avg?: Maybe<PoolsOnValuesAvgAggregate>;
  _count?: Maybe<PoolsOnValuesCountAggregate>;
  _max?: Maybe<PoolsOnValuesMaxAggregate>;
  _min?: Maybe<PoolsOnValuesMinAggregate>;
  _sum?: Maybe<PoolsOnValuesSumAggregate>;
  dummy?: Maybe<Scalars['String']>;
  poolId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type PoolsOnValuesListRelationFilter = {
  every?: InputMaybe<PoolsOnValuesWhereInput>;
  none?: InputMaybe<PoolsOnValuesWhereInput>;
  some?: InputMaybe<PoolsOnValuesWhereInput>;
};

export type PoolsOnValuesMaxAggregate = {
  __typename?: 'PoolsOnValuesMaxAggregate';
  dummy?: Maybe<Scalars['String']>;
  poolId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type PoolsOnValuesMaxOrderByAggregateInput = {
  dummy?: InputMaybe<SortOrder>;
  poolId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PoolsOnValuesMinAggregate = {
  __typename?: 'PoolsOnValuesMinAggregate';
  dummy?: Maybe<Scalars['String']>;
  poolId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type PoolsOnValuesMinOrderByAggregateInput = {
  dummy?: InputMaybe<SortOrder>;
  poolId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PoolsOnValuesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PoolsOnValuesOrderByWithAggregationInput = {
  _avg?: InputMaybe<PoolsOnValuesAvgOrderByAggregateInput>;
  _count?: InputMaybe<PoolsOnValuesCountOrderByAggregateInput>;
  _max?: InputMaybe<PoolsOnValuesMaxOrderByAggregateInput>;
  _min?: InputMaybe<PoolsOnValuesMinOrderByAggregateInput>;
  _sum?: InputMaybe<PoolsOnValuesSumOrderByAggregateInput>;
  dummy?: InputMaybe<SortOrder>;
  poolId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PoolsOnValuesOrderByWithRelationInput = {
  dummy?: InputMaybe<SortOrder>;
  pool?: InputMaybe<PoolOrderByWithRelationInput>;
  poolId?: InputMaybe<SortOrder>;
  value?: InputMaybe<ValueOrderByWithRelationInput>;
  valueId?: InputMaybe<SortOrder>;
};

export enum PoolsOnValuesScalarFieldEnum {
  Dummy = 'dummy',
  PoolId = 'poolId',
  ValueId = 'valueId'
}

export type PoolsOnValuesScalarWhereInput = {
  AND?: InputMaybe<Array<PoolsOnValuesScalarWhereInput>>;
  NOT?: InputMaybe<Array<PoolsOnValuesScalarWhereInput>>;
  OR?: InputMaybe<Array<PoolsOnValuesScalarWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  poolId?: InputMaybe<IntFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type PoolsOnValuesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PoolsOnValuesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PoolsOnValuesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PoolsOnValuesScalarWhereWithAggregatesInput>>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  poolId?: InputMaybe<IntWithAggregatesFilter>;
  valueId?: InputMaybe<IntWithAggregatesFilter>;
};

export type PoolsOnValuesSumAggregate = {
  __typename?: 'PoolsOnValuesSumAggregate';
  poolId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type PoolsOnValuesSumOrderByAggregateInput = {
  poolId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PoolsOnValuesUpdateInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pool?: InputMaybe<PoolUpdateOneRequiredWithoutValuesInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutPoolsOnValuesInput>;
};

export type PoolsOnValuesUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PoolsOnValuesUpdateManyWithWhereWithoutPoolInput = {
  data: PoolsOnValuesUpdateManyMutationInput;
  where: PoolsOnValuesScalarWhereInput;
};

export type PoolsOnValuesUpdateManyWithWhereWithoutValueInput = {
  data: PoolsOnValuesUpdateManyMutationInput;
  where: PoolsOnValuesScalarWhereInput;
};

export type PoolsOnValuesUpdateManyWithoutPoolInput = {
  connect?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolsOnValuesCreateOrConnectWithoutPoolInput>>;
  create?: InputMaybe<Array<PoolsOnValuesCreateWithoutPoolInput>>;
  createMany?: InputMaybe<PoolsOnValuesCreateManyPoolInputEnvelope>;
  delete?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PoolsOnValuesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  set?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  update?: InputMaybe<Array<PoolsOnValuesUpdateWithWhereUniqueWithoutPoolInput>>;
  updateMany?: InputMaybe<Array<PoolsOnValuesUpdateManyWithWhereWithoutPoolInput>>;
  upsert?: InputMaybe<Array<PoolsOnValuesUpsertWithWhereUniqueWithoutPoolInput>>;
};

export type PoolsOnValuesUpdateManyWithoutValueInput = {
  connect?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolsOnValuesCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<PoolsOnValuesCreateWithoutValueInput>>;
  createMany?: InputMaybe<PoolsOnValuesCreateManyValueInputEnvelope>;
  delete?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PoolsOnValuesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  set?: InputMaybe<Array<PoolsOnValuesWhereUniqueInput>>;
  update?: InputMaybe<Array<PoolsOnValuesUpdateWithWhereUniqueWithoutValueInput>>;
  updateMany?: InputMaybe<Array<PoolsOnValuesUpdateManyWithWhereWithoutValueInput>>;
  upsert?: InputMaybe<Array<PoolsOnValuesUpsertWithWhereUniqueWithoutValueInput>>;
};

export type PoolsOnValuesUpdateWithWhereUniqueWithoutPoolInput = {
  data: PoolsOnValuesUpdateWithoutPoolInput;
  where: PoolsOnValuesWhereUniqueInput;
};

export type PoolsOnValuesUpdateWithWhereUniqueWithoutValueInput = {
  data: PoolsOnValuesUpdateWithoutValueInput;
  where: PoolsOnValuesWhereUniqueInput;
};

export type PoolsOnValuesUpdateWithoutPoolInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutPoolsOnValuesInput>;
};

export type PoolsOnValuesUpdateWithoutValueInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pool?: InputMaybe<PoolUpdateOneRequiredWithoutValuesInput>;
};

export type PoolsOnValuesUpsertWithWhereUniqueWithoutPoolInput = {
  create: PoolsOnValuesCreateWithoutPoolInput;
  update: PoolsOnValuesUpdateWithoutPoolInput;
  where: PoolsOnValuesWhereUniqueInput;
};

export type PoolsOnValuesUpsertWithWhereUniqueWithoutValueInput = {
  create: PoolsOnValuesCreateWithoutValueInput;
  update: PoolsOnValuesUpdateWithoutValueInput;
  where: PoolsOnValuesWhereUniqueInput;
};

export type PoolsOnValuesValueIdPoolIdCompoundUniqueInput = {
  poolId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type PoolsOnValuesWhereInput = {
  AND?: InputMaybe<Array<PoolsOnValuesWhereInput>>;
  NOT?: InputMaybe<Array<PoolsOnValuesWhereInput>>;
  OR?: InputMaybe<Array<PoolsOnValuesWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  pool?: InputMaybe<PoolRelationFilter>;
  poolId?: InputMaybe<IntFilter>;
  value?: InputMaybe<ValueRelationFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type PoolsOnValuesWhereUniqueInput = {
  valueId_poolId?: InputMaybe<PoolsOnValuesValueIdPoolIdCompoundUniqueInput>;
};

export type Prize = {
  __typename?: 'Prize';
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  id: Scalars['Int'];
  tournament: Tournament;
  tournamentId: Scalars['Int'];
  value: Value;
  valueId: Scalars['Int'];
};

export type PrizeAvgAggregate = {
  __typename?: 'PrizeAvgAggregate';
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tournamentId?: Maybe<Scalars['Float']>;
  valueId?: Maybe<Scalars['Float']>;
};

export type PrizeAvgOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PrizeCountAggregate = {
  __typename?: 'PrizeCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  tournamentId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type PrizeCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PrizeCreateInput = {
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  tournament: TournamentCreateNestedOneWithoutPrizesInput;
  value: ValueCreateNestedOneWithoutPrizeInput;
};

export type PrizeCreateManyInput = {
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  tournamentId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type PrizeCreateManyTournamentInput = {
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  valueId: Scalars['Int'];
};

export type PrizeCreateManyTournamentInputEnvelope = {
  data: Array<PrizeCreateManyTournamentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PrizeCreateManyValueInput = {
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  tournamentId: Scalars['Int'];
};

export type PrizeCreateManyValueInputEnvelope = {
  data: Array<PrizeCreateManyValueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PrizeCreateNestedManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PrizeCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<PrizeCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<PrizeCreateManyTournamentInputEnvelope>;
};

export type PrizeCreateNestedManyWithoutValueInput = {
  connect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PrizeCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<PrizeCreateWithoutValueInput>>;
  createMany?: InputMaybe<PrizeCreateManyValueInputEnvelope>;
};

export type PrizeCreateOrConnectWithoutTournamentInput = {
  create: PrizeCreateWithoutTournamentInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeCreateOrConnectWithoutValueInput = {
  create: PrizeCreateWithoutValueInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeCreateWithoutTournamentInput = {
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  value: ValueCreateNestedOneWithoutPrizeInput;
};

export type PrizeCreateWithoutValueInput = {
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  tournament: TournamentCreateNestedOneWithoutPrizesInput;
};

export type PrizeGroupBy = {
  __typename?: 'PrizeGroupBy';
  _avg?: Maybe<PrizeAvgAggregate>;
  _count?: Maybe<PrizeCountAggregate>;
  _max?: Maybe<PrizeMaxAggregate>;
  _min?: Maybe<PrizeMinAggregate>;
  _sum?: Maybe<PrizeSumAggregate>;
  address: Scalars['String'];
  createdAt: Scalars['Float'];
  id: Scalars['Int'];
  tournamentId: Scalars['Int'];
  valueId: Scalars['Int'];
};

export type PrizeListRelationFilter = {
  every?: InputMaybe<PrizeWhereInput>;
  none?: InputMaybe<PrizeWhereInput>;
  some?: InputMaybe<PrizeWhereInput>;
};

export type PrizeMaxAggregate = {
  __typename?: 'PrizeMaxAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type PrizeMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PrizeMerkleProof = {
  __typename?: 'PrizeMerkleProof';
  proof: Scalars['Proof'];
};

export type PrizeMerkleRoot = {
  __typename?: 'PrizeMerkleRoot';
  root: Scalars['Root'];
};

export type PrizeMinAggregate = {
  __typename?: 'PrizeMinAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type PrizeMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PrizeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PrizeOrderByWithAggregationInput = {
  _avg?: InputMaybe<PrizeAvgOrderByAggregateInput>;
  _count?: InputMaybe<PrizeCountOrderByAggregateInput>;
  _max?: InputMaybe<PrizeMaxOrderByAggregateInput>;
  _min?: InputMaybe<PrizeMinOrderByAggregateInput>;
  _sum?: InputMaybe<PrizeSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PrizeOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
  value?: InputMaybe<ValueOrderByWithRelationInput>;
  valueId?: InputMaybe<SortOrder>;
};

export enum PrizeScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  Id = 'id',
  TournamentId = 'tournamentId',
  ValueId = 'valueId'
}

export type PrizeScalarWhereInput = {
  AND?: InputMaybe<Array<PrizeScalarWhereInput>>;
  NOT?: InputMaybe<Array<PrizeScalarWhereInput>>;
  OR?: InputMaybe<Array<PrizeScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IntFilter>;
  tournamentId?: InputMaybe<IntFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type PrizeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PrizeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PrizeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PrizeScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<FloatWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  tournamentId?: InputMaybe<IntWithAggregatesFilter>;
  valueId?: InputMaybe<IntWithAggregatesFilter>;
};

export type PrizeSumAggregate = {
  __typename?: 'PrizeSumAggregate';
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
  valueId?: Maybe<Scalars['Int']>;
};

export type PrizeSumOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
  valueId?: InputMaybe<SortOrder>;
};

export type PrizeUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutPrizesInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutPrizeInput>;
};

export type PrizeUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PrizeUpdateManyWithWhereWithoutTournamentInput = {
  data: PrizeUpdateManyMutationInput;
  where: PrizeScalarWhereInput;
};

export type PrizeUpdateManyWithWhereWithoutValueInput = {
  data: PrizeUpdateManyMutationInput;
  where: PrizeScalarWhereInput;
};

export type PrizeUpdateManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PrizeCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<PrizeCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<PrizeCreateManyTournamentInputEnvelope>;
  delete?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PrizeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  set?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  update?: InputMaybe<Array<PrizeUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: InputMaybe<Array<PrizeUpdateManyWithWhereWithoutTournamentInput>>;
  upsert?: InputMaybe<Array<PrizeUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type PrizeUpdateManyWithoutValueInput = {
  connect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PrizeCreateOrConnectWithoutValueInput>>;
  create?: InputMaybe<Array<PrizeCreateWithoutValueInput>>;
  createMany?: InputMaybe<PrizeCreateManyValueInputEnvelope>;
  delete?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PrizeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  set?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  update?: InputMaybe<Array<PrizeUpdateWithWhereUniqueWithoutValueInput>>;
  updateMany?: InputMaybe<Array<PrizeUpdateManyWithWhereWithoutValueInput>>;
  upsert?: InputMaybe<Array<PrizeUpsertWithWhereUniqueWithoutValueInput>>;
};

export type PrizeUpdateWithWhereUniqueWithoutTournamentInput = {
  data: PrizeUpdateWithoutTournamentInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeUpdateWithWhereUniqueWithoutValueInput = {
  data: PrizeUpdateWithoutValueInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeUpdateWithoutTournamentInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  value?: InputMaybe<ValueUpdateOneRequiredWithoutPrizeInput>;
};

export type PrizeUpdateWithoutValueInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutPrizesInput>;
};

export type PrizeUpsertWithWhereUniqueWithoutTournamentInput = {
  create: PrizeCreateWithoutTournamentInput;
  update: PrizeUpdateWithoutTournamentInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeUpsertWithWhereUniqueWithoutValueInput = {
  create: PrizeCreateWithoutValueInput;
  update: PrizeUpdateWithoutValueInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeWhereInput = {
  AND?: InputMaybe<Array<PrizeWhereInput>>;
  NOT?: InputMaybe<Array<PrizeWhereInput>>;
  OR?: InputMaybe<Array<PrizeWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
  value?: InputMaybe<ValueRelationFilter>;
  valueId?: InputMaybe<IntFilter>;
};

export type PrizeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  valueId?: InputMaybe<Scalars['Int']>;
};

export type PromotionSelector = {
  __typename?: 'PromotionSelector';
  competitionFrom: Competition;
  competitionIdFrom: Scalars['Int'];
  competitionIdTo: Scalars['Int'];
  end: Scalars['JSON'];
  id: Scalars['Int'];
  start: Scalars['JSON'];
  type: Scalars['String'];
};

export type PromotionSelectorAvgAggregate = {
  __typename?: 'PromotionSelectorAvgAggregate';
  competitionIdFrom?: Maybe<Scalars['Float']>;
  competitionIdTo?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PromotionSelectorAvgOrderByAggregateInput = {
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PromotionSelectorCountAggregate = {
  __typename?: 'PromotionSelectorCountAggregate';
  _all: Scalars['Int'];
  competitionIdFrom: Scalars['Int'];
  competitionIdTo: Scalars['Int'];
  end: Scalars['Int'];
  id: Scalars['Int'];
  start: Scalars['Int'];
  type: Scalars['Int'];
};

export type PromotionSelectorCountOrderByAggregateInput = {
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PromotionSelectorCreateInput = {
  competitionFrom: CompetitionCreateNestedOneWithoutPromotionSelectorsFromInput;
  competitionIdTo: Scalars['Int'];
  end: Scalars['JSON'];
  start: Scalars['JSON'];
  type: Scalars['String'];
};

export type PromotionSelectorCreateManyCompetitionFromInput = {
  competitionIdTo: Scalars['Int'];
  end: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  start: Scalars['JSON'];
  type: Scalars['String'];
};

export type PromotionSelectorCreateManyCompetitionFromInputEnvelope = {
  data: Array<PromotionSelectorCreateManyCompetitionFromInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PromotionSelectorCreateManyInput = {
  competitionIdFrom: Scalars['Int'];
  competitionIdTo: Scalars['Int'];
  end: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  start: Scalars['JSON'];
  type: Scalars['String'];
};

export type PromotionSelectorCreateNestedManyWithoutCompetitionFromInput = {
  connect?: InputMaybe<Array<PromotionSelectorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromotionSelectorCreateOrConnectWithoutCompetitionFromInput>>;
  create?: InputMaybe<Array<PromotionSelectorCreateWithoutCompetitionFromInput>>;
  createMany?: InputMaybe<PromotionSelectorCreateManyCompetitionFromInputEnvelope>;
};

export type PromotionSelectorCreateOrConnectWithoutCompetitionFromInput = {
  create: PromotionSelectorCreateWithoutCompetitionFromInput;
  where: PromotionSelectorWhereUniqueInput;
};

export type PromotionSelectorCreateWithoutCompetitionFromInput = {
  competitionIdTo: Scalars['Int'];
  end: Scalars['JSON'];
  start: Scalars['JSON'];
  type: Scalars['String'];
};

export type PromotionSelectorGroupBy = {
  __typename?: 'PromotionSelectorGroupBy';
  _avg?: Maybe<PromotionSelectorAvgAggregate>;
  _count?: Maybe<PromotionSelectorCountAggregate>;
  _max?: Maybe<PromotionSelectorMaxAggregate>;
  _min?: Maybe<PromotionSelectorMinAggregate>;
  _sum?: Maybe<PromotionSelectorSumAggregate>;
  competitionIdFrom: Scalars['Int'];
  competitionIdTo: Scalars['Int'];
  end: Scalars['JSON'];
  id: Scalars['Int'];
  start: Scalars['JSON'];
  type: Scalars['String'];
};

export type PromotionSelectorListRelationFilter = {
  every?: InputMaybe<PromotionSelectorWhereInput>;
  none?: InputMaybe<PromotionSelectorWhereInput>;
  some?: InputMaybe<PromotionSelectorWhereInput>;
};

export type PromotionSelectorMaxAggregate = {
  __typename?: 'PromotionSelectorMaxAggregate';
  competitionIdFrom?: Maybe<Scalars['Int']>;
  competitionIdTo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type PromotionSelectorMaxOrderByAggregateInput = {
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PromotionSelectorMinAggregate = {
  __typename?: 'PromotionSelectorMinAggregate';
  competitionIdFrom?: Maybe<Scalars['Int']>;
  competitionIdTo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type PromotionSelectorMinOrderByAggregateInput = {
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PromotionSelectorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PromotionSelectorOrderByWithAggregationInput = {
  _avg?: InputMaybe<PromotionSelectorAvgOrderByAggregateInput>;
  _count?: InputMaybe<PromotionSelectorCountOrderByAggregateInput>;
  _max?: InputMaybe<PromotionSelectorMaxOrderByAggregateInput>;
  _min?: InputMaybe<PromotionSelectorMinOrderByAggregateInput>;
  _sum?: InputMaybe<PromotionSelectorSumOrderByAggregateInput>;
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type PromotionSelectorOrderByWithRelationInput = {
  competitionFrom?: InputMaybe<CompetitionOrderByWithRelationInput>;
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum PromotionSelectorScalarFieldEnum {
  CompetitionIdFrom = 'competitionIdFrom',
  CompetitionIdTo = 'competitionIdTo',
  End = 'end',
  Id = 'id',
  Start = 'start',
  Type = 'type'
}

export type PromotionSelectorScalarWhereInput = {
  AND?: InputMaybe<Array<PromotionSelectorScalarWhereInput>>;
  NOT?: InputMaybe<Array<PromotionSelectorScalarWhereInput>>;
  OR?: InputMaybe<Array<PromotionSelectorScalarWhereInput>>;
  competitionIdFrom?: InputMaybe<IntFilter>;
  competitionIdTo?: InputMaybe<IntFilter>;
  end?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  start?: InputMaybe<JsonFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PromotionSelectorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PromotionSelectorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PromotionSelectorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PromotionSelectorScalarWhereWithAggregatesInput>>;
  competitionIdFrom?: InputMaybe<IntWithAggregatesFilter>;
  competitionIdTo?: InputMaybe<IntWithAggregatesFilter>;
  end?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  start?: InputMaybe<JsonWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
};

export type PromotionSelectorSumAggregate = {
  __typename?: 'PromotionSelectorSumAggregate';
  competitionIdFrom?: Maybe<Scalars['Int']>;
  competitionIdTo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PromotionSelectorSumOrderByAggregateInput = {
  competitionIdFrom?: InputMaybe<SortOrder>;
  competitionIdTo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PromotionSelectorUpdateInput = {
  competitionFrom?: InputMaybe<CompetitionUpdateOneRequiredWithoutPromotionSelectorsFromInput>;
  competitionIdTo?: InputMaybe<IntFieldUpdateOperationsInput>;
  end?: InputMaybe<Scalars['JSON']>;
  start?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PromotionSelectorUpdateManyMutationInput = {
  competitionIdTo?: InputMaybe<IntFieldUpdateOperationsInput>;
  end?: InputMaybe<Scalars['JSON']>;
  start?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PromotionSelectorUpdateManyWithWhereWithoutCompetitionFromInput = {
  data: PromotionSelectorUpdateManyMutationInput;
  where: PromotionSelectorScalarWhereInput;
};

export type PromotionSelectorUpdateManyWithoutCompetitionFromInput = {
  connect?: InputMaybe<Array<PromotionSelectorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromotionSelectorCreateOrConnectWithoutCompetitionFromInput>>;
  create?: InputMaybe<Array<PromotionSelectorCreateWithoutCompetitionFromInput>>;
  createMany?: InputMaybe<PromotionSelectorCreateManyCompetitionFromInputEnvelope>;
  delete?: InputMaybe<Array<PromotionSelectorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PromotionSelectorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PromotionSelectorWhereUniqueInput>>;
  set?: InputMaybe<Array<PromotionSelectorWhereUniqueInput>>;
  update?: InputMaybe<Array<PromotionSelectorUpdateWithWhereUniqueWithoutCompetitionFromInput>>;
  updateMany?: InputMaybe<Array<PromotionSelectorUpdateManyWithWhereWithoutCompetitionFromInput>>;
  upsert?: InputMaybe<Array<PromotionSelectorUpsertWithWhereUniqueWithoutCompetitionFromInput>>;
};

export type PromotionSelectorUpdateWithWhereUniqueWithoutCompetitionFromInput = {
  data: PromotionSelectorUpdateWithoutCompetitionFromInput;
  where: PromotionSelectorWhereUniqueInput;
};

export type PromotionSelectorUpdateWithoutCompetitionFromInput = {
  competitionIdTo?: InputMaybe<IntFieldUpdateOperationsInput>;
  end?: InputMaybe<Scalars['JSON']>;
  start?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PromotionSelectorUpsertWithWhereUniqueWithoutCompetitionFromInput = {
  create: PromotionSelectorCreateWithoutCompetitionFromInput;
  update: PromotionSelectorUpdateWithoutCompetitionFromInput;
  where: PromotionSelectorWhereUniqueInput;
};

export type PromotionSelectorWhereInput = {
  AND?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  NOT?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  OR?: InputMaybe<Array<PromotionSelectorWhereInput>>;
  competitionFrom?: InputMaybe<CompetitionRelationFilter>;
  competitionIdFrom?: InputMaybe<IntFilter>;
  competitionIdTo?: InputMaybe<IntFilter>;
  end?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  start?: InputMaybe<JsonFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PromotionSelectorWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  academies: Array<Academy>;
  academy?: Maybe<Academy>;
  academyMintFee?: Maybe<AcademyMintFee>;
  academyMintFees: Array<AcademyMintFee>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  aggregateAcademy: AggregateAcademy;
  aggregateAcademyMintFee: AggregateAcademyMintFee;
  aggregateAction: AggregateAction;
  aggregateAvailableHomeGameTime: AggregateAvailableHomeGameTime;
  aggregateClaim: AggregateClaim;
  aggregateClub: AggregateClub;
  aggregateClubBadge: AggregateClubBadge;
  aggregateClubBalance: AggregateClubBalance;
  aggregateClubFixture: AggregateClubFixture;
  aggregateClubStats: AggregateClubStats;
  aggregateClubTournament: AggregateClubTournament;
  aggregateCompetition: AggregateCompetition;
  aggregateCompetitionPlayerStats: AggregateCompetitionPlayerStats;
  aggregateDivision: AggregateDivision;
  aggregateEthereumEvent: AggregateEthereumEvent;
  aggregateFixture: AggregateFixture;
  aggregateFormation: AggregateFormation;
  aggregateFormationSlot: AggregateFormationSlot;
  aggregateKit: AggregateKit;
  aggregateLineup: AggregateLineup;
  aggregateMatch: AggregateMatch;
  aggregateMerkleRoot: AggregateMerkleRoot;
  aggregateMetadata: AggregateMetadata;
  aggregateMorale: AggregateMorale;
  aggregateNewsItem: AggregateNewsItem;
  aggregateOwner: AggregateOwner;
  aggregatePlayer: AggregatePlayer;
  aggregatePlayerAttributes: AggregatePlayerAttributes;
  aggregatePlayerAttributesPositionalRating: AggregatePlayerAttributesPositionalRating;
  aggregatePlayerLineup: AggregatePlayerLineup;
  aggregatePlayerStatsRecord: AggregatePlayerStatsRecord;
  aggregatePool: AggregatePool;
  aggregatePoolsOnValues: AggregatePoolsOnValues;
  aggregatePrize: AggregatePrize;
  aggregatePromotionSelector: AggregatePromotionSelector;
  aggregateSeason: AggregateSeason;
  aggregateStadium: AggregateStadium;
  aggregateStadiumStand: AggregateStadiumStand;
  aggregateTactics: AggregateTactics;
  aggregateToken: AggregateToken;
  aggregateTournament: AggregateTournament;
  aggregateTournamentPlayerStats: AggregateTournamentPlayerStats;
  aggregateValue: AggregateValue;
  availableHomeGameTime?: Maybe<AvailableHomeGameTime>;
  availableHomeGameTimes: Array<AvailableHomeGameTime>;
  claim?: Maybe<Claim>;
  claims: Array<Claim>;
  club?: Maybe<Club>;
  clubBadge?: Maybe<ClubBadge>;
  clubBadges: Array<ClubBadge>;
  clubBalance?: Maybe<ClubBalance>;
  clubBalances: Array<ClubBalance>;
  clubFixture?: Maybe<ClubFixture>;
  clubFixtures: Array<ClubFixture>;
  clubTournament?: Maybe<ClubTournament>;
  clubTournaments: Array<ClubTournament>;
  clubs: Array<Club>;
  competition?: Maybe<Competition>;
  competitions: Array<Competition>;
  division?: Maybe<Division>;
  divisionMerkleRoot: DivisionMerkleRoot;
  divisions: Array<Division>;
  ethereumEvent?: Maybe<EthereumEvent>;
  ethereumEvents: Array<EthereumEvent>;
  findFirstAcademy?: Maybe<Academy>;
  findFirstAcademyMintFee?: Maybe<AcademyMintFee>;
  findFirstAction?: Maybe<Action>;
  findFirstAvailableHomeGameTime?: Maybe<AvailableHomeGameTime>;
  findFirstClaim?: Maybe<Claim>;
  findFirstClub?: Maybe<Club>;
  findFirstClubBadge?: Maybe<ClubBadge>;
  findFirstClubBalance?: Maybe<ClubBalance>;
  findFirstClubFixture?: Maybe<ClubFixture>;
  findFirstClubStats?: Maybe<ClubStats>;
  findFirstClubTournament?: Maybe<ClubTournament>;
  findFirstCompetition?: Maybe<Competition>;
  findFirstCompetitionPlayerStats?: Maybe<CompetitionPlayerStats>;
  findFirstDivision?: Maybe<Division>;
  findFirstEthereumEvent?: Maybe<EthereumEvent>;
  findFirstFixture?: Maybe<Fixture>;
  findFirstFormation?: Maybe<Formation>;
  findFirstFormationSlot?: Maybe<FormationSlot>;
  findFirstKit?: Maybe<Kit>;
  findFirstLineup?: Maybe<Lineup>;
  findFirstMatch?: Maybe<Match>;
  findFirstMerkleRoot?: Maybe<MerkleRoot>;
  findFirstMetadata?: Maybe<Metadata>;
  findFirstMorale?: Maybe<Morale>;
  findFirstNewsItem?: Maybe<NewsItem>;
  findFirstOwner?: Maybe<Owner>;
  findFirstPlayer?: Maybe<Player>;
  findFirstPlayerAttributes?: Maybe<PlayerAttributes>;
  findFirstPlayerAttributesPositionalRating?: Maybe<PlayerAttributesPositionalRating>;
  findFirstPlayerLineup?: Maybe<PlayerLineup>;
  findFirstPlayerStatsRecord?: Maybe<PlayerStatsRecord>;
  findFirstPool?: Maybe<Pool>;
  findFirstPoolsOnValues?: Maybe<PoolsOnValues>;
  findFirstPrize?: Maybe<Prize>;
  findFirstPromotionSelector?: Maybe<PromotionSelector>;
  findFirstSeason?: Maybe<Season>;
  findFirstStadium?: Maybe<Stadium>;
  findFirstStadiumStand?: Maybe<StadiumStand>;
  findFirstTactics?: Maybe<Tactics>;
  findFirstToken?: Maybe<Token>;
  findFirstTournament?: Maybe<Tournament>;
  findFirstTournamentPlayerStats?: Maybe<TournamentPlayerStats>;
  findFirstValue?: Maybe<Value>;
  findManyClubStats: Array<ClubStats>;
  findManyCompetitionPlayerStats: Array<CompetitionPlayerStats>;
  findManyMetadata: Array<Metadata>;
  findManyPlayerAttributes: Array<PlayerAttributes>;
  findManyPoolsOnValues: Array<PoolsOnValues>;
  findManyTactics: Array<Tactics>;
  findManyTournamentPlayerStats: Array<TournamentPlayerStats>;
  findUniqueClubStats?: Maybe<ClubStats>;
  findUniqueCompetitionPlayerStats?: Maybe<CompetitionPlayerStats>;
  findUniqueMetadata?: Maybe<Metadata>;
  findUniquePlayerAttributes?: Maybe<PlayerAttributes>;
  findUniquePoolsOnValues?: Maybe<PoolsOnValues>;
  findUniqueTactics?: Maybe<Tactics>;
  findUniqueTournamentPlayerStats?: Maybe<TournamentPlayerStats>;
  fixture?: Maybe<Fixture>;
  fixtures: Array<Fixture>;
  formation?: Maybe<Formation>;
  formationSlot?: Maybe<FormationSlot>;
  formationSlots: Array<FormationSlot>;
  formations: Array<Formation>;
  generateMerkleRoot: PrizeMerkleRoot;
  groupByAcademy: Array<AcademyGroupBy>;
  groupByAcademyMintFee: Array<AcademyMintFeeGroupBy>;
  groupByAction: Array<ActionGroupBy>;
  groupByAvailableHomeGameTime: Array<AvailableHomeGameTimeGroupBy>;
  groupByClaim: Array<ClaimGroupBy>;
  groupByClub: Array<ClubGroupBy>;
  groupByClubBadge: Array<ClubBadgeGroupBy>;
  groupByClubBalance: Array<ClubBalanceGroupBy>;
  groupByClubFixture: Array<ClubFixtureGroupBy>;
  groupByClubStats: Array<ClubStatsGroupBy>;
  groupByClubTournament: Array<ClubTournamentGroupBy>;
  groupByCompetition: Array<CompetitionGroupBy>;
  groupByCompetitionPlayerStats: Array<CompetitionPlayerStatsGroupBy>;
  groupByDivision: Array<DivisionGroupBy>;
  groupByEthereumEvent: Array<EthereumEventGroupBy>;
  groupByFixture: Array<FixtureGroupBy>;
  groupByFormation: Array<FormationGroupBy>;
  groupByFormationSlot: Array<FormationSlotGroupBy>;
  groupByKit: Array<KitGroupBy>;
  groupByLineup: Array<LineupGroupBy>;
  groupByMatch: Array<MatchGroupBy>;
  groupByMerkleRoot: Array<MerkleRootGroupBy>;
  groupByMetadata: Array<MetadataGroupBy>;
  groupByMorale: Array<MoraleGroupBy>;
  groupByNewsItem: Array<NewsItemGroupBy>;
  groupByOwner: Array<OwnerGroupBy>;
  groupByPlayer: Array<PlayerGroupBy>;
  groupByPlayerAttributes: Array<PlayerAttributesGroupBy>;
  groupByPlayerAttributesPositionalRating: Array<PlayerAttributesPositionalRatingGroupBy>;
  groupByPlayerLineup: Array<PlayerLineupGroupBy>;
  groupByPlayerStatsRecord: Array<PlayerStatsRecordGroupBy>;
  groupByPool: Array<PoolGroupBy>;
  groupByPoolsOnValues: Array<PoolsOnValuesGroupBy>;
  groupByPrize: Array<PrizeGroupBy>;
  groupByPromotionSelector: Array<PromotionSelectorGroupBy>;
  groupBySeason: Array<SeasonGroupBy>;
  groupByStadium: Array<StadiumGroupBy>;
  groupByStadiumStand: Array<StadiumStandGroupBy>;
  groupByTactics: Array<TacticsGroupBy>;
  groupByToken: Array<TokenGroupBy>;
  groupByTournament: Array<TournamentGroupBy>;
  groupByTournamentPlayerStats: Array<TournamentPlayerStatsGroupBy>;
  groupByValue: Array<ValueGroupBy>;
  kit?: Maybe<Kit>;
  kits: Array<Kit>;
  lineup?: Maybe<Lineup>;
  lineups: Array<Lineup>;
  match?: Maybe<Match>;
  matches: Array<Match>;
  merkleRoot?: Maybe<MerkleRoot>;
  merkleRoots: Array<MerkleRoot>;
  morale?: Maybe<Morale>;
  morales: Array<Morale>;
  newsItem?: Maybe<NewsItem>;
  newsItems: Array<NewsItem>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  player?: Maybe<Player>;
  playerAttributesPositionalRating?: Maybe<PlayerAttributesPositionalRating>;
  playerAttributesPositionalRatings: Array<PlayerAttributesPositionalRating>;
  playerLineup?: Maybe<PlayerLineup>;
  playerLineups: Array<PlayerLineup>;
  playerStatsRecord?: Maybe<PlayerStatsRecord>;
  playerStatsRecords: Array<PlayerStatsRecord>;
  players: Array<Player>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  prize?: Maybe<Prize>;
  prizeMerkleProof: PrizeMerkleProof;
  prizes: Array<Prize>;
  promotionSelector?: Maybe<PromotionSelector>;
  promotionSelectors: Array<PromotionSelector>;
  season?: Maybe<Season>;
  seasons: Array<Season>;
  stadium?: Maybe<Stadium>;
  stadiumStand?: Maybe<StadiumStand>;
  stadiumStands: Array<StadiumStand>;
  stadiums: Array<Stadium>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tournament?: Maybe<Tournament>;
  tournaments: Array<Tournament>;
  value?: Maybe<Value>;
  values: Array<Value>;
};


export type QueryAcademiesArgs = {
  cursor?: InputMaybe<AcademyWhereUniqueInput>;
  distinct?: InputMaybe<Array<AcademyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AcademyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyWhereInput>;
};


export type QueryAcademyArgs = {
  where: AcademyWhereUniqueInput;
};


export type QueryAcademyMintFeeArgs = {
  where: AcademyMintFeeWhereUniqueInput;
};


export type QueryAcademyMintFeesArgs = {
  cursor?: InputMaybe<AcademyMintFeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AcademyMintFeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AcademyMintFeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type QueryActionArgs = {
  where: ActionWhereUniqueInput;
};


export type QueryActionsArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryAggregateAcademyArgs = {
  cursor?: InputMaybe<AcademyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AcademyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyWhereInput>;
};


export type QueryAggregateAcademyMintFeeArgs = {
  cursor?: InputMaybe<AcademyMintFeeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AcademyMintFeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type QueryAggregateActionArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryAggregateAvailableHomeGameTimeArgs = {
  cursor?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AvailableHomeGameTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type QueryAggregateClaimArgs = {
  cursor?: InputMaybe<ClaimWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClaimOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimWhereInput>;
};


export type QueryAggregateClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryAggregateClubBadgeArgs = {
  cursor?: InputMaybe<ClubBadgeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubBadgeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type QueryAggregateClubBalanceArgs = {
  cursor?: InputMaybe<ClubBalanceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubBalanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type QueryAggregateClubFixtureArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type QueryAggregateClubStatsArgs = {
  cursor?: InputMaybe<ClubStatsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type QueryAggregateClubTournamentArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type QueryAggregateCompetitionArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type QueryAggregateCompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type QueryAggregateDivisionArgs = {
  cursor?: InputMaybe<DivisionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DivisionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DivisionWhereInput>;
};


export type QueryAggregateEthereumEventArgs = {
  cursor?: InputMaybe<EthereumEventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EthereumEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type QueryAggregateFixtureArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryAggregateFormationArgs = {
  cursor?: InputMaybe<FormationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FormationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationWhereInput>;
};


export type QueryAggregateFormationSlotArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type QueryAggregateKitArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KitWhereInput>;
};


export type QueryAggregateLineupArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type QueryAggregateMatchArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MatchWhereInput>;
};


export type QueryAggregateMerkleRootArgs = {
  cursor?: InputMaybe<MerkleRootWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MerkleRootOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type QueryAggregateMetadataArgs = {
  cursor?: InputMaybe<MetadataWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MetadataWhereInput>;
};


export type QueryAggregateMoraleArgs = {
  cursor?: InputMaybe<MoraleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MoraleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MoraleWhereInput>;
};


export type QueryAggregateNewsItemArgs = {
  cursor?: InputMaybe<NewsItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NewsItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsItemWhereInput>;
};


export type QueryAggregateOwnerArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryAggregatePlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryAggregatePlayerAttributesArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type QueryAggregatePlayerAttributesPositionalRatingArgs = {
  cursor?: InputMaybe<PlayerAttributesPositionalRatingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerAttributesPositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};


export type QueryAggregatePlayerLineupArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type QueryAggregatePlayerStatsRecordArgs = {
  cursor?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type QueryAggregatePoolArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryAggregatePoolsOnValuesArgs = {
  cursor?: InputMaybe<PoolsOnValuesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PoolsOnValuesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};


export type QueryAggregatePrizeArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PrizeWhereInput>;
};


export type QueryAggregatePromotionSelectorArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type QueryAggregateSeasonArgs = {
  cursor?: InputMaybe<SeasonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SeasonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type QueryAggregateStadiumArgs = {
  cursor?: InputMaybe<StadiumWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StadiumOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumWhereInput>;
};


export type QueryAggregateStadiumStandArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type QueryAggregateTacticsArgs = {
  cursor?: InputMaybe<TacticsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TacticsWhereInput>;
};


export type QueryAggregateTokenArgs = {
  cursor?: InputMaybe<TokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryAggregateTournamentArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentWhereInput>;
};


export type QueryAggregateTournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type QueryAggregateValueArgs = {
  cursor?: InputMaybe<ValueWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ValueWhereInput>;
};


export type QueryAvailableHomeGameTimeArgs = {
  where: AvailableHomeGameTimeWhereUniqueInput;
};


export type QueryAvailableHomeGameTimesArgs = {
  cursor?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AvailableHomeGameTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AvailableHomeGameTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type QueryClaimArgs = {
  where: ClaimWhereUniqueInput;
};


export type QueryClaimsArgs = {
  cursor?: InputMaybe<ClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClaimOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimWhereInput>;
};


export type QueryClubArgs = {
  where: ClubWhereUniqueInput;
};


export type QueryClubBadgeArgs = {
  where: ClubBadgeWhereUniqueInput;
};


export type QueryClubBadgesArgs = {
  cursor?: InputMaybe<ClubBadgeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBadgeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBadgeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type QueryClubBalanceArgs = {
  where: ClubBalanceWhereUniqueInput;
};


export type QueryClubBalancesArgs = {
  cursor?: InputMaybe<ClubBalanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBalanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBalanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type QueryClubFixtureArgs = {
  where: ClubFixtureWhereUniqueInput;
};


export type QueryClubFixturesArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type QueryClubTournamentArgs = {
  where: ClubTournamentWhereUniqueInput;
};


export type QueryClubTournamentsArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type QueryClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryCompetitionArgs = {
  where: CompetitionWhereUniqueInput;
};


export type QueryCompetitionsArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type QueryDivisionArgs = {
  where: DivisionWhereUniqueInput;
};


export type QueryDivisionsArgs = {
  cursor?: InputMaybe<DivisionWhereUniqueInput>;
  distinct?: InputMaybe<Array<DivisionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DivisionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DivisionWhereInput>;
};


export type QueryEthereumEventArgs = {
  where: EthereumEventWhereUniqueInput;
};


export type QueryEthereumEventsArgs = {
  cursor?: InputMaybe<EthereumEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EthereumEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EthereumEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type QueryFindFirstAcademyArgs = {
  cursor?: InputMaybe<AcademyWhereUniqueInput>;
  distinct?: InputMaybe<Array<AcademyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AcademyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyWhereInput>;
};


export type QueryFindFirstAcademyMintFeeArgs = {
  cursor?: InputMaybe<AcademyMintFeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AcademyMintFeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AcademyMintFeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type QueryFindFirstActionArgs = {
  cursor?: InputMaybe<ActionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryFindFirstAvailableHomeGameTimeArgs = {
  cursor?: InputMaybe<AvailableHomeGameTimeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AvailableHomeGameTimeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AvailableHomeGameTimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type QueryFindFirstClaimArgs = {
  cursor?: InputMaybe<ClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClaimOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimWhereInput>;
};


export type QueryFindFirstClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryFindFirstClubBadgeArgs = {
  cursor?: InputMaybe<ClubBadgeWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBadgeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBadgeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type QueryFindFirstClubBalanceArgs = {
  cursor?: InputMaybe<ClubBalanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBalanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBalanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type QueryFindFirstClubFixtureArgs = {
  cursor?: InputMaybe<ClubFixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubFixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type QueryFindFirstClubStatsArgs = {
  cursor?: InputMaybe<ClubStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type QueryFindFirstClubTournamentArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type QueryFindFirstCompetitionArgs = {
  cursor?: InputMaybe<CompetitionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type QueryFindFirstCompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type QueryFindFirstDivisionArgs = {
  cursor?: InputMaybe<DivisionWhereUniqueInput>;
  distinct?: InputMaybe<Array<DivisionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DivisionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DivisionWhereInput>;
};


export type QueryFindFirstEthereumEventArgs = {
  cursor?: InputMaybe<EthereumEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EthereumEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EthereumEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type QueryFindFirstFixtureArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<FixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryFindFirstFormationArgs = {
  cursor?: InputMaybe<FormationWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationWhereInput>;
};


export type QueryFindFirstFormationSlotArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type QueryFindFirstKitArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  distinct?: InputMaybe<Array<KitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KitWhereInput>;
};


export type QueryFindFirstLineupArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<LineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type QueryFindFirstMatchArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MatchWhereInput>;
};


export type QueryFindFirstMerkleRootArgs = {
  cursor?: InputMaybe<MerkleRootWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerkleRootScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerkleRootOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type QueryFindFirstMetadataArgs = {
  cursor?: InputMaybe<MetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<MetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MetadataWhereInput>;
};


export type QueryFindFirstMoraleArgs = {
  cursor?: InputMaybe<MoraleWhereUniqueInput>;
  distinct?: InputMaybe<Array<MoraleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MoraleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MoraleWhereInput>;
};


export type QueryFindFirstNewsItemArgs = {
  cursor?: InputMaybe<NewsItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<NewsItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NewsItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsItemWhereInput>;
};


export type QueryFindFirstOwnerArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryFindFirstPlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryFindFirstPlayerAttributesArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type QueryFindFirstPlayerAttributesPositionalRatingArgs = {
  cursor?: InputMaybe<PlayerAttributesPositionalRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesPositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};


export type QueryFindFirstPlayerLineupArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type QueryFindFirstPlayerStatsRecordArgs = {
  cursor?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerStatsRecordScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type QueryFindFirstPoolArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryFindFirstPoolsOnValuesArgs = {
  cursor?: InputMaybe<PoolsOnValuesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolsOnValuesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolsOnValuesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};


export type QueryFindFirstPrizeArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PrizeWhereInput>;
};


export type QueryFindFirstPromotionSelectorArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromotionSelectorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type QueryFindFirstSeasonArgs = {
  cursor?: InputMaybe<SeasonWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeasonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type QueryFindFirstStadiumArgs = {
  cursor?: InputMaybe<StadiumWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumWhereInput>;
};


export type QueryFindFirstStadiumStandArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumStandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type QueryFindFirstTacticsArgs = {
  cursor?: InputMaybe<TacticsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TacticsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TacticsWhereInput>;
};


export type QueryFindFirstTokenArgs = {
  cursor?: InputMaybe<TokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryFindFirstTournamentArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentWhereInput>;
};


export type QueryFindFirstTournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type QueryFindFirstValueArgs = {
  cursor?: InputMaybe<ValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<ValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ValueWhereInput>;
};


export type QueryFindManyClubStatsArgs = {
  cursor?: InputMaybe<ClubStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type QueryFindManyCompetitionPlayerStatsArgs = {
  cursor?: InputMaybe<CompetitionPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompetitionPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type QueryFindManyMetadataArgs = {
  cursor?: InputMaybe<MetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<MetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MetadataWhereInput>;
};


export type QueryFindManyPlayerAttributesArgs = {
  cursor?: InputMaybe<PlayerAttributesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type QueryFindManyPoolsOnValuesArgs = {
  cursor?: InputMaybe<PoolsOnValuesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolsOnValuesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolsOnValuesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};


export type QueryFindManyTacticsArgs = {
  cursor?: InputMaybe<TacticsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TacticsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TacticsWhereInput>;
};


export type QueryFindManyTournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type QueryFindUniqueClubStatsArgs = {
  where: ClubStatsWhereUniqueInput;
};


export type QueryFindUniqueCompetitionPlayerStatsArgs = {
  where: CompetitionPlayerStatsWhereUniqueInput;
};


export type QueryFindUniqueMetadataArgs = {
  where: MetadataWhereUniqueInput;
};


export type QueryFindUniquePlayerAttributesArgs = {
  where: PlayerAttributesWhereUniqueInput;
};


export type QueryFindUniquePoolsOnValuesArgs = {
  where: PoolsOnValuesWhereUniqueInput;
};


export type QueryFindUniqueTacticsArgs = {
  where: TacticsWhereUniqueInput;
};


export type QueryFindUniqueTournamentPlayerStatsArgs = {
  where: TournamentPlayerStatsWhereUniqueInput;
};


export type QueryFixtureArgs = {
  where: FixtureWhereUniqueInput;
};


export type QueryFixturesArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<FixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type QueryFormationSlotArgs = {
  where: FormationSlotWhereUniqueInput;
};


export type QueryFormationSlotsArgs = {
  cursor?: InputMaybe<FormationSlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationSlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type QueryFormationsArgs = {
  cursor?: InputMaybe<FormationWhereUniqueInput>;
  distinct?: InputMaybe<Array<FormationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FormationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationWhereInput>;
};


export type QueryGroupByAcademyArgs = {
  by: Array<AcademyScalarFieldEnum>;
  having?: InputMaybe<AcademyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AcademyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyWhereInput>;
};


export type QueryGroupByAcademyMintFeeArgs = {
  by: Array<AcademyMintFeeScalarFieldEnum>;
  having?: InputMaybe<AcademyMintFeeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AcademyMintFeeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type QueryGroupByActionArgs = {
  by: Array<ActionScalarFieldEnum>;
  having?: InputMaybe<ActionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ActionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActionWhereInput>;
};


export type QueryGroupByAvailableHomeGameTimeArgs = {
  by: Array<AvailableHomeGameTimeScalarFieldEnum>;
  having?: InputMaybe<AvailableHomeGameTimeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AvailableHomeGameTimeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AvailableHomeGameTimeWhereInput>;
};


export type QueryGroupByClaimArgs = {
  by: Array<ClaimScalarFieldEnum>;
  having?: InputMaybe<ClaimScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClaimOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimWhereInput>;
};


export type QueryGroupByClubArgs = {
  by: Array<ClubScalarFieldEnum>;
  having?: InputMaybe<ClubScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryGroupByClubBadgeArgs = {
  by: Array<ClubBadgeScalarFieldEnum>;
  having?: InputMaybe<ClubBadgeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubBadgeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBadgeWhereInput>;
};


export type QueryGroupByClubBalanceArgs = {
  by: Array<ClubBalanceScalarFieldEnum>;
  having?: InputMaybe<ClubBalanceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubBalanceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type QueryGroupByClubFixtureArgs = {
  by: Array<ClubFixtureScalarFieldEnum>;
  having?: InputMaybe<ClubFixtureScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubFixtureOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubFixtureWhereInput>;
};


export type QueryGroupByClubStatsArgs = {
  by: Array<ClubStatsScalarFieldEnum>;
  having?: InputMaybe<ClubStatsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubStatsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubStatsWhereInput>;
};


export type QueryGroupByClubTournamentArgs = {
  by: Array<ClubTournamentScalarFieldEnum>;
  having?: InputMaybe<ClubTournamentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type QueryGroupByCompetitionArgs = {
  by: Array<CompetitionScalarFieldEnum>;
  having?: InputMaybe<CompetitionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompetitionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionWhereInput>;
};


export type QueryGroupByCompetitionPlayerStatsArgs = {
  by: Array<CompetitionPlayerStatsScalarFieldEnum>;
  having?: InputMaybe<CompetitionPlayerStatsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompetitionPlayerStatsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompetitionPlayerStatsWhereInput>;
};


export type QueryGroupByDivisionArgs = {
  by: Array<DivisionScalarFieldEnum>;
  having?: InputMaybe<DivisionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DivisionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DivisionWhereInput>;
};


export type QueryGroupByEthereumEventArgs = {
  by: Array<EthereumEventScalarFieldEnum>;
  having?: InputMaybe<EthereumEventScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EthereumEventOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EthereumEventWhereInput>;
};


export type QueryGroupByFixtureArgs = {
  by: Array<FixtureScalarFieldEnum>;
  having?: InputMaybe<FixtureScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type QueryGroupByFormationArgs = {
  by: Array<FormationScalarFieldEnum>;
  having?: InputMaybe<FormationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FormationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationWhereInput>;
};


export type QueryGroupByFormationSlotArgs = {
  by: Array<FormationSlotScalarFieldEnum>;
  having?: InputMaybe<FormationSlotScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FormationSlotOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormationSlotWhereInput>;
};


export type QueryGroupByKitArgs = {
  by: Array<KitScalarFieldEnum>;
  having?: InputMaybe<KitScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<KitOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KitWhereInput>;
};


export type QueryGroupByLineupArgs = {
  by: Array<LineupScalarFieldEnum>;
  having?: InputMaybe<LineupScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LineupOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type QueryGroupByMatchArgs = {
  by: Array<MatchScalarFieldEnum>;
  having?: InputMaybe<MatchScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MatchOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MatchWhereInput>;
};


export type QueryGroupByMerkleRootArgs = {
  by: Array<MerkleRootScalarFieldEnum>;
  having?: InputMaybe<MerkleRootScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MerkleRootOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type QueryGroupByMetadataArgs = {
  by: Array<MetadataScalarFieldEnum>;
  having?: InputMaybe<MetadataScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MetadataOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MetadataWhereInput>;
};


export type QueryGroupByMoraleArgs = {
  by: Array<MoraleScalarFieldEnum>;
  having?: InputMaybe<MoraleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MoraleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MoraleWhereInput>;
};


export type QueryGroupByNewsItemArgs = {
  by: Array<NewsItemScalarFieldEnum>;
  having?: InputMaybe<NewsItemScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NewsItemOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsItemWhereInput>;
};


export type QueryGroupByOwnerArgs = {
  by: Array<OwnerScalarFieldEnum>;
  having?: InputMaybe<OwnerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryGroupByPlayerArgs = {
  by: Array<PlayerScalarFieldEnum>;
  having?: InputMaybe<PlayerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryGroupByPlayerAttributesArgs = {
  by: Array<PlayerAttributesScalarFieldEnum>;
  having?: InputMaybe<PlayerAttributesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerAttributesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesWhereInput>;
};


export type QueryGroupByPlayerAttributesPositionalRatingArgs = {
  by: Array<PlayerAttributesPositionalRatingScalarFieldEnum>;
  having?: InputMaybe<PlayerAttributesPositionalRatingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerAttributesPositionalRatingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};


export type QueryGroupByPlayerLineupArgs = {
  by: Array<PlayerLineupScalarFieldEnum>;
  having?: InputMaybe<PlayerLineupScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type QueryGroupByPlayerStatsRecordArgs = {
  by: Array<PlayerStatsRecordScalarFieldEnum>;
  having?: InputMaybe<PlayerStatsRecordScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type QueryGroupByPoolArgs = {
  by: Array<PoolScalarFieldEnum>;
  having?: InputMaybe<PoolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PoolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryGroupByPoolsOnValuesArgs = {
  by: Array<PoolsOnValuesScalarFieldEnum>;
  having?: InputMaybe<PoolsOnValuesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PoolsOnValuesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};


export type QueryGroupByPrizeArgs = {
  by: Array<PrizeScalarFieldEnum>;
  having?: InputMaybe<PrizeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PrizeWhereInput>;
};


export type QueryGroupByPromotionSelectorArgs = {
  by: Array<PromotionSelectorScalarFieldEnum>;
  having?: InputMaybe<PromotionSelectorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type QueryGroupBySeasonArgs = {
  by: Array<SeasonScalarFieldEnum>;
  having?: InputMaybe<SeasonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SeasonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type QueryGroupByStadiumArgs = {
  by: Array<StadiumScalarFieldEnum>;
  having?: InputMaybe<StadiumScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StadiumOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumWhereInput>;
};


export type QueryGroupByStadiumStandArgs = {
  by: Array<StadiumStandScalarFieldEnum>;
  having?: InputMaybe<StadiumStandScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type QueryGroupByTacticsArgs = {
  by: Array<TacticsScalarFieldEnum>;
  having?: InputMaybe<TacticsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TacticsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TacticsWhereInput>;
};


export type QueryGroupByTokenArgs = {
  by: Array<TokenScalarFieldEnum>;
  having?: InputMaybe<TokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryGroupByTournamentArgs = {
  by: Array<TournamentScalarFieldEnum>;
  having?: InputMaybe<TournamentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentWhereInput>;
};


export type QueryGroupByTournamentPlayerStatsArgs = {
  by: Array<TournamentPlayerStatsScalarFieldEnum>;
  having?: InputMaybe<TournamentPlayerStatsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type QueryGroupByValueArgs = {
  by: Array<ValueScalarFieldEnum>;
  having?: InputMaybe<ValueScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ValueOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ValueWhereInput>;
};


export type QueryKitArgs = {
  where: KitWhereUniqueInput;
};


export type QueryKitsArgs = {
  cursor?: InputMaybe<KitWhereUniqueInput>;
  distinct?: InputMaybe<Array<KitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<KitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KitWhereInput>;
};


export type QueryLineupArgs = {
  where: LineupWhereUniqueInput;
};


export type QueryLineupsArgs = {
  cursor?: InputMaybe<LineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<LineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LineupWhereInput>;
};


export type QueryMatchArgs = {
  where: MatchWhereUniqueInput;
};


export type QueryMatchesArgs = {
  cursor?: InputMaybe<MatchWhereUniqueInput>;
  distinct?: InputMaybe<Array<MatchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MatchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MatchWhereInput>;
};


export type QueryMerkleRootArgs = {
  where: MerkleRootWhereUniqueInput;
};


export type QueryMerkleRootsArgs = {
  cursor?: InputMaybe<MerkleRootWhereUniqueInput>;
  distinct?: InputMaybe<Array<MerkleRootScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MerkleRootOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MerkleRootWhereInput>;
};


export type QueryMoraleArgs = {
  where: MoraleWhereUniqueInput;
};


export type QueryMoralesArgs = {
  cursor?: InputMaybe<MoraleWhereUniqueInput>;
  distinct?: InputMaybe<Array<MoraleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MoraleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MoraleWhereInput>;
};


export type QueryNewsItemArgs = {
  where: NewsItemWhereUniqueInput;
};


export type QueryNewsItemsArgs = {
  cursor?: InputMaybe<NewsItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<NewsItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NewsItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsItemWhereInput>;
};


export type QueryOwnerArgs = {
  where: OwnerWhereUniqueInput;
};


export type QueryOwnersArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryPlayerAttributesPositionalRatingArgs = {
  where: PlayerAttributesPositionalRatingWhereUniqueInput;
};


export type QueryPlayerAttributesPositionalRatingsArgs = {
  cursor?: InputMaybe<PlayerAttributesPositionalRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttributesPositionalRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttributesPositionalRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttributesPositionalRatingWhereInput>;
};


export type QueryPlayerLineupArgs = {
  where: PlayerLineupWhereUniqueInput;
};


export type QueryPlayerLineupsArgs = {
  cursor?: InputMaybe<PlayerLineupWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerLineupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerLineupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerLineupWhereInput>;
};


export type QueryPlayerStatsRecordArgs = {
  where: PlayerStatsRecordWhereUniqueInput;
};


export type QueryPlayerStatsRecordsArgs = {
  cursor?: InputMaybe<PlayerStatsRecordWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerStatsRecordScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerStatsRecordOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerStatsRecordWhereInput>;
};


export type QueryPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryPoolArgs = {
  where: PoolWhereUniqueInput;
};


export type QueryPoolsArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryPrizeArgs = {
  where: PrizeWhereUniqueInput;
};


export type QueryPrizeMerkleProofArgs = {
  address: Scalars['String'];
  tokenId: Scalars['Float'];
};


export type QueryPrizesArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PrizeWhereInput>;
};


export type QueryPromotionSelectorArgs = {
  where: PromotionSelectorWhereUniqueInput;
};


export type QueryPromotionSelectorsArgs = {
  cursor?: InputMaybe<PromotionSelectorWhereUniqueInput>;
  distinct?: InputMaybe<Array<PromotionSelectorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PromotionSelectorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromotionSelectorWhereInput>;
};


export type QuerySeasonArgs = {
  where: SeasonWhereUniqueInput;
};


export type QuerySeasonsArgs = {
  cursor?: InputMaybe<SeasonWhereUniqueInput>;
  distinct?: InputMaybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SeasonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type QueryStadiumArgs = {
  where: StadiumWhereUniqueInput;
};


export type QueryStadiumStandArgs = {
  where: StadiumStandWhereUniqueInput;
};


export type QueryStadiumStandsArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumStandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};


export type QueryStadiumsArgs = {
  cursor?: InputMaybe<StadiumWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumWhereInput>;
};


export type QueryTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type QueryTokensArgs = {
  cursor?: InputMaybe<TokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryTournamentArgs = {
  where: TournamentWhereUniqueInput;
};


export type QueryTournamentsArgs = {
  cursor?: InputMaybe<TournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentWhereInput>;
};


export type QueryValueArgs = {
  where: ValueWhereUniqueInput;
};


export type QueryValuesArgs = {
  cursor?: InputMaybe<ValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<ValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ValueWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Season = {
  __typename?: 'Season';
  _count?: Maybe<SeasonCount>;
  fixtureReleaseRealWorldTime: Scalars['DateTime'];
  id: Scalars['Int'];
  matchStartRealWorldTime: Scalars['DateTime'];
  players: Array<Player>;
  startTimestamp: Scalars['Float'];
  state: SeasonState;
};


export type SeasonPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type SeasonAvgAggregate = {
  __typename?: 'SeasonAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  startTimestamp?: Maybe<Scalars['Float']>;
};

export type SeasonAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type SeasonCount = {
  __typename?: 'SeasonCount';
  players: Scalars['Int'];
};

export type SeasonCountAggregate = {
  __typename?: 'SeasonCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  startTimestamp: Scalars['Int'];
  state: Scalars['Int'];
};

export type SeasonCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type SeasonCreateInput = {
  players?: InputMaybe<PlayerCreateNestedManyWithoutFirstSeasonInput>;
  startTimestamp: Scalars['Float'];
  state: SeasonState;
};

export type SeasonCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  startTimestamp: Scalars['Float'];
  state: SeasonState;
};

export type SeasonCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<SeasonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SeasonCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<SeasonCreateWithoutPlayersInput>;
};

export type SeasonCreateOrConnectWithoutPlayersInput = {
  create: SeasonCreateWithoutPlayersInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonCreateWithoutPlayersInput = {
  startTimestamp: Scalars['Float'];
  state: SeasonState;
};

export type SeasonGroupBy = {
  __typename?: 'SeasonGroupBy';
  _avg?: Maybe<SeasonAvgAggregate>;
  _count?: Maybe<SeasonCountAggregate>;
  _max?: Maybe<SeasonMaxAggregate>;
  _min?: Maybe<SeasonMinAggregate>;
  _sum?: Maybe<SeasonSumAggregate>;
  id: Scalars['Int'];
  startTimestamp: Scalars['Float'];
  state: SeasonState;
};

export type SeasonMaxAggregate = {
  __typename?: 'SeasonMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  state?: Maybe<SeasonState>;
};

export type SeasonMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type SeasonMinAggregate = {
  __typename?: 'SeasonMinAggregate';
  id?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Float']>;
  state?: Maybe<SeasonState>;
};

export type SeasonMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type SeasonOrderByWithAggregationInput = {
  _avg?: InputMaybe<SeasonAvgOrderByAggregateInput>;
  _count?: InputMaybe<SeasonCountOrderByAggregateInput>;
  _max?: InputMaybe<SeasonMaxOrderByAggregateInput>;
  _min?: InputMaybe<SeasonMinOrderByAggregateInput>;
  _sum?: InputMaybe<SeasonSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type SeasonOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  startTimestamp?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type SeasonRelationFilter = {
  is?: InputMaybe<SeasonWhereInput>;
  isNot?: InputMaybe<SeasonWhereInput>;
};

export enum SeasonScalarFieldEnum {
  Id = 'id',
  StartTimestamp = 'startTimestamp',
  State = 'state'
}

export type SeasonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  startTimestamp?: InputMaybe<FloatWithAggregatesFilter>;
  state?: InputMaybe<EnumSeasonStateWithAggregatesFilter>;
};

export enum SeasonState {
  Complete = 'COMPLETE',
  Live = 'LIVE',
  Pending = 'PENDING',
  PreSeason = 'PRE_SEASON'
}

export type SeasonSumAggregate = {
  __typename?: 'SeasonSumAggregate';
  id?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Float']>;
};

export type SeasonSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  startTimestamp?: InputMaybe<SortOrder>;
};

export type SeasonUpdateInput = {
  players?: InputMaybe<PlayerUpdateManyWithoutFirstSeasonInput>;
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<EnumSeasonStateFieldUpdateOperationsInput>;
};

export type SeasonUpdateManyMutationInput = {
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<EnumSeasonStateFieldUpdateOperationsInput>;
};

export type SeasonUpdateOneRequiredWithoutPlayersInput = {
  connect?: InputMaybe<SeasonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SeasonCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<SeasonCreateWithoutPlayersInput>;
  update?: InputMaybe<SeasonUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<SeasonUpsertWithoutPlayersInput>;
};

export type SeasonUpdateWithoutPlayersInput = {
  startTimestamp?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<EnumSeasonStateFieldUpdateOperationsInput>;
};

export type SeasonUpsertWithoutPlayersInput = {
  create: SeasonCreateWithoutPlayersInput;
  update: SeasonUpdateWithoutPlayersInput;
};

export type SeasonWhereInput = {
  AND?: InputMaybe<Array<SeasonWhereInput>>;
  NOT?: InputMaybe<Array<SeasonWhereInput>>;
  OR?: InputMaybe<Array<SeasonWhereInput>>;
  id?: InputMaybe<IntFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  startTimestamp?: InputMaybe<FloatFilter>;
  state?: InputMaybe<EnumSeasonStateFilter>;
};

export type SeasonWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Stadium = {
  __typename?: 'Stadium';
  _count?: Maybe<StadiumCount>;
  capacity: Scalars['Int'];
  club: Array<Club>;
  id: Scalars['Int'];
  name: Scalars['String'];
  pitchUri?: Maybe<Scalars['String']>;
  stadiumStand: Array<StadiumStand>;
};


export type StadiumClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type StadiumStadiumStandArgs = {
  cursor?: InputMaybe<StadiumStandWhereUniqueInput>;
  distinct?: InputMaybe<Array<StadiumStandScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StadiumStandOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StadiumStandWhereInput>;
};

export type StadiumAvgAggregate = {
  __typename?: 'StadiumAvgAggregate';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type StadiumAvgOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type StadiumCount = {
  __typename?: 'StadiumCount';
  club: Scalars['Int'];
  stadiumStand: Scalars['Int'];
};

export type StadiumCountAggregate = {
  __typename?: 'StadiumCountAggregate';
  _all: Scalars['Int'];
  capacity: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type StadiumCountOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StadiumCreateInput = {
  capacity: Scalars['Int'];
  club?: InputMaybe<ClubCreateNestedManyWithoutStadiumInput>;
  name: Scalars['String'];
  stadiumStand?: InputMaybe<StadiumStandCreateNestedManyWithoutStadiumInput>;
};

export type StadiumCreateManyInput = {
  capacity: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type StadiumCreateNestedOneWithoutClubInput = {
  connect?: InputMaybe<StadiumWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StadiumCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<StadiumCreateWithoutClubInput>;
};

export type StadiumCreateNestedOneWithoutStadiumStandInput = {
  connect?: InputMaybe<StadiumWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StadiumCreateOrConnectWithoutStadiumStandInput>;
  create?: InputMaybe<StadiumCreateWithoutStadiumStandInput>;
};

export type StadiumCreateOrConnectWithoutClubInput = {
  create: StadiumCreateWithoutClubInput;
  where: StadiumWhereUniqueInput;
};

export type StadiumCreateOrConnectWithoutStadiumStandInput = {
  create: StadiumCreateWithoutStadiumStandInput;
  where: StadiumWhereUniqueInput;
};

export type StadiumCreateWithoutClubInput = {
  capacity: Scalars['Int'];
  name: Scalars['String'];
  stadiumStand?: InputMaybe<StadiumStandCreateNestedManyWithoutStadiumInput>;
};

export type StadiumCreateWithoutStadiumStandInput = {
  capacity: Scalars['Int'];
  club?: InputMaybe<ClubCreateNestedManyWithoutStadiumInput>;
  name: Scalars['String'];
};

export type StadiumGroupBy = {
  __typename?: 'StadiumGroupBy';
  _avg?: Maybe<StadiumAvgAggregate>;
  _count?: Maybe<StadiumCountAggregate>;
  _max?: Maybe<StadiumMaxAggregate>;
  _min?: Maybe<StadiumMinAggregate>;
  _sum?: Maybe<StadiumSumAggregate>;
  capacity: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type StadiumMaxAggregate = {
  __typename?: 'StadiumMaxAggregate';
  capacity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type StadiumMaxOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StadiumMinAggregate = {
  __typename?: 'StadiumMinAggregate';
  capacity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type StadiumMinOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StadiumOrderByWithAggregationInput = {
  _avg?: InputMaybe<StadiumAvgOrderByAggregateInput>;
  _count?: InputMaybe<StadiumCountOrderByAggregateInput>;
  _max?: InputMaybe<StadiumMaxOrderByAggregateInput>;
  _min?: InputMaybe<StadiumMinOrderByAggregateInput>;
  _sum?: InputMaybe<StadiumSumOrderByAggregateInput>;
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type StadiumOrderByWithRelationInput = {
  capacity?: InputMaybe<SortOrder>;
  club?: InputMaybe<ClubOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  stadiumStand?: InputMaybe<StadiumStandOrderByRelationAggregateInput>;
};

export type StadiumRelationFilter = {
  is?: InputMaybe<StadiumWhereInput>;
  isNot?: InputMaybe<StadiumWhereInput>;
};

export enum StadiumScalarFieldEnum {
  Capacity = 'capacity',
  Id = 'id',
  Name = 'name'
}

export type StadiumScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StadiumScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StadiumScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StadiumScalarWhereWithAggregatesInput>>;
  capacity?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type StadiumStand = {
  __typename?: 'StadiumStand';
  capacity: Scalars['Int'];
  colours: Scalars['JSON'];
  id: Scalars['Int'];
  side: StadiumStandSide;
  size: StadiumStandSize;
  stadium: Stadium;
  stadiumId: Scalars['Int'];
  style: StadiumStandStyle;
  uri?: Maybe<Scalars['String']>;
  variant: Scalars['Int'];
};

export type StadiumStandAvgAggregate = {
  __typename?: 'StadiumStandAvgAggregate';
  capacity?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stadiumId?: Maybe<Scalars['Float']>;
  variant?: Maybe<Scalars['Float']>;
};

export type StadiumStandAvgOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export type StadiumStandCountAggregate = {
  __typename?: 'StadiumStandCountAggregate';
  _all: Scalars['Int'];
  capacity: Scalars['Int'];
  colours: Scalars['Int'];
  id: Scalars['Int'];
  side: Scalars['Int'];
  size: Scalars['Int'];
  stadiumId: Scalars['Int'];
  style: Scalars['Int'];
  variant: Scalars['Int'];
};

export type StadiumStandCountOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  colours?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  side?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export type StadiumStandCreateInput = {
  capacity: Scalars['Int'];
  colours: Scalars['JSON'];
  side: StadiumStandSide;
  size: StadiumStandSize;
  stadium: StadiumCreateNestedOneWithoutStadiumStandInput;
  style: StadiumStandStyle;
  variant: Scalars['Int'];
};

export type StadiumStandCreateManyInput = {
  capacity: Scalars['Int'];
  colours: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  side: StadiumStandSide;
  size: StadiumStandSize;
  stadiumId: Scalars['Int'];
  style: StadiumStandStyle;
  variant: Scalars['Int'];
};

export type StadiumStandCreateManyStadiumInput = {
  capacity: Scalars['Int'];
  colours: Scalars['JSON'];
  id?: InputMaybe<Scalars['Int']>;
  side: StadiumStandSide;
  size: StadiumStandSize;
  style: StadiumStandStyle;
  variant: Scalars['Int'];
};

export type StadiumStandCreateManyStadiumInputEnvelope = {
  data: Array<StadiumStandCreateManyStadiumInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type StadiumStandCreateNestedManyWithoutStadiumInput = {
  connect?: InputMaybe<Array<StadiumStandWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StadiumStandCreateOrConnectWithoutStadiumInput>>;
  create?: InputMaybe<Array<StadiumStandCreateWithoutStadiumInput>>;
  createMany?: InputMaybe<StadiumStandCreateManyStadiumInputEnvelope>;
};

export type StadiumStandCreateOrConnectWithoutStadiumInput = {
  create: StadiumStandCreateWithoutStadiumInput;
  where: StadiumStandWhereUniqueInput;
};

export type StadiumStandCreateWithoutStadiumInput = {
  capacity: Scalars['Int'];
  colours: Scalars['JSON'];
  side: StadiumStandSide;
  size: StadiumStandSize;
  style: StadiumStandStyle;
  variant: Scalars['Int'];
};

export type StadiumStandGroupBy = {
  __typename?: 'StadiumStandGroupBy';
  _avg?: Maybe<StadiumStandAvgAggregate>;
  _count?: Maybe<StadiumStandCountAggregate>;
  _max?: Maybe<StadiumStandMaxAggregate>;
  _min?: Maybe<StadiumStandMinAggregate>;
  _sum?: Maybe<StadiumStandSumAggregate>;
  capacity: Scalars['Int'];
  colours: Scalars['JSON'];
  id: Scalars['Int'];
  side: StadiumStandSide;
  size: StadiumStandSize;
  stadiumId: Scalars['Int'];
  style: StadiumStandStyle;
  variant: Scalars['Int'];
};

export type StadiumStandListRelationFilter = {
  every?: InputMaybe<StadiumStandWhereInput>;
  none?: InputMaybe<StadiumStandWhereInput>;
  some?: InputMaybe<StadiumStandWhereInput>;
};

export type StadiumStandMaxAggregate = {
  __typename?: 'StadiumStandMaxAggregate';
  capacity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  side?: Maybe<StadiumStandSide>;
  size?: Maybe<StadiumStandSize>;
  stadiumId?: Maybe<Scalars['Int']>;
  style?: Maybe<StadiumStandStyle>;
  variant?: Maybe<Scalars['Int']>;
};

export type StadiumStandMaxOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  side?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export type StadiumStandMinAggregate = {
  __typename?: 'StadiumStandMinAggregate';
  capacity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  side?: Maybe<StadiumStandSide>;
  size?: Maybe<StadiumStandSize>;
  stadiumId?: Maybe<Scalars['Int']>;
  style?: Maybe<StadiumStandStyle>;
  variant?: Maybe<Scalars['Int']>;
};

export type StadiumStandMinOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  side?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export type StadiumStandOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StadiumStandOrderByWithAggregationInput = {
  _avg?: InputMaybe<StadiumStandAvgOrderByAggregateInput>;
  _count?: InputMaybe<StadiumStandCountOrderByAggregateInput>;
  _max?: InputMaybe<StadiumStandMaxOrderByAggregateInput>;
  _min?: InputMaybe<StadiumStandMinOrderByAggregateInput>;
  _sum?: InputMaybe<StadiumStandSumOrderByAggregateInput>;
  capacity?: InputMaybe<SortOrder>;
  colours?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  side?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export type StadiumStandOrderByWithRelationInput = {
  capacity?: InputMaybe<SortOrder>;
  colours?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  side?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  stadium?: InputMaybe<StadiumOrderByWithRelationInput>;
  stadiumId?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export enum StadiumStandScalarFieldEnum {
  Capacity = 'capacity',
  Colours = 'colours',
  Id = 'id',
  Side = 'side',
  Size = 'size',
  StadiumId = 'stadiumId',
  Style = 'style',
  Variant = 'variant'
}

export type StadiumStandScalarWhereInput = {
  AND?: InputMaybe<Array<StadiumStandScalarWhereInput>>;
  NOT?: InputMaybe<Array<StadiumStandScalarWhereInput>>;
  OR?: InputMaybe<Array<StadiumStandScalarWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  colours?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  side?: InputMaybe<EnumStadiumStandSideFilter>;
  size?: InputMaybe<EnumStadiumStandSizeFilter>;
  stadiumId?: InputMaybe<IntFilter>;
  style?: InputMaybe<EnumStadiumStandStyleFilter>;
  variant?: InputMaybe<IntFilter>;
};

export type StadiumStandScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StadiumStandScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StadiumStandScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StadiumStandScalarWhereWithAggregatesInput>>;
  capacity?: InputMaybe<IntWithAggregatesFilter>;
  colours?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  side?: InputMaybe<EnumStadiumStandSideWithAggregatesFilter>;
  size?: InputMaybe<EnumStadiumStandSizeWithAggregatesFilter>;
  stadiumId?: InputMaybe<IntWithAggregatesFilter>;
  style?: InputMaybe<EnumStadiumStandStyleWithAggregatesFilter>;
  variant?: InputMaybe<IntWithAggregatesFilter>;
};

export enum StadiumStandSide {
  East = 'EAST',
  North = 'NORTH',
  South = 'SOUTH',
  West = 'WEST'
}

export enum StadiumStandSize {
  ExtraLarge = 'EXTRA_LARGE',
  ExtraSmall = 'EXTRA_SMALL',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export enum StadiumStandStyle {
  Brick = 'BRICK',
  DarkMetal = 'DARK_METAL',
  Metal = 'METAL',
  PostModern = 'POST_MODERN',
  Stone = 'STONE',
  Wood = 'WOOD'
}

export type StadiumStandSumAggregate = {
  __typename?: 'StadiumStandSumAggregate';
  capacity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stadiumId?: Maybe<Scalars['Int']>;
  variant?: Maybe<Scalars['Int']>;
};

export type StadiumStandSumOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  stadiumId?: InputMaybe<SortOrder>;
  variant?: InputMaybe<SortOrder>;
};

export type StadiumStandUpdateInput = {
  capacity?: InputMaybe<IntFieldUpdateOperationsInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  side?: InputMaybe<EnumStadiumStandSideFieldUpdateOperationsInput>;
  size?: InputMaybe<EnumStadiumStandSizeFieldUpdateOperationsInput>;
  stadium?: InputMaybe<StadiumUpdateOneRequiredWithoutStadiumStandInput>;
  style?: InputMaybe<EnumStadiumStandStyleFieldUpdateOperationsInput>;
  variant?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type StadiumStandUpdateManyMutationInput = {
  capacity?: InputMaybe<IntFieldUpdateOperationsInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  side?: InputMaybe<EnumStadiumStandSideFieldUpdateOperationsInput>;
  size?: InputMaybe<EnumStadiumStandSizeFieldUpdateOperationsInput>;
  style?: InputMaybe<EnumStadiumStandStyleFieldUpdateOperationsInput>;
  variant?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type StadiumStandUpdateManyWithWhereWithoutStadiumInput = {
  data: StadiumStandUpdateManyMutationInput;
  where: StadiumStandScalarWhereInput;
};

export type StadiumStandUpdateManyWithoutStadiumInput = {
  connect?: InputMaybe<Array<StadiumStandWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StadiumStandCreateOrConnectWithoutStadiumInput>>;
  create?: InputMaybe<Array<StadiumStandCreateWithoutStadiumInput>>;
  createMany?: InputMaybe<StadiumStandCreateManyStadiumInputEnvelope>;
  delete?: InputMaybe<Array<StadiumStandWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StadiumStandScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StadiumStandWhereUniqueInput>>;
  set?: InputMaybe<Array<StadiumStandWhereUniqueInput>>;
  update?: InputMaybe<Array<StadiumStandUpdateWithWhereUniqueWithoutStadiumInput>>;
  updateMany?: InputMaybe<Array<StadiumStandUpdateManyWithWhereWithoutStadiumInput>>;
  upsert?: InputMaybe<Array<StadiumStandUpsertWithWhereUniqueWithoutStadiumInput>>;
};

export type StadiumStandUpdateWithWhereUniqueWithoutStadiumInput = {
  data: StadiumStandUpdateWithoutStadiumInput;
  where: StadiumStandWhereUniqueInput;
};

export type StadiumStandUpdateWithoutStadiumInput = {
  capacity?: InputMaybe<IntFieldUpdateOperationsInput>;
  colours?: InputMaybe<Scalars['JSON']>;
  side?: InputMaybe<EnumStadiumStandSideFieldUpdateOperationsInput>;
  size?: InputMaybe<EnumStadiumStandSizeFieldUpdateOperationsInput>;
  style?: InputMaybe<EnumStadiumStandStyleFieldUpdateOperationsInput>;
  variant?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type StadiumStandUpsertWithWhereUniqueWithoutStadiumInput = {
  create: StadiumStandCreateWithoutStadiumInput;
  update: StadiumStandUpdateWithoutStadiumInput;
  where: StadiumStandWhereUniqueInput;
};

export type StadiumStandWhereInput = {
  AND?: InputMaybe<Array<StadiumStandWhereInput>>;
  NOT?: InputMaybe<Array<StadiumStandWhereInput>>;
  OR?: InputMaybe<Array<StadiumStandWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  colours?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  side?: InputMaybe<EnumStadiumStandSideFilter>;
  size?: InputMaybe<EnumStadiumStandSizeFilter>;
  stadium?: InputMaybe<StadiumRelationFilter>;
  stadiumId?: InputMaybe<IntFilter>;
  style?: InputMaybe<EnumStadiumStandStyleFilter>;
  variant?: InputMaybe<IntFilter>;
};

export type StadiumStandWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type StadiumSumAggregate = {
  __typename?: 'StadiumSumAggregate';
  capacity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type StadiumSumOrderByAggregateInput = {
  capacity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type StadiumUpdateInput = {
  capacity?: InputMaybe<IntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateManyWithoutStadiumInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadiumStand?: InputMaybe<StadiumStandUpdateManyWithoutStadiumInput>;
};

export type StadiumUpdateManyMutationInput = {
  capacity?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StadiumUpdateOneRequiredWithoutClubInput = {
  connect?: InputMaybe<StadiumWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StadiumCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<StadiumCreateWithoutClubInput>;
  update?: InputMaybe<StadiumUpdateWithoutClubInput>;
  upsert?: InputMaybe<StadiumUpsertWithoutClubInput>;
};

export type StadiumUpdateOneRequiredWithoutStadiumStandInput = {
  connect?: InputMaybe<StadiumWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StadiumCreateOrConnectWithoutStadiumStandInput>;
  create?: InputMaybe<StadiumCreateWithoutStadiumStandInput>;
  update?: InputMaybe<StadiumUpdateWithoutStadiumStandInput>;
  upsert?: InputMaybe<StadiumUpsertWithoutStadiumStandInput>;
};

export type StadiumUpdateWithoutClubInput = {
  capacity?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stadiumStand?: InputMaybe<StadiumStandUpdateManyWithoutStadiumInput>;
};

export type StadiumUpdateWithoutStadiumStandInput = {
  capacity?: InputMaybe<IntFieldUpdateOperationsInput>;
  club?: InputMaybe<ClubUpdateManyWithoutStadiumInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StadiumUpsertWithoutClubInput = {
  create: StadiumCreateWithoutClubInput;
  update: StadiumUpdateWithoutClubInput;
};

export type StadiumUpsertWithoutStadiumStandInput = {
  create: StadiumCreateWithoutStadiumStandInput;
  update: StadiumUpdateWithoutStadiumStandInput;
};

export type StadiumWhereInput = {
  AND?: InputMaybe<Array<StadiumWhereInput>>;
  NOT?: InputMaybe<Array<StadiumWhereInput>>;
  OR?: InputMaybe<Array<StadiumWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  club?: InputMaybe<ClubListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  stadiumStand?: InputMaybe<StadiumStandListRelationFilter>;
};

export type StadiumWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type SubmittedActionResponseType = {
  __typename?: 'SubmittedActionResponseType';
  code: Scalars['Int'];
  error?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Tactics = {
  __typename?: 'Tactics';
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  formation: Formation;
  formationId: Scalars['Int'];
  id: Scalars['Int'];
  lineup?: Maybe<Lineup>;
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['String'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsAvgAggregate = {
  __typename?: 'TacticsAvgAggregate';
  attackingStyle?: Maybe<Scalars['Float']>;
  compactness?: Maybe<Scalars['Float']>;
  defensiveLine?: Maybe<Scalars['Float']>;
  formationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerSupport?: Maybe<Scalars['Float']>;
  positionSwitch?: Maybe<Scalars['Float']>;
  pressing?: Maybe<Scalars['Float']>;
  supportRange?: Maybe<Scalars['Float']>;
};

export type TacticsAvgOrderByAggregateInput = {
  attackingStyle?: InputMaybe<SortOrder>;
  compactness?: InputMaybe<SortOrder>;
  defensiveLine?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerSupport?: InputMaybe<SortOrder>;
  positionSwitch?: InputMaybe<SortOrder>;
  pressing?: InputMaybe<SortOrder>;
  supportRange?: InputMaybe<SortOrder>;
};

export type TacticsCountAggregate = {
  __typename?: 'TacticsCountAggregate';
  _all: Scalars['Int'];
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  formationId: Scalars['Int'];
  id: Scalars['Int'];
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['Int'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsCountOrderByAggregateInput = {
  attackingStyle?: InputMaybe<SortOrder>;
  compactness?: InputMaybe<SortOrder>;
  defensiveLine?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerSupport?: InputMaybe<SortOrder>;
  playingStyle?: InputMaybe<SortOrder>;
  positionSwitch?: InputMaybe<SortOrder>;
  pressing?: InputMaybe<SortOrder>;
  supportRange?: InputMaybe<SortOrder>;
};

export type TacticsCreateInput = {
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  formation: FormationCreateNestedOneWithoutTacticsInput;
  lineup?: InputMaybe<LineupCreateNestedOneWithoutTacticsInput>;
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['String'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsCreateManyFormationInput = {
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['String'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsCreateManyFormationInputEnvelope = {
  data: Array<TacticsCreateManyFormationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TacticsCreateManyInput = {
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  formationId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['String'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsCreateNestedManyWithoutFormationInput = {
  connect?: InputMaybe<Array<TacticsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TacticsCreateOrConnectWithoutFormationInput>>;
  create?: InputMaybe<Array<TacticsCreateWithoutFormationInput>>;
  createMany?: InputMaybe<TacticsCreateManyFormationInputEnvelope>;
};

export type TacticsCreateNestedOneWithoutLineupInput = {
  connect?: InputMaybe<TacticsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TacticsCreateOrConnectWithoutLineupInput>;
  create?: InputMaybe<TacticsCreateWithoutLineupInput>;
};

export type TacticsCreateOrConnectWithoutFormationInput = {
  create: TacticsCreateWithoutFormationInput;
  where: TacticsWhereUniqueInput;
};

export type TacticsCreateOrConnectWithoutLineupInput = {
  create: TacticsCreateWithoutLineupInput;
  where: TacticsWhereUniqueInput;
};

export type TacticsCreateWithoutFormationInput = {
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  lineup?: InputMaybe<LineupCreateNestedOneWithoutTacticsInput>;
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['String'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsCreateWithoutLineupInput = {
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  formation: FormationCreateNestedOneWithoutTacticsInput;
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['String'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsGroupBy = {
  __typename?: 'TacticsGroupBy';
  _avg?: Maybe<TacticsAvgAggregate>;
  _count?: Maybe<TacticsCountAggregate>;
  _max?: Maybe<TacticsMaxAggregate>;
  _min?: Maybe<TacticsMinAggregate>;
  _sum?: Maybe<TacticsSumAggregate>;
  attackingStyle: Scalars['Int'];
  compactness: Scalars['Int'];
  defensiveLine: Scalars['Int'];
  formationId: Scalars['Int'];
  id: Scalars['Int'];
  playerSupport: Scalars['Int'];
  playingStyle: Scalars['String'];
  positionSwitch: Scalars['Int'];
  pressing: Scalars['Int'];
  supportRange: Scalars['Int'];
};

export type TacticsListRelationFilter = {
  every?: InputMaybe<TacticsWhereInput>;
  none?: InputMaybe<TacticsWhereInput>;
  some?: InputMaybe<TacticsWhereInput>;
};

export type TacticsMaxAggregate = {
  __typename?: 'TacticsMaxAggregate';
  attackingStyle?: Maybe<Scalars['Int']>;
  compactness?: Maybe<Scalars['Int']>;
  defensiveLine?: Maybe<Scalars['Int']>;
  formationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerSupport?: Maybe<Scalars['Int']>;
  playingStyle?: Maybe<Scalars['String']>;
  positionSwitch?: Maybe<Scalars['Int']>;
  pressing?: Maybe<Scalars['Int']>;
  supportRange?: Maybe<Scalars['Int']>;
};

export type TacticsMaxOrderByAggregateInput = {
  attackingStyle?: InputMaybe<SortOrder>;
  compactness?: InputMaybe<SortOrder>;
  defensiveLine?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerSupport?: InputMaybe<SortOrder>;
  playingStyle?: InputMaybe<SortOrder>;
  positionSwitch?: InputMaybe<SortOrder>;
  pressing?: InputMaybe<SortOrder>;
  supportRange?: InputMaybe<SortOrder>;
};

export type TacticsMinAggregate = {
  __typename?: 'TacticsMinAggregate';
  attackingStyle?: Maybe<Scalars['Int']>;
  compactness?: Maybe<Scalars['Int']>;
  defensiveLine?: Maybe<Scalars['Int']>;
  formationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerSupport?: Maybe<Scalars['Int']>;
  playingStyle?: Maybe<Scalars['String']>;
  positionSwitch?: Maybe<Scalars['Int']>;
  pressing?: Maybe<Scalars['Int']>;
  supportRange?: Maybe<Scalars['Int']>;
};

export type TacticsMinOrderByAggregateInput = {
  attackingStyle?: InputMaybe<SortOrder>;
  compactness?: InputMaybe<SortOrder>;
  defensiveLine?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerSupport?: InputMaybe<SortOrder>;
  playingStyle?: InputMaybe<SortOrder>;
  positionSwitch?: InputMaybe<SortOrder>;
  pressing?: InputMaybe<SortOrder>;
  supportRange?: InputMaybe<SortOrder>;
};

export type TacticsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TacticsOrderByWithAggregationInput = {
  _avg?: InputMaybe<TacticsAvgOrderByAggregateInput>;
  _count?: InputMaybe<TacticsCountOrderByAggregateInput>;
  _max?: InputMaybe<TacticsMaxOrderByAggregateInput>;
  _min?: InputMaybe<TacticsMinOrderByAggregateInput>;
  _sum?: InputMaybe<TacticsSumOrderByAggregateInput>;
  attackingStyle?: InputMaybe<SortOrder>;
  compactness?: InputMaybe<SortOrder>;
  defensiveLine?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerSupport?: InputMaybe<SortOrder>;
  playingStyle?: InputMaybe<SortOrder>;
  positionSwitch?: InputMaybe<SortOrder>;
  pressing?: InputMaybe<SortOrder>;
  supportRange?: InputMaybe<SortOrder>;
};

export type TacticsOrderByWithRelationInput = {
  attackingStyle?: InputMaybe<SortOrder>;
  compactness?: InputMaybe<SortOrder>;
  defensiveLine?: InputMaybe<SortOrder>;
  formation?: InputMaybe<FormationOrderByWithRelationInput>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lineup?: InputMaybe<LineupOrderByWithRelationInput>;
  playerSupport?: InputMaybe<SortOrder>;
  playingStyle?: InputMaybe<SortOrder>;
  positionSwitch?: InputMaybe<SortOrder>;
  pressing?: InputMaybe<SortOrder>;
  supportRange?: InputMaybe<SortOrder>;
};

export type TacticsRelationFilter = {
  is?: InputMaybe<TacticsWhereInput>;
  isNot?: InputMaybe<TacticsWhereInput>;
};

export enum TacticsScalarFieldEnum {
  AttackingStyle = 'attackingStyle',
  Compactness = 'compactness',
  DefensiveLine = 'defensiveLine',
  FormationId = 'formationId',
  Id = 'id',
  PlayerSupport = 'playerSupport',
  PlayingStyle = 'playingStyle',
  PositionSwitch = 'positionSwitch',
  Pressing = 'pressing',
  SupportRange = 'supportRange'
}

export type TacticsScalarWhereInput = {
  AND?: InputMaybe<Array<TacticsScalarWhereInput>>;
  NOT?: InputMaybe<Array<TacticsScalarWhereInput>>;
  OR?: InputMaybe<Array<TacticsScalarWhereInput>>;
  attackingStyle?: InputMaybe<IntFilter>;
  compactness?: InputMaybe<IntFilter>;
  defensiveLine?: InputMaybe<IntFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  playerSupport?: InputMaybe<IntFilter>;
  playingStyle?: InputMaybe<StringFilter>;
  positionSwitch?: InputMaybe<IntFilter>;
  pressing?: InputMaybe<IntFilter>;
  supportRange?: InputMaybe<IntFilter>;
};

export type TacticsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TacticsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TacticsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TacticsScalarWhereWithAggregatesInput>>;
  attackingStyle?: InputMaybe<IntWithAggregatesFilter>;
  compactness?: InputMaybe<IntWithAggregatesFilter>;
  defensiveLine?: InputMaybe<IntWithAggregatesFilter>;
  formationId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  playerSupport?: InputMaybe<IntWithAggregatesFilter>;
  playingStyle?: InputMaybe<StringWithAggregatesFilter>;
  positionSwitch?: InputMaybe<IntWithAggregatesFilter>;
  pressing?: InputMaybe<IntWithAggregatesFilter>;
  supportRange?: InputMaybe<IntWithAggregatesFilter>;
};

export type TacticsSumAggregate = {
  __typename?: 'TacticsSumAggregate';
  attackingStyle?: Maybe<Scalars['Int']>;
  compactness?: Maybe<Scalars['Int']>;
  defensiveLine?: Maybe<Scalars['Int']>;
  formationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerSupport?: Maybe<Scalars['Int']>;
  positionSwitch?: Maybe<Scalars['Int']>;
  pressing?: Maybe<Scalars['Int']>;
  supportRange?: Maybe<Scalars['Int']>;
};

export type TacticsSumOrderByAggregateInput = {
  attackingStyle?: InputMaybe<SortOrder>;
  compactness?: InputMaybe<SortOrder>;
  defensiveLine?: InputMaybe<SortOrder>;
  formationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerSupport?: InputMaybe<SortOrder>;
  positionSwitch?: InputMaybe<SortOrder>;
  pressing?: InputMaybe<SortOrder>;
  supportRange?: InputMaybe<SortOrder>;
};

export type TacticsUpdateInput = {
  attackingStyle?: InputMaybe<IntFieldUpdateOperationsInput>;
  compactness?: InputMaybe<IntFieldUpdateOperationsInput>;
  defensiveLine?: InputMaybe<IntFieldUpdateOperationsInput>;
  formation?: InputMaybe<FormationUpdateOneRequiredWithoutTacticsInput>;
  lineup?: InputMaybe<LineupUpdateOneWithoutTacticsInput>;
  playerSupport?: InputMaybe<IntFieldUpdateOperationsInput>;
  playingStyle?: InputMaybe<StringFieldUpdateOperationsInput>;
  positionSwitch?: InputMaybe<IntFieldUpdateOperationsInput>;
  pressing?: InputMaybe<IntFieldUpdateOperationsInput>;
  supportRange?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TacticsUpdateManyMutationInput = {
  attackingStyle?: InputMaybe<IntFieldUpdateOperationsInput>;
  compactness?: InputMaybe<IntFieldUpdateOperationsInput>;
  defensiveLine?: InputMaybe<IntFieldUpdateOperationsInput>;
  playerSupport?: InputMaybe<IntFieldUpdateOperationsInput>;
  playingStyle?: InputMaybe<StringFieldUpdateOperationsInput>;
  positionSwitch?: InputMaybe<IntFieldUpdateOperationsInput>;
  pressing?: InputMaybe<IntFieldUpdateOperationsInput>;
  supportRange?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TacticsUpdateManyWithWhereWithoutFormationInput = {
  data: TacticsUpdateManyMutationInput;
  where: TacticsScalarWhereInput;
};

export type TacticsUpdateManyWithoutFormationInput = {
  connect?: InputMaybe<Array<TacticsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TacticsCreateOrConnectWithoutFormationInput>>;
  create?: InputMaybe<Array<TacticsCreateWithoutFormationInput>>;
  createMany?: InputMaybe<TacticsCreateManyFormationInputEnvelope>;
  delete?: InputMaybe<Array<TacticsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TacticsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TacticsWhereUniqueInput>>;
  set?: InputMaybe<Array<TacticsWhereUniqueInput>>;
  update?: InputMaybe<Array<TacticsUpdateWithWhereUniqueWithoutFormationInput>>;
  updateMany?: InputMaybe<Array<TacticsUpdateManyWithWhereWithoutFormationInput>>;
  upsert?: InputMaybe<Array<TacticsUpsertWithWhereUniqueWithoutFormationInput>>;
};

export type TacticsUpdateOneRequiredWithoutLineupInput = {
  connect?: InputMaybe<TacticsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TacticsCreateOrConnectWithoutLineupInput>;
  create?: InputMaybe<TacticsCreateWithoutLineupInput>;
  update?: InputMaybe<TacticsUpdateWithoutLineupInput>;
  upsert?: InputMaybe<TacticsUpsertWithoutLineupInput>;
};

export type TacticsUpdateWithWhereUniqueWithoutFormationInput = {
  data: TacticsUpdateWithoutFormationInput;
  where: TacticsWhereUniqueInput;
};

export type TacticsUpdateWithoutFormationInput = {
  attackingStyle?: InputMaybe<IntFieldUpdateOperationsInput>;
  compactness?: InputMaybe<IntFieldUpdateOperationsInput>;
  defensiveLine?: InputMaybe<IntFieldUpdateOperationsInput>;
  lineup?: InputMaybe<LineupUpdateOneWithoutTacticsInput>;
  playerSupport?: InputMaybe<IntFieldUpdateOperationsInput>;
  playingStyle?: InputMaybe<StringFieldUpdateOperationsInput>;
  positionSwitch?: InputMaybe<IntFieldUpdateOperationsInput>;
  pressing?: InputMaybe<IntFieldUpdateOperationsInput>;
  supportRange?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TacticsUpdateWithoutLineupInput = {
  attackingStyle?: InputMaybe<IntFieldUpdateOperationsInput>;
  compactness?: InputMaybe<IntFieldUpdateOperationsInput>;
  defensiveLine?: InputMaybe<IntFieldUpdateOperationsInput>;
  formation?: InputMaybe<FormationUpdateOneRequiredWithoutTacticsInput>;
  playerSupport?: InputMaybe<IntFieldUpdateOperationsInput>;
  playingStyle?: InputMaybe<StringFieldUpdateOperationsInput>;
  positionSwitch?: InputMaybe<IntFieldUpdateOperationsInput>;
  pressing?: InputMaybe<IntFieldUpdateOperationsInput>;
  supportRange?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TacticsUpsertWithWhereUniqueWithoutFormationInput = {
  create: TacticsCreateWithoutFormationInput;
  update: TacticsUpdateWithoutFormationInput;
  where: TacticsWhereUniqueInput;
};

export type TacticsUpsertWithoutLineupInput = {
  create: TacticsCreateWithoutLineupInput;
  update: TacticsUpdateWithoutLineupInput;
};

export type TacticsWhereInput = {
  AND?: InputMaybe<Array<TacticsWhereInput>>;
  NOT?: InputMaybe<Array<TacticsWhereInput>>;
  OR?: InputMaybe<Array<TacticsWhereInput>>;
  attackingStyle?: InputMaybe<IntFilter>;
  compactness?: InputMaybe<IntFilter>;
  defensiveLine?: InputMaybe<IntFilter>;
  formation?: InputMaybe<FormationRelationFilter>;
  formationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  lineup?: InputMaybe<LineupRelationFilter>;
  playerSupport?: InputMaybe<IntFilter>;
  playingStyle?: InputMaybe<StringFilter>;
  positionSwitch?: InputMaybe<IntFilter>;
  pressing?: InputMaybe<IntFilter>;
  supportRange?: InputMaybe<IntFilter>;
};

export type TacticsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Token = {
  __typename?: 'Token';
  ClubBalance: Array<ClubBalance>;
  Value: Array<Value>;
  _count?: Maybe<TokenCount>;
  contractAddress: Scalars['String'];
  decimals: Scalars['Int'];
  id: Scalars['Int'];
  ticker: Scalars['String'];
};


export type TokenClubBalanceArgs = {
  cursor?: InputMaybe<ClubBalanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBalanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBalanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type TokenValueArgs = {
  cursor?: InputMaybe<ValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<ValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ValueWhereInput>;
};

export type TokenAvgAggregate = {
  __typename?: 'TokenAvgAggregate';
  decimals?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type TokenAvgOrderByAggregateInput = {
  decimals?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TokenCount = {
  __typename?: 'TokenCount';
  ClubBalance: Scalars['Int'];
  Value: Scalars['Int'];
};

export type TokenCountAggregate = {
  __typename?: 'TokenCountAggregate';
  _all: Scalars['Int'];
  contractAddress: Scalars['Int'];
  decimals: Scalars['Int'];
  id: Scalars['Int'];
  ticker: Scalars['Int'];
};

export type TokenCountOrderByAggregateInput = {
  contractAddress?: InputMaybe<SortOrder>;
  decimals?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ticker?: InputMaybe<SortOrder>;
};

export type TokenCreateInput = {
  ClubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutTokenInput>;
  Value?: InputMaybe<ValueCreateNestedManyWithoutTokenInput>;
  contractAddress: Scalars['String'];
  decimals: Scalars['Int'];
  ticker: Scalars['String'];
};

export type TokenCreateManyInput = {
  contractAddress: Scalars['String'];
  decimals: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  ticker: Scalars['String'];
};

export type TokenCreateNestedOneWithoutClubBalanceInput = {
  connect?: InputMaybe<TokenWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TokenCreateOrConnectWithoutClubBalanceInput>;
  create?: InputMaybe<TokenCreateWithoutClubBalanceInput>;
};

export type TokenCreateNestedOneWithoutValueInput = {
  connect?: InputMaybe<TokenWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TokenCreateOrConnectWithoutValueInput>;
  create?: InputMaybe<TokenCreateWithoutValueInput>;
};

export type TokenCreateOrConnectWithoutClubBalanceInput = {
  create: TokenCreateWithoutClubBalanceInput;
  where: TokenWhereUniqueInput;
};

export type TokenCreateOrConnectWithoutValueInput = {
  create: TokenCreateWithoutValueInput;
  where: TokenWhereUniqueInput;
};

export type TokenCreateWithoutClubBalanceInput = {
  Value?: InputMaybe<ValueCreateNestedManyWithoutTokenInput>;
  contractAddress: Scalars['String'];
  decimals: Scalars['Int'];
  ticker: Scalars['String'];
};

export type TokenCreateWithoutValueInput = {
  ClubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutTokenInput>;
  contractAddress: Scalars['String'];
  decimals: Scalars['Int'];
  ticker: Scalars['String'];
};

export type TokenGroupBy = {
  __typename?: 'TokenGroupBy';
  _avg?: Maybe<TokenAvgAggregate>;
  _count?: Maybe<TokenCountAggregate>;
  _max?: Maybe<TokenMaxAggregate>;
  _min?: Maybe<TokenMinAggregate>;
  _sum?: Maybe<TokenSumAggregate>;
  contractAddress: Scalars['String'];
  decimals: Scalars['Int'];
  id: Scalars['Int'];
  ticker: Scalars['String'];
};

export type TokenMaxAggregate = {
  __typename?: 'TokenMaxAggregate';
  contractAddress?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ticker?: Maybe<Scalars['String']>;
};

export type TokenMaxOrderByAggregateInput = {
  contractAddress?: InputMaybe<SortOrder>;
  decimals?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ticker?: InputMaybe<SortOrder>;
};

export type TokenMinAggregate = {
  __typename?: 'TokenMinAggregate';
  contractAddress?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ticker?: Maybe<Scalars['String']>;
};

export type TokenMinOrderByAggregateInput = {
  contractAddress?: InputMaybe<SortOrder>;
  decimals?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ticker?: InputMaybe<SortOrder>;
};

export type TokenOrderByWithAggregationInput = {
  _avg?: InputMaybe<TokenAvgOrderByAggregateInput>;
  _count?: InputMaybe<TokenCountOrderByAggregateInput>;
  _max?: InputMaybe<TokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<TokenMinOrderByAggregateInput>;
  _sum?: InputMaybe<TokenSumOrderByAggregateInput>;
  contractAddress?: InputMaybe<SortOrder>;
  decimals?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ticker?: InputMaybe<SortOrder>;
};

export type TokenOrderByWithRelationInput = {
  ClubBalance?: InputMaybe<ClubBalanceOrderByRelationAggregateInput>;
  Value?: InputMaybe<ValueOrderByRelationAggregateInput>;
  contractAddress?: InputMaybe<SortOrder>;
  decimals?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ticker?: InputMaybe<SortOrder>;
};

export type TokenRelationFilter = {
  is?: InputMaybe<TokenWhereInput>;
  isNot?: InputMaybe<TokenWhereInput>;
};

export enum TokenScalarFieldEnum {
  ContractAddress = 'contractAddress',
  Decimals = 'decimals',
  Id = 'id',
  Ticker = 'ticker'
}

export type TokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TokenScalarWhereWithAggregatesInput>>;
  contractAddress?: InputMaybe<StringWithAggregatesFilter>;
  decimals?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  ticker?: InputMaybe<StringWithAggregatesFilter>;
};

export type TokenSumAggregate = {
  __typename?: 'TokenSumAggregate';
  decimals?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type TokenSumOrderByAggregateInput = {
  decimals?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TokenUpdateInput = {
  ClubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutTokenInput>;
  Value?: InputMaybe<ValueUpdateManyWithoutTokenInput>;
  contractAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  decimals?: InputMaybe<IntFieldUpdateOperationsInput>;
  ticker?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateManyMutationInput = {
  contractAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  decimals?: InputMaybe<IntFieldUpdateOperationsInput>;
  ticker?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateOneRequiredWithoutClubBalanceInput = {
  connect?: InputMaybe<TokenWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TokenCreateOrConnectWithoutClubBalanceInput>;
  create?: InputMaybe<TokenCreateWithoutClubBalanceInput>;
  update?: InputMaybe<TokenUpdateWithoutClubBalanceInput>;
  upsert?: InputMaybe<TokenUpsertWithoutClubBalanceInput>;
};

export type TokenUpdateOneRequiredWithoutValueInput = {
  connect?: InputMaybe<TokenWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TokenCreateOrConnectWithoutValueInput>;
  create?: InputMaybe<TokenCreateWithoutValueInput>;
  update?: InputMaybe<TokenUpdateWithoutValueInput>;
  upsert?: InputMaybe<TokenUpsertWithoutValueInput>;
};

export type TokenUpdateWithoutClubBalanceInput = {
  Value?: InputMaybe<ValueUpdateManyWithoutTokenInput>;
  contractAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  decimals?: InputMaybe<IntFieldUpdateOperationsInput>;
  ticker?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateWithoutValueInput = {
  ClubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutTokenInput>;
  contractAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  decimals?: InputMaybe<IntFieldUpdateOperationsInput>;
  ticker?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpsertWithoutClubBalanceInput = {
  create: TokenCreateWithoutClubBalanceInput;
  update: TokenUpdateWithoutClubBalanceInput;
};

export type TokenUpsertWithoutValueInput = {
  create: TokenCreateWithoutValueInput;
  update: TokenUpdateWithoutValueInput;
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  ClubBalance?: InputMaybe<ClubBalanceListRelationFilter>;
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  Value?: InputMaybe<ValueListRelationFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  decimals?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  ticker?: InputMaybe<StringFilter>;
};

export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Tournament = {
  __typename?: 'Tournament';
  _count?: Maybe<TournamentCount>;
  clubTournaments: Array<ClubTournament>;
  competition: Competition;
  competitionId: Scalars['Int'];
  createdAt: Scalars['Float'];
  fixtures: Array<Fixture>;
  id: Scalars['Int'];
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  playerStats: Array<TournamentPlayerStats>;
  prizes: Array<Prize>;
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};


export type TournamentClubTournamentsArgs = {
  cursor?: InputMaybe<ClubTournamentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTournamentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTournamentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTournamentWhereInput>;
};


export type TournamentFixturesArgs = {
  cursor?: InputMaybe<FixtureWhereUniqueInput>;
  distinct?: InputMaybe<Array<FixtureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FixtureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FixtureWhereInput>;
};


export type TournamentPlayerStatsArgs = {
  cursor?: InputMaybe<TournamentPlayerStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TournamentPlayerStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TournamentPlayerStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TournamentPlayerStatsWhereInput>;
};


export type TournamentPrizesArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PrizeWhereInput>;
};

export type TournamentAvgAggregate = {
  __typename?: 'TournamentAvgAggregate';
  competitionId?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Float']>;
};

export type TournamentAvgOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
};

export type TournamentCount = {
  __typename?: 'TournamentCount';
  clubTournaments: Scalars['Int'];
  fixtures: Scalars['Int'];
  playerStats: Scalars['Int'];
  prizes: Scalars['Int'];
};

export type TournamentCountAggregate = {
  __typename?: 'TournamentCountAggregate';
  _all: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  instance: Scalars['Int'];
  isComplete: Scalars['Int'];
  isLive: Scalars['Int'];
  isPending: Scalars['Int'];
  name: Scalars['Int'];
  seed: Scalars['Int'];
  startDate: Scalars['Int'];
  type: Scalars['Int'];
};

export type TournamentCountOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instance?: InputMaybe<SortOrder>;
  isComplete?: InputMaybe<SortOrder>;
  isLive?: InputMaybe<SortOrder>;
  isPending?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TournamentCreateInput = {
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutTournamentInput>;
  competition: CompetitionCreateNestedOneWithoutTournamentsInput;
  createdAt: Scalars['Float'];
  fixtures?: InputMaybe<FixtureCreateNestedManyWithoutTournamentInput>;
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  playerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutTournamentInput>;
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentCreateManyCompetitionInput = {
  createdAt: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentCreateManyCompetitionInputEnvelope = {
  data: Array<TournamentCreateManyCompetitionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TournamentCreateManyInput = {
  competitionId: Scalars['Int'];
  createdAt: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentCreateNestedManyWithoutCompetitionInput = {
  connect?: InputMaybe<Array<TournamentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TournamentCreateOrConnectWithoutCompetitionInput>>;
  create?: InputMaybe<Array<TournamentCreateWithoutCompetitionInput>>;
  createMany?: InputMaybe<TournamentCreateManyCompetitionInputEnvelope>;
};

export type TournamentCreateNestedOneWithoutClubTournamentsInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutClubTournamentsInput>;
  create?: InputMaybe<TournamentCreateWithoutClubTournamentsInput>;
};

export type TournamentCreateNestedOneWithoutFixturesInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutFixturesInput>;
  create?: InputMaybe<TournamentCreateWithoutFixturesInput>;
};

export type TournamentCreateNestedOneWithoutPlayerStatsInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutPlayerStatsInput>;
  create?: InputMaybe<TournamentCreateWithoutPlayerStatsInput>;
};

export type TournamentCreateNestedOneWithoutPrizesInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutPrizesInput>;
  create?: InputMaybe<TournamentCreateWithoutPrizesInput>;
};

export type TournamentCreateOrConnectWithoutClubTournamentsInput = {
  create: TournamentCreateWithoutClubTournamentsInput;
  where: TournamentWhereUniqueInput;
};

export type TournamentCreateOrConnectWithoutCompetitionInput = {
  create: TournamentCreateWithoutCompetitionInput;
  where: TournamentWhereUniqueInput;
};

export type TournamentCreateOrConnectWithoutFixturesInput = {
  create: TournamentCreateWithoutFixturesInput;
  where: TournamentWhereUniqueInput;
};

export type TournamentCreateOrConnectWithoutPlayerStatsInput = {
  create: TournamentCreateWithoutPlayerStatsInput;
  where: TournamentWhereUniqueInput;
};

export type TournamentCreateOrConnectWithoutPrizesInput = {
  create: TournamentCreateWithoutPrizesInput;
  where: TournamentWhereUniqueInput;
};

export type TournamentCreateWithoutClubTournamentsInput = {
  competition: CompetitionCreateNestedOneWithoutTournamentsInput;
  createdAt: Scalars['Float'];
  fixtures?: InputMaybe<FixtureCreateNestedManyWithoutTournamentInput>;
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  playerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutTournamentInput>;
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentCreateWithoutCompetitionInput = {
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutTournamentInput>;
  createdAt: Scalars['Float'];
  fixtures?: InputMaybe<FixtureCreateNestedManyWithoutTournamentInput>;
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  playerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutTournamentInput>;
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentCreateWithoutFixturesInput = {
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutTournamentInput>;
  competition: CompetitionCreateNestedOneWithoutTournamentsInput;
  createdAt: Scalars['Float'];
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  playerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutTournamentInput>;
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentCreateWithoutPlayerStatsInput = {
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutTournamentInput>;
  competition: CompetitionCreateNestedOneWithoutTournamentsInput;
  createdAt: Scalars['Float'];
  fixtures?: InputMaybe<FixtureCreateNestedManyWithoutTournamentInput>;
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutTournamentInput>;
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentCreateWithoutPrizesInput = {
  clubTournaments?: InputMaybe<ClubTournamentCreateNestedManyWithoutTournamentInput>;
  competition: CompetitionCreateNestedOneWithoutTournamentsInput;
  createdAt: Scalars['Float'];
  fixtures?: InputMaybe<FixtureCreateNestedManyWithoutTournamentInput>;
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  playerStats?: InputMaybe<TournamentPlayerStatsCreateNestedManyWithoutTournamentInput>;
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentGroupBy = {
  __typename?: 'TournamentGroupBy';
  _avg?: Maybe<TournamentAvgAggregate>;
  _count?: Maybe<TournamentCountAggregate>;
  _max?: Maybe<TournamentMaxAggregate>;
  _min?: Maybe<TournamentMinAggregate>;
  _sum?: Maybe<TournamentSumAggregate>;
  competitionId: Scalars['Int'];
  createdAt: Scalars['Float'];
  id: Scalars['Int'];
  instance: Scalars['String'];
  isComplete: Scalars['Boolean'];
  isLive: Scalars['Boolean'];
  isPending: Scalars['Boolean'];
  name: Scalars['String'];
  seed: Scalars['String'];
  startDate: Scalars['Float'];
  type: Scalars['String'];
};

export type TournamentListRelationFilter = {
  every?: InputMaybe<TournamentWhereInput>;
  none?: InputMaybe<TournamentWhereInput>;
  some?: InputMaybe<TournamentWhereInput>;
};

export type TournamentMaxAggregate = {
  __typename?: 'TournamentMaxAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  instance?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  isLive?: Maybe<Scalars['Boolean']>;
  isPending?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type TournamentMaxOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instance?: InputMaybe<SortOrder>;
  isComplete?: InputMaybe<SortOrder>;
  isLive?: InputMaybe<SortOrder>;
  isPending?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TournamentMinAggregate = {
  __typename?: 'TournamentMinAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  instance?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  isLive?: Maybe<Scalars['Boolean']>;
  isPending?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type TournamentMinOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instance?: InputMaybe<SortOrder>;
  isComplete?: InputMaybe<SortOrder>;
  isLive?: InputMaybe<SortOrder>;
  isPending?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TournamentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TournamentOrderByWithAggregationInput = {
  _avg?: InputMaybe<TournamentAvgOrderByAggregateInput>;
  _count?: InputMaybe<TournamentCountOrderByAggregateInput>;
  _max?: InputMaybe<TournamentMaxOrderByAggregateInput>;
  _min?: InputMaybe<TournamentMinOrderByAggregateInput>;
  _sum?: InputMaybe<TournamentSumOrderByAggregateInput>;
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instance?: InputMaybe<SortOrder>;
  isComplete?: InputMaybe<SortOrder>;
  isLive?: InputMaybe<SortOrder>;
  isPending?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  seed?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TournamentOrderByWithRelationInput = {
  clubTournaments?: InputMaybe<ClubTournamentOrderByRelationAggregateInput>;
  competition?: InputMaybe<CompetitionOrderByWithRelationInput>;
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  fixtures?: InputMaybe<FixtureOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  instance?: InputMaybe<SortOrder>;
  isComplete?: InputMaybe<SortOrder>;
  isLive?: InputMaybe<SortOrder>;
  isPending?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerStats?: InputMaybe<TournamentPlayerStatsOrderByRelationAggregateInput>;
  prizes?: InputMaybe<PrizeOrderByRelationAggregateInput>;
  seed?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStats = {
  __typename?: 'TournamentPlayerStats';
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  playerStatRecord: PlayerStatsRecord;
  playerStatRecordId: Scalars['Int'];
  tournament: Tournament;
  tournamentId: Scalars['Int'];
};

export type TournamentPlayerStatsAvgAggregate = {
  __typename?: 'TournamentPlayerStatsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  playerStatRecordId?: Maybe<Scalars['Float']>;
  tournamentId?: Maybe<Scalars['Float']>;
};

export type TournamentPlayerStatsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsCountAggregate = {
  __typename?: 'TournamentPlayerStatsCountAggregate';
  _all: Scalars['Int'];
  dummy: Scalars['Int'];
  id: Scalars['Int'];
  playerStatRecordId: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type TournamentPlayerStatsCountOrderByAggregateInput = {
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsCreateInput = {
  dummy?: InputMaybe<Scalars['String']>;
  playerStatRecord: PlayerStatsRecordCreateNestedOneWithoutTournamentPlayerStatsInput;
  tournament: TournamentCreateNestedOneWithoutPlayerStatsInput;
};

export type TournamentPlayerStatsCreateManyInput = {
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  playerStatRecordId: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type TournamentPlayerStatsCreateManyPlayerStatRecordInput = {
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  tournamentId: Scalars['Int'];
};

export type TournamentPlayerStatsCreateManyPlayerStatRecordInputEnvelope = {
  data: Array<TournamentPlayerStatsCreateManyPlayerStatRecordInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TournamentPlayerStatsCreateManyTournamentInput = {
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  playerStatRecordId: Scalars['Int'];
};

export type TournamentPlayerStatsCreateManyTournamentInputEnvelope = {
  data: Array<TournamentPlayerStatsCreateManyTournamentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TournamentPlayerStatsCreateNestedManyWithoutPlayerStatRecordInput = {
  connect?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TournamentPlayerStatsCreateOrConnectWithoutPlayerStatRecordInput>>;
  create?: InputMaybe<Array<TournamentPlayerStatsCreateWithoutPlayerStatRecordInput>>;
  createMany?: InputMaybe<TournamentPlayerStatsCreateManyPlayerStatRecordInputEnvelope>;
};

export type TournamentPlayerStatsCreateNestedManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TournamentPlayerStatsCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<TournamentPlayerStatsCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<TournamentPlayerStatsCreateManyTournamentInputEnvelope>;
};

export type TournamentPlayerStatsCreateOrConnectWithoutPlayerStatRecordInput = {
  create: TournamentPlayerStatsCreateWithoutPlayerStatRecordInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};

export type TournamentPlayerStatsCreateOrConnectWithoutTournamentInput = {
  create: TournamentPlayerStatsCreateWithoutTournamentInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};

export type TournamentPlayerStatsCreateWithoutPlayerStatRecordInput = {
  dummy?: InputMaybe<Scalars['String']>;
  tournament: TournamentCreateNestedOneWithoutPlayerStatsInput;
};

export type TournamentPlayerStatsCreateWithoutTournamentInput = {
  dummy?: InputMaybe<Scalars['String']>;
  playerStatRecord: PlayerStatsRecordCreateNestedOneWithoutTournamentPlayerStatsInput;
};

export type TournamentPlayerStatsGroupBy = {
  __typename?: 'TournamentPlayerStatsGroupBy';
  _avg?: Maybe<TournamentPlayerStatsAvgAggregate>;
  _count?: Maybe<TournamentPlayerStatsCountAggregate>;
  _max?: Maybe<TournamentPlayerStatsMaxAggregate>;
  _min?: Maybe<TournamentPlayerStatsMinAggregate>;
  _sum?: Maybe<TournamentPlayerStatsSumAggregate>;
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  playerStatRecordId: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type TournamentPlayerStatsListRelationFilter = {
  every?: InputMaybe<TournamentPlayerStatsWhereInput>;
  none?: InputMaybe<TournamentPlayerStatsWhereInput>;
  some?: InputMaybe<TournamentPlayerStatsWhereInput>;
};

export type TournamentPlayerStatsMaxAggregate = {
  __typename?: 'TournamentPlayerStatsMaxAggregate';
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  playerStatRecordId?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type TournamentPlayerStatsMaxOrderByAggregateInput = {
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsMinAggregate = {
  __typename?: 'TournamentPlayerStatsMinAggregate';
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  playerStatRecordId?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type TournamentPlayerStatsMinOrderByAggregateInput = {
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsOrderByWithAggregationInput = {
  _avg?: InputMaybe<TournamentPlayerStatsAvgOrderByAggregateInput>;
  _count?: InputMaybe<TournamentPlayerStatsCountOrderByAggregateInput>;
  _max?: InputMaybe<TournamentPlayerStatsMaxOrderByAggregateInput>;
  _min?: InputMaybe<TournamentPlayerStatsMinOrderByAggregateInput>;
  _sum?: InputMaybe<TournamentPlayerStatsSumOrderByAggregateInput>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsOrderByWithRelationInput = {
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordOrderByWithRelationInput>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournament?: InputMaybe<TournamentOrderByWithRelationInput>;
  tournamentId?: InputMaybe<SortOrder>;
};

export enum TournamentPlayerStatsScalarFieldEnum {
  Dummy = 'dummy',
  Id = 'id',
  PlayerStatRecordId = 'playerStatRecordId',
  TournamentId = 'tournamentId'
}

export type TournamentPlayerStatsScalarWhereInput = {
  AND?: InputMaybe<Array<TournamentPlayerStatsScalarWhereInput>>;
  NOT?: InputMaybe<Array<TournamentPlayerStatsScalarWhereInput>>;
  OR?: InputMaybe<Array<TournamentPlayerStatsScalarWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type TournamentPlayerStatsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TournamentPlayerStatsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TournamentPlayerStatsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TournamentPlayerStatsScalarWhereWithAggregatesInput>>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  playerStatRecordId?: InputMaybe<IntWithAggregatesFilter>;
  tournamentId?: InputMaybe<IntWithAggregatesFilter>;
};

export type TournamentPlayerStatsSumAggregate = {
  __typename?: 'TournamentPlayerStatsSumAggregate';
  id?: Maybe<Scalars['Int']>;
  playerStatRecordId?: Maybe<Scalars['Int']>;
  tournamentId?: Maybe<Scalars['Int']>;
};

export type TournamentPlayerStatsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  playerStatRecordId?: InputMaybe<SortOrder>;
  tournamentId?: InputMaybe<SortOrder>;
};

export type TournamentPlayerStatsTournamentIdPlayerStatRecordIdCompoundUniqueInput = {
  playerStatRecordId: Scalars['Int'];
  tournamentId: Scalars['Int'];
};

export type TournamentPlayerStatsUpdateInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordUpdateOneRequiredWithoutTournamentPlayerStatsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutPlayerStatsInput>;
};

export type TournamentPlayerStatsUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TournamentPlayerStatsUpdateManyWithWhereWithoutPlayerStatRecordInput = {
  data: TournamentPlayerStatsUpdateManyMutationInput;
  where: TournamentPlayerStatsScalarWhereInput;
};

export type TournamentPlayerStatsUpdateManyWithWhereWithoutTournamentInput = {
  data: TournamentPlayerStatsUpdateManyMutationInput;
  where: TournamentPlayerStatsScalarWhereInput;
};

export type TournamentPlayerStatsUpdateManyWithoutPlayerStatRecordInput = {
  connect?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TournamentPlayerStatsCreateOrConnectWithoutPlayerStatRecordInput>>;
  create?: InputMaybe<Array<TournamentPlayerStatsCreateWithoutPlayerStatRecordInput>>;
  createMany?: InputMaybe<TournamentPlayerStatsCreateManyPlayerStatRecordInputEnvelope>;
  delete?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TournamentPlayerStatsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  set?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  update?: InputMaybe<Array<TournamentPlayerStatsUpdateWithWhereUniqueWithoutPlayerStatRecordInput>>;
  updateMany?: InputMaybe<Array<TournamentPlayerStatsUpdateManyWithWhereWithoutPlayerStatRecordInput>>;
  upsert?: InputMaybe<Array<TournamentPlayerStatsUpsertWithWhereUniqueWithoutPlayerStatRecordInput>>;
};

export type TournamentPlayerStatsUpdateManyWithoutTournamentInput = {
  connect?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TournamentPlayerStatsCreateOrConnectWithoutTournamentInput>>;
  create?: InputMaybe<Array<TournamentPlayerStatsCreateWithoutTournamentInput>>;
  createMany?: InputMaybe<TournamentPlayerStatsCreateManyTournamentInputEnvelope>;
  delete?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TournamentPlayerStatsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  set?: InputMaybe<Array<TournamentPlayerStatsWhereUniqueInput>>;
  update?: InputMaybe<Array<TournamentPlayerStatsUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: InputMaybe<Array<TournamentPlayerStatsUpdateManyWithWhereWithoutTournamentInput>>;
  upsert?: InputMaybe<Array<TournamentPlayerStatsUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type TournamentPlayerStatsUpdateWithWhereUniqueWithoutPlayerStatRecordInput = {
  data: TournamentPlayerStatsUpdateWithoutPlayerStatRecordInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};

export type TournamentPlayerStatsUpdateWithWhereUniqueWithoutTournamentInput = {
  data: TournamentPlayerStatsUpdateWithoutTournamentInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};

export type TournamentPlayerStatsUpdateWithoutPlayerStatRecordInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tournament?: InputMaybe<TournamentUpdateOneRequiredWithoutPlayerStatsInput>;
};

export type TournamentPlayerStatsUpdateWithoutTournamentInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordUpdateOneRequiredWithoutTournamentPlayerStatsInput>;
};

export type TournamentPlayerStatsUpsertWithWhereUniqueWithoutPlayerStatRecordInput = {
  create: TournamentPlayerStatsCreateWithoutPlayerStatRecordInput;
  update: TournamentPlayerStatsUpdateWithoutPlayerStatRecordInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};

export type TournamentPlayerStatsUpsertWithWhereUniqueWithoutTournamentInput = {
  create: TournamentPlayerStatsCreateWithoutTournamentInput;
  update: TournamentPlayerStatsUpdateWithoutTournamentInput;
  where: TournamentPlayerStatsWhereUniqueInput;
};

export type TournamentPlayerStatsWhereInput = {
  AND?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  NOT?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  OR?: InputMaybe<Array<TournamentPlayerStatsWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  playerStatRecord?: InputMaybe<PlayerStatsRecordRelationFilter>;
  playerStatRecordId?: InputMaybe<IntFilter>;
  tournament?: InputMaybe<TournamentRelationFilter>;
  tournamentId?: InputMaybe<IntFilter>;
};

export type TournamentPlayerStatsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  tournamentId_playerStatRecordId?: InputMaybe<TournamentPlayerStatsTournamentIdPlayerStatRecordIdCompoundUniqueInput>;
};

export type TournamentRelationFilter = {
  is?: InputMaybe<TournamentWhereInput>;
  isNot?: InputMaybe<TournamentWhereInput>;
};

export enum TournamentScalarFieldEnum {
  CompetitionId = 'competitionId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Instance = 'instance',
  IsComplete = 'isComplete',
  IsLive = 'isLive',
  IsPending = 'isPending',
  Name = 'name',
  Seed = 'seed',
  StartDate = 'startDate',
  Type = 'type'
}

export type TournamentScalarWhereInput = {
  AND?: InputMaybe<Array<TournamentScalarWhereInput>>;
  NOT?: InputMaybe<Array<TournamentScalarWhereInput>>;
  OR?: InputMaybe<Array<TournamentScalarWhereInput>>;
  competitionId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IntFilter>;
  instance?: InputMaybe<StringFilter>;
  isComplete?: InputMaybe<BoolFilter>;
  isLive?: InputMaybe<BoolFilter>;
  isPending?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  seed?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
};

export type TournamentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TournamentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TournamentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TournamentScalarWhereWithAggregatesInput>>;
  competitionId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<FloatWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  instance?: InputMaybe<StringWithAggregatesFilter>;
  isComplete?: InputMaybe<BoolWithAggregatesFilter>;
  isLive?: InputMaybe<BoolWithAggregatesFilter>;
  isPending?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  seed?: InputMaybe<StringWithAggregatesFilter>;
  startDate?: InputMaybe<FloatWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
};

export type TournamentSumAggregate = {
  __typename?: 'TournamentSumAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Float']>;
};

export type TournamentSumOrderByAggregateInput = {
  competitionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
};

export type TournamentUpdateInput = {
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutTournamentInput>;
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutTournamentsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtures?: InputMaybe<FixtureUpdateManyWithoutTournamentInput>;
  instance?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isLive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPending?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutTournamentInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TournamentUpdateManyMutationInput = {
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  instance?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isLive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPending?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TournamentUpdateManyWithWhereWithoutCompetitionInput = {
  data: TournamentUpdateManyMutationInput;
  where: TournamentScalarWhereInput;
};

export type TournamentUpdateManyWithoutCompetitionInput = {
  connect?: InputMaybe<Array<TournamentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TournamentCreateOrConnectWithoutCompetitionInput>>;
  create?: InputMaybe<Array<TournamentCreateWithoutCompetitionInput>>;
  createMany?: InputMaybe<TournamentCreateManyCompetitionInputEnvelope>;
  delete?: InputMaybe<Array<TournamentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TournamentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TournamentWhereUniqueInput>>;
  set?: InputMaybe<Array<TournamentWhereUniqueInput>>;
  update?: InputMaybe<Array<TournamentUpdateWithWhereUniqueWithoutCompetitionInput>>;
  updateMany?: InputMaybe<Array<TournamentUpdateManyWithWhereWithoutCompetitionInput>>;
  upsert?: InputMaybe<Array<TournamentUpsertWithWhereUniqueWithoutCompetitionInput>>;
};

export type TournamentUpdateOneRequiredWithoutClubTournamentsInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutClubTournamentsInput>;
  create?: InputMaybe<TournamentCreateWithoutClubTournamentsInput>;
  update?: InputMaybe<TournamentUpdateWithoutClubTournamentsInput>;
  upsert?: InputMaybe<TournamentUpsertWithoutClubTournamentsInput>;
};

export type TournamentUpdateOneRequiredWithoutFixturesInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutFixturesInput>;
  create?: InputMaybe<TournamentCreateWithoutFixturesInput>;
  update?: InputMaybe<TournamentUpdateWithoutFixturesInput>;
  upsert?: InputMaybe<TournamentUpsertWithoutFixturesInput>;
};

export type TournamentUpdateOneRequiredWithoutPlayerStatsInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutPlayerStatsInput>;
  create?: InputMaybe<TournamentCreateWithoutPlayerStatsInput>;
  update?: InputMaybe<TournamentUpdateWithoutPlayerStatsInput>;
  upsert?: InputMaybe<TournamentUpsertWithoutPlayerStatsInput>;
};

export type TournamentUpdateOneRequiredWithoutPrizesInput = {
  connect?: InputMaybe<TournamentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TournamentCreateOrConnectWithoutPrizesInput>;
  create?: InputMaybe<TournamentCreateWithoutPrizesInput>;
  update?: InputMaybe<TournamentUpdateWithoutPrizesInput>;
  upsert?: InputMaybe<TournamentUpsertWithoutPrizesInput>;
};

export type TournamentUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: TournamentUpdateWithoutCompetitionInput;
  where: TournamentWhereUniqueInput;
};

export type TournamentUpdateWithoutClubTournamentsInput = {
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutTournamentsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtures?: InputMaybe<FixtureUpdateManyWithoutTournamentInput>;
  instance?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isLive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPending?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutTournamentInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TournamentUpdateWithoutCompetitionInput = {
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutTournamentInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtures?: InputMaybe<FixtureUpdateManyWithoutTournamentInput>;
  instance?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isLive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPending?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutTournamentInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TournamentUpdateWithoutFixturesInput = {
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutTournamentInput>;
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutTournamentsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  instance?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isLive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPending?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutTournamentInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutTournamentInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TournamentUpdateWithoutPlayerStatsInput = {
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutTournamentInput>;
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutTournamentsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtures?: InputMaybe<FixtureUpdateManyWithoutTournamentInput>;
  instance?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isLive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPending?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutTournamentInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TournamentUpdateWithoutPrizesInput = {
  clubTournaments?: InputMaybe<ClubTournamentUpdateManyWithoutTournamentInput>;
  competition?: InputMaybe<CompetitionUpdateOneRequiredWithoutTournamentsInput>;
  createdAt?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fixtures?: InputMaybe<FixtureUpdateManyWithoutTournamentInput>;
  instance?: InputMaybe<StringFieldUpdateOperationsInput>;
  isComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isLive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPending?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerStats?: InputMaybe<TournamentPlayerStatsUpdateManyWithoutTournamentInput>;
  seed?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<FloatFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TournamentUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: TournamentCreateWithoutCompetitionInput;
  update: TournamentUpdateWithoutCompetitionInput;
  where: TournamentWhereUniqueInput;
};

export type TournamentUpsertWithoutClubTournamentsInput = {
  create: TournamentCreateWithoutClubTournamentsInput;
  update: TournamentUpdateWithoutClubTournamentsInput;
};

export type TournamentUpsertWithoutFixturesInput = {
  create: TournamentCreateWithoutFixturesInput;
  update: TournamentUpdateWithoutFixturesInput;
};

export type TournamentUpsertWithoutPlayerStatsInput = {
  create: TournamentCreateWithoutPlayerStatsInput;
  update: TournamentUpdateWithoutPlayerStatsInput;
};

export type TournamentUpsertWithoutPrizesInput = {
  create: TournamentCreateWithoutPrizesInput;
  update: TournamentUpdateWithoutPrizesInput;
};

export type TournamentWhereInput = {
  AND?: InputMaybe<Array<TournamentWhereInput>>;
  NOT?: InputMaybe<Array<TournamentWhereInput>>;
  OR?: InputMaybe<Array<TournamentWhereInput>>;
  clubTournaments?: InputMaybe<ClubTournamentListRelationFilter>;
  competition?: InputMaybe<CompetitionRelationFilter>;
  competitionId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<FloatFilter>;
  fixtures?: InputMaybe<FixtureListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  instance?: InputMaybe<StringFilter>;
  isComplete?: InputMaybe<BoolFilter>;
  isLive?: InputMaybe<BoolFilter>;
  isPending?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  playerStats?: InputMaybe<TournamentPlayerStatsListRelationFilter>;
  prizes?: InputMaybe<PrizeListRelationFilter>;
  seed?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
};

export type TournamentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Value = {
  __typename?: 'Value';
  _count?: Maybe<ValueCount>;
  academyMintFees: Array<AcademyMintFee>;
  baseValue: Scalars['String'];
  claim: Array<Claim>;
  clubBalance: Array<ClubBalance>;
  id: Scalars['Int'];
  poolsOnValues: Array<PoolsOnValues>;
  prize: Array<Prize>;
  token: Token;
  tokenId: Scalars['Int'];
};


export type ValueAcademyMintFeesArgs = {
  cursor?: InputMaybe<AcademyMintFeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AcademyMintFeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AcademyMintFeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AcademyMintFeeWhereInput>;
};


export type ValueClaimArgs = {
  cursor?: InputMaybe<ClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClaimOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimWhereInput>;
};


export type ValueClubBalanceArgs = {
  cursor?: InputMaybe<ClubBalanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubBalanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubBalanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubBalanceWhereInput>;
};


export type ValuePoolsOnValuesArgs = {
  cursor?: InputMaybe<PoolsOnValuesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolsOnValuesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolsOnValuesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolsOnValuesWhereInput>;
};


export type ValuePrizeArgs = {
  cursor?: InputMaybe<PrizeWhereUniqueInput>;
  distinct?: InputMaybe<Array<PrizeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PrizeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PrizeWhereInput>;
};

export type ValueAvgAggregate = {
  __typename?: 'ValueAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  tokenId?: Maybe<Scalars['Float']>;
};

export type ValueAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
};

export type ValueCount = {
  __typename?: 'ValueCount';
  academyMintFees: Scalars['Int'];
  claim: Scalars['Int'];
  clubBalance: Scalars['Int'];
  poolsOnValues: Scalars['Int'];
  prize: Scalars['Int'];
};

export type ValueCountAggregate = {
  __typename?: 'ValueCountAggregate';
  _all: Scalars['Int'];
  baseValue: Scalars['Int'];
  id: Scalars['Int'];
  tokenId: Scalars['Int'];
};

export type ValueCountOrderByAggregateInput = {
  baseValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
};

export type ValueCreateInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutValueInput>;
  baseValue: Scalars['String'];
  claim?: InputMaybe<ClaimCreateNestedManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutValueInput>;
  prize?: InputMaybe<PrizeCreateNestedManyWithoutValueInput>;
  token: TokenCreateNestedOneWithoutValueInput;
};

export type ValueCreateManyInput = {
  baseValue: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  tokenId: Scalars['Int'];
};

export type ValueCreateManyTokenInput = {
  baseValue: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
};

export type ValueCreateManyTokenInputEnvelope = {
  data: Array<ValueCreateManyTokenInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ValueCreateNestedManyWithoutTokenInput = {
  connect?: InputMaybe<Array<ValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ValueCreateOrConnectWithoutTokenInput>>;
  create?: InputMaybe<Array<ValueCreateWithoutTokenInput>>;
  createMany?: InputMaybe<ValueCreateManyTokenInputEnvelope>;
};

export type ValueCreateNestedOneWithoutAcademyMintFeesInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutAcademyMintFeesInput>;
  create?: InputMaybe<ValueCreateWithoutAcademyMintFeesInput>;
};

export type ValueCreateNestedOneWithoutClaimInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutClaimInput>;
  create?: InputMaybe<ValueCreateWithoutClaimInput>;
};

export type ValueCreateNestedOneWithoutClubBalanceInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutClubBalanceInput>;
  create?: InputMaybe<ValueCreateWithoutClubBalanceInput>;
};

export type ValueCreateNestedOneWithoutPoolsOnValuesInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutPoolsOnValuesInput>;
  create?: InputMaybe<ValueCreateWithoutPoolsOnValuesInput>;
};

export type ValueCreateNestedOneWithoutPrizeInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutPrizeInput>;
  create?: InputMaybe<ValueCreateWithoutPrizeInput>;
};

export type ValueCreateOrConnectWithoutAcademyMintFeesInput = {
  create: ValueCreateWithoutAcademyMintFeesInput;
  where: ValueWhereUniqueInput;
};

export type ValueCreateOrConnectWithoutClaimInput = {
  create: ValueCreateWithoutClaimInput;
  where: ValueWhereUniqueInput;
};

export type ValueCreateOrConnectWithoutClubBalanceInput = {
  create: ValueCreateWithoutClubBalanceInput;
  where: ValueWhereUniqueInput;
};

export type ValueCreateOrConnectWithoutPoolsOnValuesInput = {
  create: ValueCreateWithoutPoolsOnValuesInput;
  where: ValueWhereUniqueInput;
};

export type ValueCreateOrConnectWithoutPrizeInput = {
  create: ValueCreateWithoutPrizeInput;
  where: ValueWhereUniqueInput;
};

export type ValueCreateOrConnectWithoutTokenInput = {
  create: ValueCreateWithoutTokenInput;
  where: ValueWhereUniqueInput;
};

export type ValueCreateWithoutAcademyMintFeesInput = {
  baseValue: Scalars['String'];
  claim?: InputMaybe<ClaimCreateNestedManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutValueInput>;
  prize?: InputMaybe<PrizeCreateNestedManyWithoutValueInput>;
  token: TokenCreateNestedOneWithoutValueInput;
};

export type ValueCreateWithoutClaimInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutValueInput>;
  baseValue: Scalars['String'];
  clubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutValueInput>;
  prize?: InputMaybe<PrizeCreateNestedManyWithoutValueInput>;
  token: TokenCreateNestedOneWithoutValueInput;
};

export type ValueCreateWithoutClubBalanceInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutValueInput>;
  baseValue: Scalars['String'];
  claim?: InputMaybe<ClaimCreateNestedManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutValueInput>;
  prize?: InputMaybe<PrizeCreateNestedManyWithoutValueInput>;
  token: TokenCreateNestedOneWithoutValueInput;
};

export type ValueCreateWithoutPoolsOnValuesInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutValueInput>;
  baseValue: Scalars['String'];
  claim?: InputMaybe<ClaimCreateNestedManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutValueInput>;
  prize?: InputMaybe<PrizeCreateNestedManyWithoutValueInput>;
  token: TokenCreateNestedOneWithoutValueInput;
};

export type ValueCreateWithoutPrizeInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutValueInput>;
  baseValue: Scalars['String'];
  claim?: InputMaybe<ClaimCreateNestedManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutValueInput>;
  token: TokenCreateNestedOneWithoutValueInput;
};

export type ValueCreateWithoutTokenInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeCreateNestedManyWithoutValueInput>;
  baseValue: Scalars['String'];
  claim?: InputMaybe<ClaimCreateNestedManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceCreateNestedManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesCreateNestedManyWithoutValueInput>;
  prize?: InputMaybe<PrizeCreateNestedManyWithoutValueInput>;
};

export type ValueGroupBy = {
  __typename?: 'ValueGroupBy';
  _avg?: Maybe<ValueAvgAggregate>;
  _count?: Maybe<ValueCountAggregate>;
  _max?: Maybe<ValueMaxAggregate>;
  _min?: Maybe<ValueMinAggregate>;
  _sum?: Maybe<ValueSumAggregate>;
  baseValue: Scalars['String'];
  id: Scalars['Int'];
  tokenId: Scalars['Int'];
};

export type ValueListRelationFilter = {
  every?: InputMaybe<ValueWhereInput>;
  none?: InputMaybe<ValueWhereInput>;
  some?: InputMaybe<ValueWhereInput>;
};

export type ValueMaxAggregate = {
  __typename?: 'ValueMaxAggregate';
  baseValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['Int']>;
};

export type ValueMaxOrderByAggregateInput = {
  baseValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
};

export type ValueMinAggregate = {
  __typename?: 'ValueMinAggregate';
  baseValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['Int']>;
};

export type ValueMinOrderByAggregateInput = {
  baseValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
};

export type ValueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ValueOrderByWithAggregationInput = {
  _avg?: InputMaybe<ValueAvgOrderByAggregateInput>;
  _count?: InputMaybe<ValueCountOrderByAggregateInput>;
  _max?: InputMaybe<ValueMaxOrderByAggregateInput>;
  _min?: InputMaybe<ValueMinOrderByAggregateInput>;
  _sum?: InputMaybe<ValueSumOrderByAggregateInput>;
  baseValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
};

export type ValueOrderByWithRelationInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeOrderByRelationAggregateInput>;
  baseValue?: InputMaybe<SortOrder>;
  claim?: InputMaybe<ClaimOrderByRelationAggregateInput>;
  clubBalance?: InputMaybe<ClubBalanceOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  poolsOnValues?: InputMaybe<PoolsOnValuesOrderByRelationAggregateInput>;
  prize?: InputMaybe<PrizeOrderByRelationAggregateInput>;
  token?: InputMaybe<TokenOrderByWithRelationInput>;
  tokenId?: InputMaybe<SortOrder>;
};

export type ValueRelationFilter = {
  is?: InputMaybe<ValueWhereInput>;
  isNot?: InputMaybe<ValueWhereInput>;
};

export enum ValueScalarFieldEnum {
  BaseValue = 'baseValue',
  Id = 'id',
  TokenId = 'tokenId'
}

export type ValueScalarWhereInput = {
  AND?: InputMaybe<Array<ValueScalarWhereInput>>;
  NOT?: InputMaybe<Array<ValueScalarWhereInput>>;
  OR?: InputMaybe<Array<ValueScalarWhereInput>>;
  baseValue?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  tokenId?: InputMaybe<IntFilter>;
};

export type ValueScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ValueScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ValueScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ValueScalarWhereWithAggregatesInput>>;
  baseValue?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  tokenId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ValueSumAggregate = {
  __typename?: 'ValueSumAggregate';
  id?: Maybe<Scalars['Int']>;
  tokenId?: Maybe<Scalars['Int']>;
};

export type ValueSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
};

export type ValueUpdateInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutValueInput>;
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  claim?: InputMaybe<ClaimUpdateManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesUpdateManyWithoutValueInput>;
  prize?: InputMaybe<PrizeUpdateManyWithoutValueInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutValueInput>;
};

export type ValueUpdateManyMutationInput = {
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ValueUpdateManyWithWhereWithoutTokenInput = {
  data: ValueUpdateManyMutationInput;
  where: ValueScalarWhereInput;
};

export type ValueUpdateManyWithoutTokenInput = {
  connect?: InputMaybe<Array<ValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ValueCreateOrConnectWithoutTokenInput>>;
  create?: InputMaybe<Array<ValueCreateWithoutTokenInput>>;
  createMany?: InputMaybe<ValueCreateManyTokenInputEnvelope>;
  delete?: InputMaybe<Array<ValueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ValueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ValueWhereUniqueInput>>;
  set?: InputMaybe<Array<ValueWhereUniqueInput>>;
  update?: InputMaybe<Array<ValueUpdateWithWhereUniqueWithoutTokenInput>>;
  updateMany?: InputMaybe<Array<ValueUpdateManyWithWhereWithoutTokenInput>>;
  upsert?: InputMaybe<Array<ValueUpsertWithWhereUniqueWithoutTokenInput>>;
};

export type ValueUpdateOneRequiredWithoutAcademyMintFeesInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutAcademyMintFeesInput>;
  create?: InputMaybe<ValueCreateWithoutAcademyMintFeesInput>;
  update?: InputMaybe<ValueUpdateWithoutAcademyMintFeesInput>;
  upsert?: InputMaybe<ValueUpsertWithoutAcademyMintFeesInput>;
};

export type ValueUpdateOneRequiredWithoutClaimInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutClaimInput>;
  create?: InputMaybe<ValueCreateWithoutClaimInput>;
  update?: InputMaybe<ValueUpdateWithoutClaimInput>;
  upsert?: InputMaybe<ValueUpsertWithoutClaimInput>;
};

export type ValueUpdateOneRequiredWithoutClubBalanceInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutClubBalanceInput>;
  create?: InputMaybe<ValueCreateWithoutClubBalanceInput>;
  update?: InputMaybe<ValueUpdateWithoutClubBalanceInput>;
  upsert?: InputMaybe<ValueUpsertWithoutClubBalanceInput>;
};

export type ValueUpdateOneRequiredWithoutPoolsOnValuesInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutPoolsOnValuesInput>;
  create?: InputMaybe<ValueCreateWithoutPoolsOnValuesInput>;
  update?: InputMaybe<ValueUpdateWithoutPoolsOnValuesInput>;
  upsert?: InputMaybe<ValueUpsertWithoutPoolsOnValuesInput>;
};

export type ValueUpdateOneRequiredWithoutPrizeInput = {
  connect?: InputMaybe<ValueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ValueCreateOrConnectWithoutPrizeInput>;
  create?: InputMaybe<ValueCreateWithoutPrizeInput>;
  update?: InputMaybe<ValueUpdateWithoutPrizeInput>;
  upsert?: InputMaybe<ValueUpsertWithoutPrizeInput>;
};

export type ValueUpdateWithWhereUniqueWithoutTokenInput = {
  data: ValueUpdateWithoutTokenInput;
  where: ValueWhereUniqueInput;
};

export type ValueUpdateWithoutAcademyMintFeesInput = {
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  claim?: InputMaybe<ClaimUpdateManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesUpdateManyWithoutValueInput>;
  prize?: InputMaybe<PrizeUpdateManyWithoutValueInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutValueInput>;
};

export type ValueUpdateWithoutClaimInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutValueInput>;
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  clubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesUpdateManyWithoutValueInput>;
  prize?: InputMaybe<PrizeUpdateManyWithoutValueInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutValueInput>;
};

export type ValueUpdateWithoutClubBalanceInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutValueInput>;
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  claim?: InputMaybe<ClaimUpdateManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesUpdateManyWithoutValueInput>;
  prize?: InputMaybe<PrizeUpdateManyWithoutValueInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutValueInput>;
};

export type ValueUpdateWithoutPoolsOnValuesInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutValueInput>;
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  claim?: InputMaybe<ClaimUpdateManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutValueInput>;
  prize?: InputMaybe<PrizeUpdateManyWithoutValueInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutValueInput>;
};

export type ValueUpdateWithoutPrizeInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutValueInput>;
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  claim?: InputMaybe<ClaimUpdateManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesUpdateManyWithoutValueInput>;
  token?: InputMaybe<TokenUpdateOneRequiredWithoutValueInput>;
};

export type ValueUpdateWithoutTokenInput = {
  academyMintFees?: InputMaybe<AcademyMintFeeUpdateManyWithoutValueInput>;
  baseValue?: InputMaybe<StringFieldUpdateOperationsInput>;
  claim?: InputMaybe<ClaimUpdateManyWithoutValueInput>;
  clubBalance?: InputMaybe<ClubBalanceUpdateManyWithoutValueInput>;
  poolsOnValues?: InputMaybe<PoolsOnValuesUpdateManyWithoutValueInput>;
  prize?: InputMaybe<PrizeUpdateManyWithoutValueInput>;
};

export type ValueUpsertWithWhereUniqueWithoutTokenInput = {
  create: ValueCreateWithoutTokenInput;
  update: ValueUpdateWithoutTokenInput;
  where: ValueWhereUniqueInput;
};

export type ValueUpsertWithoutAcademyMintFeesInput = {
  create: ValueCreateWithoutAcademyMintFeesInput;
  update: ValueUpdateWithoutAcademyMintFeesInput;
};

export type ValueUpsertWithoutClaimInput = {
  create: ValueCreateWithoutClaimInput;
  update: ValueUpdateWithoutClaimInput;
};

export type ValueUpsertWithoutClubBalanceInput = {
  create: ValueCreateWithoutClubBalanceInput;
  update: ValueUpdateWithoutClubBalanceInput;
};

export type ValueUpsertWithoutPoolsOnValuesInput = {
  create: ValueCreateWithoutPoolsOnValuesInput;
  update: ValueUpdateWithoutPoolsOnValuesInput;
};

export type ValueUpsertWithoutPrizeInput = {
  create: ValueCreateWithoutPrizeInput;
  update: ValueUpdateWithoutPrizeInput;
};

export type ValueWhereInput = {
  AND?: InputMaybe<Array<ValueWhereInput>>;
  NOT?: InputMaybe<Array<ValueWhereInput>>;
  OR?: InputMaybe<Array<ValueWhereInput>>;
  academyMintFees?: InputMaybe<AcademyMintFeeListRelationFilter>;
  baseValue?: InputMaybe<StringFilter>;
  claim?: InputMaybe<ClaimListRelationFilter>;
  clubBalance?: InputMaybe<ClubBalanceListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  poolsOnValues?: InputMaybe<PoolsOnValuesListRelationFilter>;
  prize?: InputMaybe<PrizeListRelationFilter>;
  token?: InputMaybe<TokenRelationFilter>;
  tokenId?: InputMaybe<IntFilter>;
};

export type ValueWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Club1QueryVariables = Exact<{
  clubId: Scalars['Int'];
}>;


export type Club1Query = { __typename?: 'Query', club?: { __typename?: 'Club', colours: any, name: string } | null };


export const Club1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Club1"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"club"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"colours"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<Club1Query, Club1QueryVariables>;