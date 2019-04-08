"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: 
   Date:   

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

// The global variables bellow are all declared and set to an intial value of "0".
var nodeCount = 0;
var elementCount = 0;
var textCount = 0;
var wsCount = 0;

// When the window intially loads, the "makeTree" function is set to boot up.
window.addEventListener("load", makeTree);

// The previously used makeTree function is now evaluated with the following commands. 
function makeTree() {

      // The "aside" local variable is set to a document frament containing the string seen below.  
      var aside = document.createDocumentFragment("<aside id = ”treeBox”> <h1> Node Tree </h1> </aside>");

      // The elements with the Id of "main" are set to be appended to the aside node.
      aside.appendChild(document.getElementById("main"));

      // The local "nodeList" variable will be set to the ordered list elements found in the document.
      var nodeList = document.getElementsByTagName("ol");

      // The ordered list elements are to be appended to the aside node. 
      aside.appendChild(document.getElementsByTagName("ol"));

      // The Local variable of "sourceArticle" is set to the value of the "#main article" span through the querySelectorAll method.
      var sourceArticle = document.querySelectorAll("#main article");

      // The "makeBranches" function is called with the sourceArticle and nodeList variables used as parameters.
      makeBranches(sourceArticle, nodeList);

      // The elements of the following provided are implemented into the HTML of the docuument in the following also provided afterward.
      document.getElementById("totalNodes", "elemNodes", "textNodes", "wsNodes").innerHTML = nodeCount, elementCount, textCount, wsCount;

}

// Function "makeBranches" is eastablished with the commands below.
function makeBranches() {

      // nodeCount is increased by one.
      nodeCount = nodeCount + 1;

      // Local variable "liElem" is set to the list item elements within the document.
      var liElem = document.getElementsByTagName("li");

      // "spanElem" is defined locally as the element fragment provided. 
      var spanElem = document.createDocumentFragment("<li> +-- <span> </span> </li>")

      // The spanElement variable is appended to the "liElem" local variable. 
      liElem.appendChild(spanElement);

      // liElem is now appended to the list item elements within the document.
      document.getElementsByTagName("li").appendChild("liElem");

      // A conditional statement is formed and continues if treeNode is equal to the element node.
      if (treeNode = elementNode) {

            // elementCount is increased by one.
            elementCount = elementCount + 1;

            // spanElem has its class attribute set to the elementNode.
            spanElem.setAttribute("class", "elementNode");

            // The elementNode variable is then appended as a tag string to the spanElem variable.
            spanElem.appendChild("<" + elementNode + ">");

            //if the condition does not apply, but treeNode is equal to the text node, the following commands are done.
      } else if (treeNode = textNode) {

            // textCount is increased by one.
            textCount = textCount + 1;

            // the local "textString" varaible is set to textNode.
            var textString = textNode;

            // the isWhiteSpaceNode is called with textString as its parameter. 
            isWhiteSpaceNode(textString)

            // Additionally, if the isWhiteSpaceNode returns back a value of true, then...
            if (isWhiteSpaceNode = true) {

                  // weCount is increased by one..
                  wsCount = wsCount + 1;

                  // spanElem has its node attribute set to the result of the isWhiteSpaceNode
                  spanElem.setAttribute("node", "isWhiteSpaceNode");

                  // The "#text" string is appended to spanElem.
                  spanElem.appendChild("#text");

            }

            // But, if isWhiteSpaceNode returns back as false, then...
            if (isWhiteSpaceNode = false) {

                  // spanElem has its attribute of class set to textNode.
                  spanElem.setAttribute("class", "textNode");

                  // textString is appended to spanElen.
                  spanElen.appendChild(textString);

            }

      }

      // if treeNode is greater than zero, then...
      if (treeNode > 0) {

            // The local "newList" is set to a document fragement of the opening and closing tags of the ordered list.
            var newlist = createDocumentFragment("<ol>|</ol>");

            // "nestedList" is appended to newlist.
            newlist.appendChild("nestedList");

            // And finally, a for loop is done cycling through the treeNode collection and applying the makeBranches function each time with the "n" index and "newList" as their parameters.
            for (let n = 0; n < treeNode.length; n++) {

                  makeBranches("n", "newList");

            }

      }

}


function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}