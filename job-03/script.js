function myIsInString(haystack, needle) {
    let needleLength = needle.length;
    let haystackLength = haystack.length;
  
    for (let i = 0; i <= haystackLength - needleLength; i++) {
      let found = true;
      for (let j = 0; j < needleLength; j++) {
        if (haystack[i + j] !== needle[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return true;
      }
    }
    return false;
  }
  