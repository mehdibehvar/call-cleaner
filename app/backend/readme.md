
sudo mongod --config /etc/mongod.conf
sudo systemctl start mongod
export JWT_PRIVATE_KEY=123456
export DEBUG_OTP=true
pnpm start