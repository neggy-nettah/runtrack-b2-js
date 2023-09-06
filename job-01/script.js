function myUpperCase(string) {
    if (typeof string !== 'string') {
      console.error('L\'argument fourni doit être une chaîne de caractères');
      return null;
    }
    
    return string.toUpperCase();
  }
  