import CounterStore from '../../stores/counter';

describe('CounterStore',() => {
  let store;
  beforeEach(() => {
    store = new CounterStore();
  })
  describe('#constructor', () => {
    it('count expect to be 0', () => {
      expect(store.count).toBe(0);
    })

    it('twice count expect to be 0', () => {
      expect(store.twice).toBe(0);
    })
  });
  describe('#inc', () => {
    it('count expect to be increment', () => {
      store.inc();
      expect(store.count).toBe(1);
    })
  });
  describe('#dec', () => {
    it('count expect to be decrement', () => {
      store.inc();
      expect(store.count).toBe(1);
      store.dec();
      expect(store.count).toBe(0);
    })
  });
  describe('#asyncInc', () => {
    it('count expect to be increment', async () => {
      await store.asyncInc();
      expect(store.count).toBe(1);
    })
  });
  describe('#asyncDec', () => {
    it('count expect to be decrement', async () => {
      store.inc();
      expect(store.count).toBe(1);
      await store.asyncDec();
      expect(store.count).toBe(0);
    })
  });
});
