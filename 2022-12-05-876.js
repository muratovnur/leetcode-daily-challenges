/*
  876. Middle of the Linked List (Easy)
  https://leetcode.com/problems/middle-of-the-linked-list/description/

  Given the head of a singly linked list, return the middle node of the linked list.

  If there are two middle nodes, return the second middle node.

  Constraints:

  The number of nodes in the list is in the range [1, 100].
  1 <= Node.val <= 100
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
*/

const middleNode = function(head) {
  let length = 0;
  let currentNode = head;
  while(currentNode !== null) {
    currentNode = currentNode.next;
    length++;
  }
  length = Math.floor(length / 2);
  currentNode = head;
  while (length > 0) {
    currentNode = currentNode.next;
    length--;
  }
  return currentNode;
};