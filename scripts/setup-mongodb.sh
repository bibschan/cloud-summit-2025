#!/bin/bash

# Function to check if MongoDB is actually running
check_mongodb_connection() {
    # Try to connect to MongoDB, timeout after 5 seconds
    mongosh --eval "db.runCommand({ ping: 1 })" --quiet > /dev/null 2>&1
    return $?
}

# Function to handle errors
handle_error() {
    echo "❌ Error: $1"
    echo "🔍 Troubleshooting steps:"
    echo "1. Check if MongoDB service is running: brew services list"
    echo "2. Try restarting MongoDB: brew services restart mongodb-community"
    echo "3. Check MongoDB logs: brew services list | grep mongodb"
    echo "4. Ensure port 27017 is not in use: lsof -i :27017"
    exit 1
}

echo "🚀 Setting up MongoDB for Cloud Summit 2025..."

# Check if MongoDB is already installed
if brew list mongodb-community &>/dev/null; then
    echo "✅ MongoDB is already installed"
else
    echo "📦 Installing MongoDB..."
    brew tap mongodb/brew || handle_error "Failed to tap MongoDB repository"
    brew install mongodb-community || handle_error "Failed to install MongoDB"
fi

# Stop MongoDB service if it's running
echo "🔄 Stopping MongoDB service if running..."
brew services stop mongodb-community

# Create replica set configuration
echo "⚙️ Configuring MongoDB replica set..."
MONGODB_DATA_DIR=~/data/mongodb
MONGODB_CONFIG_DIR=/opt/homebrew/etc
MONGODB_LOG_DIR=/opt/homebrew/var/log/mongodb

# Create necessary directories
mkdir -p "$MONGODB_DATA_DIR"
mkdir -p "$MONGODB_LOG_DIR"

# Create the mongod.conf file
cat > "$MONGODB_CONFIG_DIR/mongod.conf" << EOL
systemLog:
  destination: file
  path: ${MONGODB_LOG_DIR}/mongo.log
  logAppend: true
storage:
  dbPath: ${MONGODB_DATA_DIR}
net:
  bindIp: localhost
  port: 27017
replication:
  replSetName: rs0
EOL

# Set proper permissions
chmod 755 "$MONGODB_DATA_DIR"
chmod 755 "$MONGODB_LOG_DIR"
touch "$MONGODB_LOG_DIR/mongo.log"
chmod 644 "$MONGODB_LOG_DIR/mongo.log"

# Start MongoDB service with new configuration
echo "🔄 Starting MongoDB service..."
brew services start mongodb-community || handle_error "Failed to start MongoDB service"

# Wait for MongoDB to start (with timeout)
echo "⏳ Waiting for MongoDB to start..."
max_attempts=30
attempt=0
while ! check_mongodb_connection && [ $attempt -lt $max_attempts ]; do
    attempt=$((attempt + 1))
    echo "   Attempt $attempt of $max_attempts..."
    sleep 1
done

if [ $attempt -eq $max_attempts ]; then
    handle_error "MongoDB failed to start after $max_attempts seconds"
fi

echo "✅ MongoDB is running and accepting connections"

# Initialize replica set
echo "🔄 Initializing replica set..."
mongosh --eval '
  rs.status().ok || rs.initiate({
    _id: "rs0",
    members: [{ _id: 0, host: "localhost:27017" }]
  })
' || handle_error "Failed to initialize or verify replica set"

# Wait for replica set to initialize
echo "⏳ Waiting for replica set to initialize..."
sleep 5

# Create database and collections
echo "🗄️ Setting up database..."
if ! mongosh --eval "
    use cloud-summit;
    db.createCollection('User');
    db.createCollection('Vote');
    db.createCollection('Sponsor');
    print('✅ Database and collections created successfully');
"; then
    handle_error "Failed to create database and collections"
fi

echo "
🎉 MongoDB setup complete!
📝 Your database is configured at: mongodb://localhost:27017/cloud-summit

Next steps for local development:
1. Run 'npm run db:push' to push the schema to the database
2. Run 'npm run local:db:seed' to seed the database with initial data
3. Run 'npm run dev' to start the development server

Note: Prisma client is automatically generated:
- In local development: when running 'npm install'
- In staging: during 'staging:build'
- In production: during Vercel build

Happy coding! 🚀
" 