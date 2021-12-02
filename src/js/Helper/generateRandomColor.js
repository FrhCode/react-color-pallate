const generateRandomColor = () => {
  var x = Math.floor(Math.random() * 256);
  var y = 100 + Math.floor(Math.random() * 256);
  var z = 50 + Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};

export default generateRandomColor;
