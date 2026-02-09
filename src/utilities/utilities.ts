export function normalize(size:number){
  return size*4;
}

export function randomNumber(min:number, max:number){
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor((Math.random() * (max - min) + min) + 1);
}