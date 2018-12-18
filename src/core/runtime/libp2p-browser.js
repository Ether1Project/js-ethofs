'use strict'
var fs = require('fs');
const WS = require('libp2p-websockets')
const WebRTCStar = require('libp2p-webrtc-star')
const WebSocketStar = require('libp2p-websocket-star')
const Multiplex = require('libp2p-mplex')
const SECIO = require('libp2p-secio')
const Bootstrap = require('libp2p-bootstrap')
const libp2p = require('libp2p')
const Protector = require('libp2p-pnet')
const defaultsDeep = require('@nodeutils/defaults-deep')

class Node extends libp2p {
  constructor (_options) {
    const wrtcstar = new WebRTCStar({id: _options.peerInfo.id})
    const wsstar = new WebSocketStar({id: _options.peerInfo.id})
    const swarmKey = "/key/swarm/psk/1.0.0/\n/base16/\n38307a74b2176d0054ffa2864e31ee22d0fc6c3266dd856f6d41bddf14e2ad63";
    var swarmKeyBuffer = new Buffer(swarmKey);
    const defaults = {
      modules: {
        connProtector: new Protector(swarmKeyBuffer),
        transport: [
          WS,
          wrtcstar,
          wsstar
        ],
        streamMuxer: [
          Multiplex
        ],
        connEncryption: [
          SECIO
        ],
        peerDiscovery: [
          wrtcstar.discovery,
          wsstar.discovery,
          Bootstrap
        ]
      },
      config: {
        peerDiscovery: {
          bootstrap: {
            enabled: true
          },
          webRTCStar: {
            enabled: true
          },
          websocketStar: {
            enabled: true
          }
        },
        EXPERIMENTAL: {
          dht: true,
          pubsub: true
        }
      }
    }

    super(defaultsDeep(_options, defaults))
  }
}

module.exports = Node
