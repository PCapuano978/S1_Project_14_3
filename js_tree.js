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

var nodeCount = 0;
var elementCount = 0;
var textCount = 0;
var wsCount = 0;

window.addEventListener("load", makeTree);

function makeTree() {

      var aside = document.createDocumentFragment("<aside id = ”treeBox”> <h1> Node Tree </h1> </aside>");

<<<<<<< Updated upstream
   aside.appendChild(document.getElementById("main"));

   var nodeList = document.getElementsByTagName("ol");

   document.appendChild(aside);

   var sourceArticle = document.querySelectorAll("#main article");

   makeBranches(sourceArticle, nodeList);
   document.getElementById("totalNodes", "elemNodes", "textNodes", "wsNodes").innerHTML = nodeCount, elementCount, textCount, wsCount;
=======
            <
            aside id = ”treeBox” >
            <
            h1 > Node Tree < /h1> </aside >
      )
>>>>>>> Stashed changes

}

function makeBranches() {

nodeCount = nodeCount + 1;

var liElem = document.getElementsByTagName("li");

var spanElem = document.createDocumentFragment("<li> +-- <span> </span> </li>")

liElem.appendChild(spanElement);

document.getElementsByTagName("li").appendChild("liElem");

if (treeNode = Element) {

elementCount = elementCount + 1;

spanElem.setAttribute("class", "elementNode");

spanElem.appendChild("<" + Element + ">");

   
} else if (treeNode = Text) {
   
   textCount = textCount + 1;

   var textString = Text;

   isWhiteSpaceNode(textString)

   if (isWhiteSpaceNode = true) {
      
      wsCount = wsCount + 1;

      spanElem.setAttribute("node", "whiteSpaceNode");

      spanElem.appendChild("#text");

   }

   if (isWhiteSpaceNode = false) {

      spanElem.setAttribute("class", "textNode");

      spanElen.appendChild(textString);
      
   }

}

if (treeNode > 0) {

   var newlist = createDocumentFragment("<ol>|</ol>");

   newlist.appendChild("nestedList");

   for (let n = 0; n < treeNode.length; n++) {
      
      makeBranches("n", "newList");

   }
   
}

}


function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}