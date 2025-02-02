# Cloud Summit 2025 API Documentation

## Authentication

All voting-related endpoints require authentication. Use OAuth (GitHub or Google) to obtain a session.

### Error Responses

All endpoints may return these common errors:

```json
{
  "error": "Authentication required",
  "status": 401
}
```

```json
{
  "error": "Internal server error",
  "status": 500
}
```

## Endpoints

### Get Current User's Vote

Retrieves the currently logged-in user's vote.

```
GET /api/vote/current
```

#### Response

Success (200):
```json
{
  "vote": {
    "id": "string",
    "providerId": "string",
    "userId": "string",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
}
```

No vote exists (200):
```json
{
  "vote": null
}
```

### Get All Vote Counts

Retrieves the current vote counts for all providers.

```
GET /api/vote
```

#### Response

Success (200):
```json
[
  {
    "providerId": "string",
    "count": number
  }
]
```

### Cast or Change Vote

Submit a vote for a cloud provider. If the user has already voted, their vote will be changed.

```
POST /api/vote
```

#### Request Body

```json
{
  "providerId": "string"
}
```

#### Response

Success - New Vote (200):
```json
{
  "success": true,
  "vote": {
    "id": "string",
    "providerId": "string",
    "userId": "string"
  },
  "changed": true
}
```

Success - Same Provider (200):
```json
{
  "success": true,
  "vote": {
    "id": "string",
    "providerId": "string",
    "userId": "string"
  },
  "changed": false
}
```

Error - Invalid Provider (400):
```json
{
  "error": "Invalid provider ID"
}
```

### Get Cloud Providers

Retrieves the list of available cloud providers.

```
GET /api/providers
```

#### Response

Success (200):
```json
[
  {
    "id": "string",
    "name": "string",
    "displayName": "string",
    "logoUrl": "string"
  }
]
```

## Database Schema

### Vote
```prisma
model Vote {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  userId      String   // OAuth user email
  providerId  String   // Reference to CloudProvider
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@unique([userId, providerId])
  @@index([providerId])
}
```

### CloudProvider
```prisma
model CloudProvider {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  name        String   @unique
  displayName String
  logoUrl     String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### VoteCount
```prisma
model VoteCount {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  providerId  String   @unique
  count       Int      @default(0)
  lastUpdated DateTime @updatedAt
}
```

## Usage Examples

### Cast a Vote
```typescript
const response = await fetch('/api/vote', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    providerId: 'provider_id_here'
  })
});

const data = await response.json();
```

### Get Current Vote
```typescript
const response = await fetch('/api/vote/current');
const data = await response.json();
const currentVote = data.vote;
```

### Get Vote Counts
```typescript
const response = await fetch('/api/vote');
const voteCounts = await response.json();
```

## Error Handling

All endpoints follow this error format:
```json
{
  "error": "Error message here",
  "status": number
}
```

Common status codes:
- 200: Success
- 400: Bad Request (invalid input)
- 401: Unauthorized (not logged in)
- 500: Server Error

## Notes

1. All timestamps are in ISO 8601 format
2. Provider IDs are MongoDB ObjectIds
3. User IDs are OAuth provider emails
4. Vote changes are handled atomically via transactions
5. Vote counts are maintained in a separate collection for performance 