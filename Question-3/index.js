//solution
function removeDuplicates(string) {
    const words = string.split(' ');
    const uniqueWords = [];
    
    words.forEach(word => {
      if (!uniqueWords.includes(word)) {
        uniqueWords.push(word);
      }
    });
    
    return uniqueWords.join(' ');
  }
  
  const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
  const output = removeDuplicates(input);
  console.log(output); 
  