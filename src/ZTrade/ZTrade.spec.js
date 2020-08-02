const { expect } = require('chai');
const ZTrade = require('./ZTrade');
const Trade = require('../Trade/Trade');

describe('ZTrade', function suite(){
  const zippedTradeStr = 'Z::BINANCE::DASHUSD::2020-08-02T00:37:56.142Z::00001::10000::4::1::b001::s001';
  const trade = new Trade({
    symbol: 'DASHUSD',
    exchange: 'BINANCE',
    rate: '10000',
    quantity: '4',
    timestamp: '2020-08-02T00:37:56.142Z',
    id:'00001',
    side:'BUY',
    buyOrderId: 'b001',
    sellOrderId: 's001'
  });
  it('should instantiates', ()=>{
    ztrade = new ZTrade();
    expect(ztrade).to.exist;
  })
  it('should init from trade', function () {
    const ztrade = new ZTrade(trade);
    expect(ztrade.toString()).to.equal(zippedTradeStr);
  });
  it('should init from zipped', function () {
    const ztrade = new ZTrade(zippedTradeStr);
    expect(ztrade.toString()).to.equal(zippedTradeStr);
  });
  it('should convert to trade', function () {
    const ztrade = new ZTrade(zippedTradeStr);
    expect(ztrade.toTrade()).to.deep.equal(trade);
  });
  it('should clone', function () {
    const ztrade = new ZTrade(zippedTradeStr);
    const ztrade1 = new ZTrade(ztrade);
  });
});