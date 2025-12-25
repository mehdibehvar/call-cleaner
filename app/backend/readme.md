
sudo mongod --config /etc/mongod.conf
export JWT_PRIVATE_KEY=123456
export DEBUG_OTP=true
export PORT=5000
pnpm start-server
pnpm dev