export const COLLECTION_NAMES = {
  EVENT_COLLECTION: 'events',
};

export const FIREBASE_ERROR_MESSAGES = {
  EVENT_NOT_FOUND: 'Event not found',
  MULTIPLE_ACCOUNT: 'Multiple event found',
  UNAUTHORIZED: 'Unauthorized access',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
} as const;

export const LOCAL_RETURN_QUERY_TYPES = {
  MULTIPLE_RECORDS: 'multiple',
  SINGLE_RECORD: 'single',
  NOT_FOUND: 'empty',
} as const;
