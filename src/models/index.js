// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "COMPLETE": "COMPLETE",
  "ACTIVE": "ACTIVE",
  "INWAITTING": "INWAITTING"
};

const { Agreement, Tasks, TimeEntry, AllWorkSpaces, UserCredentials, UserAgreement, User, AditionalInfo, Comment, Workplace, Profile, UserSettings, CostRate, UserMemberships, HourlyRate, TimeInterval, Break, WorkspaceSettings, Membership } = initSchema(schema);

export {
  Agreement,
  Tasks,
  TimeEntry,
  AllWorkSpaces,
  UserCredentials,
  Status,
  UserAgreement,
  User,
  AditionalInfo,
  Comment,
  Workplace,
  Profile,
  UserSettings,
  CostRate,
  UserMemberships,
  HourlyRate,
  TimeInterval,
  Break,
  WorkspaceSettings,
  Membership
};