function IDGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

const pastelGreen = "#9AD7A5";
const pastelYellow = "#FFD9BD";
const pastelRed = "#EE9D94";

export { IDGenerator, pastelGreen, pastelYellow, pastelRed };

// Object relationship
// Checklist -> Todo -> Project
// Checklist -> Checklist ID and Todo ID
// Todo -> Todo ID and Project ID
