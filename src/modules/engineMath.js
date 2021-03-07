const engineMath = {
  
  randomBetween: function(min, max){
    
    return Math.floor(Math.random() * (max + (0 - min) + 1) - (0 - min))
    
  },

  between: function(c, x1, x2){  return c >= x1 && c <= x2;},
  
  lerp: function(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
  },
};

export default engineMath;
