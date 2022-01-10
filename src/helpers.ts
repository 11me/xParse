export const hashCode = (s: string): string => {

    let hash = 0;
      for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash;
      }
      return new Uint32Array([hash])[0].toString(36);
}
