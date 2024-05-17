type StringType = "success";
function StringTest(string: StringType): boolean {
  if (string === "success") {
    return true;
  }
  return false;
}