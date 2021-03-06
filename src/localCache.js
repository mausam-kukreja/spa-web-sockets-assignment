const getStorage = () => {
  if (window && window.localStorage) {
    return window.localStorage;
  }
  if (!window.useTestConsole) {
    (console.warn || console.log)('%c <WARNING> localStorage is not available. Caching disabled.', 'color: red; font-weight: bold;');
  }
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
};

const storage = getStorage();

const get = k => (storage.getItem(k) ? JSON.parse(storage.getItem(k)) : undefined);
const set = (k, v) => {
  try {
    Promise.resolve(storage.setItem(k, JSON.stringify(v))).catch(e => {
      console.log('Storage error', e);
      storage.clear();
    });
  } catch (e) {
    console.log('Caught Storage error', e);
    storage.clear();
  }
};
const del = k => storage.removeItem(k);
const clear = () => storage.clear();

const localCache = {
  clearPrefix: prefix => {
    const key = `mk-${prefix}`;

    const oldKeys = get('cache') || {};
    const newKeys = {};
    Object.keys(storage).map(k => {
      if (k.startsWith(key)) {
        del(k);
      } else if (k !== 'cache' && k !== 'getItem' && k !== 'setItem' && k !== 'removeItem' && k !== 'clear') {
        newKeys[k] = oldKeys[k];
      }
      return k;
    });
    set('cache', newKeys);
    return true;
  },

  clear: () => {
    clear();
  },

  write: (k, data, t = 300) => {
    const now = new Date() / 1000;
    const till = Math.round(now + t);
    const key = `mk-${k}`;

    const oldKeys = get('cache') || {};
    const newKeys = {};
    Object.keys(storage).map(i => {
      if (now <= oldKeys[i]) {
        newKeys[i] = oldKeys[i];
      } else if (i !== 'cache' && i !== 'getItem' && i !== 'setItem' && i !== 'removeItem' && i !== 'clear') {
        del(i);
      }
      return i;
    });
    newKeys[key] = till;
    set('cache', newKeys);
    set(key, { data, till });
    return data;
  },

  read: (k, defaultData) => {
    const key = `mk-${k}`;
    const { data, till } = get(key) || {};
    const now = new Date() / 1000;

    if (till >= now) {
      return data;
    }
    return defaultData;
  },

  fetch: (key, t, fn) => {
    const value = localCache.read(key);
    if (value) {
      return Promise.resolve(value);
    }
    return Promise.resolve(fn()).then(val => {
      localCache.write(key, val, t);
      return val;
    });
  },
};

export default localCache;
