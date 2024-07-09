import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/


/*
traverse through array from head to tail
get the node value

if empty list, return 0

*/
function average(lst: LLStr): number {
  // console.log(10/4);
  if (lst.head === null) {
    return 0;
  }

  let idx = 0;
  let sum: number = 0;
  let currNode = lst.head;

  while (idx < lst.length) {

    sum += Number(currNode.val);
    console.log({ sum });
    currNode = currNode.next!;

    idx++;
  }

  return sum / lst.length;
}


export { average };