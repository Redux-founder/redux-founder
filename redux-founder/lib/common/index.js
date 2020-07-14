export const notation = (str, obj) => str.split('.').reduce((a, c) => a[c], obj);
