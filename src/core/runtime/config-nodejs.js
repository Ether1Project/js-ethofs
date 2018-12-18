'use strict'

module.exports = () => ({
  Addresses: {
    Swarm: [
      '/ip4/0.0.0.0/tcp/4002',
      '/ip4/127.0.0.1/tcp/4003/ws'
    ],
    API: '/ip4/127.0.0.1/tcp/5002',
    Gateway: '/ip4/127.0.0.1/tcp/9090'
  },
  Discovery: {
    MDNS: {
      Enabled: true,
      Interval: 10
    },
    webRTCStar: {
      Enabled: true
    }
  },
  Bootstrap: [
    '/dns4/wss1.ethofs.com/tcp/443/wss/ipfs/QmTFUcUuMSN7KLytjtqnHCjixqd4ig3PrSbdQ2mW9Q8qeY',
    '/dns4/wss.ethofs.com/tcp/443/wss/ipfs/QmV856mLWnTDaj5LQvS3dCa3qjz4DNC9cKQJNSrwtqcHzT',
    '/dns4/wss2.ethofs.com/tcp/443/wss/ipfs/QmdEs4acs8eiAgYr7TFaF43k1BMtGZdF5HkSz9CH4YTVnL',
    '/dns4/wss3.ethofs.com/tcp/443/wss/ipfs/QmSfEKCzPWA6MmG2ZLK4Vqnq6oB6rvrLyUpHdNqng5nQ4t',
    '/dns4/wss4.ethofs.com/tcp/443/wss/ipfs/QmeG81bELkgLBZFYZc53ioxtvRS8iNVzPqxUBKSuah2rcQ',
    '/dns4/wss5.ethofs.com/tcp/443/wss/ipfs/QmRwQ49Zknc2dQbywrhT8ArMDS9JdmnEyGGy4mZ1wDkgaX',
    '/dns4/wss6.ethofs.com/tcp/443/wss/ipfs/QmTZsBNb7dfJJmwuAdXBjKZ7ZH6XbpestZdURWGJVyAmj2'
  ]
})
