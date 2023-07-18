/*You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true */
function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
  
      if (deltaX * (y - y2) !== deltaY * (x - x2)) {
        return false; // Points do not lie on the same line
      }
    }
  
    return true; // All points lie on the same line
  }
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  const isStraightLine = checkStraightLine(coordinates);
  console.log(isStraightLine); // Output: true
    