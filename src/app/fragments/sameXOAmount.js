function sameXOAmount(str) {
  let xLen = str.toLowerCase().replace(/[^x]/g, "").length
  let oLen = str.toLowerCase().replace(/[^o]/g, "").length

  return xLen == oLen;
  }
